# Claude Code Monitoring LOCAL (Sans API Payante)

## 🎯 Pour utilisateurs Claude Code Max

Ce système de monitoring fonctionne **100% en local** avec votre abonnement Claude Code Max existant, **SANS coûts supplémentaires** d'API.

## ✅ Avantages

- 💰 **Gratuit** - Utilise votre abonnement Claude Code Max
- 🔒 **Privé** - Tout reste sur votre machine
- 🚀 **Temps réel** - WebSocket pour monitoring instantané
- 📊 **Analytics complets** - Sans payer l'API Anthropic

## 🚀 Quick Start

### 1. Démarrer le serveur

```bash
npm run dev
```

### 2. Démarrer le monitoring local

**Option A: Via l'API**
```bash
curl -X POST http://localhost:5000/api/claude-code/cli/start \
  -H "Content-Type: application/json" \
  -d '{"userId":"votre_nom"}'
```

**Option B: Via le code**
```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';

// Démarrer le monitoring
claudeCodeCLI.startMonitoring('votre_nom');

// Le dashboard est maintenant actif!
// http://localhost:5000/claude-code
```

### 3. Accéder au dashboard

```
http://localhost:5000/claude-code
```

### 4. Commencer à coder avec Claude Code Max

Utilisez Claude Code normalement. Pour enregistrer les activités:

```typescript
// Enregistrer une édition de fichier
claudeCodeCLI.logFileActivity('src/App.tsx', 'edit', {
  linesAdded: 15,
  linesDeleted: 3
});

// Enregistrer une commande
claudeCodeCLI.logCommand('npm install axios', 0);

// Enregistrer un appel d'outil
claudeCodeCLI.logToolCall('Read', { file: 'package.json' });

// Mettre à jour la position du curseur
claudeCodeCLI.updateCursorPosition('src/App.tsx', 42, 12);
```

## 🔌 Intégration Automatique (Hooks)

Pour capturer automatiquement les événements de Claude Code, vous pouvez:

### Option 1: Hooks HTTP (Recommandé)

Créez un fichier `~/.config/claude-code/hooks.sh`:

```bash
#!/bin/bash

# Hook après chaque outil
tool_post_hook() {
  local tool_name="$1"
  local tool_args="$2"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/tool \
    -H "Content-Type: application/json" \
    -d "{\"tool\": \"$tool_name\", \"args\": \"$tool_args\"}" \
    > /dev/null 2>&1 &
}

# Hook après édition de fichier
edit_post_hook() {
  local file_path="$1"
  local lines_added="$2"
  local lines_deleted="$3"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/edit \
    -H "Content-Type: application/json" \
    -d "{\"file\": \"$file_path\", \"linesAdded\": $lines_added, \"linesDeleted\": $lines_deleted}" \
    > /dev/null 2>&1 &
}

# Hook après commande bash
bash_post_hook() {
  local command="$1"
  local exit_code="$2"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/bash \
    -H "Content-Type: application/json" \
    -d "{\"command\": \"$command\", \"exitCode\": $exit_code}" \
    > /dev/null 2>&1 &
}

# Hook pour la position du curseur
cursor_move_hook() {
  local file="$1"
  local line="$2"
  local column="$3"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/cursor \
    -H "Content-Type: application/json" \
    -d "{\"file\": \"$file\", \"line\": $line, \"column\": $column}" \
    > /dev/null 2>&1 &
}
```

Rendez-le exécutable:
```bash
chmod +x ~/.config/claude-code/hooks.sh
```

### Option 2: Extension VS Code/Cursor

Si vous utilisez Claude Code dans VS Code/Cursor, créez une extension qui envoie les événements:

```typescript
// extension.ts
import * as vscode from 'vscode';

const API_BASE = 'http://localhost:5000/api/claude-code/hook';

export function activate(context: vscode.ExtensionContext) {

  // Tracker les éditions
  vscode.workspace.onDidSaveTextDocument(document => {
    fetch(`${API_BASE}/edit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        file: document.fileName,
        lines: document.lineCount
      })
    }).catch(console.error);
  });

  // Tracker le curseur
  vscode.window.onDidChangeTextEditorSelection(event => {
    const selection = event.selections[0];
    fetch(`${API_BASE}/cursor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        file: event.textEditor.document.fileName,
        line: selection.active.line,
        column: selection.active.character
      })
    }).catch(console.error);
  });

  // Tracker les commandes terminal
  const terminalTracker = vscode.window.onDidEndTerminalShellExecution(event => {
    fetch(`${API_BASE}/bash`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        command: event.execution.commandLine.value,
        exitCode: event.exitCode || 0
      })
    }).catch(console.error);
  });

  context.subscriptions.push(terminalTracker);
}
```

## 📡 API Endpoints (Local)

### Démarrer le monitoring

```bash
POST /api/claude-code/cli/start
{
  "userId": "votre_nom"
}

# Response:
{
  "success": true,
  "sessionId": "session_...",
  "message": "Local monitoring started - No API costs!",
  "dashboardUrl": "http://localhost:5000/claude-code"
}
```

### Arrêter le monitoring

```bash
POST /api/claude-code/cli/stop

# Response:
{
  "success": true,
  "message": "Monitoring stopped",
  "sessionId": "session_..."
}
```

### Vérifier le statut

```bash
GET /api/claude-code/cli/status

# Response:
{
  "active": true,
  "sessionId": "session_...",
  "metrics": {
    "totalTokens": 12500,
    "filesEdited": 8,
    "duration": 3600000,
    ...
  },
  "message": "Local monitoring - No API costs with Claude Code Max!"
}
```

### Hooks (appelés automatiquement)

```bash
# Hook outil
POST /api/claude-code/hook/tool
{
  "tool": "Read",
  "args": "package.json"
}

# Hook édition
POST /api/claude-code/hook/edit
{
  "file": "src/App.tsx",
  "linesAdded": 15,
  "linesDeleted": 3
}

# Hook commande
POST /api/claude-code/hook/bash
{
  "command": "npm install axios",
  "exitCode": 0
}

# Hook curseur
POST /api/claude-code/hook/cursor
{
  "file": "src/App.tsx",
  "line": 42,
  "column": 12
}
```

## 🎨 Dashboard Features

Le dashboard web (`http://localhost:5000/claude-code`) affiche en temps réel:

1. **Vue d'ensemble**
   - Sessions actives
   - Tokens utilisés (estimation locale)
   - Fichiers modifiés
   - Lignes de code

2. **Monitoring de session**
   - Statut en temps réel
   - Position du curseur
   - Fichier actuel
   - Activités récentes

3. **Journal d'activités**
   - Éditions de fichiers
   - Commandes exécutées
   - Outils utilisés
   - Timeline complète

4. **Métriques**
   - Durée de session
   - Productivité (lignes ajoutées/supprimées)
   - Fichiers édités
   - Commandes exécutées

## 💡 Exemples d'utilisation

### Exemple 1: Session manuelle

```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';

// Démarrer
claudeCodeCLI.startMonitoring('john_doe');

// Simuler des activités
claudeCodeCLI.logFileActivity('src/App.tsx', 'edit', {
  linesAdded: 20,
  linesDeleted: 5
});

claudeCodeCLI.updateCursorPosition('src/App.tsx', 42, 12);

claudeCodeCLI.logCommand('npm test', 0);

// Obtenir les métriques
const metrics = claudeCodeCLI.getCurrentMetrics();
console.log(metrics);

// Arrêter
claudeCodeCLI.stopMonitoring();
```

### Exemple 2: Avec événements

```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';

// Écouter les événements
claudeCodeCLI.on('session_started', (session) => {
  console.log('Session started:', session.id);
});

claudeCodeCLI.on('file_activity', ({ filePath, action }) => {
  console.log(`File ${action}:`, filePath);
});

claudeCodeCLI.on('cursor_moved', ({ file, line }) => {
  console.log(`Cursor at ${file}:${line}`);
});

claudeCodeCLI.on('session_ended', ({ sessionId }) => {
  console.log('Session ended:', sessionId);
});

// Démarrer le monitoring
claudeCodeCLI.startMonitoring('jane_doe');
```

### Exemple 3: Parser les logs

Si vous avez accès aux logs de Claude Code:

```typescript
import { claudeCodeCLI } from './server/claudeCodeCLI';
import { readFileSync } from 'fs';

claudeCodeCLI.startMonitoring('log_parser');

// Lire et parser les logs
const logs = readFileSync('/path/to/claude-code.log', 'utf-8');
const lines = logs.split('\n');

lines.forEach(line => {
  claudeCodeCLI.parseClaudeCodeLog(line);
});

// Les métriques sont maintenant à jour!
console.log(claudeCodeCLI.getCurrentMetrics());
```

## 🔒 Sécurité et Confidentialité

### Avantages du mode local

1. **Zéro appel API externe** - Tout reste sur votre machine
2. **Pas de données envoyées à Anthropic** - Confidentialité totale
3. **Utilise votre abonnement existant** - Pas de coûts supplémentaires
4. **Monitoring privé** - Vos codes et activités restent privés

### Pour sécuriser en production

1. **Authentification**
   ```typescript
   // Ajouter un token d'authentification
   app.post('/api/claude-code/hook/*', (req, res, next) => {
     const token = req.headers['x-auth-token'];
     if (token !== process.env.HOOK_TOKEN) {
       return res.status(401).json({ error: 'Unauthorized' });
     }
     next();
   });
   ```

2. **Limiter les origines**
   ```typescript
   app.post('/api/claude-code/hook/*', (req, res, next) => {
     const allowedIPs = ['127.0.0.1', 'localhost'];
     if (!allowedIPs.includes(req.ip)) {
       return res.status(403).json({ error: 'Forbidden' });
     }
     next();
   });
   ```

## 📊 Estimation des tokens (Local)

Le système estime les tokens localement basé sur:

1. **Longueur du texte** - Approximation: 1 token ≈ 4 caractères
2. **Nombre de fichiers lus** - Estimation par taille de fichier
3. **Complexité des commandes** - Heuristiques

Ces estimations sont **approximatives** mais permettent de:
- Suivre la consommation relative
- Comparer les sessions
- Optimiser l'utilisation

**Note:** Pour des mesures exactes, il faudrait l'API payante Anthropic (que nous n'utilisons PAS).

## 🎯 Cas d'usage

1. **Suivi personnel**
   - Voir votre productivité quotidienne
   - Analyser vos patterns de travail
   - Optimiser votre workflow

2. **Équipes locales**
   - Partager le dashboard en réseau local
   - Voir qui travaille sur quoi
   - Coordination d'équipe

3. **Apprentissage**
   - Observer comment vous utilisez Claude Code
   - Identifier les patterns répétitifs
   - Améliorer vos prompts

4. **Debugging**
   - Voir exactement ce qui s'est passé
   - Reproduire les bugs
   - Analyser les erreurs

## 🆚 Comparaison

| Feature | Mode Local (Ce système) | API Anthropic |
|---------|------------------------|---------------|
| Coût | **Gratuit** (inclus avec Claude Code Max) | Payant ($$$) |
| Confidentialité | **100% privé** | Données envoyées à Anthropic |
| Tokens exacts | Estimation locale | Mesure exacte |
| Analytics | ✅ Complets | ✅ Officiels |
| Temps réel | ✅ WebSocket | ❌ Polling |
| Dashboard | ✅ Inclus | ❌ À créer |
| Setup | Simple | Complexe (clés API) |

## 🚀 Déploiement

Pour déployer le système en réseau local d'équipe:

```bash
# 1. Configurer le port
export PORT=5000

# 2. Démarrer le serveur
npm start

# 3. Les membres de l'équipe se connectent
# http://your-machine-ip:5000/claude-code

# 4. Chaque développeur démarre son monitoring
curl -X POST http://your-machine-ip:5000/api/claude-code/cli/start \
  -H "Content-Type: application/json" \
  -d '{"userId":"developer_name"}'
```

## 🎓 Tips & Tricks

### 1. Auto-start monitoring

Ajoutez à votre `.bashrc` ou `.zshrc`:

```bash
# Auto-start Claude Code monitoring
claude_monitor_start() {
  curl -s -X POST http://localhost:5000/api/claude-code/cli/start \
    -H "Content-Type: application/json" \
    -d "{\"userId\":\"$USER\"}" | jq
}

# Alias
alias cm='claude_monitor_start'
```

### 2. Widget terminal

```bash
# Afficher les stats en temps réel
watch -n 1 'curl -s http://localhost:5000/api/claude-code/cli/status | jq ".metrics"'
```

### 3. Notifications

```typescript
claudeCodeCLI.on('file_activity', ({ filePath }) => {
  // Envoyer une notification
  notifier.notify({
    title: 'File edited',
    message: filePath
  });
});
```

## ❓ FAQ

**Q: Ça coûte combien?**
A: **Zéro!** Vous utilisez votre abonnement Claude Code Max existant.

**Q: Mes données sont envoyées où?**
A: **Nulle part!** Tout reste sur votre machine locale.

**Q: Les tokens sont exacts?**
A: Non, c'est une estimation locale. Pour des chiffres exacts, il faudrait l'API payante (que nous n'utilisons pas).

**Q: Ça marche avec Claude Code Max?**
A: **Oui!** C'est fait pour ça.

**Q: Je peux l'utiliser en équipe?**
A: Oui, déployez sur un serveur local et partagez l'URL.

**Q: C'est sécurisé?**
A: Oui, tout reste en local. Ajoutez une authentification pour plus de sécurité.

**Q: Ça ralentit Claude Code?**
A: Non, le monitoring est asynchrone et n'impacte pas les performances.

## 📚 Ressources

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Dashboard](http://localhost:5000/claude-code)

---

**Na Nach Nachma Nachman Meuman** 🎵

**100% Local • 0% Coûts API • 100% Privé**
