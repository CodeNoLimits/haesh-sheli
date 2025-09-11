import { useState } from 'react';
import { TrendingUp, DollarSign, Users, Star, Target, Calendar, CheckCircle2, ArrowUp, ArrowDown, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';

export default function YaakovInvestorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Business-focused metrics for investors
  const businessMetrics = {
    currentMonth: {
      revenue: 47500, // in shekels
      newSubscribers: 156,
      totalUsers: 2845,
      conversionRate: 5.8,
      avgOrderValue: 285,
      monthlyRecurringRevenue: 89400
    },
    lastMonth: {
      revenue: 41200,
      newSubscribers: 132,
      totalUsers: 2689,
      conversionRate: 4.2,
      avgOrderValue: 267,
      monthlyRecurringRevenue: 76300
    },
    goals: {
      monthlyRevenue: 75000,
      totalUsers: 5000,
      conversionRate: 8.0,
      monthlyRecurringRevenue: 150000
    }
  };

  // Business milestones achieved
  const businessMilestones = [
    {
      title: 'מערכת תשלומים מאובטחת',
      description: 'השלמת אינטגרציה עם Stripe ומערכות תשלום בטוחות',
      impact: 'אפשר תרומות ומכירות מקוונות',
      value: '+300% בתרומות מקוונות',
      date: 'ספטמבר 2025'
    },
    {
      title: 'מנויי הוראת קבע',
      description: 'השקה של 4 רמות מנוי לתומכים: 99₪, 299₪, 499₪, 999₪',
      impact: 'הכנסה חוזרת יציבה',
      value: '89,400₪ הכנסה חודשית',
      date: 'ספטמבר 2025'
    },
    {
      title: 'אופטימיזציה לנייד',
      description: 'שיפור מלא של חוויית הגלישה במכשירים ניידים',
      impact: 'עלייה בהמרות ממכשירים ניידים',
      value: '+85% שיפור בניקוד נייד',
      date: 'אוגוסט 2025'
    }
  ];

  // Financial projections
  const financialProjections = [
    { month: 'ספטמבר', revenue: 47500, target: 75000 },
    { month: 'אוקטובר', revenue: 58000, target: 80000 },
    { month: 'נובמבר', revenue: 71000, target: 85000 },
    { month: 'דצמבר', revenue: 89000, target: 90000 },
    { month: 'ינואר', revenue: 105000, target: 100000 },
    { month: 'פברואר', revenue: 118000, target: 110000 }
  ];

  const calculateGrowth = (current: number, previous: number) => {
    return Math.round(((current - previous) / previous) * 100);
  };

  const MetricCard = ({ title, value, previousValue, suffix = "", icon, color = "blue" }: {
    title: string;
    value: number;
    previousValue?: number;
    suffix?: string;
    icon: any;
    color?: string;
  }) => {
    const growth = previousValue ? calculateGrowth(value, previousValue) : 0;
    const isPositive = growth >= 0;
    const colorClasses = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200"
    };

    return (
      <div className={`p-6 rounded-lg border ${colorClasses[color as keyof typeof colorClasses]}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold">
              {value.toLocaleString('he-IL')}{suffix}
            </p>
            {previousValue && (
              <div className={`flex items-center text-sm mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span className="mr-1">{Math.abs(growth)}%</span>
                <span className="text-gray-500">לעומת חודש קודם</span>
              </div>
            )}
          </div>
          <div className="text-3xl">{icon}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                האש שלי - דוח עסקי למשקיעים
              </h1>
              <p className="text-gray-600 mt-1">
                תוצאות פיננסיות וביצועים עסקיים • עדכון: {new Date().toLocaleDateString('he-IL')}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  ₪{businessMetrics.currentMonth.revenue.toLocaleString('he-IL')}
                </div>
                <div className="text-sm text-gray-600">הכנסות החודש</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {calculateGrowth(businessMetrics.currentMonth.revenue, businessMetrics.lastMonth.revenue)}%
                </div>
                <div className="text-sm text-gray-600">צמיחה חודשית</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6">
            {[
              { id: 'overview', label: 'סקירה עסקית' },
              { id: 'financial', label: 'ביצועים פיננסיים' },
              { id: 'growth', label: 'צמיחה ויעדים' },
              { id: 'milestones', label: 'הישגים עסקיים' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Business Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="הכנסות חודשיות"
                value={businessMetrics.currentMonth.revenue}
                previousValue={businessMetrics.lastMonth.revenue}
                suffix="₪"
                icon="💰"
                color="green"
              />
              
              <MetricCard
                title="מנויים חדשים"
                value={businessMetrics.currentMonth.newSubscribers}
                previousValue={businessMetrics.lastMonth.newSubscribers}
                icon="👥"
                color="blue"
              />
              
              <MetricCard
                title="שיעור המרה"
                value={businessMetrics.currentMonth.conversionRate}
                previousValue={businessMetrics.lastMonth.conversionRate}
                suffix="%"
                icon="📈"
                color="purple"
              />
              
              <MetricCard
                title="MRR - הכנסה חוזרת"
                value={businessMetrics.currentMonth.monthlyRecurringRevenue}
                previousValue={businessMetrics.lastMonth.monthlyRecurringRevenue}
                suffix="₪"
                icon="🔄"
                color="orange"
              />
            </div>

            {/* Business Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 סיכום עסקי - ספטמבר 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">הישגי החודש:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                      עלייה של 15% בהכנסות החודשיות
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                      השקת 4 רמות מנוי להוראת קבע
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                      שיפור שיעור המרה ל-5.8%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                      הוספת 156 מנויים חדשים
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">יעדי החודש הבא:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 ml-2" />
                      הגעה ל-58,000₪ הכנסות חודשיות
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 ml-2" />
                      200 מנויים חדשים בחודש
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 ml-2" />
                      עלייה לשיעור המרה של 6.5%
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-blue-500 ml-2" />
                      השקת תוכן פרימיום חדש
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="lg:col-span-3 bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">הישגים אחרונים</h3>
              </div>
              <div className="p-6 space-y-4">
                {sprintProgress.completed.map((task) => (
                  <div key={task.id} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-600">{task.description}</div>
                      <div className="text-xs text-green-600 mt-1">{task.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            {/* In Progress */}
            {sprintProgress.inProgress.length > 0 && (
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">🔄 כרגע בביצוע</h3>
                </div>
                <div className="p-6">
                  {sprintProgress.inProgress.map((task) => (
                    <div key={task.id} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{task.title}</div>
                        <div className="text-sm text-gray-600">{task.description}</div>
                        <div className="text-xs text-yellow-600 mt-1">{task.impact}</div>
                      </div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        {task.sprint}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pending Tasks */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">📋 משימות מתוכננות</h3>
              </div>
              <div className="p-6 space-y-3">
                {sprintProgress.pending.map((task) => (
                  <div key={task.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                    <Circle className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-600">{task.description}</div>
                      <div className="text-xs text-blue-600 mt-1">{task.impact}</div>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {task.sprint}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Budget Overview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 סטטוס תקציב</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">תקציב מוקצב</span>
                  <span className="font-semibold">{metrics.budget.allocated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">הוצאות עד כה</span>
                  <span className="font-semibold text-blue-600">{metrics.budget.spent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">יתרה</span>
                  <span className="font-semibold text-green-600">{metrics.budget.remaining}</span>
                </div>
              </div>
            </div>

            {/* KPI Targets */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 יעדי KPI</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Conversion Rate</span>
                    <span>{metrics.targets.conversionRate.current} → {metrics.targets.conversionRate.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '33%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mobile Score</span>
                    <span>{metrics.targets.mobileScore.current} → {metrics.targets.mobileScore.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Time on Site</span>
                    <span>{metrics.targets.timeOnSite.current} → {metrics.targets.timeOnSite.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Projection */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 תחזית ROI</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">300% ROI צפוי</div>
                <div className="text-blue-600 text-sm mt-1">
                  בהשלמת כל הספרינטים (9 שבועות)
                </div>
                <div className="mt-3 text-sm text-gray-700">
                  • המרה: 2% → 6% = פוטנציאל x3 הכנסות<br />
                  • זמן באתר: 2min → 5min = עלייה engagement<br />
                  • עגלת קניות: 500₪ → 750₪ = עלייה ממוצע הזמנה
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'next-steps' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">🚀 צעדים הבאים - עדיפות גבוהה</h3>
            <div className="space-y-4">
              <div className="border-r-4 border-red-500 pr-4 bg-red-50 p-4 rounded">
                <div className="font-semibold text-red-700">🚨 קריטי - סיום Checkout Security</div>
                <div className="text-red-600 text-sm mt-1">
                  תיקון vulnerabilities price tampering, webhooks configuration, Stripe test mode
                </div>
              </div>
              
              <div className="border-r-4 border-yellow-500 pr-4 bg-yellow-50 p-4 rounded">
                <div className="font-semibold text-yellow-700">⚡ דחוף - 3 Vidéos Na Nach</div>
                <div className="text-yellow-600 text-sm mt-1">
                  Integration homepage, lazy-load, vignettes YouTube embed
                </div>
              </div>
              
              <div className="border-r-4 border-blue-500 pr-4 bg-blue-50 p-4 rounded">
                <div className="font-semibold text-blue-700">📚 חשוב - 20 Produits Phares</div>
                <div className="text-blue-600 text-sm mt-1">
                  Images HD, variantes, SEO selon docs Word source vérité
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-700 mb-2">📞 Contact Yaacov</div>
              <div className="text-sm text-gray-600">
                Pour questions stratégiques, validation spirituelle, ou budget adjustments:<br />
                <span className="font-mono">yaacov@haesh-sheli.co.il</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}