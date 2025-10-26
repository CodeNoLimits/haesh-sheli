/**
 * Claude Code CLI Integration (Local - Sans API payante)
 * S'intègre directement avec Claude Code CLI installé localement
 * Compatible avec Claude Code Max subscription
 */

import { spawn, ChildProcess } from 'child_process';
import { EventEmitter } from 'events';
import claudeCodeMonitoring from './claudeCodeService';

interface ClaudeCodeCLIOptions {
  workingDirectory?: string;
  model?: string;
  autoStart?: boolean;
}

/**
 * Gestionnaire pour Claude Code CLI local
 * Permet de monitorer les sessions sans utiliser l'API payante
 */
export class ClaudeCodeCLIManager extends EventEmitter {
  private process: ChildProcess | null = null;
  private sessionId: string | null = null;
  private currentFile: string = '';
  private currentLine: number = 0;
  private isRunning: boolean = false;

  constructor(private options: ClaudeCodeCLIOptions = {}) {
    super();
  }

  /**
   * Démarre une session de monitoring de Claude Code
   * Utilise le Claude Code installé localement (pas d'API payante)
   */
  async startMonitoring(userId: string = 'local_user'): Promise<void> {
    if (this.isRunning) {
      console.log('⚠️  Monitoring already running');
      return;
    }

    console.log('🚀 Starting Claude Code monitoring (local CLI)...');

    // Créer une session dans notre système de monitoring
    const session = claudeCodeMonitoring.startSession(userId, 'claude-sonnet-4.5 (local)');
    this.sessionId = session.id;
    this.isRunning = true;

    // Émettre l'événement
    this.emit('session_started', session);

    console.log(`✅ Monitoring session started: ${this.sessionId}`);
    console.log('📊 Dashboard available at: http://localhost:5000/claude-code');
  }

  /**
   * Enregistre une activité de fichier
   */
  logFileActivity(filePath: string, action: 'read' | 'write' | 'edit', details?: any): void {
    if (!this.sessionId) {
      console.warn('No active session');
      return;
    }

    claudeCodeMonitoring.logActivity(this.sessionId, {
      type: 'file_edit',
      action: `${action} ${filePath}`,
      details: {
        file: filePath,
        operation: action,
        ...details
      }
    });

    this.emit('file_activity', { filePath, action, details });
  }

  /**
   * Met à jour la position du curseur
   */
  updateCursorPosition(file: string, line: number, column: number = 0): void {
    if (!this.sessionId) {
      console.warn('No active session');
      return;
    }

    this.currentFile = file;
    this.currentLine = line;

    claudeCodeMonitoring.updateCursorPosition(this.sessionId, {
      file,
      line,
      column,
      timestamp: new Date()
    });

    this.emit('cursor_moved', { file, line, column });
  }

  /**
   * Enregistre une commande exécutée
   */
  logCommand(command: string, exitCode: number = 0, output?: string): void {
    if (!this.sessionId) {
      console.warn('No active session');
      return;
    }

    claudeCodeMonitoring.logActivity(this.sessionId, {
      type: 'command',
      action: command,
      details: {
        command,
        exitCode,
        output: output?.substring(0, 1000) // Limiter la taille
      }
    });

    this.emit('command_executed', { command, exitCode });
  }

  /**
   * Enregistre un appel d'outil
   */
  logToolCall(toolName: string, details: any): void {
    if (!this.sessionId) {
      console.warn('No active session');
      return;
    }

    claudeCodeMonitoring.logActivity(this.sessionId, {
      type: 'tool_call',
      action: `${toolName}`,
      details: {
        tool: toolName,
        ...details
      }
    });

    this.emit('tool_called', { toolName, details });
  }

  /**
   * Met à jour les tokens utilisés
   * (Estimation locale - pas d'appel API)
   */
  updateTokens(promptTokens: number, completionTokens: number): void {
    if (!this.sessionId) {
      console.warn('No active session');
      return;
    }

    const totalTokens = promptTokens + completionTokens;
    claudeCodeMonitoring.updateTokenUsage(this.sessionId, totalTokens);

    this.emit('tokens_updated', { promptTokens, completionTokens, totalTokens });
  }

  /**
   * Arrête le monitoring
   */
  stopMonitoring(): void {
    if (!this.isRunning || !this.sessionId) {
      console.log('⚠️  No active monitoring session');
      return;
    }

    console.log('🛑 Stopping Claude Code monitoring...');

    claudeCodeMonitoring.endSession(this.sessionId);

    this.emit('session_ended', { sessionId: this.sessionId });

    this.sessionId = null;
    this.isRunning = false;

    console.log('✅ Monitoring stopped');
  }

  /**
   * Parse les logs de Claude Code pour extraire les événements
   * Compatible avec les hooks Claude Code
   */
  parseClaudeCodeLog(logLine: string): void {
    if (!this.sessionId) return;

    try {
      // Format attendu des hooks Claude Code
      // Exemple: [Tool] Read: /path/to/file.ts
      // Exemple: [Edit] Modified: /path/to/file.ts (+15 -3)
      // Exemple: [Bash] Executed: npm install

      const toolMatch = logLine.match(/\[Tool\]\s+(\w+):\s+(.+)/);
      if (toolMatch) {
        const [, toolName, details] = toolMatch;
        this.logToolCall(toolName, { raw: details });
        return;
      }

      const editMatch = logLine.match(/\[Edit\]\s+(\w+):\s+(.+?)\s+\(\+(\d+)\s+-(\d+)\)/);
      if (editMatch) {
        const [, action, filePath, added, deleted] = editMatch;
        this.logFileActivity(filePath, 'edit', {
          linesAdded: parseInt(added),
          linesDeleted: parseInt(deleted),
          linesChanged: parseInt(added) + parseInt(deleted)
        });
        return;
      }

      const bashMatch = logLine.match(/\[Bash\]\s+Executed:\s+(.+)/);
      if (bashMatch) {
        const [, command] = bashMatch;
        this.logCommand(command);
        return;
      }

      // Token usage (estimation basée sur la longueur)
      const tokenMatch = logLine.match(/tokens:\s+(\d+)/i);
      if (tokenMatch) {
        const [, tokens] = tokenMatch;
        this.updateTokens(0, parseInt(tokens));
        return;
      }

    } catch (error) {
      console.error('Error parsing Claude Code log:', error);
    }
  }

  /**
   * Obtient les métriques de la session actuelle
   */
  getCurrentMetrics() {
    if (!this.sessionId) {
      return null;
    }

    return claudeCodeMonitoring.getSessionMetrics(this.sessionId);
  }

  /**
   * Obtient l'historique des activités
   */
  getActivities() {
    if (!this.sessionId) {
      return [];
    }

    return claudeCodeMonitoring.getSessionActivities(this.sessionId);
  }

  /**
   * Vérifie si le monitoring est actif
   */
  isActive(): boolean {
    return this.isRunning && this.sessionId !== null;
  }

  /**
   * Obtient l'ID de session actuel
   */
  getSessionId(): string | null {
    return this.sessionId;
  }
}

/**
 * Instance globale du manager
 */
export const claudeCodeCLI = new ClaudeCodeCLIManager();

/**
 * Fonction helper pour créer un hook Claude Code
 * À ajouter dans vos settings Claude Code
 */
export function generateClaudeCodeHook(): string {
  return `
# Claude Code Hook - À ajouter dans ~/.config/claude-code/hooks/
# Envoie les événements au dashboard de monitoring local

# Hook après chaque outil
tool_post_hook() {
  local tool_name="$1"
  local tool_args="$2"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/tool \\
    -H "Content-Type: application/json" \\
    -d "{\\"tool\\": \\"$tool_name\\", \\"args\\": \\"$tool_args\\"}" \\
    > /dev/null 2>&1 &
}

# Hook après édition de fichier
edit_post_hook() {
  local file_path="$1"
  local lines_changed="$2"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/edit \\
    -H "Content-Type: application/json" \\
    -d "{\\"file\\": \\"$file_path\\", \\"lines\\": \\"$lines_changed\\"}" \\
    > /dev/null 2>&1 &
}

# Hook après commande bash
bash_post_hook() {
  local command="$1"
  local exit_code="$2"

  curl -s -X POST http://localhost:5000/api/claude-code/hook/bash \\
    -H "Content-Type: application/json" \\
    -d "{\\"command\\": \\"$command\\", \\"exitCode\\": $exit_code}" \\
    > /dev/null 2>&1 &
}
`.trim();
}

/**
 * Exemple d'utilisation
 */
export function exampleUsage() {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║  Claude Code Local Monitoring - Mode d'emploi               ║
╚══════════════════════════════════════════════════════════════╝

1. Démarrer le monitoring:

   const { claudeCodeCLI } = require('./claudeCodeCLI');
   claudeCodeCLI.startMonitoring('votre_user_id');

2. Enregistrer les activités manuellement:

   // Quand vous éditez un fichier
   claudeCodeCLI.logFileActivity('src/App.tsx', 'edit', {
     linesAdded: 15,
     linesDeleted: 3
   });

   // Quand vous exécutez une commande
   claudeCodeCLI.logCommand('npm install axios', 0);

   // Quand Claude utilise un outil
   claudeCodeCLI.logToolCall('Read', { file: 'package.json' });

   // Mettre à jour la position du curseur
   claudeCodeCLI.updateCursorPosition('src/App.tsx', 42, 12);

3. Parser les logs de Claude Code:

   // Si vous avez accès aux logs
   const logLine = '[Tool] Read: /path/to/file.ts';
   claudeCodeCLI.parseClaudeCodeLog(logLine);

4. Accéder au dashboard:

   http://localhost:5000/claude-code

5. Obtenir les métriques:

   const metrics = claudeCodeCLI.getCurrentMetrics();
   console.log(metrics);

6. Arrêter le monitoring:

   claudeCodeCLI.stopMonitoring();

═══════════════════════════════════════════════════════════════

💡 Astuce: Le système fonctionne entièrement en local,
   aucun appel à l'API Anthropic payante!

💰 Vous utilisez votre Claude Code Max subscription existante
   sans coûts supplémentaires.

📊 Dashboard en temps réel: http://localhost:5000/claude-code
  `.trim());
}

export default claudeCodeCLI;
