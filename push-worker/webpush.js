/* Minimal Web Push sender for Workers: RFC 8291 (aes128gcm) payload encryption and RFC 8292 VAPID, using Web Crypto only. */
const te = new TextEncoder();
export function b64u(buf) { let s = ""; new Uint8Array(buf).forEach(b => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
export function unb64u(str) { const s = atob(str.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((str.length + 3) % 4)); return Uint8Array.from(s, c => c.charCodeAt(0)); }
const cat = (...parts) => { const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0)); let o = 0; parts.forEach(p => { out.set(p, o); o += p.length; }); return out; };
async function hmac(key, data) { const k = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]); return new Uint8Array(await crypto.subtle.sign("HMAC", k, data)); }

/* Encrypts `payload` (string) for a subscription {endpoint, keys: {p256dh, auth}} */
export async function encrypt(sub, payload) {
  const ua = unb64u(sub.keys.p256dh), auth = unb64u(sub.keys.auth);
  const as = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const asPub = new Uint8Array(await crypto.subtle.exportKey("raw", as.publicKey));
  const uaKey = await crypto.subtle.importKey("raw", ua, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdh = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, as.privateKey, 256));
  const prkKey = await hmac(auth, ecdh);
  const ikm = await hmac(prkKey, cat(te.encode("WebPush: info\0"), ua, asPub, new Uint8Array([1])));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const prk = await hmac(salt, ikm);
  const cek = (await hmac(prk, cat(te.encode("Content-Encoding: aes128gcm\0"), new Uint8Array([1])))).slice(0, 16);
  const nonce = (await hmac(prk, cat(te.encode("Content-Encoding: nonce\0"), new Uint8Array([1])))).slice(0, 12);
  const key = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, key, cat(te.encode(payload), new Uint8Array([2]))));
  const rs = new Uint8Array([0, 0, 16, 0]); /* record size 4096 */
  return cat(salt, rs, new Uint8Array([asPub.length]), asPub, ct);
}

/* VAPID: keys = {jwk (private, with d), pub (raw public key, base64url)} */
export async function vapidAuth(endpoint, keys, contact) {
  const aud = new URL(endpoint).origin;
  const head = b64u(te.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const claims = b64u(te.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: contact })));
  const priv = await crypto.subtle.importKey("jwk", { ...keys.jwk, key_ops: ["sign"], ext: true }, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, priv, te.encode(head + "." + claims)));
  return "vapid t=" + head + "." + claims + "." + b64u(sig) + ", k=" + keys.pub;
}

export async function sendPush(sub, data, keys, opts) {
  opts = opts || {};
  const body = await encrypt(sub, JSON.stringify(data));
  const headers = { "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream", "TTL": String(opts.ttl || 3600), "Urgency": opts.urgency || "high",
    "Authorization": await vapidAuth(sub.endpoint, keys, opts.contact || "mailto:neoninc.support@gmail.com") };
  if (opts.topic) headers.Topic = opts.topic;
  return { endpoint: sub.endpoint, headers, body };
}
