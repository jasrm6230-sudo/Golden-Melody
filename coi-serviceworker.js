// Minimal COI Service Worker
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.cache === "only-if-cached" && e.request.mode !== "same-origin") return;
  e.respondWith(
    fetch(e.request).then(r => {
      const newHeaders = new Headers(r.headers);
      newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
      newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
      return new Response(r.body, { status: r.status, statusText: r.statusText, headers: newHeaders });
    }).catch(e => e)
  );
});
