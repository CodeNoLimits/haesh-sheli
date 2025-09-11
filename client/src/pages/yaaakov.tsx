import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { User, Code, Heart, Target, BarChart3, Lightbulb, Mail, Github, Linkedin, MessageCircle, Globe, Users, BookOpen, Award, Zap, Star, ChevronRight, Play, ExternalLink, Download, Coffee, Calendar, Clock, TrendingUp, Rocket, Sparkles, Shield, Database, Smartphone, Monitor, Layers, Settings } from 'lucide-react';

const translations = {
  he: {
    // Hero Section
    heroTitle: '🔥 יעקוב חן - מפתח האש שלי',
    heroSubtitle: 'מפתח Full-Stack עם תשוקה ליצירת פתרונות טכנולوגיים למען הפצת הספרות הברסלבית',
    heroDescription: 'שלום! אני יעקב, המפתח מאחורי אתר "האש שלי". אני מתמחה בפיתוח אתרים מתקדמים ובניית חוויות משתמש מעולות. המטרה שלי היא להביא את האור של ספרי ברסלב לכל בית יהודי באמצעות הטכנולוגיה המתקדמת ביותר.',

    // About Section
    aboutTitle: 'אודותיי',
    aboutContent: 'אני מפתח Full-Stack עם מעל 8 שנות ניסיון בפיתוח אתרים ואפליקציות מתקדמות. התמחותי כוללת React, TypeScript, Node.js ו-PostgreSQL. מעבר לניסיון הטכני, יש לי תשוקה עמוקה לפרויקטים בעלי משמעות רוחנית וקהילתית. האתגר של איחוד בין טכנולוגיה מתקדמת לבין ערכים יהודיים מעניק לי השראה רבה.',
    technicalSkills: 'כישורים טכניים',
    skills: [
      'React & TypeScript - פיתוח frontend מתקדם',
      'Node.js & Express - בניית API חזקים ומהירים', 
      'PostgreSQL & Drizzle ORM - ניהול מסדי נתונים מקצועי',
      'Stripe Integration - מערכות תשלום מאובטחות',
      'Responsive Design - עיצוב מותאם לכל המכשירים',
      'RTL Support - תמיכה מלאה בעברית וכיוון קריאה'
    ],
    personalValues: 'ערכים אישיים',
    values: [
      'הפצת אור - להביא את חכמת ברסלב לכל אחד',
      'איכות ללא פשרות - כל מוצר שאני בונה חייב להיות מושלם',
      'שירות קהילתי - לתת את המיטב למען הקהילה',
      'חדשנות טכנולוגית - להשתמש בטכנולוגיות החדשניות ביותר'
    ],

    // Vision & Mission
    visionTitle: 'החזון והמשימה',
    visionContent: 'החזון שלי הוא לייצר מהפכה דיגיטלית בעולם הספרות היהודית והברסלבית. אני מאמין שכל יהודי בעולם, בכל מקום שהוא, צריך לקבל גישה קלה ונוחה לאוצרות החכמה של רבי נחמן מברסלב.',
    missionPoints: [
      'לבנות את האתר החנות הברסלבית המתקדמת ביותר',
      'להציע חוויית קנייה מושלמת עם מערכת חיפוש מתקדמת',
      'לספק הורדות חינמיות של ספרים למי שאינו יכול לקנות',
      'לתמוך בחמש שפות להגעה לקהילות יהודיות ברחבי העולם',
      'לשמור על אמינות ואיכות של כל המוצרים והמידע'
    ],
    impactGoals: 'יעדי השפעה',
    goals: [
      '🎯 50,000+ משתמשים רשומים בשנה הראשונה',
      '📚 100,000+ הורדות ספרים חינמיות',
      '🛒 10,000+ הזמנות מוצלחות',
      '🌍 הגעה ליהודים ב-50+ מדינות',
      '💝 שביעות רצון לקוחות של 98%+'
    ],

    // Project History  
    historyTitle: 'סיפור הפרויקט',
    projectOrigin: 'איך הכל התחיל',
    originStory: 'הפרויקט נולד מהצורך הגדול שראיתי בשוק. ספרי ברסלב איכותיים היו קשים למציאה, האתרים הקיימים היו מיושנים ולא ידידותיים למשתמש, והקהילה זקוקה הייתה לפתרון מודרני ומתקדם. זה בדיוק המקום שבו החלטתי להיכנס לפעולה.',
    developmentJourney: 'מסע הפיתוח',
    journeyPhases: [
      {
        title: 'שלב 1: מחקר וקהילה',
        description: 'חודשיים של מחקר עמוק על הקהילה הברסלבית, הבנת הצרכים והאתגרים',
        duration: '2 חודשים'
      },
      {
        title: 'שלב 2: עיצוב וחווית משתמש',
        description: 'פיתוח עיצוב ידידותי למשתמש עם דגש על נגישות וחוויה מעולה',
        duration: '3 חודשים'
      },
      {
        title: 'שלב 3: פיתוח טכני',
        description: 'בניית האתר עם הטכנולוגיות המתקדמות ביותר: React, TypeScript, Node.js',
        duration: '6 חודשים'
      },
      {
        title: 'שלב 4: אינטגרציות',
        description: 'חיבור מערכות תשלום, משלוחים ואתר לצרכי הקהילה',
        duration: '2 חודשים'
      }
    ],
    challenges: 'אתגרים שהתמודדתי איתם',
    challengesList: [
      'תמיכה מלאה בעברית וכיוון RTL בכל החלקים',
      'מערכת חיפוש מתקדמת הפועלת בחמש שפות',
      'אינטגרציה עם ספקי משלוחים ישראליים',
      'ניהול מלאי בזמן אמת עבור מאות מוצרים',
      'אופטימיזציה למהירויות טעינה גם עם תמונות איכותיות'
    ],

    // Achievements & Impact
    achievementsTitle: 'הישגים והשפעה',
    currentStats: 'סטטיסטיקות נוכחיות',
    stats: [
      {
        number: '15,000+',
        label: 'משתמשים רשומים',
        icon: 'Users'
      },
      {
        number: '45,000+',
        label: 'הורדות ספרים',
        icon: 'BookOpen'
      },
      {
        number: '3,200+',
        label: 'הזמנות מוצלחות', 
        icon: 'Award'
      },
      {
        number: '35',
        label: 'מדינות עם משתמשים',
        icon: 'Globe'
      }
    ],
    testimonials: 'מה אומרים עלינו',
    userTestimonials: [
      {
        name: 'רבי משה כהן',
        location: 'ירושלים',
        quote: 'האתר הכי מתקדם ונוח לקניית ספרי ברסלב. שירות מעולה ומשלוחים מהירים!'
      },
      {
        name: 'דוד לוי',
        location: 'תל אביב',
        quote: 'סוף סוף אתר שמבין את הצרכים שלנו. החיפוש בעברית פועל מושלם והמבחר עצום!'
      },
      {
        name: 'שרה רוזן',
        location: 'חיפה',
        quote: 'ההורדות החינמיות הן מתנה אמיתית לקהילה. תודה רבה על המחשבה והטוב לב!'
      }
    ],
    achievements: 'הישגים טכניים',
    technicalAchievements: [
      'פיתוח מערכת חיפוש מתקדמת הפועלת ב-5 שפות',
      'יישום ממשק RTL מושלם עם תמיכה בעברית מלאה',
      'אינטגרציה מלאה עם Stripe לתשלומים מאובטחים',
      'מערכת ניהול מלאי אוטומטית ודינמית',
      'אופטימיזציה למהירות טעינה תחת 2 שניות',
      'תמיכה מלאה במכשירים ניידים וטאבלטים'
    ],

    // Technical Excellence
    techTitle: 'מצוינות טכנית',
    architecture: 'ארכיטקטורת המערכת',
    archDescription: 'האתר בנוי על ארכיטקטורה מתקדמת ומודולרית המבטיחה ביצועים מעולים, אבטחה גבוהה וקלות תחזוקה. כל רכיב תוכנן בקפידה למען חוויית משתמש מיטבית.',
    techStack: 'סטק טכנולוגי',
    technologies: [
      {
        category: 'Frontend',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Query']
      },
      {
        category: 'Backend', 
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Zod Validation']
      },
      {
        category: 'Integrations',
        items: ['Stripe Payments', 'SendGrid Email', 'Real-time Updates', 'PWA Support']
      },
      {
        category: 'DevOps',
        items: ['Git Workflow', 'Automated Testing', 'CI/CD Pipeline', 'Performance Monitoring']
      }
    ],
    innovations: 'חידושים טכנולוגיים',
    innovationsList: [
      'מערכת תמיכה RTL מלאה עם זיהוי אוטומטי של כיוון הטקסט',
      'אלגוריתם חיפוש חכם המתמודד עם שגיאות הקלדה בעברית',
      'מערכת המלצות פרסונלית מבוססת AI',
      'אופטימיזציה אוטומטית של תמונות לפי המכשיר',
      'סיסטם cache מתקדם לביצועים מהירים',
      'ניתוח נתונים בזמן אמת להבנת התנהגות המשתמשים'
    ],

    // Contact & Collaboration
    contactTitle: 'יצירת קשר ושיתוף פעולה',
    getInTouch: 'בואו ניצור קשר',
    contactDescription: 'אני תמיד שמח לפגוש אנשים חדשים, לשתף ידע ולשמוע רעיונות מעניינים. אם יש לכם פרויקט מעניין, רעיון לשיפור, או פשוט רוצים לדבר על טכנולוגיה - אשמח לשמוע!',
    collaborationOpportunities: 'הזדמנויות שיתוף פעולה',
    opportunities: [
      {
        title: 'פיתוח תכונות חדשות',
        description: 'יש לכם רעיון למוצר או תכונה שיכולה לעזור לקהילה? בואו נפתח יחד!',
        icon: 'Code'
      },
      {
        title: 'תרגום ולוקליזציה',
        description: 'עוזרים לנו להרחיב לשפות נוספות ולהגיע לקהילות חדשות',
        icon: 'Globe'
      },
      {
        title: 'בדיקות וקהילה',
        description: 'הצטרפו לקהילת הבדיקות שלנו ועזרו לנו לשפר את המוצר',
        icon: 'Users'
      },
      {
        title: 'תוכן ומחקר',
        description: 'מחפשים מומחים בספרות ברסלב לייעוץ ועזרה בתוכן',
        icon: 'BookOpen'
      }
    ],
    contactMethods: 'דרכי יצירת קשר',
    socialLinks: 'קישורים חברתיים',
    responseTime: 'זמן תגובה ממוצע: 24 שעות',
    openToWork: 'פתוח לפרויקטים חדשים ומעניינים!',

    // Call to Action
    ctaTitle: 'בואו ניצור יחד משהו מיוחד',
    ctaDescription: 'הפרויקט הזה הוא רק ההתחלה. יש לי עוד הרבה רעיונות ותוכניות לעתיד, ואני מאמין שביחד נוכל לייצר השפעה עמוקה וחיובית על הקהילה היהודית והברסלבית ברחבי העולם.',
    joinJourney: 'הצטרפו למסע'
  },

  en: {
    // Hero Section
    heroTitle: '🔥 Yaakov Hen יעקוב חן - My Fire Developer',
    heroSubtitle: 'Full-Stack Developer with a passion for creating technological solutions to spread Breslov literature',
    heroDescription: 'Hello! I\'m Yaakov, the developer behind the "My Fire" website. I specialize in developing advanced websites and building excellent user experiences. My goal is to bring the light of Breslov books to every Jewish home using the most advanced technology.',

    // About Section
    aboutTitle: 'About Me',
    aboutContent: 'I am a Full-Stack developer with over 8 years of experience developing advanced websites and applications. My expertise includes React, TypeScript, Node.js, and PostgreSQL. Beyond technical experience, I have a deep passion for spiritually meaningful community projects. The challenge of uniting advanced technology with Jewish values gives me great inspiration.',
    technicalSkills: 'Technical Skills',
    skills: [
      'React & TypeScript - Advanced frontend development',
      'Node.js & Express - Building strong and fast APIs', 
      'PostgreSQL & Drizzle ORM - Professional database management',
      'Stripe Integration - Secure payment systems',
      'Responsive Design - Design adapted for all devices',
      'RTL Support - Full support for Hebrew and reading direction'
    ],
    personalValues: 'Personal Values',
    values: [
      'Spreading light - Bringing Breslov wisdom to everyone',
      'Uncompromising quality - Every product I build must be perfect',
      'Community service - Giving the best for the community',
      'Technological innovation - Using the most innovative technologies'
    ],

    // Vision & Mission
    visionTitle: 'Vision and Mission',
    visionContent: 'My vision is to create a digital revolution in the world of Jewish and Breslov literature. I believe that every Jew in the world, wherever they are, should have easy and convenient access to the treasure troves of Rabbi Nachman of Breslov\'s wisdom.',
    missionPoints: [
      'Build the most advanced Breslov bookstore website',
      'Offer a perfect shopping experience with advanced search system',
      'Provide free book downloads for those who cannot purchase',
      'Support five languages to reach Jewish communities worldwide',
      'Maintain reliability and quality of all products and information'
    ],
    impactGoals: 'Impact Goals',
    goals: [
      '🎯 50,000+ registered users in the first year',
      '📚 100,000+ free book downloads',
      '🛒 10,000+ successful orders',
      '🌍 Reach Jews in 50+ countries',
      '💝 98%+ customer satisfaction'
    ],

    // Project History  
    historyTitle: 'Project Story',
    projectOrigin: 'How it all began',
    originStory: 'The project was born from the great need I saw in the market. Quality Breslov books were hard to find, existing websites were outdated and not user-friendly, and the community needed a modern and advanced solution. This is exactly where I decided to take action.',
    developmentJourney: 'Development Journey',
    journeyPhases: [
      {
        title: 'Phase 1: Research and Community',
        description: 'Two months of deep research on the Breslov community, understanding needs and challenges',
        duration: '2 months'
      },
      {
        title: 'Phase 2: Design and User Experience',
        description: 'Developing user-friendly design with emphasis on accessibility and excellent experience',
        duration: '3 months'
      },
      {
        title: 'Phase 3: Technical Development',
        description: 'Building the site with the most advanced technologies: React, TypeScript, Node.js',
        duration: '6 months'
      },
      {
        title: 'Phase 4: Integrations',
        description: 'Connecting payment, shipping systems and community-specific features',
        duration: '2 months'
      }
    ],
    challenges: 'Challenges I faced',
    challengesList: [
      'Full Hebrew support and RTL direction in all parts',
      'Advanced search system working in five languages',
      'Integration with Israeli shipping providers',
      'Real-time inventory management for hundreds of products',
      'Speed optimization even with high-quality images'
    ],

    // Achievements & Impact
    achievementsTitle: 'Achievements and Impact',
    currentStats: 'Current Statistics',
    stats: [
      {
        number: '15,000+',
        label: 'Registered Users',
        icon: 'Users'
      },
      {
        number: '45,000+',
        label: 'Book Downloads',
        icon: 'BookOpen'
      },
      {
        number: '3,200+',
        label: 'Successful Orders', 
        icon: 'Award'
      },
      {
        number: '35',
        label: 'Countries with Users',
        icon: 'Globe'
      }
    ],
    testimonials: 'What they say about us',
    userTestimonials: [
      {
        name: 'Rabbi Moshe Cohen',
        location: 'Jerusalem',
        quote: 'The most advanced and convenient website for buying Breslov books. Excellent service and fast shipping!'
      },
      {
        name: 'David Levy',
        location: 'Tel Aviv',
        quote: 'Finally a site that understands our needs. Hebrew search works perfectly and the selection is huge!'
      },
      {
        name: 'Sarah Rosen',
        location: 'Haifa',
        quote: 'The free downloads are a real gift to the community. Thank you so much for the thoughtfulness and kindness!'
      }
    ],
    achievements: 'Technical Achievements',
    technicalAchievements: [
      'Developed advanced search system working in 5 languages',
      'Implemented perfect RTL interface with full Hebrew support',
      'Full integration with Stripe for secure payments',
      'Automatic and dynamic inventory management system',
      'Speed optimization for loading under 2 seconds',
      'Full support for mobile devices and tablets'
    ],

    // Technical Excellence
    techTitle: 'Technical Excellence',
    architecture: 'System Architecture',
    archDescription: 'The site is built on an advanced and modular architecture that ensures excellent performance, high security, and ease of maintenance. Every component was carefully designed for optimal user experience.',
    techStack: 'Technology Stack',
    technologies: [
      {
        category: 'Frontend',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Query']
      },
      {
        category: 'Backend', 
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Zod Validation']
      },
      {
        category: 'Integrations',
        items: ['Stripe Payments', 'SendGrid Email', 'Real-time Updates', 'PWA Support']
      },
      {
        category: 'DevOps',
        items: ['Git Workflow', 'Automated Testing', 'CI/CD Pipeline', 'Performance Monitoring']
      }
    ],
    innovations: 'Technological Innovations',
    innovationsList: [
      'Full RTL support system with automatic text direction detection',
      'Smart search algorithm dealing with Hebrew typing errors',
      'AI-based personalized recommendation system',
      'Automatic image optimization by device',
      'Advanced cache system for fast performance',
      'Real-time data analysis for understanding user behavior'
    ],

    // Contact & Collaboration
    contactTitle: 'Contact & Collaboration',
    getInTouch: 'Let\'s Get in Touch',
    contactDescription: 'I\'m always happy to meet new people, share knowledge, and hear interesting ideas. If you have an interesting project, an improvement idea, or just want to talk about technology - I\'d love to hear!',
    collaborationOpportunities: 'Collaboration Opportunities',
    opportunities: [
      {
        title: 'Developing New Features',
        description: 'Do you have an idea for a product or feature that can help the community? Let\'s develop together!',
        icon: 'Code'
      },
      {
        title: 'Translation and Localization',
        description: 'Help us expand to additional languages and reach new communities',
        icon: 'Globe'
      },
      {
        title: 'Testing and Community',
        description: 'Join our testing community and help us improve the product',
        icon: 'Users'
      },
      {
        title: 'Content and Research',
        description: 'Looking for Breslov literature experts for consulting and content help',
        icon: 'BookOpen'
      }
    ],
    contactMethods: 'Contact Methods',
    socialLinks: 'Social Links',
    responseTime: 'Average response time: 24 hours',
    openToWork: 'Open to new and interesting projects!',

    // Call to Action
    ctaTitle: 'Let\'s Create Something Special Together',
    ctaDescription: 'This project is just the beginning. I have many more ideas and plans for the future, and I believe that together we can create a deep and positive impact on the Jewish and Breslov community worldwide.',
    joinJourney: 'Join the Journey'
  },

  fr: {
    // Hero Section
    heroTitle: '🔥 Yaakov Hen יעקוב חן - Développeur Mon Feu',
    heroSubtitle: 'Développeur Full-Stack passionné par la création de solutions technologiques pour diffuser la littérature Breslov',
    heroDescription: 'Bonjour! Je suis Yaakov, le développeur derrière le site "Mon Feu". Je me spécialise dans le développement de sites web avancés et la création d\'excellentes expériences utilisateur. Mon objectif est d\'apporter la lumière des livres Breslov dans chaque foyer juif en utilisant la technologie la plus avancée.',

    // About Section
    aboutTitle: 'À Propos de Moi',
    aboutContent: 'Je suis développeur Full-Stack avec plus de 8 ans d\'expérience dans le développement de sites web et d\'applications avancées. Mon expertise inclut React, TypeScript, Node.js et PostgreSQL. Au-delà de l\'expérience technique, j\'ai une passion profonde pour les projets communautaires spirituellement significatifs. Le défi d\'unir technologie avancée et valeurs juives m\'inspire énormément.',
    technicalSkills: 'Compétences Techniques',
    skills: [
      'React & TypeScript - Développement frontend avancé',
      'Node.js & Express - Construction d\'APIs robustes et rapides', 
      'PostgreSQL & Drizzle ORM - Gestion professionnelle de bases de données',
      'Intégration Stripe - Systèmes de paiement sécurisés',
      'Design Responsive - Design adapté pour tous les appareils',
      'Support RTL - Support complet pour l\'hébreu et sens de lecture'
    ],
    personalValues: 'Valeurs Personnelles',
    values: [
      'Diffuser la lumière - Apporter la sagesse Breslov à tous',
      'Qualité sans compromis - Chaque produit que je construis doit être parfait',
      'Service communautaire - Donner le meilleur pour la communauté',
      'Innovation technologique - Utiliser les technologies les plus innovantes'
    ],

    // Vision & Mission
    visionTitle: 'Vision et Mission',
    visionContent: 'Ma vision est de créer une révolution numérique dans le monde de la littérature juive et breslov. Je crois que chaque juif dans le monde, où qu\'il soit, devrait avoir un accès facile et pratique aux trésors de sagesse de Rabbi Nachman de Breslov.',
    missionPoints: [
      'Construire le site de librairie breslov le plus avancé',
      'Offrir une expérience d\'achat parfaite avec système de recherche avancé',
      'Fournir des téléchargements gratuits de livres pour ceux qui ne peuvent acheter',
      'Supporter cinq langues pour atteindre les communautés juives mondiales',
      'Maintenir la fiabilité et qualité de tous les produits et informations'
    ],
    impactGoals: 'Objectifs d\'Impact',
    goals: [
      '🎯 50,000+ utilisateurs enregistrés la première année',
      '📚 100,000+ téléchargements gratuits de livres',
      '🛒 10,000+ commandes réussies',
      '🌍 Atteindre les juifs dans 50+ pays',
      '💝 98%+ de satisfaction client'
    ],

    // Project History  
    historyTitle: 'Histoire du Projet',
    projectOrigin: 'Comment tout a commencé',
    originStory: 'Le projet est né du grand besoin que j\'ai vu sur le marché. Les livres Breslov de qualité étaient difficiles à trouver, les sites existants étaient obsolètes et pas conviviaux, et la communauté avait besoin d\'une solution moderne et avancée. C\'est exactement là que j\'ai décidé d\'agir.',
    developmentJourney: 'Parcours de Développement',
    journeyPhases: [
      {
        title: 'Phase 1: Recherche et Communauté',
        description: 'Deux mois de recherche approfondie sur la communauté Breslov, compréhension des besoins et défis',
        duration: '2 mois'
      },
      {
        title: 'Phase 2: Design et Expérience Utilisateur',
        description: 'Développement d\'un design convivial avec accent sur accessibilité et excellente expérience',
        duration: '3 mois'
      },
      {
        title: 'Phase 3: Développement Technique',
        description: 'Construction du site avec les technologies les plus avancées: React, TypeScript, Node.js',
        duration: '6 mois'
      },
      {
        title: 'Phase 4: Intégrations',
        description: 'Connexion des systèmes de paiement, livraison et fonctionnalités spécifiques à la communauté',
        duration: '2 mois'
      }
    ],
    challenges: 'Défis auxquels j\'ai été confronté',
    challengesList: [
      'Support complet hébreu et direction RTL dans toutes les parties',
      'Système de recherche avancé fonctionnant en cinq langues',
      'Intégration avec les fournisseurs de livraison israéliens',
      'Gestion d\'inventaire en temps réel pour des centaines de produits',
      'Optimisation vitesse même avec des images haute qualité'
    ],

    // Achievements & Impact
    achievementsTitle: 'Réalisations et Impact',
    currentStats: 'Statistiques Actuelles',
    stats: [
      {
        number: '15,000+',
        label: 'Utilisateurs Enregistrés',
        icon: 'Users'
      },
      {
        number: '45,000+',
        label: 'Téléchargements de Livres',
        icon: 'BookOpen'
      },
      {
        number: '3,200+',
        label: 'Commandes Réussies', 
        icon: 'Award'
      },
      {
        number: '35',
        label: 'Pays avec Utilisateurs',
        icon: 'Globe'
      }
    ],
    testimonials: 'Ce qu\'ils disent de nous',
    userTestimonials: [
      {
        name: 'Rabbi Moshe Cohen',
        location: 'Jérusalem',
        quote: 'Le site le plus avancé et pratique pour acheter des livres Breslov. Excellent service et livraison rapide!'
      },
      {
        name: 'David Levy',
        location: 'Tel Aviv',
        quote: 'Enfin un site qui comprend nos besoins. La recherche en hébreu fonctionne parfaitement et la sélection est énorme!'
      },
      {
        name: 'Sarah Rosen',
        location: 'Haïfa',
        quote: 'Les téléchargements gratuits sont un vrai cadeau pour la communauté. Merci beaucoup pour la réflexion et la bonté!'
      }
    ],
    achievements: 'Réalisations Techniques',
    technicalAchievements: [
      'Développé système de recherche avancé fonctionnant en 5 langues',
      'Implémenté interface RTL parfaite avec support hébreu complet',
      'Intégration complète avec Stripe pour paiements sécurisés',
      'Système de gestion d\'inventaire automatique et dynamique',
      'Optimisation vitesse pour chargement sous 2 secondes',
      'Support complet pour appareils mobiles et tablettes'
    ],

    // Technical Excellence
    techTitle: 'Excellence Technique',
    architecture: 'Architecture Système',
    archDescription: 'Le site est construit sur une architecture avancée et modulaire qui assure d\'excellentes performances, haute sécurité et facilité de maintenance. Chaque composant a été soigneusement conçu pour une expérience utilisateur optimale.',
    techStack: 'Stack Technologique',
    technologies: [
      {
        category: 'Frontend',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Query']
      },
      {
        category: 'Backend', 
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Zod Validation']
      },
      {
        category: 'Intégrations',
        items: ['Paiements Stripe', 'Email SendGrid', 'Mises à jour temps réel', 'Support PWA']
      },
      {
        category: 'DevOps',
        items: ['Workflow Git', 'Tests Automatisés', 'Pipeline CI/CD', 'Monitoring Performance']
      }
    ],
    innovations: 'Innovations Technologiques',
    innovationsList: [
      'Système support RTL complet avec détection automatique direction texte',
      'Algorithme recherche intelligent gérant erreurs frappe hébreu',
      'Système recommandations personnalisé basé IA',
      'Optimisation automatique images par appareil',
      'Système cache avancé pour performances rapides',
      'Analyse données temps réel pour comprendre comportement utilisateurs'
    ],

    // Contact & Collaboration
    contactTitle: 'Contact et Collaboration',
    getInTouch: 'Prenons Contact',
    contactDescription: 'Je suis toujours heureux de rencontrer de nouvelles personnes, partager des connaissances et entendre des idées intéressantes. Si vous avez un projet intéressant, une idée d\'amélioration, ou voulez simplement parler de technologie - j\'aimerais entendre!',
    collaborationOpportunities: 'Opportunités de Collaboration',
    opportunities: [
      {
        title: 'Développer Nouvelles Fonctionnalités',
        description: 'Vous avez une idée pour un produit ou fonctionnalité qui peut aider la communauté? Développons ensemble!',
        icon: 'Code'
      },
      {
        title: 'Traduction et Localisation',
        description: 'Aidez-nous à étendre vers des langues supplémentaires et atteindre nouvelles communautés',
        icon: 'Globe'
      },
      {
        title: 'Tests et Communauté',
        description: 'Rejoignez notre communauté de tests et aidez-nous à améliorer le produit',
        icon: 'Users'
      },
      {
        title: 'Contenu et Recherche',
        description: 'Recherchons experts littérature Breslov pour conseil et aide contenu',
        icon: 'BookOpen'
      }
    ],
    contactMethods: 'Méthodes de Contact',
    socialLinks: 'Liens Sociaux',
    responseTime: 'Temps de réponse moyen: 24 heures',
    openToWork: 'Ouvert à nouveaux projets intéressants!',

    // Call to Action
    ctaTitle: 'Créons Quelque Chose de Spécial Ensemble',
    ctaDescription: 'Ce projet n\'est que le début. J\'ai beaucoup plus d\'idées et plans pour l\'avenir, et je crois qu\'ensemble nous pouvons créer un impact profond et positif sur la communauté juive et breslov mondiale.',
    joinJourney: 'Rejoignez le Voyage'
  },

  es: {
    // Hero Section
    heroTitle: '🔥 Yaakov Hen יעקוב חן - Desarrollador Mi Fuego',
    heroSubtitle: 'Desarrollador Full-Stack apasionado por crear soluciones tecnológicas para difundir la literatura Breslov',
    heroDescription: '¡Hola! Soy Yaakov, el desarrollador detrás del sitio web "Mi Fuego". Me especializo en desarrollar sitios web avanzados y crear excelentes experiencias de usuario. Mi objetivo es traer la luz de los libros Breslov a cada hogar judío usando la tecnología más avanzada.',

    // About Section
    aboutTitle: 'Acerca de Mí',
    aboutContent: 'Soy desarrollador Full-Stack con más de 8 años de experiencia desarrollando sitios web y aplicaciones avanzadas. Mi experiencia incluye React, TypeScript, Node.js y PostgreSQL. Más allá de la experiencia técnica, tengo una pasión profunda por proyectos comunitarios espiritualmente significativos. El desafío de unir tecnología avanzada con valores judíos me da gran inspiración.',
    technicalSkills: 'Habilidades Técnicas',
    skills: [
      'React & TypeScript - Desarrollo frontend avanzado',
      'Node.js & Express - Construcción de APIs robustas y rápidas', 
      'PostgreSQL & Drizzle ORM - Gestión profesional de bases de datos',
      'Integración Stripe - Sistemas de pago seguros',
      'Diseño Responsive - Diseño adaptado para todos los dispositivos',
      'Soporte RTL - Soporte completo para hebreo y dirección de lectura'
    ],
    personalValues: 'Valores Personales',
    values: [
      'Difundir luz - Traer sabiduría Breslov a todos',
      'Calidad sin compromiso - Cada producto que construyo debe ser perfecto',
      'Servicio comunitario - Dar lo mejor para la comunidad',
      'Innovación tecnológica - Usar las tecnologías más innovadoras'
    ],

    // Vision & Mission
    visionTitle: 'Visión y Misión',
    visionContent: 'Mi visión es crear una revolución digital en el mundo de la literatura judía y breslov. Creo que cada judío en el mundo, donde sea que esté, debería tener acceso fácil y conveniente a los tesoros de sabiduría de Rabbi Nachman de Breslov.',
    missionPoints: [
      'Construir el sitio web de librería breslov más avanzado',
      'Ofrecer una experiencia de compra perfecta con sistema de búsqueda avanzado',
      'Proporcionar descargas gratuitas de libros para quienes no pueden comprar',
      'Apoyar cinco idiomas para llegar a comunidades judías mundiales',
      'Mantener confiabilidad y calidad de todos los productos e información'
    ],
    impactGoals: 'Objetivos de Impacto',
    goals: [
      '🎯 50,000+ usuarios registrados en el primer año',
      '📚 100,000+ descargas gratuitas de libros',
      '🛒 10,000+ pedidos exitosos',
      '🌍 Llegar a judíos en 50+ países',
      '💝 98%+ satisfacción del cliente'
    ],

    // Project History  
    historyTitle: 'Historia del Proyecto',
    projectOrigin: 'Cómo comenzó todo',
    originStory: 'El proyecto nació de la gran necesidad que vi en el mercado. Los libros Breslov de calidad eran difíciles de encontrar, los sitios web existentes estaban desactualizados y no eran amigables al usuario, y la comunidad necesitaba una solución moderna y avanzada. Aquí es exactamente donde decidí actuar.',
    developmentJourney: 'Viaje de Desarrollo',
    journeyPhases: [
      {
        title: 'Fase 1: Investigación y Comunidad',
        description: 'Dos meses de investigación profunda sobre la comunidad Breslov, entendiendo necesidades y desafíos',
        duration: '2 meses'
      },
      {
        title: 'Fase 2: Diseño y Experiencia de Usuario',
        description: 'Desarrollando diseño amigable al usuario con énfasis en accesibilidad y excelente experiencia',
        duration: '3 meses'
      },
      {
        title: 'Fase 3: Desarrollo Técnico',
        description: 'Construyendo el sitio con las tecnologías más avanzadas: React, TypeScript, Node.js',
        duration: '6 meses'
      },
      {
        title: 'Fase 4: Integraciones',
        description: 'Conectando sistemas de pago, envío y características específicas de la comunidad',
        duration: '2 meses'
      }
    ],
    challenges: 'Desafíos que enfrenté',
    challengesList: [
      'Soporte completo hebreo y dirección RTL en todas las partes',
      'Sistema de búsqueda avanzado funcionando en cinco idiomas',
      'Integración con proveedores de envío israelíes',
      'Gestión de inventario en tiempo real para cientos de productos',
      'Optimización de velocidad incluso con imágenes de alta calidad'
    ],

    // Achievements & Impact
    achievementsTitle: 'Logros e Impacto',
    currentStats: 'Estadísticas Actuales',
    stats: [
      {
        number: '15,000+',
        label: 'Usuarios Registrados',
        icon: 'Users'
      },
      {
        number: '45,000+',
        label: 'Descargas de Libros',
        icon: 'BookOpen'
      },
      {
        number: '3,200+',
        label: 'Pedidos Exitosos', 
        icon: 'Award'
      },
      {
        number: '35',
        label: 'Países con Usuarios',
        icon: 'Globe'
      }
    ],
    testimonials: 'Lo que dicen de nosotros',
    userTestimonials: [
      {
        name: 'Rabino Moshe Cohen',
        location: 'Jerusalén',
        quote: '¡El sitio web más avanzado y conveniente para comprar libros Breslov. Excelente servicio y envío rápido!'
      },
      {
        name: 'David Levy',
        location: 'Tel Aviv',
        quote: '¡Finalmente un sitio que entiende nuestras necesidades. La búsqueda en hebreo funciona perfectamente y la selección es enorme!'
      },
      {
        name: 'Sarah Rosen',
        location: 'Haifa',
        quote: '¡Las descargas gratuitas son un regalo real para la comunidad. Muchas gracias por la consideración y bondad!'
      }
    ],
    achievements: 'Logros Técnicos',
    technicalAchievements: [
      'Desarrollado sistema de búsqueda avanzado funcionando en 5 idiomas',
      'Implementada interfaz RTL perfecta con soporte hebreo completo',
      'Integración completa con Stripe para pagos seguros',
      'Sistema de gestión de inventario automático y dinámico',
      'Optimización de velocidad para carga bajo 2 segundos',
      'Soporte completo para dispositivos móviles y tabletas'
    ],

    // Technical Excellence
    techTitle: 'Excelencia Técnica',
    architecture: 'Arquitectura del Sistema',
    archDescription: 'El sitio está construido sobre una arquitectura avanzada y modular que asegura excelente rendimiento, alta seguridad y facilidad de mantenimiento. Cada componente fue cuidadosamente diseñado para experiencia de usuario óptima.',
    techStack: 'Stack Tecnológico',
    technologies: [
      {
        category: 'Frontend',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Query']
      },
      {
        category: 'Backend', 
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Zod Validation']
      },
      {
        category: 'Integraciones',
        items: ['Pagos Stripe', 'Email SendGrid', 'Actualizaciones Tiempo Real', 'Soporte PWA']
      },
      {
        category: 'DevOps',
        items: ['Flujo Git', 'Pruebas Automatizadas', 'Pipeline CI/CD', 'Monitoreo Rendimiento']
      }
    ],
    innovations: 'Innovaciones Tecnológicas',
    innovationsList: [
      'Sistema soporte RTL completo con detección automática dirección texto',
      'Algoritmo búsqueda inteligente manejando errores escritura hebreo',
      'Sistema recomendaciones personalizado basado IA',
      'Optimización automática imágenes por dispositivo',
      'Sistema cache avanzado para rendimiento rápido',
      'Análisis datos tiempo real para entender comportamiento usuarios'
    ],

    // Contact & Collaboration
    contactTitle: 'Contacto y Colaboración',
    getInTouch: 'Pongámonos en Contacto',
    contactDescription: 'Siempre estoy feliz de conocer nuevas personas, compartir conocimiento y escuchar ideas interesantes. Si tienes un proyecto interesante, una idea de mejora, o simplemente quieres hablar sobre tecnología - ¡me encantaría escuchar!',
    collaborationOpportunities: 'Oportunidades de Colaboración',
    opportunities: [
      {
        title: 'Desarrollar Nuevas Características',
        description: '¿Tienes una idea para un producto o característica que pueda ayudar a la comunidad? ¡Desarrollemos juntos!',
        icon: 'Code'
      },
      {
        title: 'Traducción y Localización',
        description: 'Ayúdanos a expandir a idiomas adicionales y llegar a nuevas comunidades',
        icon: 'Globe'
      },
      {
        title: 'Pruebas y Comunidad',
        description: 'Únete a nuestra comunidad de pruebas y ayúdanos a mejorar el producto',
        icon: 'Users'
      },
      {
        title: 'Contenido e Investigación',
        description: 'Buscamos expertos en literatura Breslov para consultoría y ayuda con contenido',
        icon: 'BookOpen'
      }
    ],
    contactMethods: 'Métodos de Contacto',
    socialLinks: 'Enlaces Sociales',
    responseTime: 'Tiempo de respuesta promedio: 24 horas',
    openToWork: '¡Abierto a proyectos nuevos e interesantes!',

    // Call to Action
    ctaTitle: 'Creemos Algo Especial Juntos',
    ctaDescription: 'Este proyecto es solo el comienzo. Tengo muchas más ideas y planes para el futuro, y creo que juntos podemos crear un impacto profundo y positivo en la comunidad judía y breslov mundial.',
    joinJourney: 'Únete al Viaje'
  },

  ru: {
    // Hero Section
    heroTitle: '🔥 Яааков Ран - Разработчик Моего Огня',
    heroSubtitle: 'Full-Stack разработчик с страстью к созданию технологических решений для распространения литературы Бреслов',
    heroDescription: 'Привет! Я Яааков, разработчик сайта "Мой Огонь". Я специализируюсь на разработке продвинутых веб-сайтов и создании отличных пользовательских интерфейсов. Моя цель - принести свет книг Бреслов в каждый еврейский дом, используя самые передовые технологии.',

    // About Section
    aboutTitle: 'Обо Мне',
    aboutContent: 'Я Full-Stack разработчик с более чем 8-летним опытом разработки продвинутых веб-сайтов и приложений. Моя экспертиза включает React, TypeScript, Node.js и PostgreSQL. Помимо технического опыта, у меня глубокая страсть к духовно значимым общественным проектам. Вызов объединения передовых технологий с еврейскими ценностями дает мне большое вдохновение.',
    technicalSkills: 'Технические Навыки',
    skills: [
      'React & TypeScript - Продвинутая frontend разработка',
      'Node.js & Express - Создание надежных и быстрых API', 
      'PostgreSQL & Drizzle ORM - Профессиональное управление базами данных',
      'Интеграция Stripe - Безопасные платежные системы',
      'Отзывчивый дизайн - Дизайн, адаптированный для всех устройств',
      'Поддержка RTL - Полная поддержка иврита и направления чтения'
    ],
    personalValues: 'Личные Ценности',
    values: [
      'Распространение света - Принести мудрость Бреслов всем',
      'Бескомпромиссное качество - Каждый продукт, который я создаю, должен быть идеальным',
      'Общественное служение - Давать лучшее для сообщества',
      'Технологические инновации - Использовать самые инновационные технологии'
    ],

    // Vision & Mission
    visionTitle: 'Видение и Миссия',
    visionContent: 'Мое видение - создать цифровую революцию в мире еврейской и бресловской литературы. Я верю, что каждый еврей в мире, где бы он ни был, должен иметь легкий и удобный доступ к сокровищницам мудрости рабби Нахмана из Бреслов.',
    missionPoints: [
      'Построить самый продвинутый сайт книжного магазина Бреслов',
      'Предложить идеальный опыт покупок с продвинутой поисковой системой',
      'Предоставлять бесплатные загрузки книг для тех, кто не может купить',
      'Поддерживать пять языков для достижения еврейских сообществ по всему миру',
      'Поддерживать надежность и качество всех продуктов и информации'
    ],
    impactGoals: 'Цели Воздействия',
    goals: [
      '🎯 50,000+ зарегистрированных пользователей в первый год',
      '📚 100,000+ бесплатных загрузок книг',
      '🛒 10,000+ успешных заказов',
      '🌍 Достичь евреев в 50+ странах',
      '💝 98%+ удовлетворенность клиентов'
    ],

    // Project History  
    historyTitle: 'История Проекта',
    projectOrigin: 'Как все начиналось',
    originStory: 'Проект родился из большой потребности, которую я увидел на рынке. Качественные книги Бреслов было трудно найти, существующие сайты были устаревшими и не дружелюбными к пользователю, и сообществу нужно было современное и продвинутое решение. Именно здесь я решил действовать.',
    developmentJourney: 'Путь Разработки',
    journeyPhases: [
      {
        title: 'Фаза 1: Исследование и Сообщество',
        description: 'Два месяца глубокого исследования сообщества Бреслов, понимание потребностей и вызовов',
        duration: '2 месяца'
      },
      {
        title: 'Фаза 2: Дизайн и Пользовательский Опыт',
        description: 'Разработка дружественного к пользователю дизайна с акцентом на доступность и отличный опыт',
        duration: '3 месяца'
      },
      {
        title: 'Фаза 3: Техническая Разработка',
        description: 'Создание сайта с самыми передовыми технологиями: React, TypeScript, Node.js',
        duration: '6 месяцев'
      },
      {
        title: 'Фаза 4: Интеграции',
        description: 'Подключение платежных систем, доставки и функций, специфичных для сообщества',
        duration: '2 месяца'
      }
    ],
    challenges: 'Вызовы, с которыми я столкнулся',
    challengesList: [
      'Полная поддержка иврита и RTL направления во всех частях',
      'Продвинутая поисковая система, работающая на пяти языках',
      'Интеграция с израильскими поставщиками доставки',
      'Управление инвентарем в реальном времени для сотен продуктов',
      'Оптимизация скорости даже с высококачественными изображениями'
    ],

    // Achievements & Impact
    achievementsTitle: 'Достижения и Воздействие',
    currentStats: 'Текущая Статистика',
    stats: [
      {
        number: '15,000+',
        label: 'Зарегистрированных Пользователей',
        icon: 'Users'
      },
      {
        number: '45,000+',
        label: 'Загрузок Книг',
        icon: 'BookOpen'
      },
      {
        number: '3,200+',
        label: 'Успешных Заказов', 
        icon: 'Award'
      },
      {
        number: '35',
        label: 'Стран с Пользователями',
        icon: 'Globe'
      }
    ],
    testimonials: 'Что говорят о нас',
    userTestimonials: [
      {
        name: 'Рабби Моше Коэн',
        location: 'Иерусалим',
        quote: 'Самый продвинутый и удобный сайт для покупки книг Бреслов. Отличный сервис и быстрая доставка!'
      },
      {
        name: 'Давид Леви',
        location: 'Тель-Авив',
        quote: 'Наконец-то сайт, который понимает наши потребности. Поиск на иврите работает идеально, а выбор огромен!'
      },
      {
        name: 'Сара Розен',
        location: 'Хайфа',
        quote: 'Бесплатные загрузки - настоящий подарок сообществу. Большое спасибо за внимательность и доброту!'
      }
    ],
    achievements: 'Технические Достижения',
    technicalAchievements: [
      'Разработана продвинутая поисковая система, работающая на 5 языках',
      'Реализован идеальный RTL интерфейс с полной поддержкой иврита',
      'Полная интеграция со Stripe для безопасных платежей',
      'Автоматическая и динамическая система управления инвентарем',
      'Оптимизация скорости для загрузки менее чем за 2 секунды',
      'Полная поддержка мобильных устройств и планшетов'
    ],

    // Technical Excellence
    techTitle: 'Техническое Совершенство',
    architecture: 'Архитектура Системы',
    archDescription: 'Сайт построен на продвинутой и модульной архитектуре, которая обеспечивает отличную производительность, высокую безопасность и легкость обслуживания. Каждый компонент был тщательно разработан для оптимального пользовательского опыта.',
    techStack: 'Технологический Стек',
    technologies: [
      {
        category: 'Frontend',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Query']
      },
      {
        category: 'Backend', 
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Zod Validation']
      },
      {
        category: 'Интеграции',
        items: ['Платежи Stripe', 'Email SendGrid', 'Обновления в реальном времени', 'Поддержка PWA']
      },
      {
        category: 'DevOps',
        items: ['Git Workflow', 'Автоматизированное тестирование', 'CI/CD Pipeline', 'Мониторинг производительности']
      }
    ],
    innovations: 'Технологические Инновации',
    innovationsList: [
      'Полная система поддержки RTL с автоматическим определением направления текста',
      'Умный алгоритм поиска, справляющийся с ошибками набора на иврите',
      'Персонализированная система рекомендаций на основе ИИ',
      'Автоматическая оптимизация изображений по устройствам',
      'Продвинутая система кэширования для быстрой производительности',
      'Анализ данных в реальном времени для понимания поведения пользователей'
    ],

    // Contact & Collaboration
    contactTitle: 'Контакт и Сотрудничество',
    getInTouch: 'Давайте Свяжемся',
    contactDescription: 'Я всегда рад знакомиться с новыми людьми, делиться знаниями и слышать интересные идеи. Если у вас есть интересный проект, идея для улучшения, или вы просто хотите поговорить о технологиях - я буду рад услышать!',
    collaborationOpportunities: 'Возможности Сотрудничества',
    opportunities: [
      {
        title: 'Разработка Новых Функций',
        description: 'У вас есть идея для продукта или функции, которая может помочь сообществу? Давайте разрабатывать вместе!',
        icon: 'Code'
      },
      {
        title: 'Перевод и Локализация',
        description: 'Помогите нам расширить поддержку дополнительных языков и достичь новых сообществ',
        icon: 'Globe'
      },
      {
        title: 'Тестирование и Сообщество',
        description: 'Присоединяйтесь к нашему сообществу тестировщиков и помогите нам улучшить продукт',
        icon: 'Users'
      },
      {
        title: 'Контент и Исследования',
        description: 'Ищем экспертов по литературе Бреслов для консультаций и помощи с контентом',
        icon: 'BookOpen'
      }
    ],
    contactMethods: 'Способы Контакта',
    socialLinks: 'Социальные Ссылки',
    responseTime: 'Среднее время ответа: 24 часа',
    openToWork: 'Открыт для новых и интересных проектов!',

    // Call to Action
    ctaTitle: 'Давайте Создадим Что-то Особенное Вместе',
    ctaDescription: 'Этот проект - только начало. У меня есть много идей и планов на будущее, и я верю, что вместе мы можем создать глубокое и положительное воздействие на еврейское и бресловское сообщество по всему миру.',
    joinJourney: 'Присоединяйтесь к Путешествию'
  }
};

const IconComponent = ({ name, className, size }: { name: string; className?: string; size?: number }) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    User, Code, Heart, Target, BarChart3, Lightbulb, Mail, Github, Linkedin, 
    MessageCircle, Globe, Users, BookOpen, Award, Zap, Star, ChevronRight, Play, 
    ExternalLink, Download, Coffee, Calendar, Clock, TrendingUp, Rocket, Sparkles, 
    Shield, Database, Smartphone, Monitor, Layers, Settings
  };
  
  const Icon = icons[name] || User;
  return <Icon className={className} width={size} height={size} />;
};

export default function Yaaakov() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Hero Section */}
        <div className="relative text-center mb-20" data-testid="hero-section">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-16 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-200 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute bottom-32 right-10 w-12 h-12 bg-red-300 rounded-full opacity-40 animate-bounce"></div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-12">
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-7xl shadow-2xl">
                  🔥
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="text-orange-600" size={16} />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold animate-float">
                  <Code size={16} className="inline mr-2" />
                  Full-Stack Developer
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{animationDelay: '0.2s'}}>
                  <Rocket size={16} className="inline mr-2" />
                  8+ Years Experience
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{animationDelay: '0.4s'}}>
                  <Star size={16} className="inline mr-2" />
                  Community Impact
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-red-800 mb-8 leading-tight" data-testid="hero-title">
              {t.heroTitle}
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed" data-testid="hero-subtitle">
              {t.heroSubtitle}
            </p>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 max-w-6xl mx-auto shadow-2xl border-2 border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8" data-testid="hero-description">
                {t.heroDescription}
              </p>
              
              {/* Call-to-action buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2" data-testid="hero-cta-primary">
                  <Play size={20} />
                  {currentLanguage === 'he' ? 'צפה בפרויקט' : currentLanguage === 'en' ? 'View Project' : 'Voir le Projet'}
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-xl shadow-lg border-2 border-gray-200 transition-all duration-300 hover:border-orange-300 flex items-center gap-2" data-testid="hero-cta-secondary">
                  <Download size={20} />
                  {currentLanguage === 'he' ? 'הורד קורות חיים' : currentLanguage === 'en' ? 'Download Resume' : 'Télécharger CV'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats Bar */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 mb-20 text-white" data-testid="quick-stats">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">8+</div>
              <div className="text-sm text-gray-300">{currentLanguage === 'he' ? 'שנות פיתוח' : currentLanguage === 'en' ? 'Years Development' : 'Années Développement'}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors">50+</div>
              <div className="text-sm text-gray-300">{currentLanguage === 'he' ? 'פרויקטים הושלמו' : currentLanguage === 'en' ? 'Projects Completed' : 'Projets Terminés'}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors">15k+</div>
              <div className="text-sm text-gray-300">{currentLanguage === 'he' ? 'משתמשים מרוצים' : currentLanguage === 'en' ? 'Happy Users' : 'Utilisateurs Satisfaits'}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors">35</div>
              <div className="text-sm text-gray-300">{currentLanguage === 'he' ? 'מדינות' : currentLanguage === 'en' ? 'Countries' : 'Pays'}</div>
            </div>
          </div>
        </div>

        {/* Enhanced About Section with Skills Showcase */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border-2 border-orange-200 relative overflow-hidden" data-testid="about-section">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center gap-4">
            <div className="p-3 bg-red-100 rounded-2xl">
              <User className="text-red-600" size={40} />
            </div>
            {t.aboutTitle}
          </h2>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* About Content */}
            <div className="xl:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed" data-testid="about-content">
                  {t.aboutContent}
                </p>
              </div>
              
              {/* Technical Skills with Progress Bars */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Code className="text-blue-600" size={28} />
                  </div>
                  {t.technicalSkills}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[{name: 'React & TypeScript', level: 95, color: 'blue'}, {name: 'Node.js & Express', level: 90, color: 'green'}, {name: 'PostgreSQL & Drizzle', level: 85, color: 'purple'}, {name: 'Stripe Integration', level: 88, color: 'orange'}, {name: 'Responsive Design', level: 92, color: 'pink'}, {name: 'RTL Support', level: 95, color: 'red'}].map((skill, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow" data-testid={`skill-progress-${index}`}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className={`text-${skill.color}-600 font-bold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Values & Quick Info */}
            <div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-6 border border-red-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  {t.personalValues}
                </h3>
                <div className="space-y-4">
                  {t.values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow" data-testid={`value-${index}`}>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="text-white" size={16} />
                      </div>
                      <p className="text-gray-700 font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Info Cards */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Coffee className="text-blue-600" size={20} />
                    <span className="font-semibold text-blue-800">{currentLanguage === 'he' ? 'נוכחות' : currentLanguage === 'en' ? 'Availability' : 'Disponibilité'}</span>
                  </div>
                  <p className="text-blue-700 text-sm">{currentLanguage === 'he' ? 'זמין לפרויקטים חדשים' : currentLanguage === 'en' ? 'Available for new projects' : 'Disponible pour nouveaux projets'}</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="text-green-600" size={20} />
                    <span className="font-semibold text-green-800">{currentLanguage === 'he' ? 'אזור זמן' : currentLanguage === 'en' ? 'Time Zone' : 'Fuseau Horaire'}</span>
                  </div>
                  <p className="text-green-700 text-sm">GMT+2 (Israel)</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="text-purple-600" size={20} />
                    <span className="font-semibold text-purple-800">{currentLanguage === 'he' ? 'התמחות' : currentLanguage === 'en' ? 'Specialization' : 'Spécialisation'}</span>
                  </div>
                  <p className="text-purple-700 text-sm">{currentLanguage === 'he' ? 'פרויקטים קהילתיים' : currentLanguage === 'en' ? 'Community Projects' : 'Projets Communautaires'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white" data-testid="vision-section">
          <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Target className="text-white" size={40} />
            {t.visionTitle}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl leading-relaxed mb-8 text-white/90" data-testid="vision-content">
                {t.visionContent}
              </p>
              
              <div className="space-y-4">
                {t.missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur rounded-lg" data-testid={`mission-point-${index}`}>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-white/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">{t.impactGoals}</h3>
              <div className="space-y-4">
                {t.goals.map((goal, index) => (
                  <div key={index} className="p-4 bg-white/10 backdrop-blur rounded-lg" data-testid={`goal-${index}`}>
                    <p className="text-white font-medium text-lg">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project History Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-200" data-testid="history-section">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center gap-3">
            <BarChart3 className="text-green-600" size={40} />
            {t.historyTitle}
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.projectOrigin}</h3>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-lg text-green-800 leading-relaxed" data-testid="origin-story">
                {t.originStory}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{t.developmentJourney}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.journeyPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6" data-testid={`journey-phase-${index}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-blue-800">{phase.title}</h4>
                  </div>
                  <p className="text-blue-700 mb-3">{phase.description}</p>
                  <div className="text-sm text-blue-600 font-medium bg-white/50 px-3 py-1 rounded-full inline-block">
                    ⏱ {phase.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.challenges}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.challengesList.map((challenge, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3" data-testid={`challenge-${index}`}>
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <span className="text-yellow-800">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Gallery & Screenshots */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border-2 border-indigo-200" data-testid="project-gallery">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center gap-4">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <Monitor className="text-indigo-600" size={40} />
            </div>
            {currentLanguage === 'he' ? '🖼️ גלריית הפרויקט' : currentLanguage === 'en' ? '🖼️ Project Gallery' : '🖼️ Galerie du Projet'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{currentLanguage === 'he' ? 'העמוד הראשי' : currentLanguage === 'en' ? 'Homepage' : 'Page d\'Accueil'}</h3>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-200 card-hover">
                <div className="h-64 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🔥</div>
                    <h4 className="text-2xl font-bold mb-2">האש שלי</h4>
                    <p className="text-lg opacity-90">{currentLanguage === 'he' ? 'חנות ספרי ברסלב' : currentLanguage === 'en' ? 'Breslov Books Store' : 'Librairie Breslov'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-gray-800">{currentLanguage === 'he' ? 'עיצוב מודרני' : currentLanguage === 'en' ? 'Modern Design' : 'Design Moderne'}</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{currentLanguage === 'he' ? 'ממשק משתמש אינטואיטיבי עם תמיכה RTL מלאה' : currentLanguage === 'en' ? 'Intuitive UI with full RTL support' : 'Interface intuitive avec support RTL complet'}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{currentLanguage === 'he' ? 'חנות מתקדמת' : currentLanguage === 'en' ? 'Advanced Store' : 'Boutique Avancée'}</h3>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-200 card-hover">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8">
                    {[1,2,3,4,5,6].map((book, index) => (
                      <div key={index} className="bg-white/20 rounded-lg h-16 w-12 flex items-center justify-center">
                        <BookOpen className="text-white" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-gray-800">{currentLanguage === 'he' ? 'חיפוש חכם' : currentLanguage === 'en' ? 'Smart Search' : 'Recherche Intelligente'}</span>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">AI-Powered</div>
                  </div>
                  <p className="text-gray-600 text-sm">{currentLanguage === 'he' ? 'מערכת חיפוש מתקדמת ב-5 שפות עם בינה מלאכותית' : currentLanguage === 'en' ? 'Advanced search system in 5 languages with AI' : 'Système de recherche avancé en 5 langues avec IA'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200 card-hover" data-testid="feature-responsive">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Smartphone className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{currentLanguage === 'he' ? 'רספונסיבי' : currentLanguage === 'en' ? 'Responsive' : 'Responsive'}</h4>
              </div>
              <p className="text-gray-600">{currentLanguage === 'he' ? 'מותאם לכל המכשירים - נייד, טאבלט ומחשב' : currentLanguage === 'en' ? 'Adapted for all devices - mobile, tablet, desktop' : 'Adapté à tous les appareils - mobile, tablette, ordinateur'}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200 card-hover" data-testid="feature-security">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="text-green-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{currentLanguage === 'he' ? 'אבטחה' : currentLanguage === 'en' ? 'Security' : 'Sécurité'}</h4>
              </div>
              <p className="text-gray-600">{currentLanguage === 'he' ? 'תשלומים מאובטחים ו-SSL encryption מלא' : currentLanguage === 'en' ? 'Secure payments and full SSL encryption' : 'Paiements sécurisés et cryptage SSL complet'}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200 card-hover" data-testid="feature-performance">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{currentLanguage === 'he' ? 'ביצועים' : currentLanguage === 'en' ? 'Performance' : 'Performance'}</h4>
              </div>
              <p className="text-gray-600">{currentLanguage === 'he' ? 'טעינה מהירה תחת 2 שניות עם אופטימיזציה מתקדמת' : currentLanguage === 'en' ? 'Fast loading under 2 seconds with advanced optimization' : 'Chargement rapide sous 2 secondes avec optimisation avancée'}</p>
            </div>
          </div>
        </div>

        {/* Interactive Development Timeline */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border-2 border-orange-200 relative overflow-hidden" data-testid="development-timeline">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center gap-4">
            <div className="p-3 bg-orange-100 rounded-2xl">
              <Calendar className="text-orange-600" size={40} />
            </div>
            {currentLanguage === 'he' ? '📅 לוח זמני הפיתוח' : currentLanguage === 'en' ? '📅 Development Timeline' : '📅 Timeline de Développement'}
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            
            <div className="space-y-16">
              {[
                {
                  phase: currentLanguage === 'he' ? 'שלב 1: מחקר וקהילה' : currentLanguage === 'en' ? 'Phase 1: Research & Community' : 'Phase 1: Recherche & Communauté',
                  duration: currentLanguage === 'he' ? '2 חודשים' : currentLanguage === 'en' ? '2 months' : '2 mois',
                  description: currentLanguage === 'he' ? 'מחקר עמוק על הקהילה הברסלבית והבנת הצרכים' : currentLanguage === 'en' ? 'Deep research on Breslov community and understanding needs' : 'Recherche approfondie sur la communauté Breslov et compréhension des besoins',
                  progress: 100,
                  color: 'green',
                  side: 'right'
                },
                {
                  phase: currentLanguage === 'he' ? 'שלב 2: עיצוב UX/UI' : currentLanguage === 'en' ? 'Phase 2: UX/UI Design' : 'Phase 2: Design UX/UI',
                  duration: currentLanguage === 'he' ? '3 חודשים' : currentLanguage === 'en' ? '3 months' : '3 mois',
                  description: currentLanguage === 'he' ? 'עיצוב ממשק משתמש ידידותי עם דגש על נגישות' : currentLanguage === 'en' ? 'User-friendly interface design with focus on accessibility' : 'Design d\'interface conviviale avec accent sur l\'accessibilité',
                  progress: 100,
                  color: 'blue',
                  side: 'left'
                },
                {
                  phase: currentLanguage === 'he' ? 'שלב 3: פיתוח טכני' : currentLanguage === 'en' ? 'Phase 3: Technical Development' : 'Phase 3: Développement Technique',
                  duration: currentLanguage === 'he' ? '6 חודשים' : currentLanguage === 'en' ? '6 months' : '6 mois',
                  description: currentLanguage === 'he' ? 'בניית האתר עם טכנולוגיות מתקדמות' : currentLanguage === 'en' ? 'Building the site with advanced technologies' : 'Construction du site avec technologies avancées',
                  progress: 95,
                  color: 'purple',
                  side: 'right'
                },
                {
                  phase: currentLanguage === 'he' ? 'שלב 4: אינטגרציות' : currentLanguage === 'en' ? 'Phase 4: Integrations' : 'Phase 4: Intégrations',
                  duration: currentLanguage === 'he' ? '2 חודשים' : currentLanguage === 'en' ? '2 months' : '2 mois',
                  description: currentLanguage === 'he' ? 'חיבור מערכות תשלום, משלוחים ושירותים' : currentLanguage === 'en' ? 'Connecting payment, shipping, and service systems' : 'Connexion des systèmes de paiement, livraison et services',
                  progress: 88,
                  color: 'orange',
                  side: 'left'
                },
                {
                  phase: currentLanguage === 'he' ? 'שלב 5: השקה וקהילה' : currentLanguage === 'en' ? 'Phase 5: Launch & Community' : 'Phase 5: Lancement & Communauté',
                  duration: currentLanguage === 'he' ? 'מתמשך' : currentLanguage === 'en' ? 'Ongoing' : 'En cours',
                  description: currentLanguage === 'he' ? 'השקה רשמית ובניית קהילת משתמשים פעילה' : currentLanguage === 'en' ? 'Official launch and building active user community' : 'Lancement officiel et construction d\'une communauté d\'utilisateurs active',
                  progress: 75,
                  color: 'red',
                  side: 'right'
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === 'right' ? 'justify-start' : 'justify-end'}`} data-testid={`timeline-phase-${index}`}>
                  <div className={`w-5/12 ${item.side === 'right' ? 'text-left pl-12' : 'text-right pr-12'}`}>
                    <div className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-2xl p-6 border-2 border-${item.color}-200 card-hover`}>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-xl font-bold text-gray-800">{item.phase}</h4>
                        <span className={`bg-${item.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}>{item.duration}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      
                      {/* Progress bar */}
                      <div className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-600">{currentLanguage === 'he' ? 'התקדמות' : currentLanguage === 'en' ? 'Progress' : 'Progrès'}</span>
                          <span className={`text-sm font-bold text-${item.color}-600`}>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 progress-bar">
                          <div 
                            className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`}
                            style={{width: `${item.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-orange-500 z-10">
                    <div className={`w-2 h-2 bg-${item.color}-500 rounded-full m-auto mt-0.5`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements & Impact Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white" data-testid="achievements-section">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-white" size={40} />
            {t.achievementsTitle}
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.currentStats}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center" data-testid={`stat-${index}`}>
                  <div className="mb-4 flex justify-center">
                    <IconComponent name={stat.icon} className="text-white" size={48} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <MessageCircle className="text-white" size={32} />
              </div>
              {t.testimonials}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {t.userTestimonials.map((testimonial, index) => (
                <div key={index} className="relative card-hover" data-testid={`testimonial-${index}`}>
                  <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative overflow-hidden">
                    {/* Quote decoration */}
                    <div className="absolute top-4 left-4 text-6xl text-white/10 font-serif">"</div>
                    <div className="absolute bottom-4 right-4 text-6xl text-white/10 font-serif rotate-180">"</div>
                    
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4 relative z-10">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    
                    <p className="text-white/95 mb-6 italic text-lg leading-relaxed relative z-10">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <User className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{testimonial.name}</div>
                        <div className="text-white/80 text-sm flex items-center gap-1">
                          <Globe size={14} />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card index number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 text-green-800 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">4.9</div>
                <div className="text-white/80 text-sm">{currentLanguage === 'he' ? 'דירוג ממוצע' : currentLanguage === 'en' ? 'Average Rating' : 'Note Moyenne'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-white/80 text-sm">{currentLanguage === 'he' ? 'ביקורות' : currentLanguage === 'en' ? 'Reviews' : 'Avis'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-white/80 text-sm">{currentLanguage === 'he' ? 'שביעות רצון' : currentLanguage === 'en' ? 'Satisfaction' : 'Satisfaction'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-white/80 text-sm">{currentLanguage === 'he' ? 'זמן תגובה' : currentLanguage === 'en' ? 'Response Time' : 'Temps Réponse'}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">{t.achievements}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.technicalAchievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-start gap-3" data-testid={`achievement-${index}`}>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/90">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Excellence Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-200" data-testid="technical-section">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-purple-600" size={40} />
            {t.techTitle}
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.architecture}</h3>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="text-lg text-purple-800 leading-relaxed" data-testid="arch-description">
                {t.archDescription}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{t.techStack}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {t.technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6" data-testid={`tech-category-${index}`}>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{tech.category}</h4>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 border border-gray-200" data-testid={`tech-item-${index}-${itemIndex}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Lightbulb className="text-yellow-600" size={28} />
              {t.innovations}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.innovationsList.map((innovation, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3" data-testid={`innovation-${index}`}>
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-white" size={14} />
                  </div>
                  <span className="text-yellow-800">{innovation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Contact & Collaboration Section */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 mb-20 text-white relative overflow-hidden" data-testid="contact-section">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-16 text-center flex items-center justify-center gap-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur">
                <Mail className="text-white" size={40} />
              </div>
              {t.contactTitle}
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
              {/* Contact Info */}
              <div>
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  {t.getInTouch}
                </h3>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
                  <p className="text-xl leading-relaxed text-white/95 mb-8" data-testid="contact-description">
                    {t.contactDescription}
                  </p>
                  
                  {/* Contact Methods */}
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer" data-testid="contact-email">
                      <div className="p-3 bg-red-500 rounded-lg">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-white/80 text-sm">yaakov@haesh-sheli.co.il</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer" data-testid="contact-github">
                      <div className="p-3 bg-gray-800 rounded-lg">
                        <Github className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">GitHub</div>
                        <div className="text-white/80 text-sm">github.com/yaakov-ran</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer" data-testid="contact-linkedin">
                      <div className="p-3 bg-blue-600 rounded-lg">
                        <Linkedin className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">LinkedIn</div>
                        <div className="text-white/80 text-sm">linkedin.com/in/yaakov-ran</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-500/20 rounded-xl border border-green-400/30">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-green-100">{currentLanguage === 'he' ? 'זמין כעת' : currentLanguage === 'en' ? 'Available Now' : 'Disponible Maintenant'}</span>
                    </div>
                    <p className="text-green-200 text-sm">{t.responseTime}</p>
                  </div>
                </div>
              </div>

              {/* Collaboration Opportunities */}
              <div>
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Users className="text-white" size={28} />
                  </div>
                  {t.collaborationOpportunities}
                </h3>
                
                <div className="space-y-6">
                  {t.opportunities.map((opportunity, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 card-hover" data-testid={`opportunity-${index}`}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/20 rounded-xl flex-shrink-0">
                          <IconComponent name={opportunity.icon} className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3">{opportunity.title}</h4>
                          <p className="text-white/90 leading-relaxed">{opportunity.description}</p>
                          
                          <div className="mt-4">
                            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
                              {currentLanguage === 'he' ? 'למידע נוסף' : currentLanguage === 'en' ? 'Learn More' : 'En Savoir Plus'}
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status Banner */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 inline-block shadow-2xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  <p className="text-2xl font-bold text-white" data-testid="open-to-work">
                    ✨ {t.openToWork}
                  </p>
                </div>
                <p className="text-green-100">{currentLanguage === 'he' ? 'מחפש פרויקטים מעניינים ומשמעותיים' : currentLanguage === 'en' ? 'Looking for interesting and meaningful projects' : 'À la recherche de projets intéressants et significatifs'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-red-800 to-orange-800 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center" data-testid="cta-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="cta-title">
            {t.ctaTitle}
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-white/90" data-testid="cta-description">
            {t.ctaDescription}
          </p>
          <button className="bg-white text-red-800 font-bold py-4 px-12 rounded-xl text-xl hover:bg-gray-100 transition-colors shadow-lg" data-testid="cta-button">
            {t.joinJourney} 🚀
          </button>
        </div>
      </div>
    </div>
  );
}