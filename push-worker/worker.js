/* Neon Gym push sender (Cloudflare Worker, free plan).
   One Durable Object per push subscription holds the pending "fast complete" message and an alarm at the end time.
   The VAPID key pair is made on first use and kept in its own Durable Object, so there are no secrets to set up.
   Nothing personal is stored: only the browser's push address, the end time and the message text, deleted once sent. */
import { sendPush, b64u } from "./webpush.js";

const ORIGINS = ["https://neoninc.github.io", "http://localhost:8000", "http://127.0.0.1:8000"];
const PUSH_HOSTS = [/\.googleapis\.com$/, /\.push\.apple\.com$/, /\.mozilla\.com$/, /\.notify\.windows\.com$/, /\.push\.services\.mozilla\.com$/];
const CONTACT = "mailto:neoninc.support@gmail.com";

function cors(origin) {
  const ok = ORIGINS.includes(origin);
  return { "Access-Control-Allow-Origin": ok ? origin : ORIGINS[0], "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400", "Vary": "Origin" };
}
const json = (data, status, origin) => new Response(JSON.stringify(data), { status: status || 200, headers: { "Content-Type": "application/json", ...cors(origin) } });
const clip = (s, n) => String(s == null ? "" : s).slice(0, n);
async function hashId(text) { return b64u(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))); }
function goodSub(sub) {
  try {
    const u = new URL(sub.endpoint);
    return u.protocol === "https:" && PUSH_HOSTS.some(r => r.test(u.hostname)) && sub.keys && typeof sub.keys.p256dh === "string" && typeof sub.keys.auth === "string" && sub.endpoint.length < 1000;
  } catch (e) { return false; }
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    const url = new URL(req.url);
    if (req.method === "GET" && url.pathname === "/vapid") {
      const r = await env.FASTS.get(env.FASTS.idFromName("__vapid")).fetch("https://do/vapid");
      return json(await r.json(), 200, origin);
    }
    if (req.method === "GET" && url.pathname === "/") return json({ ok: true, service: "neon-gym-push" }, 200, origin);
    if (req.method !== "POST" || (url.pathname !== "/fast" && url.pathname !== "/cancel")) return json({ error: "not found" }, 404, origin);
    if (!ORIGINS.includes(origin)) return json({ error: "origin" }, 403, origin);
    let body; try { body = await req.json(); } catch (e) { return json({ error: "bad json" }, 400, origin); }
    const sub = body && body.sub;
    if (!sub || !(goodSub(sub) || (env.TEST_ANY_PUSH_HOST === "1" && sub.endpoint && sub.keys))) return json({ error: "bad subscription" }, 400, origin);
    const stub = env.FASTS.get(env.FASTS.idFromName(await hashId(sub.endpoint)));
    const r = await stub.fetch("https://do" + url.pathname, { method: "POST", body: JSON.stringify(body) });
    return json(await r.json(), r.status, origin);
  }
};

export class Fast {
  constructor(state, env) { this.state = state; this.env = env; }
  async fetch(req) {
    const path = new URL(req.url).pathname;
    if (path === "/vapid") return Response.json({ key: (await this.vapid()).pub });
    if (path === "/vapid-private") return Response.json(await this.vapid()); /* only other Durable Objects reach this; the public fetch never routes here */
    const b = await req.json();
    if (path === "/cancel") { await this.state.storage.deleteAll(); await this.state.storage.deleteAlarm(); return Response.json({ ok: true, cancelled: true }); }
    const at = Number(b.at), now = Date.now();
    if (!(at > now + 30e3 && at < now + 36 * 36e5)) return Response.json({ error: "time must be 30 seconds to 36 hours ahead" }, { status: 400 });
    await this.state.storage.put("job", { sub: { endpoint: b.sub.endpoint, keys: { p256dh: b.sub.keys.p256dh, auth: b.sub.keys.auth } }, at,
      title: clip(b.title || "Fast complete", 60), body: clip(b.body || "Nice work. Your eating window is open.", 160), url: clip(b.url || "", 200) });
    await this.state.storage.setAlarm(at);
    return Response.json({ ok: true, at });
  }
  async alarm() {
    const job = await this.state.storage.get("job");
    await this.state.storage.deleteAll();
    if (!job) return;
    const keys = await this.vapidFrom(this.env);
    const { endpoint, headers, body } = await sendPush(job.sub, { title: job.title, body: job.body, tag: "fast-done", url: job.url }, keys, { ttl: 3600, urgency: "high", topic: "fast", contact: CONTACT });
    const target = this.env.TEST_ANY_PUSH_HOST === "1" ? endpoint.replace("https://127.0.0.1", "http://127.0.0.1") : endpoint; /* local test only */
    try { await fetch(target, { method: "POST", headers, body }); } catch (e) { /* push service unreachable; nothing to retry */ }
  }
  /* The key pair lives in the "__vapid" object; job objects ask it for the private key when they send. */
  async vapidFrom(env) {
    const r = await env.FASTS.get(env.FASTS.idFromName("__vapid")).fetch("https://do/vapid-private");
    return r.json();
  }
  async vapid() {
    let k = await this.state.storage.get("vapid");
    if (!k) {
      const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
      const jwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
      const pub = b64u(await crypto.subtle.exportKey("raw", pair.publicKey));
      k = { jwk: { kty: jwk.kty, crv: jwk.crv, x: jwk.x, y: jwk.y, d: jwk.d }, pub };
      await this.state.storage.put("vapid", k);
    }
    return k;
  }
}
