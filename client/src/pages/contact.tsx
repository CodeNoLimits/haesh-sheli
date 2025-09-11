import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const translations = {
  he: {
    title: 'צור קשר',
    subtitle: 'נשמח לעזור ולענות על כל שאלה',
    getInTouch: 'בוא נתחיל לדבר',
    formTitle: 'שלח לנו הודעה',
    name: 'שם מלא',
    email: 'כתובת אימייל',
    phone: 'טלפון (אופציונלי)',
    subject: 'נושא',
    message: 'הודעה',
    send: 'שלח הודעה',
    contactInfo: 'פרטי התקשרות',
    address: 'כתובת',
    addressText: 'ישראל, פתח תקווה',
    emailContact: 'אימייל',
    phoneContact: 'טלפון',
    hours: 'שעות פתיחה',
    hoursText: 'ימים א\'-ה\': 9:00-18:00\nימי ו\': 9:00-13:00\nימי שבת: סגור',
    thankYou: 'תודה! ההודעה נשלחה בהצלחה',
    errorMessage: 'אירעה שגיאה. אנא נסה שוב',
    namePlaceholder: 'שם מלא',
    emailPlaceholder: 'example@email.com',
    phonePlaceholder: '+972-50-123-4567',
    subjectPlaceholder: 'בחר נושא...',
    messagePlaceholder: 'כתוב כאן את ההודעה שלך...',
    subjects: [
      'שאלה כללית',
      'הזמנת ספר מיוחד',
      'בעיה עם ההזמנה',
      'משוב על המוצר',
      'אחר'
    ]
  },
  en: {
    title: 'Contact Us',
    subtitle: 'We\'re happy to help and answer any question',
    getInTouch: 'Let\'s Get In Touch',
    formTitle: 'Send Us a Message',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone (Optional)',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    contactInfo: 'Contact Information',
    address: 'Address',
    addressText: 'Israel, Petah Tikva',
    emailContact: 'Email',
    phoneContact: 'Phone',
    hours: 'Business Hours',
    hoursText: 'Sunday-Thursday: 9:00-18:00\nFridays: 9:00-13:00\nSaturdays: Closed',
    thankYou: 'Thank you! Message sent successfully',
    errorMessage: 'An error occurred. Please try again',
    namePlaceholder: 'Full Name',
    emailPlaceholder: 'example@email.com',
    phonePlaceholder: '+972-50-123-4567',
    subjectPlaceholder: 'Choose subject...',
    messagePlaceholder: 'Write your message here...',
    subjects: [
      'General Question',
      'Special Book Order',
      'Order Problem',
      'Product Feedback',
      'Other'
    ]
  },
  fr: {
    title: 'Contactez-Nous',
    subtitle: 'Nous sommes heureux d\'aider et de répondre à toute question',
    getInTouch: 'Prenons Contact',
    formTitle: 'Envoyez-nous un Message',
    name: 'Nom Complet',
    email: 'Adresse Email',
    phone: 'Téléphone (Optionnel)',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer le Message',
    contactInfo: 'Informations de Contact',
    address: 'Adresse',
    addressText: 'Israël, Petah Tikva',
    emailContact: 'Email',
    phoneContact: 'Téléphone',
    hours: 'Heures d\'Ouverture',
    hoursText: 'Dimanche-Jeudi: 9:00-18:00\nVendredis: 9:00-13:00\nSamedis: Fermé',
    thankYou: 'Merci! Message envoyé avec succès',
    errorMessage: 'Une erreur s\'est produite. Veuillez réessayer',
    namePlaceholder: 'Nom Complet',
    emailPlaceholder: 'exemple@email.com',
    phonePlaceholder: '+972-50-123-4567',
    subjectPlaceholder: 'Choisir un sujet...',
    messagePlaceholder: 'Écrivez votre message ici...',
    subjects: [
      'Question Générale',
      'Commande de Livre Spécial',
      'Problème de Commande',
      'Commentaire sur le Produit',
      'Autre'
    ]
  },
  es: {
    title: 'Contáctanos',
    subtitle: 'Estamos felices de ayudar y responder cualquier pregunta',
    getInTouch: 'Pongámonos en Contacto',
    formTitle: 'Envíanos un Mensaje',
    name: 'Nombre Completo',
    email: 'Dirección de Email',
    phone: 'Teléfono (Opcional)',
    subject: 'Asunto',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    contactInfo: 'Información de Contacto',
    address: 'Dirección',
    addressText: 'Israel, Petah Tikva',
    emailContact: 'Email',
    phoneContact: 'Teléfono',
    hours: 'Horarios de Atención',
    hoursText: 'Domingo-Jueves: 9:00-18:00\nViernes: 9:00-13:00\nSábados: Cerrado',
    thankYou: '¡Gracias! Mensaje enviado exitosamente',
    errorMessage: 'Ocurrió un error. Por favor intenta de nuevo',
    namePlaceholder: 'Nombre Completo',
    emailPlaceholder: 'ejemplo@email.com',
    phonePlaceholder: '+972-50-123-4567',
    subjectPlaceholder: 'Elegir asunto...',
    messagePlaceholder: 'Escribe tu mensaje aquí...',
    subjects: [
      'Pregunta General',
      'Pedido de Libro Especial',
      'Problema con el Pedido',
      'Comentario del Producto',
      'Otro'
    ]
  },
  ru: {
    title: 'Свяжитесь с Нами',
    subtitle: 'Мы рады помочь и ответить на любой вопрос',
    getInTouch: 'Давайте Свяжемся',
    formTitle: 'Отправьте Нам Сообщение',
    name: 'Полное Имя',
    email: 'Адрес Электронной Почты',
    phone: 'Телефон (Необязательно)',
    subject: 'Тема',
    message: 'Сообщение',
    send: 'Отправить Сообщение',
    contactInfo: 'Контактная Информация',
    address: 'Адрес',
    addressText: 'Израиль, Петах-Тиква',
    emailContact: 'Email',
    phoneContact: 'Телефон',
    hours: 'Часы Работы',
    hoursText: 'Воскресенье-Четверг: 9:00-18:00\nПятницы: 9:00-13:00\nСубботы: Закрыто',
    thankYou: 'Спасибо! Сообщение успешно отправлено',
    errorMessage: 'Произошла ошибка. Пожалуйста, попробуйте снова',
    namePlaceholder: 'Полное Имя',
    emailPlaceholder: 'пример@email.com',
    phonePlaceholder: '+972-50-123-4567',
    subjectPlaceholder: 'Выберите тему...',
    messagePlaceholder: 'Напишите ваше сообщение здесь...',
    subjects: [
      'Общий Вопрос',
      'Заказ Специальной Книги',
      'Проблема с Заказом',
      'Отзыв о Продукте',
      'Другое'
    ]
  }
};

export default function Contact() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-800 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t.formTitle}
            </h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">{t.thankYou}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.subject}
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">{t.subjectPlaceholder}</option>
                  {t.subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-vertical"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? '...' : t.send}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t.contactInfo}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.address}</h3>
                  <p className="text-gray-600">{t.addressText}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.emailContact}</h3>
                  <p className="text-gray-600">contact@haesh-sheli.co.il</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.phoneContact}</h3>
                  <p className="text-gray-600">+972-50-123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.hours}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{t.hoursText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}