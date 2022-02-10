console.log("Hi from your service-worker.js file!!");

const APP_PREFIX = 'Still-Good-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./logo192.png",
    "./logo512.png",
    "./manifest.json",
    "./robots.txt",
  ];

  self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
  })