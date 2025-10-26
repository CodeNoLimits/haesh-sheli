export interface Shiur {
  id: string;
  title: string;
  titleHebrew: string;
  titleEnglish: string;
  titleFrench: string;
  author: string;
  authorHebrew: string;
  duration: number; // en secondes
  audioUrl: string;
  description?: string;
  descriptionHebrew?: string;
  descriptionEnglish?: string;
  descriptionFrench?: string;
  category: string;
  dateAdded: string;
  downloadCount?: number;
  thumbnail?: string;
}

export const breslovShiurim: Shiur[] = [
  {
    id: 'shiur-001',
    title: 'Introduction à Likoutei Moharan',
    titleHebrew: 'הקדמה לליקוטי מוהרן',
    titleEnglish: 'Introduction to Likutei Moharan',
    titleFrench: 'Introduction au Likoutei Moharan',
    author: 'Rabbi Yisrael Dov Odesser',
    authorHebrew: 'הרב ישראל דב אודסר',
    duration: 3600, // 1 heure
    audioUrl: '/audio/shiurim/intro-likutei-moharan.mp3',
    description: 'Introduction complète aux enseignements fondamentaux de Rabbi Nachman',
    descriptionHebrew: 'הקדמה מקיפה לתורות היסוד של רבי נחמן',
    descriptionEnglish: 'Comprehensive introduction to Rabbi Nachman\'s fundamental teachings',
    descriptionFrench: 'Introduction complète aux enseignements fondamentaux de Rabbi Nachman',
    category: 'Likutei Moharan',
    dateAdded: '2024-10-26',
    downloadCount: 0,
    thumbnail: '/images/shiurim/likutei-moharan.jpg'
  },
  {
    id: 'shiur-002',
    title: 'La Prière selon Rabbi Nachman',
    titleHebrew: 'התפילה לפי רבי נחמן',
    titleEnglish: 'Prayer according to Rabbi Nachman',
    titleFrench: 'La Prière selon Rabbi Nachman',
    author: 'Rabbi Yisrael Dov Odesser',
    authorHebrew: 'הרב ישראל דב אודסר',
    duration: 2700, // 45 minutes
    audioUrl: '/audio/shiurim/prayer-rabbi-nachman.mp3',
    description: 'Enseignements profonds sur l\'importance de la prière personnelle',
    descriptionHebrew: 'תורות עמוקות על חשיבות התפילה האישית',
    descriptionEnglish: 'Deep teachings on the importance of personal prayer',
    descriptionFrench: 'Enseignements profonds sur l\'importance de la prière personnelle',
    category: 'Prayer',
    dateAdded: '2024-10-25',
    downloadCount: 0,
    thumbnail: '/images/shiurim/prayer.jpg'
  },
  {
    id: 'shiur-003',
    title: 'La Joie et la Tristesse',
    titleHebrew: 'השמחה והעצבות',
    titleEnglish: 'Joy and Sadness',
    titleFrench: 'La Joie et la Tristesse',
    author: 'Rabbi Yisrael Dov Odesser',
    authorHebrew: 'הרב ישראל דב אודסר',
    duration: 2400, // 40 minutes
    audioUrl: '/audio/shiurim/joy-sadness.mp3',
    description: 'Comment transformer la tristesse en joie selon les enseignements de Rabbi Nachman',
    descriptionHebrew: 'איך להפוך עצבות לשמחה לפי תורות רבי נחמן',
    descriptionEnglish: 'How to transform sadness into joy according to Rabbi Nachman\'s teachings',
    descriptionFrench: 'Comment transformer la tristesse en joie selon les enseignements de Rabbi Nachman',
    category: 'Emotions',
    dateAdded: '2024-10-24',
    downloadCount: 0,
    thumbnail: '/images/shiurim/joy.jpg'
  },
  {
    id: 'shiur-004',
    title: 'La Foi et la Confiance',
    titleHebrew: 'האמונה והביטחון',
    titleEnglish: 'Faith and Trust',
    titleFrench: 'La Foi et la Confiance',
    author: 'Rabbi Yisrael Dov Odesser',
    authorHebrew: 'הרב ישראל דב אודסר',
    duration: 3000, // 50 minutes
    audioUrl: '/audio/shiurim/faith-trust.mp3',
    description: 'Renforcer sa foi et développer une confiance totale en Dieu',
    descriptionHebrew: 'חיזוק האמונה ופיתוח ביטחון מלא בה\'',
    descriptionEnglish: 'Strengthening faith and developing complete trust in God',
    descriptionFrench: 'Renforcer sa foi et développer une confiance totale en Dieu',
    category: 'Faith',
    dateAdded: '2024-10-23',
    downloadCount: 0,
    thumbnail: '/images/shiurim/faith.jpg'
  },
  {
    id: 'shiur-005',
    title: 'Les Histoires de Rabbi Nachman',
    titleHebrew: 'סיפורי רבי נחמן',
    titleEnglish: 'Stories of Rabbi Nachman',
    titleFrench: 'Les Histoires de Rabbi Nachman',
    author: 'Rabbi Yisrael Dov Odesser',
    authorHebrew: 'הרב ישראל דב אודסר',
    duration: 4200, // 70 minutes
    audioUrl: '/audio/shiurim/stories-rabbi-nachman.mp3',
    description: 'Analyse profonde des contes et histoires de Rabbi Nachman',
    descriptionHebrew: 'ניתוח עמוק של הסיפורים והמעשיות של רבי נחמן',
    descriptionEnglish: 'Deep analysis of Rabbi Nachman\'s tales and stories',
    descriptionFrench: 'Analyse profonde des contes et histoires de Rabbi Nachman',
    category: 'Stories',
    dateAdded: '2024-10-22',
    downloadCount: 0,
    thumbnail: '/images/shiurim/stories.jpg'
  }
];

export const getShiurimByCategory = (category: string): Shiur[] => {
  return breslovShiurim.filter(shiur => shiur.category === category);
};

export const getShiurById = (id: string): Shiur | undefined => {
  return breslovShiurim.find(shiur => shiur.id === id);
};

export const getRelatedShiurim = (currentShiurId: string, maxResults: number = 3): Shiur[] => {
  const currentShiur = getShiurById(currentShiurId);
  if (!currentShiur) return [];

  return breslovShiurim
    .filter(shiur => shiur.id !== currentShiurId && shiur.category === currentShiur.category)
    .slice(0, maxResults);
};
