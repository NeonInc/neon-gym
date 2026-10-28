/* Neon Gym service worker: network first, cached copy when the gym has no signal */
const CACHE = "neon-gym-v23";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  /* Same-site files are revalidated every time (cheap 304s), so a new version shows up on the next open instead of up to 10 minutes later */
  const same = new URL(e.request.url).origin === location.origin;
  e.respondWith(fetch(same ? new Request(e.request, { cache: "no-cache" }) : e.request).then(r => {
    if (r.ok && (new URL(e.request.url).origin === location.origin || e.request.url.includes("fonts.g"))) {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return r;
  }).catch(() => caches.match(e.request).then(m => m || caches.match("index.html"))));
});
/* Fasting notification buttons: "End fast" / "Open" (and a tap on the notification) */
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const end = e.action === "end", msg = { type: end ? "fast-end" : "fast-open" };
  e.waitUntil((async () => {
    const wins = await clients.matchAll({ type: "window", includeUncontrolled: true });
    const w = wins.find(c => c.url.startsWith(self.registration.scope));
    if (w) { w.postMessage(msg); return w.focus(); }
    return clients.openWindow(self.registration.scope + (end ? "?fastend=1" : ""));
  })());
});
/* "Fast complete" push from the neon-gym-push Worker (arrives even when the app is closed) */
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (_) {}
  e.waitUntil((async () => {
    (await self.registration.getNotifications({ tag: "fast" })).forEach(n => n.close());
    await self.registration.showNotification(d.title || "Fast complete ✓", { body: d.body || "Nice work. Your eating window is open.", icon: "icon-192.png", badge: "badge-96.png", image: "fast-done.png",
      tag: d.tag || "fast-done", renotify: true, vibrate: [120, 60, 120], actions: [{ action: "log", title: "Log a meal" }, { action: "open", title: "Open" }], data: { kind: "fast-done" } });
    if (self.navigator.clearAppBadge) self.navigator.clearAppBadge().catch(() => {});
  })());
});
