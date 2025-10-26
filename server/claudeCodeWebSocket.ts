/**
 * Claude Code WebSocket Server
 * Gère les connexions WebSocket pour la synchronisation en temps réel
 * du curseur et le monitoring des sessions de développement
 */

import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'http';
import claudeCodeMonitoring, { CursorPosition } from './claudeCodeService';

interface WebSocketMessage {
  type: string;
  data?: any;
  sessionId?: string;
}

interface AuthenticatedWebSocket extends WebSocket {
  isAuthenticated?: boolean;
  userId?: string;
  sessionId?: string;
}

/**
 * Initialise le serveur WebSocket pour Claude Code
 */
export function initializeClaudeCodeWebSocket(server: Server): WebSocketServer {
  // Créer le serveur WebSocket sur le path /ws/claude-code
  const wss = new WebSocketServer({
    server,
    path: '/ws/claude-code',
  });

  console.log('🚀 Claude Code WebSocket Server initialized on /ws/claude-code');

  wss.on('connection', (ws: AuthenticatedWebSocket, req) => {
    console.log('📡 New WebSocket connection from:', req.socket.remoteAddress);

    // Extraction du token d'authentification (si présent dans l'URL)
    const url = new URL(req.url || '', `http://${req.headers.host}`);
    const token = url.searchParams.get('token');
    const sessionId = url.searchParams.get('sessionId');

    // Authentification simple (à améliorer avec JWT ou session réelle)
    if (token) {
      ws.isAuthenticated = true;
      ws.userId = token; // En production, valider le token et extraire l'userId
      console.log('✅ Client authenticated:', ws.userId);
    }

    if (sessionId) {
      ws.sessionId = sessionId;
    }

    // Enregistrer le client dans le service de monitoring
    claudeCodeMonitoring.registerWebSocketClient(ws);

    // Envoyer un message de bienvenue
    ws.send(JSON.stringify({
      type: 'welcome',
      message: 'Connected to Claude Code WebSocket',
      timestamp: new Date().toISOString(),
    }));

    // Gestion des messages entrants
    ws.on('message', (data: Buffer) => {
      try {
        const message: WebSocketMessage = JSON.parse(data.toString());
        handleWebSocketMessage(ws, message);
      } catch (error) {
        console.error('❌ Error parsing WebSocket message:', error);
        ws.send(JSON.stringify({
          type: 'error',
          message: 'Invalid message format',
        }));
      }
    });

    // Gestion des erreurs
    ws.on('error', (error) => {
      console.error('❌ WebSocket error:', error);
    });

    // Gestion de la déconnexion
    ws.on('close', () => {
      console.log('📴 WebSocket connection closed');
      if (ws.sessionId) {
        // Optionnel: marquer la session comme inactive
        console.log(`Session ${ws.sessionId} disconnected`);
      }
    });

    // Heartbeat pour maintenir la connexion
    const heartbeat = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'ping', timestamp: Date.now() }));
      } else {
        clearInterval(heartbeat);
      }
    }, 30000); // Ping toutes les 30 secondes
  });

  return wss;
}

/**
 * Traite les messages WebSocket entrants
 */
function handleWebSocketMessage(ws: AuthenticatedWebSocket, message: WebSocketMessage): void {
  const { type, data, sessionId } = message;

  switch (type) {
    case 'pong':
      // Réponse au ping (heartbeat)
      break;

    case 'cursor_update':
      // Mise à jour de la position du curseur
      if (sessionId && data) {
        const cursorPosition: CursorPosition = {
          file: data.file,
          line: data.line,
          column: data.column,
          selection: data.selection,
          timestamp: new Date(),
        };
        claudeCodeMonitoring.updateCursorPosition(sessionId, cursorPosition);
      }
      break;

    case 'start_session':
      // Démarrer une nouvelle session
      if (ws.userId) {
        const session = claudeCodeMonitoring.startSession(
          ws.userId,
          data?.model || 'claude-sonnet-4.5'
        );
        ws.sessionId = session.id;
        ws.send(JSON.stringify({
          type: 'session_started',
          data: session,
        }));
      }
      break;

    case 'end_session':
      // Terminer la session
      if (sessionId) {
        claudeCodeMonitoring.endSession(sessionId);
      }
      break;

    case 'log_activity':
      // Enregistrer une activité
      if (sessionId && data) {
        claudeCodeMonitoring.logActivity(sessionId, {
          type: data.type,
          action: data.action,
          details: data.details,
          duration: data.duration,
        });
      }
      break;

    case 'token_usage':
      // Mettre à jour l'utilisation des tokens
      if (sessionId && data?.tokens) {
        claudeCodeMonitoring.updateTokenUsage(sessionId, data.tokens);
      }
      break;

    case 'get_sessions':
      // Récupérer toutes les sessions actives
      const sessions = claudeCodeMonitoring.getActiveSessions();
      ws.send(JSON.stringify({
        type: 'sessions_list',
        data: sessions,
      }));
      break;

    case 'get_session_metrics':
      // Récupérer les métriques d'une session
      if (sessionId) {
        const metrics = claudeCodeMonitoring.getSessionMetrics(sessionId);
        ws.send(JSON.stringify({
          type: 'session_metrics',
          data: metrics,
        }));
      }
      break;

    case 'get_session_activities':
      // Récupérer l'historique des activités
      if (sessionId) {
        const activities = claudeCodeMonitoring.getSessionActivities(sessionId);
        ws.send(JSON.stringify({
          type: 'session_activities',
          data: activities,
        }));
      }
      break;

    case 'simulate_session':
      // Simuler une session de développement (pour tests)
      if (ws.userId) {
        claudeCodeMonitoring.simulateDevelopmentSession(ws.userId);
        ws.send(JSON.stringify({
          type: 'simulation_started',
          message: 'Development session simulation started',
        }));
      }
      break;

    default:
      console.warn('Unknown message type:', type);
      ws.send(JSON.stringify({
        type: 'error',
        message: `Unknown message type: ${type}`,
      }));
  }
}

/**
 * Utilitaire pour broadcaster un message à tous les clients d'une session
 */
export function broadcastToSession(
  wss: WebSocketServer,
  sessionId: string,
  message: any
): void {
  wss.clients.forEach((client) => {
    const wsClient = client as AuthenticatedWebSocket;
    if (wsClient.sessionId === sessionId && wsClient.readyState === WebSocket.OPEN) {
      wsClient.send(JSON.stringify(message));
    }
  });
}

/**
 * Utilitaire pour broadcaster un message à tous les clients
 */
export function broadcastToAll(wss: WebSocketServer, message: any): void {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

export default initializeClaudeCodeWebSocket;
