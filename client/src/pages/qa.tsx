import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { HelpCircle, Send, CheckCircle } from 'lucide-react';

const translations = {
  he: {
    seoTitle: 'שאלות ותשובות – דרך ברסלב',
    seoDescription: 'שאלו אותנו כל שאלה על דרך ברסלב, תפילה, לימוד וספרים. נשתדל להשיב בפשטות ובשמחה.',
    title: 'שאלות ותשובות',
    subtitle: 'שאלו אותנו על הדרך, התפילה והספרים',
    intro: 'אנחנו כאן כדי לסייע. שלחו שאלה בלשונכם – על התבודדות, תיקון הכללי, לימוד ספרים או חיזוק מעשי.',
    formTitle: 'שליחת שאלה',
    name: 'שם מלא',
    email: 'אימייל',
    subject: 'נושא',
    message: 'שאלה',
    send: 'שלח',
    sending: 'שולח...',
    placeholders: {
      name: 'שם מלא',
      email: 'example@email.com',
      subject: 'כגון: התחלות חדשות, התמדה בתפילה...',
      message: 'כתבו כאן את השאלה שלכם'
    },
    successTitle: 'השאלה נשלחה!',
    successDesc: 'נחזור אליכם בהקדם, בדרך‑כלל תוך 24–48 שעות.'
  },
  en: {
    seoTitle: 'Questions & Answers – Breslov Path',
    seoDescription: 'Ask us anything about the Breslov path, prayer, study and books. We’ll answer simply and with joy.',
    title: 'Questions & Answers',
    subtitle: 'Ask about the path, prayer and books',
    intro: 'We’re here to help. Send a question in your own words — about Hitbodedut, Tikkun HaKlali, studying or practical encouragement.',
    formTitle: 'Submit a Question',
    name: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Question',
    send: 'Send',
    sending: 'Sending...',
    placeholders: {
      name: 'Full Name',
      email: 'example@email.com',
      subject: 'e.g., new beginnings, consistency in prayer...',
      message: 'Write your question here'
    },
    successTitle: 'Question Sent!',
    successDesc: 'We usually reply within 24–48 hours.'
  },
  fr: {
    seoTitle: 'Questions & Réponses – Voie Breslev',
    seoDescription: 'Posez‑nous vos questions sur la voie de Breslev, la prière, l’étude et les livres. Nous répondrons avec simplicité et joie.',
    title: 'Questions & Réponses',
    subtitle: 'Posez des questions sur la voie, la prière et les livres',
    intro: 'Nous sommes là pour aider. Envoyez votre question — sur la Hitbodedout, le Tikkoun HaKlali, l’étude ou l’encouragement pratique.',
    formTitle: 'Envoyer une Question',
    name: 'Nom Complet',
    email: 'Email',
    subject: 'Sujet',
    message: 'Question',
    send: 'Envoyer',
    sending: 'Envoi...',
    placeholders: {
      name: 'Nom Complet',
      email: 'exemple@email.com',
      subject: 'ex. nouveaux départs, régularité dans la prière...',
      message: 'Écrivez votre question ici'
    },
    successTitle: 'Question Envoyée !',
    successDesc: 'Nous répondons généralement sous 24–48 heures.'
  },
  es: {
    seoTitle: 'Preguntas y Respuestas – Camino Breslov',
    seoDescription: 'Pregúntenos sobre el camino Breslov, la oración, el estudio y los libros. Responderemos con sencillez y alegría.',
    title: 'Preguntas y Respuestas',
    subtitle: 'Pregunte sobre el camino, la oración y los libros',
    intro: 'Estamos para ayudar. Envíe su pregunta — sobre Hitbodedut, Tikún HaKlali, estudio o ánimo práctico.',
    formTitle: 'Enviar una Pregunta',
    name: 'Nombre Completo',
    email: 'Email',
    subject: 'Asunto',
    message: 'Pregunta',
    send: 'Enviar',
    sending: 'Enviando...',
    placeholders: {
      name: 'Nombre Completo',
      email: 'ejemplo@email.com',
      subject: 'p. ej., nuevos comienzos, constancia en la oración...',
      message: 'Escriba su pregunta aquí'
    },
    successTitle: '¡Pregunta Enviada!',
    successDesc: 'Normalmente respondemos dentro de 24–48 horas.'
  },
  ru: {
    seoTitle: 'Вопросы и Ответы – Путь Бреслов',
    seoDescription: 'Задайте вопрос о пути Бреслов, молитве, учебе и книгах. Мы ответим просто и с радостью.',
    title: 'Вопросы и Ответы',
    subtitle: 'Спросите о пути, молитве и книгах',
    intro: 'Мы здесь, чтобы помочь. Отправьте вопрос — о Хитбодедут, Тикун hа‑Клали, учебе или практическом укреплении.',
    formTitle: 'Отправить Вопрос',
    name: 'Полное Имя',
    email: 'Email',
    subject: 'Тема',
    message: 'Вопрос',
    send: 'Отправить',
    sending: 'Отправка...',
    placeholders: {
      name: 'Полное Имя',
      email: 'primer@email.com',
      subject: 'напр., новые начинания, постоянство в молитве...',
      message: 'Напишите ваш вопрос здесь'
    },
    successTitle: 'Вопрос Отправлен!',
    successDesc: 'Обычно отвечаем в течение 24–48 часов.'
  }
};

export default function QA() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle'|'ok'>('idle');

  useEffect(() => {
    document.title = t.seoTitle;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t.seoDescription);
  }, [t.seoTitle, t.seoDescription]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('ok');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      <section className="hero-gradient relative overflow-hidden py-16 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-books-composition.png" alt="Breslov Books" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="heading-oversized text-primary mb-3 flex items-center gap-3 justify-center"><HelpCircle className="w-8 h-8" />{t.title}</h1>
          <p className="text-large text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="card-premium p-8 lg:p-10 mb-10">
            <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line">{t.intro}</p>
          </div>

          <div className="card-premium p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">{t.formTitle}</h2>
            {status === 'ok' && (
              <div className="bg-green-100 border border-green-300 rounded-xl p-4 mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <div>
                  <div className="font-semibold text-green-800">{t.successTitle}</div>
                  <div className="text-green-800/80 text-sm">{t.successDesc}</div>
                </div>
              </div>
            )}
            <form onSubmit={submit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.name}</label>
                  <input className="w-full px-4 py-3 border border-border rounded-xl bg-background" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder={t.placeholders.name} required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.email}</label>
                  <input type="email" className="w-full px-4 py-3 border border-border rounded-xl bg-background" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder={t.placeholders.email} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t.subject}</label>
                <input className="w-full px-4 py-3 border border-border rounded-xl bg-background" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder={t.placeholders.subject} required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t.message}</label>
                <textarea rows={6} className="w-full px-4 py-3 border border-border rounded-xl bg-background" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder={t.placeholders.message} required />
              </div>
              <button className="btn-breslov-primary inline-flex items-center gap-2" disabled={isSubmitting}>
                <Send className="w-5 h-5" /> {isSubmitting ? t.sending : t.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
