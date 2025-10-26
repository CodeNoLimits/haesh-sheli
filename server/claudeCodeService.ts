/**
 * Claude Code Integration Service
 * Provides real-time monitoring, cursor synchronization, and analytics
 * Based on Claude Code Analytics API and WebSocket monitoring (2025)
 */

import { WebSocket } from 'ws';

// Types pour le monitoring Claude Code
export interface ClaudeCodeSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'paused' | 'completed';
  model: string;
  tokensUsed: number;
  linesOfCode: number;
  filesModified: string[];
  cursorPosition?: CursorPosition;
}

export interface CursorPosition {
  file: string;
  line: number;
  column: number;
  selection?: {
    start: { line: number; column: number };
    end: { line: number; column: number };
  };
  timestamp: Date;
}

export interface AgentActivity {
  sessionId: string;
  type: 'tool_call' | 'file_edit' | 'command' | 'search' | 'chat';
  action: string;
  details: any;
  timestamp: Date;
  duration?: number;
}

export interface SessionMetrics {
  sessionId: string;
  totalTokens: number;
  promptTokens: number;
  completionTokens: number;
  toolCalls: number;
  filesEdited: number;
  commandsExecuted: number;
  duration: number;
  productivity: {
    linesAdded: number;
    linesDeleted: number;
    linesModified: number;
    commits: number;
  };
}

/**
 * Service de monitoring Claude Code
 */
class ClaudeCodeMonitoringService {
  private sessions: Map<string, ClaudeCodeSession> = new Map();
  private activities: Map<string, AgentActivity[]> = new Map();
  private wsClients: Set<WebSocket> = new Set();
  private cursorPositions: Map<string, CursorPosition> = new Map();

  constructor() {
    console.log('🤖 Claude Code Monitoring Service initialized');
  }

  /**
   * Démarre une nouvelle session de monitoring
   */
  startSession(userId: string, model: string = 'claude-sonnet-4.5'): ClaudeCodeSession {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const session: ClaudeCodeSession = {
      id: sessionId,
      userId,
      startTime: new Date(),
      status: 'active',
      model,
      tokensUsed: 0,
      linesOfCode: 0,
      filesModified: [],
    };

    this.sessions.set(sessionId, session);
    this.activities.set(sessionId, []);

    // Broadcast aux clients WebSocket
    this.broadcastEvent({
      type: 'session_started',
      data: session,
    });

    console.log(`✅ Session started: ${sessionId}`);
    return session;
  }

  /**
   * Met à jour la position du curseur
   */
  updateCursorPosition(sessionId: string, position: CursorPosition): void {
    const session = this.sessions.get(sessionId);
    if (!session) {
      console.warn(`Session not found: ${sessionId}`);
      return;
    }

    position.timestamp = new Date();
    session.cursorPosition = position;
    this.cursorPositions.set(sessionId, position);

    // Broadcast en temps réel
    this.broadcastEvent({
      type: 'cursor_update',
      sessionId,
      data: position,
    });
  }

  /**
   * Enregistre une activité d'agent
   */
  logActivity(sessionId: string, activity: Omit<AgentActivity, 'sessionId' | 'timestamp'>): void {
    const session = this.sessions.get(sessionId);
    if (!session) {
      console.warn(`Session not found: ${sessionId}`);
      return;
    }

    const fullActivity: AgentActivity = {
      ...activity,
      sessionId,
      timestamp: new Date(),
    };

    const activities = this.activities.get(sessionId) || [];
    activities.push(fullActivity);
    this.activities.set(sessionId, activities);

    // Mise à jour des métriques de session
    if (activity.type === 'file_edit') {
      if (!session.filesModified.includes(activity.details.file)) {
        session.filesModified.push(activity.details.file);
      }
      if (activity.details.linesChanged) {
        session.linesOfCode += activity.details.linesChanged;
      }
    }

    // Broadcast
    this.broadcastEvent({
      type: 'activity_logged',
      sessionId,
      data: fullActivity,
    });
  }

  /**
   * Met à jour les tokens utilisés
   */
  updateTokenUsage(sessionId: string, tokens: number): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.tokensUsed += tokens;

      this.broadcastEvent({
        type: 'token_update',
        sessionId,
        data: { tokensUsed: session.tokensUsed, delta: tokens },
      });
    }
  }

  /**
   * Termine une session
   */
  endSession(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.endTime = new Date();
      session.status = 'completed';

      this.broadcastEvent({
        type: 'session_ended',
        sessionId,
        data: session,
      });

      console.log(`✅ Session ended: ${sessionId}`);
    }
  }

  /**
   * Récupère les métriques d'une session
   */
  getSessionMetrics(sessionId: string): SessionMetrics | null {
    const session = this.sessions.get(sessionId);
    const activities = this.activities.get(sessionId);

    if (!session || !activities) {
      return null;
    }

    const duration = session.endTime
      ? session.endTime.getTime() - session.startTime.getTime()
      : Date.now() - session.startTime.getTime();

    const toolCalls = activities.filter(a => a.type === 'tool_call').length;
    const filesEdited = session.filesModified.length;
    const commandsExecuted = activities.filter(a => a.type === 'command').length;

    // Calcul de la productivité (simulé - à adapter selon vos besoins)
    const linesAdded = Math.floor(session.linesOfCode * 0.6);
    const linesDeleted = Math.floor(session.linesOfCode * 0.2);
    const linesModified = Math.floor(session.linesOfCode * 0.2);

    return {
      sessionId,
      totalTokens: session.tokensUsed,
      promptTokens: Math.floor(session.tokensUsed * 0.4),
      completionTokens: Math.floor(session.tokensUsed * 0.6),
      toolCalls,
      filesEdited,
      commandsExecuted,
      duration,
      productivity: {
        linesAdded,
        linesDeleted,
        linesModified,
        commits: 0, // À implémenter avec git
      },
    };
  }

  /**
   * Récupère toutes les sessions actives
   */
  getActiveSessions(): ClaudeCodeSession[] {
    return Array.from(this.sessions.values()).filter(s => s.status === 'active');
  }

  /**
   * Récupère l'historique des activités d'une session
   */
  getSessionActivities(sessionId: string): AgentActivity[] {
    return this.activities.get(sessionId) || [];
  }

  /**
   * Enregistre un client WebSocket
   */
  registerWebSocketClient(ws: WebSocket): void {
    this.wsClients.add(ws);

    // Envoie l'état actuel au nouveau client
    ws.send(JSON.stringify({
      type: 'initial_state',
      data: {
        sessions: Array.from(this.sessions.values()),
        cursorPositions: Array.from(this.cursorPositions.entries()),
      },
    }));

    ws.on('close', () => {
      this.wsClients.delete(ws);
    });

    console.log(`✅ WebSocket client registered (total: ${this.wsClients.size})`);
  }

  /**
   * Diffuse un événement à tous les clients WebSocket
   */
  private broadcastEvent(event: any): void {
    const message = JSON.stringify(event);

    this.wsClients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  /**
   * Simule une session de développement (pour tests)
   */
  simulateDevelopmentSession(userId: string): void {
    const session = this.startSession(userId);
    const sessionId = session.id;

    // Simule des activités
    setTimeout(() => {
      this.updateCursorPosition(sessionId, {
        file: 'src/App.tsx',
        line: 42,
        column: 12,
        timestamp: new Date(),
      });
    }, 1000);

    setTimeout(() => {
      this.logActivity(sessionId, {
        type: 'file_edit',
        action: 'Modified src/App.tsx',
        details: {
          file: 'src/App.tsx',
          linesChanged: 15,
          operation: 'update',
        },
      });
      this.updateTokenUsage(sessionId, 1250);
    }, 2000);

    setTimeout(() => {
      this.updateCursorPosition(sessionId, {
        file: 'src/components/Header.tsx',
        line: 28,
        column: 8,
        timestamp: new Date(),
      });
    }, 3000);

    setTimeout(() => {
      this.logActivity(sessionId, {
        type: 'command',
        action: 'npm install axios',
        details: {
          command: 'npm install axios',
          exitCode: 0,
        },
      });
      this.updateTokenUsage(sessionId, 450);
    }, 4000);

    setTimeout(() => {
      this.logActivity(sessionId, {
        type: 'tool_call',
        action: 'Read file',
        details: {
          tool: 'Read',
          file: 'package.json',
        },
      });
      this.updateTokenUsage(sessionId, 350);
    }, 5000);

    setTimeout(() => {
      this.endSession(sessionId);
    }, 10000);

    console.log(`🎭 Simulated development session: ${sessionId}`);
  }
}

// Instance singleton
export const claudeCodeMonitoring = new ClaudeCodeMonitoringService();

/**
 * Intégration avec l'API Anthropic Claude
 */
export class ClaudeAPIIntegration {
  private apiKey: string;
  private baseURL: string = 'https://api.anthropic.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Récupère les analytics Claude Code via l'API Anthropic
   * Basé sur: https://docs.claude.com/en/api/claude-code-analytics-api
   */
  async getUsageReport(organizationId: string, cursor?: string) {
    try {
      const url = new URL(`${this.baseURL}/organizations/${organizationId}/usage_report/claude_code`);
      if (cursor) {
        url.searchParams.append('cursor', cursor);
      }

      const response = await fetch(url.toString(), {
        headers: {
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching usage report:', error);
      throw error;
    }
  }

  /**
   * Crée une conversation avec Claude via l'API Messages
   */
  async sendMessage(message: string, systemPrompt?: string) {
    try {
      const response = await fetch(`${this.baseURL}/messages`, {
        method: 'POST',
        headers: {
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4.5-20250929',
          max_tokens: 8192,
          system: systemPrompt || 'You are a helpful AI coding assistant.',
          messages: [
            {
              role: 'user',
              content: message,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}

export default claudeCodeMonitoring;
