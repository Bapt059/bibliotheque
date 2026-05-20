// Service Worker pour la bibliothèque d'outils Claude
// Stratégie : network-first pour les ressources same-origin (HTML/JS/CSS locaux)
// → garantit que la dernière version est toujours servie quand le réseau est dispo
// → fallback sur le cache si offline
// Les ressources cross-origin (Tailwind CDN, esm.sh, etc.) ne sont pas interceptées.

const CACHE = "bib-cache-v1";

self.addEventListener("install", (event) => {
  // Skip le wait pour que le nouveau SW prenne le contrôle dès activation
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Nettoie les anciens caches
      const names = await caches.keys();
      await Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n)));
      // Prend le contrôle des clients (onglets) immédiatement
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Ne traite que les requêtes same-origin
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      try {
        // network-first : tente le réseau en bypassant le cache HTTP du navigateur
        const fresh = await fetch(req, { cache: "no-store" });
        if (fresh && fresh.ok) {
          // Met en cache pour fallback offline
          const cache = await caches.open(CACHE);
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch (e) {
        // Pas de réseau : fallback sur le cache si on a quelque chose
        const cached = await caches.match(req);
        if (cached) return cached;
        throw e;
      }
    })()
  );
});

// Permet à la page de demander un update immédiat (depuis le bouton "Forcer mise à jour")
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
