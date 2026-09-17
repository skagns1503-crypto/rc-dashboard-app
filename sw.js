/* 데일리케밥 체험단 PWA — 셸 캐시(설치·오프라인 표시용). 데이터는 항상 네트워크(JSONP). */
var CACHE = 'rc-dashboard-v2';
var SHELL = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var url = e.request.url;
  // GAS 데이터 요청은 캐시하지 않음(항상 최신)
  if (url.indexOf('script.google.com') !== -1) return;
  // 셸: 네트워크 우선, 실패 시 캐시(오프라인)
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); }).catch(function () {});
      return res;
    }).catch(function () { return caches.match(e.request); })
  );
});
