const CACHE_NAME = "fiveish-v36";
const HOME_URL = new URL("./", self.registration.scope).href;
const APP_SHELL = [
  "./",
  "index.html",
  "styles.css?v=34",
  "src/data/mockKnowledgeBase.js?v=34",
  "src/data/marketingKnowledgeBase.js?v=34",
  "src/data/benchmarkData.js?v=34",
  "src/data/copyTemplates.js?v=34",
  "src/lib/textVariation.js?v=34",
  "src/lib/scoringEngine.js?v=34",
  "src/lib/recommendationEngine.js?v=34",
  "src/lib/resultGenerator.js?v=34",
  "src/components/ScoreBreakdown.js?v=34",
  "src/components/InsightList.js?v=34",
  "src/components/ActionPlan.js?v=34",
  "src/components/AnalysisResultCard.js?v=34",
  "app.js?v=34",
  "manifest.webmanifest?v=36",
  "icons/favicon-32.png?v=36",
  "icons/apple-touch-icon.png?v=36",
  "icons/icon-192.png?v=36",
  "icons/icon-512.png?v=36",
  "icons/maskable-512.png?v=36",
].map((path) => new URL(path, self.registration.scope).href);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match(HOME_URL)),
      ),
  );
});
