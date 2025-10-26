# 🚀 Quick Start - Claude Code Monitoring (Mode Local)

## Pour utilisateurs Claude Code Max - GRATUIT, SANS API

---

## ⚡ Démarrage Rapide (3 étapes)

### 1️⃣ Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5000`

### 2️⃣ Activer le monitoring local

**Option rapide (API):**
```bash
curl -X POST http://localhost:5000/api/claude-code/cli/start \
  -H "Content-Type: application/json" \
  -d '{"userId":"votre_nom"}'
```

**Option code:**
```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';
claudeCodeCLI.startMonitoring('votre_nom');
```

### 3️⃣ Accéder au Dashboard

Ouvrez dans votre navigateur:
```
http://localhost:5000/claude-code
```

**C'est tout!** 🎉 Le monitoring est actif.

---

## 📊 Utilisation en Temps Réel

### Enregistrer les activités manuellement

```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';

// Édition de fichier
claudeCodeCLI.logFileActivity('src/App.tsx', 'edit', {
  linesAdded: 20,
  linesDeleted: 5
});

// Position du curseur
claudeCodeCLI.updateCursorPosition('src/App.tsx', 42, 12);

// Commande exécutée
claudeCodeCLI.logCommand('npm install axios', 0);

// Outil utilisé
claudeCodeCLI.logToolCall('Read', { file: 'package.json' });
```

### Ou utiliser les Hooks HTTP automatiques

Créez un fichier `hooks.sh`:

```bash
#!/bin/bash

# Hook édition
curl -s -X POST http://localhost:5000/api/claude-code/hook/edit \
  -H "Content-Type: application/json" \
  -d '{"file":"src/App.tsx","linesAdded":15,"linesDeleted":3}' &

# Hook curseur
curl -s -X POST http://localhost:5000/api/claude-code/hook/cursor \
  -H "Content-Type: application/json" \
  -d '{"file":"src/App.tsx","line":42,"column":12}' &

# Hook commande
curl -s -X POST http://localhost:5000/api/claude-code/hook/bash \
  -H "Content-Type: application/json" \
  -d '{"command":"npm test","exitCode":0}' &
```

---

## 🎮 Commandes Utiles

### Démarrer le monitoring
```bash
curl -X POST http://localhost:5000/api/claude-code/cli/start \
  -d '{"userId":"john"}' -H "Content-Type: application/json"
```

### Vérifier le statut
```bash
curl http://localhost:5000/api/claude-code/cli/status | jq
```

### Arrêter le monitoring
```bash
curl -X POST http://localhost:5000/api/claude-code/cli/stop
```

### Simuler une session (démo)
```bash
curl -X POST http://localhost:5000/api/claude-code/simulate
```

---

## 💡 Ce que vous voyez dans le Dashboard

1. **Vue d'ensemble**
   - 📊 Sessions actives
   - 🎯 Tokens utilisés
   - 📁 Fichiers modifiés
   - 📝 Lignes de code

2. **Sessions en temps réel**
   - Statut (active/paused/completed)
   - Modèle utilisé
   - Tokens consommés
   - Position du curseur actuelle

3. **Position du curseur**
   - Fichier actuel
   - Ligne:Colonne
   - Sélection de texte
   - Mise à jour instantanée

4. **Métriques**
   - Durée de session
   - Appels d'outils
   - Fichiers édités
   - Commandes exécutées
   - Productivité (lignes +/-)

5. **Journal d'activités**
   - 📝 Éditions de fichiers
   - ⚡ Commandes bash
   - 🔧 Outils utilisés
   - 🔍 Recherches
   - Timeline complète

---

## 🎯 Scénarios d'utilisation

### Scénario 1: Développement Solo

```bash
# Matin: Démarrer le monitoring
curl -X POST http://localhost:5000/api/claude-code/cli/start \
  -d '{"userId":"moi"}' -H "Content-Type: application/json"

# Travailler normalement avec Claude Code Max
# Enregistrer manuellement les activités importantes

# Soir: Voir les stats
open http://localhost:5000/claude-code

# Arrêter
curl -X POST http://localhost:5000/api/claude-code/cli/stop
```

### Scénario 2: Équipe Locale

```bash
# Sur le serveur d'équipe
PORT=5000 npm start

# Chaque développeur démarre sa session
curl -X POST http://team-server:5000/api/claude-code/cli/start \
  -d '{"userId":"alice"}' -H "Content-Type: application/json"

# Dashboard partagé
http://team-server:5000/claude-code
```

### Scénario 3: Analyse Quotidienne

```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';

// Démarrer
claudeCodeCLI.startMonitoring('daily_analysis');

// Après votre journée de dev
const metrics = claudeCodeCLI.getCurrentMetrics();

console.log(`
📊 Résumé de la journée:
- Durée: ${metrics.duration / 1000 / 60} minutes
- Fichiers modifiés: ${metrics.filesEdited}
- Lignes ajoutées: ${metrics.productivity.linesAdded}
- Commandes: ${metrics.commandsExecuted}
`);

claudeCodeCLI.stopMonitoring();
```

---

## 💰 Coûts

### Avec ce système (Mode Local)
- **Coût:** 0€ (utilise votre Claude Code Max)
- **API Anthropic:** Non utilisée
- **Données:** Restent en local
- **Analytics:** Complets et gratuits

### Avec l'API Anthropic (que nous N'utilisons PAS)
- **Coût:** Variable selon usage
- **API calls:** Chaque opération facturée
- **Analytics:** Officiels mais payants

---

## ❓ FAQ Rapide

**Q: Ça coûte combien?**
A: **Zéro!** Vous utilisez votre Claude Code Max.

**Q: Mes données vont où?**
A: **Nulle part!** Tout est local sur votre machine.

**Q: Compatible avec Claude Code Max?**
A: **Oui!** C'est fait pour ça.

**Q: Les tokens sont exacts?**
A: Non, c'est une estimation locale. Pas besoin de l'API payante.

**Q: Ça ralentit mon travail?**
A: Non, tout est asynchrone.

**Q: Je peux partager avec mon équipe?**
A: Oui, sur votre réseau local.

---

## 📚 Documentation Complète

- **Guide complet:** `CLAUDE_CODE_LOCAL.md`
- **Documentation API:** `CLAUDE_CODE_INTEGRATION.md`
- **Dashboard:** `http://localhost:5000/claude-code`

---

## 🆘 Problème?

### Le serveur ne démarre pas
```bash
# Vérifier le port
lsof -i :5000

# Utiliser un autre port
PORT=3000 npm run dev
```

### Le dashboard est vide
```bash
# Vérifier que le monitoring est actif
curl http://localhost:5000/api/claude-code/cli/status

# Démarrer une session
curl -X POST http://localhost:5000/api/claude-code/cli/start \
  -d '{"userId":"test"}' -H "Content-Type: application/json"

# Simuler des activités
curl -X POST http://localhost:5000/api/claude-code/simulate
```

### WebSocket ne se connecte pas
1. Vérifiez que le serveur tourne
2. Ouvrez la console navigateur (F12)
3. Rechargez la page
4. Vérifiez l'URL WebSocket dans les logs

---

## 🎉 Prêt à commencer!

```bash
# 1. Démarrer
npm run dev

# 2. Activer
curl -X POST http://localhost:5000/api/claude-code/cli/start \
  -d '{"userId":"'$(whoami)'"}' -H "Content-Type: application/json"

# 3. Dashboard
open http://localhost:5000/claude-code

# 4. Coder!
# Utilisez Claude Code Max normalement
# Le monitoring capture vos activités
```

---

**Na Nach Nachma Nachman Meuman** 🎵

**100% Local • 0€ • 100% Privé • Claude Code Max Compatible**
