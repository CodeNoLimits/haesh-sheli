import { useState, useRef, useEffect } from 'react';
import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Send, Loader2, Book, Heart, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OPENROUTER_API_KEY = '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';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const translations = {
  he: {
    title: 'שאל את רבינו',
    subtitle: 'קבל תשובות רוחניות מתורת רבי נחמן מברסלב',
    placeholder: 'כתוב את שאלתך כאן... רבינו תמיד עונה',
    send: 'שלח שאלה',
    thinking: 'רבינו חושב...',
    examples: 'שאלות לדוגמה:',
    example1: 'איך אוכל להתחזק באמונה?',
    example2: 'מה עליי לעשות כשאני עצוב?',
    example3: 'איך מתפללים בכוונה?',
    inspiration: 'השראה רוחנית',
    inspirationText: 'כל שאלה היא תפילה, וכל תשובה היא ברכה',
    disclaimer: 'התשובות מבוססות על תורת רבי נחמן מברסלב, רבי נתן וסבא ישראל',
    clearChat: 'נקה שיחה',
    welcome: 'ברוך הבא! שאל את רבינו כל שאלה שבלבך 💙'
  },
  en: {
    title: 'Ask Rabbenu',
    subtitle: 'Receive spiritual answers from the teachings of Rabbi Nachman of Breslov',
    placeholder: 'Write your question here... Rabbenu always answers',
    send: 'Send Question',
    thinking: 'Rabbenu is thinking...',
    examples: 'Example Questions:',
    example1: 'How can I strengthen my faith?',
    example2: 'What should I do when I\'m sad?',
    example3: 'How do I pray with intention?',
    inspiration: 'Spiritual Inspiration',
    inspirationText: 'Every question is a prayer, every answer is a blessing',
    disclaimer: 'Answers based on teachings of Rabbi Nachman of Breslov, Rabbi Nathan and Saba Israel',
    clearChat: 'Clear Chat',
    welcome: 'Welcome! Ask Rabbenu any question from your heart 💙'
  },
  fr: {
    title: 'Demander à Rabbenu',
    subtitle: 'Recevez des réponses spirituelles des enseignements de Rabbi Nachman de Breslov',
    placeholder: 'Écrivez votre question ici... Rabbenu répond toujours',
    send: 'Envoyer',
    thinking: 'Rabbenu réfléchit...',
    examples: 'Exemples de Questions:',
    example1: 'Comment puis-je renforcer ma foi?',
    example2: 'Que dois-je faire quand je suis triste?',
    example3: 'Comment prier avec intention?',
    inspiration: 'Inspiration Spirituelle',
    inspirationText: 'Chaque question est une prière, chaque réponse est une bénédiction',
    disclaimer: 'Réponses basées sur les enseignements de Rabbi Nachman de Breslov, Rabbi Nathan et Saba Israel',
    clearChat: 'Effacer',
    welcome: 'Bienvenue! Demandez à Rabbenu toute question de votre cœur 💙'
  },
  es: {
    title: 'Pregunta a Rabbenu',
    subtitle: 'Recibe respuestas espirituales de las enseñanzas de Rabino Nachman de Breslov',
    placeholder: 'Escribe tu pregunta aquí... Rabbenu siempre responde',
    send: 'Enviar',
    thinking: 'Rabbenu está pensando...',
    examples: 'Ejemplos de Preguntas:',
    example1: '¿Cómo puedo fortalecer mi fe?',
    example2: '¿Qué debo hacer cuando estoy triste?',
    example3: '¿Cómo rezo con intención?',
    inspiration: 'Inspiración Espiritual',
    inspirationText: 'Cada pregunta es una oración, cada respuesta es una bendición',
    disclaimer: 'Respuestas basadas en las enseñanzas de Rabino Nachman de Breslov, Rabino Nathan y Saba Israel',
    clearChat: 'Limpiar',
    welcome: 'Bienvenido! Pregunta a Rabbenu cualquier cosa de tu corazón 💙'
  },
  ru: {
    title: 'Спроси Раббену',
    subtitle: 'Получите духовные ответы из учений Рабби Нахмана из Брeslов',
    placeholder: 'Напишите свой вопрос здесь... Раббену всегда отвечает',
    send: 'Отправить',
    thinking: 'Раббену думает...',
    examples: 'Примеры Вопросов:',
    example1: 'Как мне укрепить веру?',
    example2: 'Что делать, когда мне грустно?',
    example3: 'Как молиться с намерением?',
    inspiration: 'Духовное Вдохновение',
    inspirationText: 'Каждый вопрос - это молитва, каждый ответ - благословение',
    disclaimer: 'Ответы основаны на учениях Рабби Нахмана из Бреслов, Рабби Натана и Сабы Израиля',
    clearChat: 'Очистить',
    welcome: 'Добро пожаловать! Спроси Раббену любой вопрос от сердца 💙'
  }
};

export default function AskRabbenu() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendQuestion = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/openai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are a spiritual guide deeply knowledgeable in the teachings of Rabbi Nachman of Breslov, Rabbi Nathan (Rebbe Natan), and Saba Israel (Rabbi Israel Dov Odesser). Answer questions with wisdom, compassion, and references to their teachings. Keep answers concise but meaningful. Always respond in ${currentLanguage === 'he' ? 'Hebrew' : currentLanguage === 'en' ? 'English' : currentLanguage === 'fr' ? 'French' : currentLanguage === 'es' ? 'Spanish' : 'Russian'}.`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: input }
          ]
        })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      const assistantMessage: Message = {
        role: 'assistant',
        content: '',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content || '';
              accumulatedText += content;
              
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  ...newMessages[newMessages.length - 1],
                  content: accumulatedText
                };
                return newMessages;
              });
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'שגיאה',
        description: 'לא הצלחנו לקבל תשובה מרבינו. נסה שוב.',
        variant: 'destructive'
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setInput(example);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr', minHeight: '100vh', background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Book className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          
          {/* Inspiration Quote */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h3 className="text-lg font-bold text-blue-900">{t.inspiration}</h3>
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-gray-700 italic text-lg">{t.inspirationText}</p>
          </Card>
        </div>

        {/* Examples Section */}
        {messages.length === 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              {t.examples}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[t.example1, t.example2, t.example3].map((example, i) => (
                <Card
                  key={i}
                  className="p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200"
                  onClick={() => handleExampleClick(example)}
                >
                  <p className="text-gray-700 font-medium">{example}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <Card className="mb-6 bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-blue-200">
          <div className="p-6 min-h-[400px] max-h-[600px] overflow-y-auto space-y-6">
            {messages.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <Book className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <p className="text-xl font-medium">{t.welcome}</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl shadow-md ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                        : 'bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 border-2 border-purple-200'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    <p className="text-xs mt-2 opacity-70">
                      {msg.timestamp.toLocaleTimeString(isRTL ? 'he-IL' : 'en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl border-2 border-purple-200">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-purple-600" />
                    <span className="text-purple-700 font-medium">{t.thinking}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </Card>

        {/* Input Section */}
        <div className="space-y-4">
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendQuestion();
                }
              }}
              placeholder={t.placeholder}
              className="min-h-[120px] text-lg pr-4 pl-4 py-4 border-2 border-blue-300 focus:border-blue-500 rounded-2xl shadow-lg resize-none"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex gap-3 justify-between items-center">
            <Button
              onClick={clearChat}
              variant="outline"
              disabled={messages.length === 0}
              className="border-2 border-gray-300 hover:border-red-400 hover:bg-red-50"
            >
              {t.clearChat}
            </Button>
            
            <Button
              onClick={handleSendQuestion}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  {t.thinking}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {t.send}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

