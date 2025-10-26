/**
 * Claude Code Dashboard
 * Interface web pour monitorer et synchroniser Claude Code en temps réel
 */

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Activity,
  Code2,
  Monitor,
  Zap,
  FileCode,
  Terminal,
  Clock,
  Cpu,
  Database,
  Network,
  PlayCircle,
  StopCircle,
  RefreshCw,
  TrendingUp,
  FileText,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

interface ClaudeCodeSession {
  id: string;
  userId: string;
  startTime: string;
  endTime?: string;
  status: 'active' | 'paused' | 'completed';
  model: string;
  tokensUsed: number;
  linesOfCode: number;
  filesModified: string[];
  cursorPosition?: CursorPosition;
}

interface CursorPosition {
  file: string;
  line: number;
  column: number;
  selection?: {
    start: { line: number; column: number };
    end: { line: number; column: number };
  };
  timestamp: string;
}

interface AgentActivity {
  sessionId: string;
  type: 'tool_call' | 'file_edit' | 'command' | 'search' | 'chat';
  action: string;
  details: any;
  timestamp: string;
  duration?: number;
}

interface SessionMetrics {
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

interface WebSocketMessage {
  type: string;
  data?: any;
  sessionId?: string;
}

export default function ClaudeCodeDashboard() {
  const { toast } = useToast();

  // États
  const [sessions, setSessions] = useState<ClaudeCodeSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [activities, setActivities] = useState<AgentActivity[]>([]);
  const [metrics, setMetrics] = useState<SessionMetrics | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [wsStatus, setWsStatus] = useState<'connecting' | 'connected' | 'disconnected'>('disconnected');

  // WebSocket ref
  const wsRef = useRef<WebSocket | null>(null);

  // Connexion WebSocket
  useEffect(() => {
    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const connectWebSocket = () => {
    try {
      setWsStatus('connecting');

      // Construire l'URL WebSocket
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/ws/claude-code?token=demo_user`;

      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        console.log('✅ WebSocket connected');
        setWsStatus('connected');
        setIsConnected(true);
        toast({
          title: 'Connected',
          description: 'Claude Code monitoring is now active',
        });
      };

      ws.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          handleWebSocketMessage(message);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        setWsStatus('disconnected');
        setIsConnected(false);
      };

      ws.onclose = () => {
        console.log('📴 WebSocket disconnected');
        setWsStatus('disconnected');
        setIsConnected(false);

        // Reconnexion automatique après 5 secondes
        setTimeout(connectWebSocket, 5000);
      };

      wsRef.current = ws;
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      setWsStatus('disconnected');
    }
  };

  const handleWebSocketMessage = (message: WebSocketMessage) => {
    console.log('📨 WebSocket message:', message);

    switch (message.type) {
      case 'welcome':
      case 'ping':
        // Répondre au ping
        if (message.type === 'ping' && wsRef.current) {
          wsRef.current.send(JSON.stringify({ type: 'pong' }));
        }
        break;

      case 'initial_state':
        // État initial
        if (message.data?.sessions) {
          setSessions(message.data.sessions);
        }
        break;

      case 'session_started':
        // Nouvelle session
        if (message.data) {
          setSessions(prev => [...prev, message.data]);
          toast({
            title: 'New Session',
            description: `Session ${message.data.id} started`,
          });
        }
        break;

      case 'session_ended':
        // Session terminée
        if (message.sessionId) {
          setSessions(prev => prev.map(s =>
            s.id === message.sessionId ? { ...s, status: 'completed' as const } : s
          ));
        }
        break;

      case 'cursor_update':
        // Mise à jour du curseur
        if (message.sessionId && message.data) {
          setSessions(prev => prev.map(s =>
            s.id === message.sessionId ? { ...s, cursorPosition: message.data } : s
          ));
        }
        break;

      case 'activity_logged':
        // Nouvelle activité
        if (message.data && message.sessionId === selectedSession) {
          setActivities(prev => [message.data, ...prev].slice(0, 50)); // Garder les 50 dernières
        }
        break;

      case 'token_update':
        // Mise à jour des tokens
        if (message.sessionId && message.data) {
          setSessions(prev => prev.map(s =>
            s.id === message.sessionId ? { ...s, tokensUsed: message.data.tokensUsed } : s
          ));
        }
        break;
    }
  };

  // Charger les sessions au démarrage
  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const response = await apiRequest('/api/claude-code/sessions');
      setSessions(response.sessions || []);
    } catch (error) {
      console.error('Error loading sessions:', error);
    }
  };

  // Charger les activités quand une session est sélectionnée
  useEffect(() => {
    if (selectedSession) {
      loadSessionData(selectedSession);
    }
  }, [selectedSession]);

  const loadSessionData = async (sessionId: string) => {
    try {
      // Charger les activités
      const activitiesResponse = await apiRequest(`/api/claude-code/sessions/${sessionId}/activities`);
      setActivities(activitiesResponse.activities || []);

      // Charger les métriques
      const metricsResponse = await apiRequest(`/api/claude-code/sessions/${sessionId}/metrics`);
      setMetrics(metricsResponse);
    } catch (error) {
      console.error('Error loading session data:', error);
    }
  };

  // Simuler une session de développement
  const simulateSession = async () => {
    try {
      await apiRequest('/api/claude-code/simulate', {
        method: 'POST',
        body: JSON.stringify({ userId: 'demo_user' })
      });

      toast({
        title: 'Simulation Started',
        description: 'A development session is being simulated',
      });

      // Recharger les sessions après un délai
      setTimeout(loadSessions, 1000);
    } catch (error) {
      console.error('Error simulating session:', error);
      toast({
        title: 'Error',
        description: 'Failed to start simulation',
        variant: 'destructive',
      });
    }
  };

  // Formater la durée
  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    }
    if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    }
    return `${seconds}s`;
  };

  // Formater la date
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Icône selon le type d'activité
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'tool_call': return <Zap className="w-4 h-4" />;
      case 'file_edit': return <FileCode className="w-4 h-4" />;
      case 'command': return <Terminal className="w-4 h-4" />;
      case 'search': return <Database className="w-4 h-4" />;
      case 'chat': return <Activity className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const activeSessions = sessions.filter(s => s.status === 'active');
  const currentSession = selectedSession ? sessions.find(s => s.id === selectedSession) : activeSessions[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <div className="container mx-auto px-4 py-6">
        {/* En-tête du Dashboard */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                Claude Code Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Monitoring et synchronisation en temps réel
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Badge
                variant={wsStatus === 'connected' ? 'default' : 'destructive'}
                className="text-sm"
              >
                <Network className="w-3 h-3 mr-1" />
                {wsStatus === 'connected' ? 'Connected' : wsStatus === 'connecting' ? 'Connecting...' : 'Disconnected'}
              </Badge>

              <Button onClick={loadSessions} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>

              <Button onClick={simulateSession} variant="default" size="sm">
                <PlayCircle className="w-4 h-4 mr-2" />
                Simulate Session
              </Button>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activeSessions.length}
                    </p>
                  </div>
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Tokens</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {sessions.reduce((acc, s) => acc + s.tokensUsed, 0).toLocaleString()}
                    </p>
                  </div>
                  <Database className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Files Modified</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {sessions.reduce((acc, s) => acc + s.filesModified.length, 0)}
                    </p>
                  </div>
                  <FileCode className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Lines of Code</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {sessions.reduce((acc, s) => acc + s.linesOfCode, 0)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Colonne gauche: Sessions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Active Sessions
              </CardTitle>
              <CardDescription>
                {activeSessions.length} session(s) en cours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {activeSessions.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p>No active sessions</p>
                    <p className="text-sm mt-1">Click "Simulate Session" to start</p>
                  </div>
                ) : (
                  activeSessions.map((session) => (
                    <div
                      key={session.id}
                      onClick={() => setSelectedSession(session.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedSession === session.id || (!selectedSession && session === currentSession)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={session.status === 'active' ? 'default' : 'secondary'}>
                          {session.status}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {formatTime(session.startTime)}
                        </span>
                      </div>

                      <div className="space-y-1 text-sm">
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400 truncate">
                          {session.id}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          <Cpu className="w-3 h-3 inline mr-1" />
                          {session.model}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          <Database className="w-3 h-3 inline mr-1" />
                          {session.tokensUsed.toLocaleString()} tokens
                        </p>
                        {session.cursorPosition && (
                          <p className="text-blue-600 dark:text-blue-400 truncate">
                            <FileCode className="w-3 h-3 inline mr-1" />
                            {session.cursorPosition.file}:{session.cursorPosition.line}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Colonne droite: Détails de la session */}
          <div className="lg:col-span-2 space-y-6">
            {currentSession ? (
              <>
                {/* Position du curseur */}
                {currentSession.cursorPosition && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Cursor Position
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-400">{currentSession.cursorPosition.file}</span>
                          <span className="text-gray-500">
                            Line {currentSession.cursorPosition.line}, Col {currentSession.cursorPosition.column}
                          </span>
                        </div>
                        {currentSession.cursorPosition.selection && (
                          <div className="text-xs text-gray-400">
                            Selection: {currentSession.cursorPosition.selection.start.line}:{currentSession.cursorPosition.selection.start.column} → {currentSession.cursorPosition.selection.end.line}:{currentSession.cursorPosition.selection.end.column}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Métriques */}
                {metrics && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Session Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {formatDuration(metrics.duration)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Tool Calls</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {metrics.toolCalls}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Files Edited</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {metrics.filesEdited}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Commands</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {metrics.commandsExecuted}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Lines Added</p>
                          <p className="text-xl font-bold text-green-600">
                            +{metrics.productivity.linesAdded}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Lines Deleted</p>
                          <p className="text-xl font-bold text-red-600">
                            -{metrics.productivity.linesDeleted}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Activités */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Activity Log
                    </CardTitle>
                    <CardDescription>
                      {activities.length} activité(s) enregistrée(s)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto">
                      {activities.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <FileText className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                          <p>No activities yet</p>
                        </div>
                      ) : (
                        activities.map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className={`p-2 rounded-lg ${
                              activity.type === 'tool_call' ? 'bg-blue-100 text-blue-600' :
                              activity.type === 'file_edit' ? 'bg-green-100 text-green-600' :
                              activity.type === 'command' ? 'bg-purple-100 text-purple-600' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {getActivityIcon(activity.type)}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-xs">
                                  {activity.type}
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {formatTime(activity.timestamp)}
                                </span>
                              </div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                                {activity.action}
                              </p>
                              {activity.duration && (
                                <p className="text-xs text-gray-500 mt-1">
                                  Duration: {activity.duration}ms
                                </p>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Monitor className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No Active Session
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Start a development session or simulate one to see real-time monitoring
                  </p>
                  <Button onClick={simulateSession}>
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Simulate Development Session
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
