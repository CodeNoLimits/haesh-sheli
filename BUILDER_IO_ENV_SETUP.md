# 🔧 Builder.io Environment Configuration

## 📋 Ce que Builder.io te demande

Builder.io a besoin de ces variables pour intégrer ton projet avec Netlify et Neon.

---

## 1️⃣ NEON DATABASE CONFIGURATION

### Neon Project ID
Tu dois créer un projet Neon si pas déjà fait:

1. Va sur: https://console.neon.tech/
2. Connecte-toi avec ton compte
3. Clique sur "Create Project" ou sélectionne un projet existant
4. Le **Project ID** se trouve dans l'URL: `https://console.neon.tech/app/projects/YOUR-PROJECT-ID`

### Database URL (Connection String)

Format Neon PostgreSQL:
```
postgresql://[username]:[password]@[host]/[database]?sslmode=require
```

**Comment l'obtenir:**
1. Dans Neon Console: https://console.neon.tech/
2. Sélectionne ton projet
3. Va dans "Connection Details"
4. Copie la "Connection string"
5. Elle ressemble à:
   ```
   postgresql://user:password@ep-xxxxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

**EXEMPLE (pas ta vraie URL):**
```
DATABASE_URL=postgresql://haesh_user:abc123xyz@ep-cool-wave-12345.us-east-2.aws.neon.tech/haeshdb?sslmode=require
```

---

## 2️⃣ SENDGRID EMAIL CONFIGURATION

### SendGrid API Key

**Comment l'obtenir:**
1. Va sur: https://app.sendgrid.com/
2. Connecte-toi (ou crée un compte gratuit)
3. Va dans "Settings" → "API Keys"
4. Clique "Create API Key"
5. Nom: "Haesh Sheli Builder.io"
6. Permissions: "Full Access" (ou "Mail Send" minimum)
7. Copie la clé (commence par `SG.`)

**Format:**
```
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### SendGrid Verified Sender Email

Tu dois vérifier un email avant d'envoyer:

1. Dans SendGrid: "Settings" → "Sender Authentication"
2. Option A: **Single Sender Verification** (rapide, gratuit)
   - Ajoute un email (ex: noreply@kerenrabbisrael.com)
   - Vérifie via email de confirmation

3. Option B: **Domain Authentication** (professionnel, recommandé)
   - Configure DNS pour ton domaine
   - Plus de crédibilité email

**Format:**
```
SENDGRID_FROM_EMAIL=noreply@kerenrabbisrael.com
```

---

## 3️⃣ NETLIFY CONFIGURATION

### Netlify déjà configuré ✅

Tu as déjà:
- **Site ID:** `keren-rabbi-israel`
- **URL:** https://keren-rabbi-israel.netlify.app
- **Token:** `nfp_Do595xdW2XBsDP5EghqVgJ6WyQSwEntr834d`

Builder.io peut se connecter à Netlify avec ces infos.

---

## 4️⃣ VARIABLES D'ENVIRONNEMENT COMPLÈTES POUR BUILDER.IO

Voici ce que tu dois copier/coller dans Builder.io:

```bash
# ========================================
# BUILDER.IO
# ========================================
VITE_PUBLIC_BUILDER_KEY=03781aef3e954725b18e9139cb9e6001

# ========================================
# NEON DATABASE
# ========================================
# ⚠️ REMPLACE AVEC TA VRAIE CONNECTION STRING NEON
DATABASE_URL=postgresql://[username]:[password]@[host]/[database]?sslmode=require

# ========================================
# SENDGRID EMAIL
# ========================================
# ⚠️ REMPLACE AVEC TA VRAIE CLÉ SENDGRID
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@kerenrabbisrael.com

# ========================================
# APPLICATION
# ========================================
NODE_ENV=production

# ========================================
# STRIPE (optionnel - tu as dit de laisser tomber)
# ========================================
# STRIPE_SECRET_KEY=
# VITE_STRIPE_PUBLISHABLE_KEY=
```

---

## 5️⃣ ÉTAPES DANS BUILDER.IO

### Dans l'interface Builder.io:

1. **Va dans "Settings" ou "Integrations"**
2. **Sélectionne "Netlify"**
   - Site: `keren-rabbi-israel`
   - Personal Access Token: `nfp_Do595xdW2XBsDP5EghqVgJ6WyQSwEntr834d`

3. **Sélectionne "Neon" (ou Database)**
   - Project ID: [TON-NEON-PROJECT-ID]
   - Database URL: [TA-CONNECTION-STRING-NEON]

4. **Configure "Environment Variables"**
   - Copie/colle toutes les variables ci-dessus
   - SENDGRID_API_KEY: [TA-CLÉ-SENDGRID]
   - DATABASE_URL: [TA-CONNECTION-STRING]

---

## 6️⃣ MISE À JOUR DU FICHIER .env LOCAL

**Important:** Mets à jour aussi ton `.env` local avec ces valeurs:

```bash
cd "/Users/codenolimits-dreamai-nanach/Desktop/SITE KEREN 2/HaeshSheliClone"
nano .env
```

Ajoute:
```bash
DATABASE_URL=postgresql://[ta-vraie-url]
SENDGRID_API_KEY=SG.[ta-vraie-clé]
SENDGRID_FROM_EMAIL=noreply@kerenrabbisrael.com
```

---

## 7️⃣ CHECKLIST FINALE

### Avant de valider dans Builder.io:

- [ ] Créé projet Neon (ou récupéré Project ID)
- [ ] Copié Database Connection String depuis Neon Console
- [ ] Créé SendGrid API Key
- [ ] Vérifié email sender dans SendGrid
- [ ] Copié toutes les variables dans Builder.io
- [ ] Testé connection Netlify dans Builder.io
- [ ] Mis à jour `.env` local

---

## 8️⃣ ACCÈS RAPIDES

### Neon Console
https://console.neon.tech/

### SendGrid Dashboard
https://app.sendgrid.com/

### Netlify Dashboard
https://app.netlify.com/sites/keren-rabbi-israel

### Builder.io Dashboard
https://builder.io/

---

## 9️⃣ EXEMPLE COMPLET (FICTIF - À REMPLACER)

```bash
# Exemple avec valeurs fictives (ne pas utiliser tel quel!)
DATABASE_URL=postgresql://haesh_user:SuperSecret123@ep-cool-wave-12345.us-east-2.aws.neon.tech/haeshdb?sslmode=require

SENDGRID_API_KEY=SG.abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567yza890bcd123

SENDGRID_FROM_EMAIL=noreply@kerenrabbisrael.com

VITE_PUBLIC_BUILDER_KEY=03781aef3e954725b18e9139cb9e6001

NODE_ENV=production
```

---

## 🚀 PROCHAINES ÉTAPES

Une fois tout configuré dans Builder.io:

1. Builder.io pourra déployer sur Netlify automatiquement
2. Les emails fonctionneront via SendGrid
3. La base de données Neon sera connectée
4. Le site sera 100% opérationnel

---

**Questions fréquentes:**

**Q: Neon est gratuit?**
A: Oui, plan gratuit jusqu'à 0.5GB de données, largement suffisant pour commencer.

**Q: SendGrid est gratuit?**
A: Oui, 100 emails/jour gratuits à vie, parfait pour commencer.

**Q: Dois-je configurer Stripe?**
A: Non, tu as dit de laisser tomber Stripe pour l'instant.

**Q: Où mettre ces variables dans Builder.io?**
A: Dans Settings → Integrations → Environment Variables (ou équivalent selon l'interface)

---

**Na Nach Nachma Nachman Meuman!** 🙏

Créé le: 2025-10-26
