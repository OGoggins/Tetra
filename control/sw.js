async function prepareCache() {
  const c = await caches.open(CACHE);
  await c.addAll(RESOURCES);
}

const RESOURCES = [
  './',
  '../control',
  '../assets',
];

const CACHE = 'tetra';

self.addEventListener('install', prepareCache);
self.addEventListener('fetch', () => console.log('Fetch request received'));
