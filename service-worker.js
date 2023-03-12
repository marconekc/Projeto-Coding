var cacheName = 'AppListaGachas-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',
        './assets/css/noscript.css',
        
        './assets/js/browser.min.js',
        './assets/js/jquery.min.js',
        './assets/js/jquery.scrollex.min.js',
        './assets/css/jquery.scrolly.min.js',

        './assets/img/icons/icon_72.png',
        './assets/img/icons/icon_144.png',
        './assets/img/icons/icon_192.png',
        './assets/img/icons/icon_512.png',
        './assets/img/icons/icon_48.png',
        './assets/img/icons/icon_96.png',
        './assets/img/icons/icon_16.png',
        './assets/img/icons/icon_20.png',
        './assets/img/icons/icon_29.png',
        './assets/img/icons/icon_32.png',
        './assets/img/icons/icon_40.png',
        './assets/img/icons/icon_50.png',
        './assets/img/icons/icon_57.png',
        './assets/img/icons/icon_58.png',
        './assets/img/icons/icon_60.png',
        './assets/img/icons/icon_64.png',
        './assets/img/icons/icon_76.png',
        './assets/img/icons/icon_80.png',
        './assets/img/icons/icon_87.png',
        './assets/img/icons/icon_100.png',
        './assets/img/icons/icon_114.png',
        './assets/img/icons/icon_120.png',
        './assets/img/icons/icon_128.png',
        './assets/img/icons/icon_152.png',
        './assets/img/icons/icon_167.png',
        './assets/img/icons/icon_180.png',
        './assets/img/icons/icon_256.png',
        './assets/img/icons/icon_1024.png',
        
        './assets/img/imgWF.webp',
        './assets/img/imFGO.webp',
        './assets/img/imgGI.webp',
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