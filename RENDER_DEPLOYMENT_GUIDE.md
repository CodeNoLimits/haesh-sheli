# 🚀 GUIDE DE DÉPLOIEMENT RENDER.COM - HAESH SHELI

## 📋 Prérequis

- Compte Render.com (gratuit ou payant)
- Repository Git (GitHub, GitLab, ou Bitbucket)
- Render API Key: `rnd_GwMEgbHJZiKVi58jcKhx4FpDWprs`

---

## 🎯 MÉTHODE 1: Déploiement via Dashboard Render (Recommandé)

### Étape 1: Connexion à Render

1. Va sur [https://dashboard.render.com](https://dashboard.render.com)
2. Connecte-toi avec ton compte
3. Clique sur **"New +"** → **"Web Service"**

### Étape 2: Connecter ton Repository Git

1. Connecte ton compte GitHub/GitLab
2. Sélectionne le repository **HaeshSheliClone**
3. Clique sur **"Connect"**

### Étape 3: Configuration du Service

Remplis les champs suivants:

| Champ | Valeur |
|-------|--------|
| **Name** | `haesh-sheli` |
| **Region** | `Oregon (US West)` (ou le plus proche) |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | `Starter` (ou `Free` si budget limité) |

### Étape 4: Variables d'Environnement

Clique sur **"Advanced"** puis ajoute ces variables:

```bash
NODE_ENV=production
VITE_PUBLIC_BUILDER_KEY=03781aef3e954725b18e9139cb9e6001
DATABASE_URL=[ton_url_neon_postgres]
STRIPE_SECRET_KEY=[ta_clé_stripe]
GEMINI_API_KEY=[ta_clé_gemini]
SENDGRID_API_KEY=[ta_clé_sendgrid]
```

**⚠️ Important:** Pour `SESSION_SECRET`, clique sur **"Generate"** pour créer une valeur aléatoire sécurisée.

### Étape 5: Health Check (Optionnel mais recommandé)

Dans **"Advanced Settings"**:
- **Health Check Path:** `/api/health`

### Étape 6: Déploiement

1. Clique sur **"Create Web Service"**
2. Render va automatiquement:
   - Cloner ton repo
   - Installer les dépendances
   - Builder l'application
   - Lancer le serveur

Le déploiement prend ~5-10 minutes.

---

## 🎯 MÉTHODE 2: Déploiement via CLI Render

### Installation CLI

```bash
# macOS (Homebrew)
brew tap render-oss/render
brew install render

# Ou via npm
npm install -g @render/cli
```

### Authentification

```bash
render login
# Utilise ton API key: rnd_GwMEgbHJZiKVi58jcKhx4FpDWprs
```

### Déploiement

```bash
# Depuis la racine de ton projet
cd "/Users/codenolimits-dreamai-nanach/Desktop/SITE KEREN 2/HaeshSheliClone"

# Déployer avec le fichier render.yaml
render deploy
```

---

## 🎯 MÉTHODE 3: Déploiement via Infrastructure as Code (render.yaml)

Le fichier `render.yaml` est déjà créé à la racine du projet.

### Push vers Git

```bash
git add render.yaml
git commit -m "🚀 Add Render deployment configuration"
git push origin main
```

### Activation dans Render Dashboard

1. Va dans **"YAML"** tab dans Render Dashboard
2. Clique sur **"New from YAML"**
3. Sélectionne ton repository
4. Render détectera automatiquement `render.yaml`
5. Clique sur **"Apply"**

---

## 📊 Configuration Avancée

### Database (PostgreSQL)

Si tu n'utilises pas Neon, Render peut créer une DB PostgreSQL:

1. Dashboard → **"New +"** → **"PostgreSQL"**
2. Nom: `haesh-sheli-db`
3. Plan: **Starter** ($7/mois) ou **Free** (90 jours)
4. Copie l'URL de connexion interne
5. Ajoute-la dans les variables d'environnement du Web Service

### Auto-Deploy

Render redéploie automatiquement à chaque push sur `main`:

```bash
git add .
git commit -m "✨ Update feature"
git push origin main
# Render redéploie automatiquement!
```

### Custom Domain

1. Dashboard → ton service → **"Settings"**
2. **"Custom Domain"** → **"Add Custom Domain"**
3. Entre ton domaine: `www.haesh-sheli.com`
4. Configure les DNS selon les instructions Render:
   - Type: `CNAME`
   - Name: `www`
   - Value: `[ton-service].onrender.com`

### SSL/HTTPS

Render active automatiquement SSL gratuit (Let's Encrypt) pour tous les services.

---

## 🔧 Commandes Utiles

### Logs en temps réel

```bash
# Via CLI
render logs --service haesh-sheli --tail

# Via Dashboard
Dashboard → ton service → "Logs" tab
```

### Redéploiement Manuel

```bash
# Via CLI
render deploy --service haesh-sheli

# Via Dashboard
Dashboard → ton service → "Manual Deploy" → "Deploy latest commit"
```

### Shell Access (Debug)

```bash
# Via CLI
render shell --service haesh-sheli

# Exemple: vérifier les variables d'environnement
render shell --service haesh-sheli --command "printenv"
```

---

## ✅ Vérification Post-Déploiement

### 1. Health Check

```bash
curl https://haesh-sheli.onrender.com/api/health
```

Réponse attendue:
```json
{
  "status": "healthy",
  "timestamp": "2025-01-20T12:00:00.000Z",
  "service": "haesh-sheli",
  "version": "1.0.0"
}
```

### 2. Test Page d'Accueil

Ouvre dans ton navigateur:
```
https://haesh-sheli.onrender.com
```

### 3. Vérifier les Logs

Dashboard → **"Logs"** → Cherche:
- ✅ `Server running on port 10000` (Render utilise le port 10000)
- ✅ Aucune erreur de variables d'environnement
- ✅ Database connection successful (si configuré)

---

## 🚨 Troubleshooting

### Problème: Build échoue

**Solution:**
```bash
# Teste le build localement
npm install
npm run build

# Si ça marche, vérifie Node version dans Render
# Dashboard → Settings → Node Version → 20.x
```

### Problème: Variables d'environnement non détectées

**Solution:**
- Dashboard → **"Environment"** tab
- Vérifie que toutes les variables sont bien définies
- **Redéploie** après modification

### Problème: Database connection failed

**Solution:**
```bash
# Vérifie DATABASE_URL dans Render
# Format attendu:
postgresql://user:password@host:5432/database?sslmode=require

# Teste la connexion depuis Render Shell
render shell --service haesh-sheli
node -e "console.log(process.env.DATABASE_URL)"
```

### Problème: Service crash au démarrage

**Solution:**
```bash
# Vérifie les logs
render logs --service haesh-sheli --tail

# Teste le start command localement
NODE_ENV=production node dist/index.js
```

---

## 📈 Monitoring & Performance

### Metrics Dashboard

Render fournit automatiquement:
- CPU Usage
- Memory Usage
- Request count
- Response times
- Error rates

Dashboard → ton service → **"Metrics"** tab

### Alertes

Configure des alertes email:
1. Dashboard → **"Settings"** → **"Notifications"**
2. Active:
   - Deploy notifications
   - Health check failures
   - Service crashes

---

## 💰 Tarification

### Plan Free (Starter)
- ✅ Gratuit
- ⚠️ Service se met en veille après 15min d'inactivité
- ⚠️ Démarrage lent (cold start ~30s)
- ✅ Parfait pour testing/development

### Plan Starter ($7/mois)
- ✅ Toujours actif (pas de cold start)
- ✅ 512MB RAM
- ✅ Parfait pour production petite échelle

### Plan Standard ($25/mois)
- ✅ 2GB RAM
- ✅ Auto-scaling
- ✅ Production à moyenne échelle

---

## 🔗 Ressources

- **Dashboard Render:** https://dashboard.render.com
- **Documentation:** https://docs.render.com
- **Status Page:** https://status.render.com
- **Support:** https://community.render.com

---

## 🎉 Félicitations!

Ton application **Haesh Sheli** est maintenant déployée sur Render.com!

URL de production: `https://haesh-sheli.onrender.com`

**Prochaines étapes recommandées:**
1. Configure un domaine personnalisé
2. Active les backups automatiques de la DB
3. Configure monitoring avec Sentry ou LogRocket
4. Setup CI/CD avec GitHub Actions

---

**Créé le:** 2025-01-20
**Dernière mise à jour:** 2025-01-20
**Version:** 1.0
