import { Star, Users, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  {
    icon: Star,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-50',
    value: '4.9★',
    label: '平均評分',
    sub: '來自 1,000+ 則評論',
  },
  {
    icon: Users,
    iconColor: 'text-[#1DB8A0]',
    iconBg: 'bg-teal-50',
    value: '8,000+',
    label: '服務毛孩',
    sub: '自 2005 年至今',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    value: '認證',
    label: '專科獸醫師',
    sub: '國際獸醫學會認證',
  },
  {
    icon: Clock,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-50',
    value: '24/7',
    label: '緊急醫療',
    sub: '全天候緊急處置',
  },
];

export function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 py-5 px-4 md:px-8 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 ${stat.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 leading-tight">{stat.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
