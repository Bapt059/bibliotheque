# Bibliothèque d'outils Claude

App perso pour stocker et lancer mes artifacts Claude (.jsx et .html) depuis n'importe quel appareil.

🔗 **Démo live** : https://bapt059.github.io/bibliotheque/

## Stack
- HTML + JS vanilla + Tailwind (Play CDN)
- IndexedDB pour le stockage local
- GitHub Gist (privé) pour la sync entre appareils
- Babel standalone + esm.sh pour exécuter les JSX dans le navigateur

## Setup d'un nouvel appareil
1. Ouvrir l'URL démo
2. Bouton 🔄 → coller le PAT (scope `gist`) et le Gist ID
3. Cocher "Sync auto" + Sync maintenant

## Maintenance
- Le PAT expire le **<date>** → à renouveler ici : https://github.com/settings/tokens
- Export de backup régulier via le bouton ↓