
const version = 1;
const cachename = 'app-ps2-v' + version;

const arquivos = [
  './',
  './index.html',
  './main.js',
  './service-worker.js',
  './manifest.json',
  './dados.json',
  './imgs/img1.webp',
  './imgs/img2.jpg',
  './imgs/img3.webp',
];


self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cachename).then(function (cache) {
      return cache.addAll(arquivos);
    })
  );
});


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (response) {
            let responseClone = response.clone();

            caches.open(cachename).then(function (cache) {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(function () {
            return caches.match('./index.html');
          });
      }
    })
  );
});
