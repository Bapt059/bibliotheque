# 📚 Bibliothèque d'outils Claude

App perso pour stocker, organiser et lancer mes artifacts Claude (`.jsx` et `.html`) depuis n'importe quel appareil — PC, tablette, téléphone.

🔗 **Démo live** : https://bapt059.github.io/bibliotheque/

## ✨ Fonctionnalités

- **Drag & drop** de fichiers `.jsx` / `.html` ou collage direct du code depuis le presse-papier
- **Lancement instantané** des outils dans une modale (transpilation JSX à la volée via Babel + import map vers `esm.sh`)
- **Miniatures auto-générées** au premier lancement (html2canvas dans l'iframe)
- **Tags, description, favoris, recherche** plein texte
- **Édition inline** du code via CodeMirror avec relance directe
- **3 thèmes** : clair, sombre, **cyberpunk** (avec grille néon qui suit le curseur)
- **Sync entre appareils** via GitHub Gist privé (PAT en local, jamais uploadé)
- **Suppressions propagées** (tombstones) pour éviter les outils zombies entre appareils
- **Responsive** : mobile, tablette, desktop. PWA-ready (installable via "Ajouter à l'écran d'accueil")
- **Export / import JSON**, **lien partageable** par URL, **export HTML autonome** d'un outil

## 🧰 Stack

- HTML + JS vanilla + Tailwind (Play CDN)
- IndexedDB pour le stockage local persistant
- GitHub Gist privé pour la sync entre appareils
- Babel standalone + `esm.sh` pour exécuter les JSX directement dans le navigateur
- CodeMirror 5 (lazy-loaded) pour l'éditeur
- html2canvas pour les miniatures

Aucun build, aucune dépendance npm — c'est un seul fichier `index.html` qui tourne partout.

## 🔧 Setup sur un nouvel appareil

1. Ouvrir l'URL démo dans un navigateur
2. (Optionnel) "Ajouter à l'écran d'accueil" depuis le menu du navigateur pour avoir une icône d'app
3. Bouton 🔄 → coller le **Personal Access Token** GitHub (scope `gist`) et le **Gist ID**
4. Cocher "Sync auto" + clic "Sync maintenant"

Les outils descendent depuis le Gist, le PAT est mémorisé localement sur cet appareil.

## 🔐 Privacy

- Le repo et la page Pages contiennent uniquement l'app vide, **aucune donnée d'outil**
- Les outils sont stockés dans un **Gist secret** (non listé, URL aléatoire 32 chars)
- Le PAT reste dans le localStorage de chaque appareil, jamais uploadé

## ⏰ Maintenance

- **PAT à renouveler** : <à compléter — date d'expiration>
  - Lien : https://github.com/settings/tokens
- **Backup de secours** : exporter régulièrement le JSON via le bouton ↓ (en plus du Gist)

## 🛠 Modifs

Pour éditer l'app elle-même : appuyer sur `.` depuis github.com/bapt059/bibliotheque → ouvre VS Code dans le navigateur.

Les modifications sur `index.html` sont déployées automatiquement sur GitHub Pages au prochain commit (délai ~30 s).
