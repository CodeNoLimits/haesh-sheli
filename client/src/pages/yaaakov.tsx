import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { User, Code, Heart, Target, BarChart3, Lightbulb, Mail, Github, Linkedin, MessageCircle, Globe, Users, BookOpen, Award } from 'lucide-react';

const translations = {
  he: {
    // Hero Section
    heroTitle: '🔥 יעקב רן - מפתח האש שלי',
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
    heroTitle: '🔥 Yaakov Ran - My Fire Developer',
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
    heroTitle: '🔥 Yaakov Ran - Développeur Mon Feu',
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
    heroTitle: '🔥 Yaakov Ran - Desarrollador Mi Fuego',
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

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    User, Code, Heart, Target, BarChart3, Lightbulb, Mail, Github, Linkedin, 
    MessageCircle, Globe, Users, BookOpen, Award
  };
  
  const Icon = icons[name] || User;
  return <Icon className={className} />;
};

export default function Yaaakov() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = translations[currentLanguage as keyof typeof translations] || translations.he;
  const isRTL = currentLanguage === 'he';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16" data-testid="hero-section">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white text-6xl">
              🔥
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-red-800 mb-6" data-testid="hero-title">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8" data-testid="hero-subtitle">
            {t.heroSubtitle}
          </p>
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 max-w-5xl mx-auto shadow-lg border border-orange-200">
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="hero-description">
              {t.heroDescription}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-200" data-testid="about-section">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <User className="text-red-600" size={40} />
            {t.aboutTitle}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8" data-testid="about-content">
                {t.aboutContent}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Code className="text-blue-600" size={28} />
                  {t.technicalSkills}
                </h3>
                <div className="space-y-3">
                  {t.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200" data-testid={`skill-${index}`}>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-blue-800 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="text-red-600" size={28} />
                {t.personalValues}
              </h3>
              <div className="space-y-4">
                {t.values.map((value, index) => (
                  <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200" data-testid={`value-${index}`}>
                    <p className="text-red-800 font-medium">{value}</p>
                  </div>
                ))}
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
            <h3 className="text-2xl font-bold mb-8 text-center">{t.testimonials}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.userTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6" data-testid={`testimonial-${index}`}>
                  <p className="text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.location}</div>
                </div>
              ))}
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

        {/* Contact & Collaboration Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white" data-testid="contact-section">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Mail className="text-white" size={40} />
            {t.contactTitle}
          </h2>

          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold mb-6">{t.getInTouch}</h3>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-white/90 mb-6" data-testid="contact-description">
                {t.contactDescription}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-3 rounded-lg flex items-center gap-2 transition-colors" data-testid="contact-email">
                  <Mail size={20} />
                  yaakov@haesh-sheli.co.il
                </button>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-3 rounded-lg flex items-center gap-2 transition-colors" data-testid="contact-github">
                  <Github size={20} />
                  GitHub
                </button>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-3 rounded-lg flex items-center gap-2 transition-colors" data-testid="contact-linkedin">
                  <Linkedin size={20} />
                  LinkedIn
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">{t.responseTime}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.collaborationOpportunities}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6" data-testid={`opportunity-${index}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent name={opportunity.icon} className="text-white" size={28} />
                    <h4 className="text-xl font-bold">{opportunity.title}</h4>
                  </div>
                  <p className="text-white/90">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 inline-block">
              <p className="text-xl font-bold text-green-300" data-testid="open-to-work">
                ✨ {t.openToWork}
              </p>
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