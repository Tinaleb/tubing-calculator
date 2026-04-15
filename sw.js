const CACHE_NAME = 'tubing-calc-v2';

const ASSETS = [
  '/tubing-calculator/',
  '/tubing-calculator/index.html',
  '/tubing-calculator/manifest.json',
  '/tubing-calculator/icon-192.png',
  '/tubing-calculator/icon-512.png',
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap'
];

// ── INSTALL: cache all assets ──────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache core assets; font URL may fail offline — that's fine
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(() => null))
      );
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clear old caches ─────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first strategy ────────────────────────
self.addEventListener('fetch', event => {
  // Skip non-GET and browser extension requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — try network, then cache the response
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        // Offline and not cached — return offline fallback for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('/tubing-calculator/index.html')
              || caches.match('/tubing-calculator/');
        }
      });
    })
  );
});
