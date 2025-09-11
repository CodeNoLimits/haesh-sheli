import { useState } from 'react';
import { CheckCircle, Circle, Clock, TrendingUp, DollarSign, Users, Star } from 'lucide-react';

export default function YaakovDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // État des tâches basé sur le plan DESIGN_IMPROVEMENT_PLAN.md
  const sprintProgress = {
    completed: [
      {
        id: 'mobile-chrome-fix',
        title: 'Fix Définitif Mobile Chrome',
        description: 'Safe-area backgrounds, suppression gradients chauds, iOS meta',
        status: 'completed',
        sprint: 'Sprint 0',
        impact: 'Critique - UX mobile parfaite'
      },
      {
        id: 'header-navigation',
        title: 'Header/Navigation Stabilisé', 
        description: 'Visibilité cross-breakpoints, RTL cohérent, hamburger fonctionnel',
        status: 'completed',
        sprint: 'Sprint 1A',
        impact: 'Foundation - Navigation mobile parfaite'
      },
      {
        id: 'subscription-system',
        title: 'Système HoRaat Keva Complet',
        description: 'Stripe integration, fallback, CTAs, state persistence (99₪/mois)',
        status: 'completed',
        sprint: 'Sprint 1B', 
        impact: 'Revenue - Abonnements récurrents'
      }
    ],
    inProgress: [
      {
        id: 'checkout-security',
        title: 'Sécurisation Checkout Stripe',
        description: 'Fix vulnérabilités price tampering, webhooks, idempotency',
        status: 'in-progress',
        sprint: 'Sprint 1',
        impact: 'Critique - Sécurité paiements'
      }
    ],
    pending: [
      {
        id: 'videos-na-nach',
        title: 'Vidéos Na Nach Homepage',
        description: '3 vidéos Na Nach, lazy-load, vignettes YouTube embed',
        status: 'pending',
        sprint: 'Sprint 1',
        impact: 'Engagement - Contenu spirituel'
      },
      {
        id: 'breslev-live-page',
        title: 'Page Breslev Live / מדיה',
        description: 'Playlist vidéos, stratégie social, composant multimédia',
        status: 'pending', 
        sprint: 'Sprint 1',
        impact: 'Growth - Écosystème contenu'
      },
      {
        id: 'produits-phares',
        title: '20 Produits Phares Catalogue',
        description: 'Images HD, variantes, SEO selon docs Word source vérité',
        status: 'pending',
        sprint: 'Sprint 1',
        impact: 'Conversion - Catalogue professionnel'
      },
      {
        id: 'recherche-filtres',
        title: 'Recherche Avancée + Filtres',
        description: 'Langue, auteur, format, prix - expérience catalogue',
        status: 'pending',
        sprint: 'Sprint 2', 
        impact: 'UX - Discovery produits'
      }
    ]
  };

  const metrics = {
    budget: {
      allocated: '65,000-85,000 ₪',
      spent: '~20,000 ₪',
      remaining: '45,000-65,000 ₪'
    },
    timeline: {
      totalWeeks: 9,
      completed: 3,
      remaining: 6
    },
    targets: {
      conversionRate: { current: '2%', target: '6%' },
      mobileScore: { current: '60', target: '85+' },
      timeOnSite: { current: '2min', target: '5min' }
    }
  };

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                יעקב חן - דאשבורד התקדמות
              </h1>
              <p className="text-gray-600 mt-1">
                מצב פרויקט האש שלי • עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {sprintProgress.completed.length}/{sprintProgress.completed.length + sprintProgress.inProgress.length + sprintProgress.pending.length}
                </div>
                <div className="text-sm text-gray-600">משימות הושלמו</div>
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
              { id: 'overview', label: 'סקירה כללית' },
              { id: 'progress', label: 'התקדמות ספרינטים' },
              { id: 'budget', label: 'תקציב ומטריקות' },
              { id: 'next-steps', label: 'צעדים הבאים' }
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Status Cards */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div className="mr-4">
                  <div className="text-2xl font-bold text-green-700">{sprintProgress.completed.length}</div>
                  <div className="text-green-600">הושלמו</div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-yellow-600" />
                <div className="mr-4">
                  <div className="text-2xl font-bold text-yellow-700">{sprintProgress.inProgress.length}</div>
                  <div className="text-yellow-600">בביצוע</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center">
                <Circle className="w-8 h-8 text-blue-600" />
                <div className="mr-4">
                  <div className="text-2xl font-bold text-blue-700">{sprintProgress.pending.length}</div>
                  <div className="text-blue-600">ממתינות</div>
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