# Claude Web avec Claude Code Intégré

## 🎯 Vue d'ensemble

Ce système implémente une intégration complète de **Claude Code** dans une interface web, permettant:

- 🔄 **Monitoring en temps réel** des sessions de développement
- 📍 **Synchronisation du curseur** entre l'IDE et le dashboard web
- 📊 **Analytics et métriques** détaillées sur l'utilisation
- 🔌 **WebSocket bidirectionnel** pour les mises à jour en temps réel
- 🎮 **API REST complète** pour l'intégration avec des outils externes

## 🏗️ Architecture

### Stack Technique

**Backend:**
- Express.js avec WebSocket (ws)
- Services TypeScript pour le monitoring
- API REST + WebSocket Server

**Frontend:**
- React 18 avec TypeScript
- WebSocket client pour temps réel
- UI avec Shadcn/ui et Tailwind CSS

### Composants Principaux

```
server/
├── claudeCodeService.ts      # Service de monitoring et gestion des sessions
├── claudeCodeWebSocket.ts    # Serveur WebSocket pour temps réel
└── routes.ts                 # Routes API REST

client/src/
└── pages/
    └── claude-code-dashboard.tsx  # Dashboard web React
```

## 📡 API Reference

### REST Endpoints

#### Status Check
```bash
GET /api/claude-code/status
```

**Response:**
```json
{
  "connected": true,
  "version": "1.0.0",
  "features": [
    "Real-time session monitoring",
    "Cursor synchronization",
    "Activity tracking",
    "Token usage analytics",
    "WebSocket support"
  ],
  "websocketUrl": "/ws/claude-code",
  "timestamp": "2025-10-26T..."
}
```

#### Get Active Sessions
```bash
GET /api/claude-code/sessions
```

**Response:**
```json
{
  "sessions": [
    {
      "id": "session_1730000000_abc123",
      "userId": "demo_user",
      "startTime": "2025-10-26T14:30:00Z",
      "status": "active",
      "model": "claude-sonnet-4.5",
      "tokensUsed": 12500,
      "linesOfCode": 342,
      "filesModified": ["src/App.tsx", "src/components/Header.tsx"],
      "cursorPosition": {
        "file": "src/App.tsx",
        "line": 42,
        "column": 12,
        "timestamp": "2025-10-26T14:32:15Z"
      }
    }
  ],
  "count": 1,
  "timestamp": "2025-10-26T..."
}
```

#### Get Session Metrics
```bash
GET /api/claude-code/sessions/:sessionId/metrics
```

**Response:**
```json
{
  "sessionId": "session_1730000000_abc123",
  "totalTokens": 12500,
  "promptTokens": 5000,
  "completionTokens": 7500,
  "toolCalls": 45,
  "filesEdited": 8,
  "commandsExecuted": 12,
  "duration": 3600000,
  "productivity": {
    "linesAdded": 205,
    "linesDeleted": 68,
    "linesModified": 69,
    "commits": 3
  }
}
```

#### Get Session Activities
```bash
GET /api/claude-code/sessions/:sessionId/activities
```

**Response:**
```json
{
  "activities": [
    {
      "sessionId": "session_...",
      "type": "file_edit",
      "action": "Modified src/App.tsx",
      "details": {
        "file": "src/App.tsx",
        "linesChanged": 15,
        "operation": "update"
      },
      "timestamp": "2025-10-26T14:31:00Z",
      "duration": 1250
    },
    {
      "sessionId": "session_...",
      "type": "command",
      "action": "npm install axios",
      "details": {
        "command": "npm install axios",
        "exitCode": 0
      },
      "timestamp": "2025-10-26T14:32:00Z"
    }
  ],
  "count": 45,
  "sessionId": "session_...",
  "timestamp": "2025-10-26T..."
}
```

#### Start New Session
```bash
POST /api/claude-code/sessions
Content-Type: application/json

{
  "userId": "demo_user",
  "model": "claude-sonnet-4.5"
}
```

#### End Session
```bash
POST /api/claude-code/sessions/:sessionId/end
```

#### Simulate Development Session (Demo)
```bash
POST /api/claude-code/simulate
Content-Type: application/json

{
  "userId": "demo_user"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Development session simulation started",
  "userId": "demo_user",
  "tip": "Connect to WebSocket at /ws/claude-code to see real-time updates"
}
```

## 🔌 WebSocket Protocol

### Connection

```javascript
// Client-side connection
const ws = new WebSocket('ws://localhost:5000/ws/claude-code?token=YOUR_TOKEN&sessionId=SESSION_ID');

ws.onopen = () => {
  console.log('Connected to Claude Code WebSocket');
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('Received:', message);
};
```

### Message Types

#### Server → Client

**Welcome Message:**
```json
{
  "type": "welcome",
  "message": "Connected to Claude Code WebSocket",
  "timestamp": "2025-10-26T..."
}
```

**Initial State:**
```json
{
  "type": "initial_state",
  "data": {
    "sessions": [...],
    "cursorPositions": [...]
  }
}
```

**Session Started:**
```json
{
  "type": "session_started",
  "data": {
    "id": "session_...",
    "userId": "demo_user",
    "startTime": "2025-10-26T...",
    "status": "active",
    "model": "claude-sonnet-4.5",
    ...
  }
}
```

**Cursor Update:**
```json
{
  "type": "cursor_update",
  "sessionId": "session_...",
  "data": {
    "file": "src/App.tsx",
    "line": 42,
    "column": 12,
    "selection": {
      "start": { "line": 42, "column": 12 },
      "end": { "line": 45, "column": 20 }
    },
    "timestamp": "2025-10-26T..."
  }
}
```

**Activity Logged:**
```json
{
  "type": "activity_logged",
  "sessionId": "session_...",
  "data": {
    "type": "file_edit",
    "action": "Modified src/App.tsx",
    "details": {...},
    "timestamp": "2025-10-26T..."
  }
}
```

**Token Update:**
```json
{
  "type": "token_update",
  "sessionId": "session_...",
  "data": {
    "tokensUsed": 12500,
    "delta": 250
  }
}
```

**Heartbeat Ping:**
```json
{
  "type": "ping",
  "timestamp": 1730000000000
}
```

#### Client → Server

**Pong Response:**
```json
{
  "type": "pong"
}
```

**Start Session:**
```json
{
  "type": "start_session",
  "data": {
    "model": "claude-sonnet-4.5"
  }
}
```

**Update Cursor:**
```json
{
  "type": "cursor_update",
  "sessionId": "session_...",
  "data": {
    "file": "src/App.tsx",
    "line": 42,
    "column": 12,
    "selection": {
      "start": { "line": 42, "column": 12 },
      "end": { "line": 45, "column": 20 }
    }
  }
}
```

**Log Activity:**
```json
{
  "type": "log_activity",
  "sessionId": "session_...",
  "data": {
    "type": "file_edit",
    "action": "Modified src/App.tsx",
    "details": {
      "file": "src/App.tsx",
      "linesChanged": 15,
      "operation": "update"
    },
    "duration": 1250
  }
}
```

**Report Token Usage:**
```json
{
  "type": "token_usage",
  "sessionId": "session_...",
  "data": {
    "tokens": 250
  }
}
```

**Get Sessions:**
```json
{
  "type": "get_sessions"
}
```

**Get Session Metrics:**
```json
{
  "type": "get_session_metrics",
  "sessionId": "session_..."
}
```

**Get Session Activities:**
```json
{
  "type": "get_session_activities",
  "sessionId": "session_..."
}
```

**End Session:**
```json
{
  "type": "end_session",
  "sessionId": "session_..."
}
```

**Simulate Session (Demo):**
```json
{
  "type": "simulate_session"
}
```

## 🎨 Dashboard Web

### Accès

```
http://localhost:5000/claude-code
```

### Fonctionnalités

1. **Vue d'ensemble**
   - Sessions actives
   - Tokens utilisés (total)
   - Fichiers modifiés
   - Lignes de code

2. **Monitoring des sessions**
   - Liste des sessions actives
   - Statut en temps réel
   - Modèle utilisé
   - Tokens consommés
   - Position du curseur

3. **Position du curseur**
   - Fichier actuel
   - Ligne et colonne
   - Sélection de texte
   - Mise à jour en temps réel

4. **Métriques détaillées**
   - Durée de session
   - Appels d'outils
   - Fichiers édités
   - Commandes exécutées
   - Lignes ajoutées/supprimées

5. **Journal d'activités**
   - Historique complet
   - Types d'activités:
     - 🔧 Tool calls
     - 📝 File edits
     - ⚡ Commands
     - 🔍 Searches
     - 💬 Chat

## 🚀 Utilisation

### 1. Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5000` avec:
- API REST sur `/api/claude-code/*`
- WebSocket sur `ws://localhost:5000/ws/claude-code`
- Dashboard web sur `/claude-code`

### 2. Accéder au dashboard

Ouvrez votre navigateur:
```
http://localhost:5000/claude-code
```

### 3. Simuler une session de développement

**Via le dashboard:**
- Cliquez sur "Simulate Session"

**Via l'API:**
```bash
curl -X POST http://localhost:5000/api/claude-code/simulate \
  -H "Content-Type: application/json" \
  -d '{"userId":"demo_user"}'
```

### 4. Intégration dans votre IDE

Pour intégrer avec votre IDE (VS Code, Cursor, etc.), vous pouvez créer une extension qui:

1. Se connecte au WebSocket:
```javascript
const ws = new WebSocket('ws://localhost:5000/ws/claude-code?token=YOUR_TOKEN');
```

2. Envoie les mises à jour du curseur:
```javascript
// Quand le curseur bouge
vscode.window.onDidChangeTextEditorSelection(event => {
  ws.send(JSON.stringify({
    type: 'cursor_update',
    sessionId: currentSessionId,
    data: {
      file: event.textEditor.document.fileName,
      line: event.selections[0].active.line,
      column: event.selections[0].active.character,
      selection: {
        start: {
          line: event.selections[0].start.line,
          column: event.selections[0].start.character
        },
        end: {
          line: event.selections[0].end.line,
          column: event.selections[0].end.character
        }
      }
    }
  }));
});
```

3. Enregistre les activités:
```javascript
// Quand un fichier est sauvegardé
vscode.workspace.onDidSaveTextDocument(document => {
  ws.send(JSON.stringify({
    type: 'log_activity',
    sessionId: currentSessionId,
    data: {
      type: 'file_edit',
      action: `Saved ${document.fileName}`,
      details: {
        file: document.fileName,
        linesChanged: document.lineCount
      }
    }
  }));
});
```

## 🔧 Configuration

### Variables d'environnement (optionnelles)

```bash
# Clé API Anthropic (pour utiliser l'API Claude réelle)
ANTHROPIC_API_KEY=your_api_key_here

# Port du serveur
PORT=5000
```

### Authentification WebSocket

Par défaut, le système utilise une authentification simple via token dans l'URL:
```
ws://localhost:5000/ws/claude-code?token=YOUR_TOKEN
```

Pour une utilisation en production, implémentez JWT ou OAuth2.

## 📊 Exemples d'utilisation

### Exemple 1: Monitorer une session via REST

```javascript
// Démarrer une session
const session = await fetch('http://localhost:5000/api/claude-code/sessions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'user123',
    model: 'claude-sonnet-4.5'
  })
}).then(r => r.json());

console.log('Session started:', session.id);

// Récupérer les métriques
const metrics = await fetch(`http://localhost:5000/api/claude-code/sessions/${session.id}/metrics`)
  .then(r => r.json());

console.log('Metrics:', metrics);

// Terminer la session
await fetch(`http://localhost:5000/api/claude-code/sessions/${session.id}/end`, {
  method: 'POST'
});
```

### Exemple 2: Écouter les événements en temps réel

```javascript
const ws = new WebSocket('ws://localhost:5000/ws/claude-code?token=demo_user');

ws.onopen = () => {
  console.log('✅ Connected');

  // Démarrer une session
  ws.send(JSON.stringify({
    type: 'start_session',
    data: { model: 'claude-sonnet-4.5' }
  }));
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);

  switch (message.type) {
    case 'session_started':
      console.log('Session ID:', message.data.id);
      sessionId = message.data.id;
      break;

    case 'cursor_update':
      console.log('Cursor moved to:', message.data.file, message.data.line);
      break;

    case 'activity_logged':
      console.log('New activity:', message.data.action);
      break;

    case 'token_update':
      console.log('Tokens used:', message.data.tokensUsed);
      break;
  }
};
```

### Exemple 3: Simuler une activité de développement

```javascript
const ws = new WebSocket('ws://localhost:5000/ws/claude-code?token=demo_user');
let sessionId;

ws.onopen = async () => {
  // Démarrer session
  ws.send(JSON.stringify({
    type: 'start_session',
    data: { model: 'claude-sonnet-4.5' }
  }));

  // Attendre que la session soit créée
  await new Promise(resolve => setTimeout(resolve, 100));

  // Simuler mouvement du curseur
  ws.send(JSON.stringify({
    type: 'cursor_update',
    sessionId,
    data: {
      file: 'src/App.tsx',
      line: 42,
      column: 12
    }
  }));

  // Simuler édition de fichier
  ws.send(JSON.stringify({
    type: 'log_activity',
    sessionId,
    data: {
      type: 'file_edit',
      action: 'Modified src/App.tsx',
      details: {
        file: 'src/App.tsx',
        linesChanged: 15
      }
    }
  }));

  // Rapporter tokens utilisés
  ws.send(JSON.stringify({
    type: 'token_usage',
    sessionId,
    data: { tokens: 1250 }
  }));

  // Terminer session
  setTimeout(() => {
    ws.send(JSON.stringify({
      type: 'end_session',
      sessionId
    }));
  }, 5000);
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.type === 'session_started') {
    sessionId = message.data.id;
  }
};
```

## 🔒 Sécurité

### Recommandations pour la production

1. **Authentification**
   - Implémentez JWT pour l'authentification WebSocket
   - Validez les tokens côté serveur
   - Utilisez HTTPS/WSS

2. **Autorisation**
   - Vérifiez que les utilisateurs ne peuvent accéder qu'à leurs propres sessions
   - Limitez les actions selon les rôles

3. **Rate Limiting**
   - Limitez les requêtes API par utilisateur
   - Contrôlez la fréquence des mises à jour WebSocket

4. **Validation**
   - Validez toutes les entrées
   - Sanitisez les données avant stockage
   - Vérifiez les types et formats

## 📈 Monitoring et Analytics

### Métriques collectées

- **Par session:**
  - Durée totale
  - Tokens utilisés (prompt + completion)
  - Nombre d'appels d'outils
  - Fichiers modifiés
  - Commandes exécutées
  - Lignes ajoutées/supprimées

- **Globales:**
  - Sessions actives
  - Total tokens utilisés
  - Fichiers les plus modifiés
  - Temps moyen de session

### Intégration avec l'API Anthropic (optionnel)

Pour récupérer les vraies analytics depuis l'API Anthropic:

```typescript
import { ClaudeAPIIntegration } from './server/claudeCodeService';

const claudeAPI = new ClaudeAPIIntegration(process.env.ANTHROPIC_API_KEY!);

// Récupérer le rapport d'utilisation
const report = await claudeAPI.getUsageReport('your-org-id');
console.log(report);
```

## 🎯 Cas d'utilisation

1. **Équipes de développement**
   - Monitorer l'activité de tous les développeurs
   - Voir qui travaille sur quoi en temps réel
   - Analyser la productivité

2. **Formation et mentorat**
   - Observer les sessions de codage en direct
   - Identifier les patterns d'utilisation
   - Fournir de l'aide en temps réel

3. **Debugging et support**
   - Voir exactement ce qui se passe dans l'IDE
   - Reproduire les bugs
   - Fournir un support technique précis

4. **Analytics et optimisation**
   - Comprendre comment l'IA est utilisée
   - Optimiser les prompts et workflows
   - Mesurer le ROI de l'IA

## 🐛 Dépannage

### Le WebSocket ne se connecte pas

1. Vérifiez que le serveur est démarré
2. Vérifiez l'URL WebSocket (ws:// ou wss://)
3. Vérifiez les CORS si en dev
4. Consultez les logs du serveur

### Les mises à jour ne s'affichent pas

1. Vérifiez la connexion WebSocket (badge en haut à droite)
2. Ouvrez la console développeur
3. Vérifiez que le sessionId est correct
4. Rechargez la page

### Erreurs de compilation

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 📚 Ressources

- [Documentation Claude Code](https://docs.claude.com/en/docs/claude-code)
- [API Anthropic](https://docs.anthropic.com)
- [WebSocket Protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Claude Code Analytics API](https://docs.claude.com/en/api/claude-code-analytics-api)

## 🤝 Contribution

Pour améliorer ce système:

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📝 Licence

MIT License - voir LICENSE pour plus de détails

---

**Na Nach Nachma Nachman Meuman** 🎵

Fait avec ❤️ pour la communauté Breslev
