const CACHE_NAME = 'e-absensi-mnt-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then((res) => { const clone = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(event.request, clone)).catch(() => {}); return res; }).catch(() => caches.match(event.request)));
});