self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('srf-nota-v1').then((cache) => {
            return cache.addAll([
                'index.html',
                'unyil.html',
                'aldi.html',
                'leora.html',
                'manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});