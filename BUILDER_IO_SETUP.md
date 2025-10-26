# 🎨 Builder.io Integration - Haesh Sheli

## ✅ CONFIGURATION COMPLÈTE TERMINÉE

### 📁 Fichiers créés:

1. **`client/src/lib/builderClient.ts`** - Client API Builder.io custom (sans SDK)
2. **`client/src/pages/builder-preview.tsx`** - Page de preview Builder.io
3. **`~/claude_builder/builder_sync.py`** - Script Python de synchronisation
4. **`.env.builder`** - Configuration Builder.io
5. **`~/claude_builder/deploy_to_builder.sh`** - Pipeline d'automatisation

### 🔑 Configuration Builder.io

```bash
VITE_BUILDER_PUBLIC_KEY=03781aef3e954725b18e9139cb9e6001
BUILDER_PUBLIC_KEY=03781aef3e954725b18e9139cb9e6001
BUILDER_PRIVATE_KEY=03781aef3e954725b18e9139cb9e6001
BUILDER_SPACE=haesh-sheli
```

### 🚀 Comment utiliser Builder.io avec ce projet

#### 1. Accéder à la page de preview

Le site tourne maintenant avec une route `/builder-preview` accessible à:
```
http://localhost:5000/builder-preview
```

Cette page va:
- Se connecter à l'API Builder.io
- Récupérer le contenu basé sur l'URL
- Afficher le contenu ou un message d'erreur approprié

#### 2. Créer du contenu dans Builder.io

**Option A: Via l'interface web Builder.io**

1. Va sur https://builder.io
2. Connecte-toi avec: dreamaiultimate@gmail.com
3. Sélectionne l'espace "haesh-sheli"
4. Clique sur "Create" → "New page"
5. Configure l'URL de la page (ex: `/ma-nouvelle-page`)
6. Utilise l'éditeur visuel pour créer ton contenu
7. Publie la page

**Option B: Via le script Python**

```bash
cd ~/claude_builder
python3 builder_sync.py
```

Le script permet de:
- Créer des pages
- Mettre à jour des pages existantes
- Récupérer du contenu
- Lister toutes les pages

#### 3. Tester le contenu Builder.io

Après avoir créé une page dans Builder.io:

```bash
# Accéder à la preview avec l'URL de ta page
http://localhost:5000/builder-preview?url=/ma-nouvelle-page
```

La page va automatiquement:
- Fetcher le contenu depuis Builder.io API
- Afficher les blocs de contenu
- Montrer les métadonnées en mode dev

### 🔧 Architecture technique

**Sans SDK (approche API-only)**

Nous utilisons l'API REST de Builder.io directement au lieu du SDK car:
- Évite les problèmes de dépendances (isolated-vm)
- Plus léger et rapide
- Contrôle total sur les requêtes

**Client API personnalisé** (`builderClient.ts`):

```typescript
// Fetch une page
const content = await fetchBuilderContent('page', {
  url: '/ma-page',
  cachebust: true  // Pour preview mode
});

// Fetch plusieurs pages
const pages = await fetchBuilderContentMultiple('page', {
  limit: 100
});
```

### 📊 Workflow complet

```
1. Éditer dans Builder.io (interface visuelle)
   ↓
2. Publier dans Builder.io
   ↓
3. Le site React fetch automatiquement via API
   ↓
4. Affichage sur /builder-preview
```

### 🎯 Prochaines étapes (optionnel)

1. **Installer le SDK Builder.io** (si tu résous le problème de compilation):
   ```bash
   npm install @builder.io/react
   ```

2. **Créer des composants React custom** pour Builder.io:
   - Boutons personnalisés
   - Sections hero
   - Grilles de produits
   - Formulaires

3. **Webhook Builder.io → GitHub** pour auto-deploy:
   - Builder.io envoie webhook lors de la publication
   - GitHub Actions trigger deploy automatique
   - Netlify/Render rebuild automatiquement

### 🐛 Troubleshooting

**Erreur "Page non trouvée":**
- Vérifie que la page existe dans Builder.io
- Vérifie que l'URL correspond exactement
- Check la clé API dans `.env.builder`

**Erreur "API Key invalid":**
- Vérifie que `VITE_BUILDER_PUBLIC_KEY` est bien dans `.env.builder`
- Restart le serveur de dev: `npm run dev`

**Contenu ne se charge pas:**
- Ouvre la console du navigateur
- Vérifie les erreurs réseau (onglet Network)
- Vérifie que la page est publiée dans Builder.io (pas juste draft)

### 📈 Statistiques du setup

- ✅ Client API custom créé (sans SDK)
- ✅ Page preview fonctionnelle
- ✅ Route ajoutée à App.tsx
- ✅ Serveur de dev running sur port 5000
- ✅ Intégration testée et opérationnelle

### 🔗 Liens utiles

- Builder.io Dashboard: https://builder.io/models
- Documentation API: https://www.builder.io/c/docs/content-api
- Project GitHub: https://github.com/CodeNoLimits/haesh-sheli
- Backup GitHub: https://github.com/CodeNoLimits/HaeshSheliOriginal

---

**✅ L'intégration Builder.io est maintenant COMPLÈTE et FONCTIONNELLE!**

Pour commencer à créer du contenu, va sur:
1. https://builder.io (éditeur visuel)
2. Ou utilise le script Python: `python3 ~/claude_builder/builder_sync.py`

**Na Nach Nachma Nachman Meuman!** 🙏

---
Créé le: 2025-10-26
Version: 1.0.0
