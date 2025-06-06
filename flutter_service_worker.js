'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3715164da6c6a9e43e7bbdab1d1a9318",
"assets/AssetManifest.bin.json": "4536015009faef28d6063f070f54fdf3",
"assets/AssetManifest.json": "d657b0b92d38f2a9310eafc218c9ad72",
"assets/assets/jsons/contact_us.json": "ac127d69d365e9de02b3c70e6bb51143",
"assets/assets/pngs/1.png": "89ffe67bd519266bcea992a6457cf293",
"assets/assets/pngs/1.svg": "aebe3d9c4d939c1ada9892b0757d2001",
"assets/assets/pngs/2.png": "05b5d801e748698b3a55b3d59d458c1a",
"assets/assets/pngs/2.svg": "14878ee13401fad1359c3f0aa1a29aea",
"assets/assets/pngs/3.png": "d583abfba78ed3fed1dc1b2d8f1176ab",
"assets/assets/pngs/3.svg": "4053cb37eae11fe143ab0b4486cf8a83",
"assets/assets/pngs/4.png": "b54d33bdb008e7ff7e4566da8fa96e34",
"assets/assets/pngs/4.svg": "e871abb692dfdb386724fc325ed564fe",
"assets/assets/pngs/5.png": "40b4b88f85d1ec26c0832288edc2983a",
"assets/assets/pngs/5.svg": "6339dd6358b9bb3403a837ad43b826c0",
"assets/assets/pngs/6.png": "fe1d1140c7709e5d1ccff69e0f0d3741",
"assets/assets/pngs/6.svg": "9272b405b55abf8403025fb3ad8860d1",
"assets/assets/pngs/about_img.png": "261bad4a2870c45411790529cb2718a1",
"assets/assets/pngs/hero.jpg": "cbeb879a22489d8985a82ac3ac61af0c",
"assets/assets/pngs/logo.png": "e3e46b91a7286f963ce577025082fd00",
"assets/assets/pngs/reserved.jpg": "5dd9f6b789c17534739429caea601331",
"assets/assets/svgs/about_us.svg": "ee1c8fe7f3133584d99125aeaa7a15e9",
"assets/assets/svgs/book_table_img.svg": "e945c7055761966e40c4f53682d25b10",
"assets/assets/svgs/chef.svg": "2a7802af1913a3d187446b359227fb98",
"assets/assets/svgs/dinner.svg": "ad00d5ee15592b9a31e0d8c07164a5a0",
"assets/assets/svgs/empty_cart.svg": "5b5beb5218d479c309ab61622d0ed1c5",
"assets/assets/svgs/extra_spicy.svg": "03239b52efa707fb1fddc74267f2d14f",
"assets/assets/svgs/gluten_free_food.svg": "840c1e7485050cebd66ccebc122dcacb",
"assets/assets/svgs/ingredients.svg": "0c9989e83c995abc50f15d8a0a522138",
"assets/assets/svgs/jain_food.svg": "d4e9b97be01bd310f21c106c462a4793",
"assets/assets/svgs/logo.svg": "e1c80316a88e73fd9d07f3e471abf283",
"assets/assets/svgs/medium_spicy.svg": "f042f4191bd9a5c212c19c3cbc06394f",
"assets/assets/svgs/no_data_found.svg": "2efd55d819fca052715f6db39fe6cb0c",
"assets/assets/svgs/nut_free_food.svg": "ea021127b3c5215fe37ccb0771177c09",
"assets/assets/svgs/spicy.svg": "435a4f06f6ec96b9a19952821ca38987",
"assets/assets/svgs/team.svg": "0749607c9efe91570aec34179aa05533",
"assets/assets/svgs/vegan_food.svg": "aedc7637b8a8c5ce8a9f12eec31f7851",
"assets/FontManifest.json": "8d7e1d135a804466ab7d8c6d31b77b91",
"assets/fonts/MaterialIcons-Regular.otf": "5e19f46a274035204798d2f885b15f48",
"assets/NOTICES": "ea01d3ab1a2c78c7c414e755275e2847",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "33134d028bc89072f01a6524086790e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1e72e42f1771ad9324e7864457a06518",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e1ca05b09669d912d13979e81edf3b0",
"/": "4e1ca05b09669d912d13979e81edf3b0",
"main.dart.js": "19f77b279dbebddc850d194f118abd4f",
"manifest.json": "e03b46e8a6dbd3dc3eeaf108a8612990",
"version.json": "11531eaf821780069b4339b9ab59244d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
