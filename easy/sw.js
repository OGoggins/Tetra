async function prepareCache() {
  const c = await caches.open(CACHE);
  await c.addAll(RESOURCES);
}

function interceptFetch(e) {
  e.respondWith(handleFetch(e.request));
  e.waitUntil(updateCache(e.request));
}

async function handleFetch(request) {
  const c = await caches.open(CACHE);
  const cachedCopy = await c.match(request);
  return cachedCopy || Promise.reject(new Error('no-match'));
}

async function updateCache(request) {
  const c = await caches.open(CACHE);
  const response = await fetch(request);
  console.log('Updating cache ', request.url);
  return c.put(request, response);
}

const RESOURCES = [
  './',
  '../control',
  '../assets',
];

const CACHE = 'tetra';

self.addEventListener('install', prepareCache);
// self.addEventListener('fetch', interceptFetch);
self.addEventListener('fetch', () => console.log('Fetch request received'));

