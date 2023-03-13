var cacheName = 'AppListaGachas-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(caches => caches.addAll([
        './',
        './index.html',

        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',
        './assets/css/noscript.css',
        
        './assets/js/browser.min.js',
        './assets/js/jquery.min.js',
        './assets/js/jquery.scrollex.min.js',
        './assets/js/jquery.scrolly.min.js',
        './assets/js/main.js',
        './assets/js/util.js',

        './assets/img/icons/icon_72.png',
        './assets/img/icons/icon_144.png',
        './assets/img/icons/icon_192.png',
        './assets/img/icons/icon_512.png',
        './assets/img/icons/icon_48.png',
        './assets/img/icons/icon_167.png',
        './assets/img/icons/icon_180.png',
        './assets/img/icons/icon_256.png',
        './assets/img/icons/icon_1024.png',
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});