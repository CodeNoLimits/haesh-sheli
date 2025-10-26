# 🔍 GUIDE DE DÉBOGAGE - PAGE BLANCHE SUR NETLIFY

## ✅ VÉRIFICATION RAPIDE

Le build fonctionne correctement en local. Voici comment résoudre la page blanche sur Netlify.

---

## 🎯 SOLUTION #1 : VÉRIFIER LE RÉPERTOIRE DE PUBLICATION

### ⚠️ ERREUR LA PLUS COMMUNE

**Le problème** : Vous avez probablement mis `dist` comme répertoire de publication au lieu de `dist/public`.

### ✅ SOLUTION :

1. Allez sur votre site Netlify
2. Cliquez sur **"Site settings"** → **"Build & deploy"**
3. Sous **"Build settings"**, vérifiez :

```
Build command:     npm run build
Publish directory: dist/public    ← TRÈS IMPORTANT !
```

4. Si c'est écrit `dist` au lieu de `dist/public`, **cliquez sur "Edit settings"** et changez en **`dist/public`**
5. Cliquez sur **"Deploys"** → **"Trigger deploy"** → **"Deploy site"**

---

## 🎯 SOLUTION #2 : FORCER UN NOUVEAU DÉPLOIEMENT

### Étapes :

1. Allez dans **"Deploys"**
2. Cliquez sur **"Trigger deploy"**
3. Sélectionnez **"Clear cache and deploy site"**
4. Attendez que le déploiement se termine

---

## 🎯 SOLUTION #3 : VÉRIFIER LES LOGS DE BUILD

### Comment vérifier :

1. Allez dans **"Deploys"**
2. Cliquez sur le dernier déploiement (celui du haut)
3. Regardez les logs de build

### Ce que vous devez voir :

```
✓ built in XXs
Publishing directory: dist/public
Starting post processing
```

### ❌ Si vous voyez :

```
Error: Publish directory not found
```

**C'est confirmé** : le répertoire de publication est incorrect. Suivez la **Solution #1**.

---

## 🎯 SOLUTION #4 : VÉRIFIER LA CONSOLE DU NAVIGATEUR

### Étapes :

1. Ouvrez votre site Netlify dans Chrome/Firefox
2. Appuyez sur **F12** (ou clic droit → Inspecter)
3. Cliquez sur l'onglet **"Console"**

### ❌ Si vous voyez des erreurs comme :

**`Failed to load resource: 404`**
- **Cause** : Mauvais répertoire de publication
- **Solution** : Suivez Solution #1

**`Uncaught SyntaxError`**
- **Cause** : Problème de build
- **Solution** : Contactez-moi avec l'erreur exacte

**`Failed to fetch`**
- **Cause** : Problème d'API (normal sur Netlify)
- **Solution** : C'est normal, les fonctionnalités backend ne marcheront pas

---

## 📋 CHECKLIST COMPLÈTE

Vérifiez chacun de ces points :

### ✅ Sur Netlify :
- [ ] Répertoire de publication = **`dist/public`** (pas juste `dist`)
- [ ] Build command = **`npm run build`**
- [ ] Node version = **18** ou **20**
- [ ] Le dernier commit GitHub est bien déployé
- [ ] Pas d'erreurs dans les logs de build

### ✅ Sur GitHub :
- [ ] Le fichier `netlify.toml` est présent à la racine
- [ ] Le fichier `client/public/_redirects` est présent
- [ ] Le dernier commit contient bien ces fichiers

### ✅ Dans le navigateur :
- [ ] Pas d'erreur 404 dans la console (F12)
- [ ] Les fichiers `/assets/index-*.js` se chargent
- [ ] Les fichiers `/assets/index-*.css` se chargent

---

## 🆘 SI ÇA NE MARCHE TOUJOURS PAS

### Option A : Supprimer et recréer le site Netlify

1. **Supprimez le site actuel** sur Netlify
2. **Créez un nouveau site** :
   - "New site from Git"
   - Connectez GitHub
   - Repository : `CodeNoLimits/haesh-sheli`
   - Build command : `npm run build`
   - Publish directory : **`dist/public`**
   - Node version : 18

3. **Déployez**

### Option B : Utiliser le fichier `netlify.toml`

Le fichier `netlify.toml` est déjà dans votre repository. Il contient :

```toml
[build]
  command = "npm run build"
  publish = "dist/public"
```

Netlify devrait l'utiliser automatiquement. Si ce n'est pas le cas :

1. Vérifiez qu'il est bien dans le repository GitHub (à la racine)
2. Redéployez avec "Clear cache and deploy"

---

## 🧪 TEST : Le site fonctionne-t-il localement ?

Pour vérifier que le problème vient de Netlify et non du code :

```bash
# Dans le terminal Replit :
npm run build
npx serve dist/public
```

Ouvrez http://localhost:3000 dans le navigateur.

**Si ça fonctionne ici** → Le problème est la configuration Netlify
**Si ça ne fonctionne pas** → Il y a un problème de build (contactez-moi)

---

## 📸 CAPTURES D'ÉCRAN À PARTAGER

Si ça ne marche toujours pas, envoyez-moi :

1. **Screenshot des Build Settings Netlify**
2. **Screenshot des logs de build** (la partie avec "Publishing directory")
3. **Screenshot de la console du navigateur** (F12 → Console)
4. **L'URL de votre site Netlify**

Je pourrai diagnostiquer exactement le problème !

---

## 💡 NOTE IMPORTANTE

Même si le site s'affiche correctement, rappelez-vous que **Netlify ne supporte que le frontend**. Ces fonctionnalités NE MARCHERONT PAS :

- ❌ Authentification / Login
- ❌ Base de données
- ❌ Paiements Stripe
- ❌ Envoi d'emails
- ❌ Backend API

Pour un site 100% fonctionnel, utilisez **Render.com** ou **Vercel** (je peux vous aider).

---

**Bon débogage !** 🚀
