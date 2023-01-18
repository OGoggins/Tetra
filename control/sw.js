async function prepareCache() {
  const c = await caches.open(CACHE);
  await c.addAll(RESOURCES);
}

const RESOURCES = [
  '/',
  '/index.html',
  '/sw.js',
  '/index.mjs',
  '/canvas.mjs',
  '/index.css',
  '../assets/icon.png',
  '/manifest.json',
];

const CACHE = 'tetra';

self.addEventListener('install', prepareCache);
