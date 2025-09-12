import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Bot, User, BookOpen, Sparkles, Heart, ArrowDown, Copy, Share2, RotateCcw, Volume2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

interface ChatStatus {
  connected: boolean;
  model?: string;
  message: string;
  features: string[];
  error?: string;
}

export default function Chat() {
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // États du chat
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null);
  
  // Références DOM
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Vérification du statut de Gemini
  const { data: chatStatus } = useQuery<ChatStatus>({
    queryKey: ['/api/chat/status'],
    refetchInterval: 30000, // Vérification toutes les 30 secondes
  });

  // Auto-scroll vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Suggestions d'ouverture
  const quickStartSuggestions = [
    {
      icon: <BookOpen className="w-4 h-4" />,
      text: 'איזה ספר של רבי נחמן כדאי להתחיל איתו?',
      category: 'ספרים'
    },
    {
      icon: <Heart className="w-4 h-4" />,
      text: 'ספר לי על התורה "מצוה גדולה להיות בשמחה תמיד"',
      category: 'תורות'
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: 'איך אפשר לעשות התבודדות יומית?',
      category: 'עבודה רוחנית'
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: 'המלץ לי על ספרים בהתאם לעניינים שלי',
      category: 'המלצות אישיות'
    }
  ];

  // שליחת הודעה רגילה
  const sendMessageMutation = useMutation({
    mutationFn: async (messageData: { message: string; conversationHistory: ChatMessage[] }) => {
      const response = await apiRequest('/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          message: messageData.message,
          conversationHistory: messageData.conversationHistory,
          useRAG: true
        })
      });
      return await response.json();
    },
    onSuccess: (data) => {
      if (data.response) {
        const assistantMessage: ChatMessage = {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
        
        if (data.conversationId) {
          setConversationId(data.conversationId);
        }
      }
      setIsLoading(false);
    },
    onError: (error: any) => {
      console.error('Chat error:', error);
      setIsLoading(false);
      
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'מצטער, אירעה שגיאה בעיבוד השאלה. אנא נסה שוב בעוד רגע.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: 'שגיאת צ\'אט',
        description: 'לא הצלחנו לעבד את השאלה. אנא נסה שוב.',
        variant: 'destructive'
      });
    }
  });

  // שליחת הודעה עם streaming
  const sendStreamingMessage = async (message: string, conversationHistory: ChatMessage[]) => {
    try {
      setIsLoading(true);
      
      // יצירת הודעת משתמש
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: message,
        timestamp: new Date()
      };
      
      // יצירת הודעת בוט ריקה לטפולמ streaming
      const assistantMessageId = (Date.now() + 1).toString();
      const assistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
        isStreaming: true
      };
      
      setMessages(prev => [...prev, userMessage, assistantMessage]);
      setStreamingMessageId(assistantMessageId);
      
      // קריאה לשרת עם streaming
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationHistory,
          useRAG: true
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // קריאת streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      if (reader) {
        let accumulatedContent = '';
        
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          accumulatedContent += chunk;
          
          // עדכון ההודעה בזמן אמת
          setMessages(prev => prev.map(msg => 
            msg.id === assistantMessageId 
              ? { ...msg, content: accumulatedContent, isStreaming: true }
              : msg
          ));
        }
        
        // סיום streaming
        setMessages(prev => prev.map(msg => 
          msg.id === assistantMessageId 
            ? { ...msg, isStreaming: false }
            : msg
        ));
      }
      
    } catch (error) {
      console.error('Streaming error:', error);
      
      // הצגת שגיאה
      setMessages(prev => prev.map(msg => 
        msg.id === assistantMessageId 
          ? { ...msg, content: 'מצטער, אירעה שגיאה בעיבוד השאלה. אנא נסה שוב.', isStreaming: false }
          : msg
      ));
      
      toast({
        title: 'שגיאת צ\'אט',
        description: 'לא הצלחנו לעבד את השאלה. אנא נסה שוב.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
      setStreamingMessageId(null);
    }
  };

  // הגשת הודעה
  const handleSubmit = async (messageText?: string) => {
    const message = messageText || inputMessage.trim();
    
    if (!message || isLoading) return;
    
    setInputMessage('');
    
    // שימוש ב-streaming response
    await sendStreamingMessage(message, messages);
  };

  // טיפול בלחיצת Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // העתקת הודעה
  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: 'הועתק בהצלחה',
      description: 'התוכן הועתק ללוח',
    });
  };

  // איפוס שיחה
  const resetChat = () => {
    setMessages([]);
    setConversationId(null);
    setInputMessage('');
    toast({
      title: 'השיחה אופסה',
      description: 'התחלתם שיחה חדשה',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* כותרת הצ'אט */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
              <Bot className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              צ'אט עם מומחה ברסלב
            </h1>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            שאל כל שאלה על תורת רבי נחמן מברסלב, קבל המלצות על ספרים, וגלה את החכמה הברסלבית
          </p>
          
          {/* סטטוס חיבור */}
          {chatStatus && (
            <div className="mt-4">
              <Badge 
                variant={chatStatus.connected ? "default" : "destructive"}
                className="text-sm"
              >
                {chatStatus.connected ? "✅ מחובר ומוכן" : "❌ לא זמין"}
              </Badge>
              {chatStatus.connected && (
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {chatStatus.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* אזור הודעות */}
        <Card className="mb-6 min-h-[500px] flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            
            {/* הודעות */}
            <div className="flex-1 space-y-4 mb-4 max-h-[400px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Bot className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    ברוכים הבאים לצ'אט הברסלבי!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    בחרו שאלה להתחלה או כתבו שאלה משלכם
                  </p>
                  
                  {/* הצעות להתחלה */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                    {quickStartSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 text-right justify-start"
                        onClick={() => handleSubmit(suggestion.text)}
                        data-testid={`suggestion-${index}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-red-600">
                            {suggestion.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {suggestion.text}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {suggestion.category}
                            </div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : 'order-2'}`}>
                      <div 
                        className={`rounded-lg p-4 ${
                          message.role === 'user' 
                            ? 'bg-red-600 text-white ml-auto' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        {message.content && (
                          <div className="prose prose-sm max-w-none">
                            {message.content.split('\n').map((line, index) => (
                              <p key={index} className="mb-2 last:mb-0 whitespace-pre-wrap">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {message.isStreaming && (
                          <div className="inline-block w-1 h-4 bg-red-600 animate-pulse ml-1" />
                        )}
                      </div>
                      
                      {/* כפתורי פעולה */}
                      {message.role === 'assistant' && message.content && !message.isStreaming && (
                        <div className="flex gap-2 mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyMessage(message.content)}
                            data-testid={`copy-message-${message.id}`}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              // כאן ניתן להוסיף קריאה בקול
                              toast({ title: 'תכונה בפיתוח', description: 'קריאה בקול תתווסף בקרוב' });
                            }}
                            data-testid={`speak-message-${message.id}`}
                          >
                            <Volume2 className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {message.role === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    )}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* אזור כתיבה */}
            <div className="border-t pt-4">
              <div className="flex gap-2">
                <div className="flex-1">
                  <Textarea
                    ref={textareaRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="שאל שאלה על תורת רבי נחמן..."
                    className="min-h-[50px] max-h-[120px] resize-none text-right"
                    disabled={isLoading || !chatStatus?.connected}
                    data-testid="chat-input"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleSubmit()}
                    disabled={!inputMessage.trim() || isLoading || !chatStatus?.connected}
                    className="bg-red-600 hover:bg-red-700"
                    data-testid="send-button"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                  
                  {messages.length > 0 && (
                    <Button
                      onClick={resetChat}
                      variant="outline"
                      size="sm"
                      data-testid="reset-chat"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mt-2 text-center">
                לחץ Enter לשליחה, Shift+Enter לשורה חדשה
              </div>
            </div>
          </CardContent>
        </Card>

        {/* הערות שימוש */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            הצ'אט משתמש ב-Gemini 2.5 Pro עם מידע אותנטי על ספרי ברסלב ותורת רבי נחמן מברסלב זצ"ל
          </p>
          <p className="mt-1">
            המידע מסופק לצרכי לימוד ועיון בלבד • לשאלות הלכתיות יש להתייעץ עם רב מוסמך
          </p>
        </div>
      </div>
    </div>
  );
}