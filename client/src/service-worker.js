const APP_PREFIX = 'Still-Good-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "/App.css",
    "/App.js",
    "/index.css",
    "/index.js",
    "/components/Header.js",
    "/components/ItemEdit.js",
    "/components/Login.js",
    "/components/Signup.js",
    "/components/SingleItem.js",
    "/pages/ItemList.js",
    "/pages/NoMatch.js",
    "/pages/Welcome.js",
    "/pages/ItemList.js",
    "/utils/auth.js",
    "/utils/helpers.js",
    "/utils/mutations.js",
    "/utils/queries.js",
    "../public/index.html",
    "../public/logo192.png",
    "../public/logo512.png",
    "../public/manifest.json",
    "../public/robots.txt"
  ];

  self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
  })

  self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        let cacheKeeplist = keyList.filter(function(key) {
          return key.indexOf(APP_PREFIX);
        });
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function(key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
  });

  console.log("Hi from your service-worker.js file!!");