import { useState } from 'react';
import { Link } from 'react-router';
import {
  Stethoscope, Syringe, Scissors, Zap, BedDouble, Heart, Microscope,
  Star, Users, ShieldCheck, Clock, ArrowRight, CheckCircle,
  ChevronLeft, ChevronRight, Phone, Leaf
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLang } from '../context/LanguageContext';
import translations from '../i18n/translations';

/* ─── Types ─────────────────────────────────────────────────── */
type Category = 'All' | 'Wellness' | 'Dental' | 'Emergency' | 'Surgery' | 'Specialty' | 'Diagnosis';

const PAGE_SIZE = 4;

/* ─── Service Card ───────────────────────────────────────────── */
type ServiceItem = {
  title: string; category: Category; tag: string; popular: boolean;
  icon: React.ElementType; iconColor: string; iconBg: string;
  time: string; desc: string; img: string;
};

function ServiceCard({ svc }: { svc: ServiceItem }) {
  const { lang } = useLang();
  const t = translations[lang];
  const Icon = svc.icon;
  return (
    <div className="group flex bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300" style={{ minHeight: 200 }}>
      <div className="relative w-44 sm:w-56 flex-shrink-0 overflow-hidden">
        <ImageWithFallback
          src={svc.img}
          alt={svc.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
        <span className="absolute top-2.5 left-2.5 bg-[#1DB8A0] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
          {svc.tag}
        </span>
        {svc.popular && (
          <span className="absolute top-2.5 right-2.5 bg-orange-400 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {t.svc_popular}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between p-6 flex-1 min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <h3 className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 700 }}>{svc.title}</h3>
            <div className={`w-8 h-8 ${svc.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-4 h-4 ${svc.iconColor}`} />
            </div>
          </div>
          <p className="text-gray-500 mb-4" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{svc.desc}</p>
          {svc.time !== 'None' && svc.time !== 'Varies' && (
            <div className="flex items-center gap-1 mb-4">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-gray-400 text-xs">{svc.time}</span>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 text-[#1DB8A0] text-sm font-semibold transition-all border border-[#1DB8A0]/40 px-6 py-2 rounded-full w-full hover:bg-teal-50"
        >
          {t.svc_book} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [page, setPage] = useState(1);
  const { lang } = useLang();
  const t = translations[lang];

  /* Category labels mapped to data keys */
  const CATEGORIES: { key: Category; label: string }[] = [
    { key: 'All',       label: t.svc_all },
    { key: 'Wellness',  label: t.svc_wellness },
    { key: 'Dental',    label: t.svc_dental },
    { key: 'Emergency', label: t.svc_emergency },
    { key: 'Surgery',   label: t.svc_surgery },
    { key: 'Specialty', label: t.svc_specialty },
    { key: 'Diagnosis', label: t.svc_diagnosis },
  ];

  const ALL_SERVICES: ServiceItem[] = [
    {
      title: t.svc_d1_title, category: 'Wellness', tag: t.svc_wellness, popular: true,
      icon: Stethoscope, iconColor: 'text-[#1DB8A0]', iconBg: 'bg-teal-50',
      time: '30 min', desc: t.svc_d1_desc,
      img: 'https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB3ZWxsbmVzcyUyMGV4YW0lMjB2ZXRlcmluYXJ5JTIwY2hlY2t1cHxlbnwxfHx8fDE3NzM2MjY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d2_title, category: 'Wellness', tag: t.svc_wellness, popular: true,
      icon: Syringe, iconColor: 'text-green-500', iconBg: 'bg-green-50',
      time: '15 min', desc: t.svc_d2_desc,
      img: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB2YWNjaW5hdGlvbiUyMGluamVjdGlvbiUyMHZldGVyaW5hcnklMjBjbGluaWN8ZW58MXx8fHwxNzczNjI3MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d3_title, category: 'Dental', tag: t.svc_dental, popular: true,
      icon: Scissors, iconColor: 'text-blue-500', iconBg: 'bg-blue-50',
      time: '60 min', desc: t.svc_d3_desc,
      img: 'https://images.unsplash.com/photo-1606619788441-a9a360e8f685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBkZW50YWwlMjBjbGVhbmluZyUyMHZldGVyaW5hcnklMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc3MzYyNjc3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d4_title, category: 'Emergency', tag: t.svc_emergency, popular: true,
      icon: Zap, iconColor: 'text-orange-500', iconBg: 'bg-orange-50',
      time: 'None', desc: t.svc_d4_desc,
      img: 'https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjB2ZXRlcmluYXJ5JTIwY2FyZSUyMGFuaW1hbCUyMGhvc3BpdGFsfGVufDF8fHx8MTc3MzYyNjc3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d5_title, category: 'Surgery', tag: t.svc_surgery, popular: false,
      icon: Heart, iconColor: 'text-red-500', iconBg: 'bg-red-50',
      time: '90 min', desc: t.svc_d5_desc,
      img: 'https://images.unsplash.com/photo-1770836037326-d2df574278b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBzdXJnZXJ5JTIwdmV0ZXJpbmFyeSUyMG9wZXJhdGluZyUyMHJvb20lMjBhbmVzdGhlc2lhfGVufDF8fHx8MTc3MzYyNzI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d6_title, category: 'Specialty', tag: t.svc_specialty, popular: false,
      icon: Heart, iconColor: 'text-pink-500', iconBg: 'bg-pink-50',
      time: '45 min', desc: t.svc_d6_desc,
      img: 'https://images.unsplash.com/photo-1639143179508-9af61af32604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBjYXQlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM2MjY3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d7_title, category: 'Diagnosis', tag: t.svc_diagnosis, popular: false,
      icon: Microscope, iconColor: 'text-purple-500', iconBg: 'bg-purple-50',
      time: '30 min', desc: t.svc_d7_desc,
      img: 'https://images.unsplash.com/photo-1727510152683-a212cf8e49ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwdWx0cmFzb3VuZCUyMGRpYWdub3N0aWMlMjBpbWFnaW5nJTIwY2F0fGVufDF8fHx8MTc3MzYyNzI2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d8_title, category: 'Specialty', tag: t.svc_specialty, popular: false,
      icon: BedDouble, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-50',
      time: 'Varies', desc: t.svc_d8_desc,
      img: 'https://images.unsplash.com/photo-1770836037816-4445dbd449fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwZXhhbWluYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMzg2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d9_title, category: 'Wellness', tag: t.svc_wellness, popular: false,
      icon: Leaf, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50',
      time: '45 min', desc: t.svc_d9_desc,
      img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGJhdGglMjBiZWF1dHklMjBzYWxvbnxlbnwxfHx8fDE3NzM2MjcyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: t.svc_d10_title, category: 'Surgery', tag: t.svc_surgery, popular: false,
      icon: Stethoscope, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50',
      time: '120 min', desc: t.svc_d10_desc,
      img: 'https://images.unsplash.com/photo-1623281124892-4e34a9de2277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwb3J0aG9wZWRpYyUyMHN1cmdlcnklMjBkb2d8ZW58MXx8fHwxNzczNjI3MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const stats = [
    { icon: Star,        color: 'text-yellow-400', bg: 'bg-yellow-50', value: '4.9★', label: t.stat_rating_label,    sub: t.stat_rating_sub,    valueColor: 'text-yellow-400' },
    { icon: Users,       color: 'text-[#1DB8A0]',  bg: 'bg-teal-50',  value: '8,000+',label: t.stat_patients_label2,sub: t.stat_patients_sub,  valueColor: 'text-[#1DB8A0]' },
    { icon: ShieldCheck, color: 'text-blue-500',   bg: 'bg-blue-50',  value: 'Board', label: t.stat_vets_label,      sub: t.stat_vets_sub,      valueColor: 'text-blue-500' },
    { icon: Clock,       color: 'text-red-400',    bg: 'bg-red-50',   value: '24/7',  label: t.stat_emg_label,       sub: t.stat_emg_sub,       valueColor: 'text-red-400' },
  ];

  const filtered = activeTab === 'All' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.category === activeTab);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleTab = (key: Category) => { setActiveTab(key); setPage(1); };
  const catCount = (key: Category) => key === 'All' ? ALL_SERVICES.length : ALL_SERVICES.filter(s => s.category === key).length;

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link to="/" className="hover:text-[#1DB8A0] transition-colors">{t.bc_home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600">{t.bc_services}</span>
          </div>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 overflow-hidden pb-0">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ height: 330, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4 w-fit justify-center">
            <ShieldCheck className="w-3.5 h-3.5" /> {t.svc_pill}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-white mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700 }}>
                {t.svc_h1}
              </h1>
              <p className="text-white/75 max-w-lg" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                {t.svc_desc}
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ height: 180 }}>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 h-full">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-3 px-4 md:px-6 h-full">
                    <div className={`w-10 h-10 ${s.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <div>
                      <div className={`text-xl font-bold leading-tight ${s.valueColor}`}>{s.value}</div>
                      <div className="text-sm font-semibold text-gray-700 leading-tight">{s.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter tabs + Cards ── */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-6 border-b border-gray-100 pb-4">
            {CATEGORIES.map(({ key, label }) => {
              const count = catCount(key);
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => handleTab(key)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive ? 'bg-[#1DB8A0] text-white shadow-sm' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/25 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Count label */}
          <p className="text-xs text-gray-400 mb-4">
            {lang === 'en'
              ? `Showing ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filtered.length)} of ${filtered.length} services · Page ${page} of ${totalPages}`
              : `顯示第 ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filtered.length)} 項，共 ${filtered.length} 項 · 第 ${page} 頁，共 ${totalPages} 頁`
            }
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {paginated.map((svc, i) => (
              <ServiceCard key={`${svc.title}-${i}`} svc={svc} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#1DB8A0] hover:text-[#1DB8A0] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                    p === page ? 'bg-[#1DB8A0] text-white shadow-sm' : 'border border-gray-200 text-gray-500 hover:border-[#1DB8A0] hover:text-[#1DB8A0]'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#1DB8A0] hover:text-[#1DB8A0] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#1DB8A0] text-xs font-semibold mb-4">
                <Leaf className="w-3.5 h-3.5" /> {t.svc_why_pill}
              </div>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', fontWeight: 700 }}>
                {t.svc_why_title}
              </h2>
              <p className="text-gray-500 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                {t.svc_why_desc}
              </p>
              <ul className="space-y-3 mb-8">
                {[t.svc_why_1, t.svc_why_2, t.svc_why_3, t.svc_why_4].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#1DB8A0] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#1DB8A0] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#17a08b] transition-colors shadow-sm"
                >
                  {t.svc_book_appt} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 text-gray-600 font-semibold text-sm px-5 py-2.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-white transition-colors"
                >
                  {t.svc_meet_team}
                </Link>
              </div>
            </div>

            {/* Right — mini stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4.9★', label: t.svc_stat1, sub: t.svc_stat1_sub, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                { value: '8,000+', label: t.svc_stat2, sub: t.svc_stat2_sub, color: 'text-[#1DB8A0]', bg: 'bg-teal-50' },
                { value: '10 yrs', label: t.svc_stat3, sub: t.svc_stat3_sub, color: 'text-blue-500', bg: 'bg-blue-50' },
                { value: '100%', label: t.svc_stat4, sub: t.svc_stat4_sub, color: 'text-[#1DB8A0]', bg: 'bg-teal-50' },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-2xl p-5`}>
                  <div className={`text-2xl font-bold ${s.color} mb-1`}>{s.value}</div>
                  <div className="text-gray-800 text-sm font-semibold">{s.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-16 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {t.svc_cta_pill}
          </div>
          <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700 }}>
            {t.svc_cta_title}
          </h2>
          <p className="text-white/75 mb-8" style={{ fontSize: '0.95rem' }}>
            {t.svc_cta_desc}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1DB8A0] font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-md"
            >
              {t.svc_cta_book} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+13101234567"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/25 transition-colors"
            >
              <Phone className="w-4 h-4" /> {t.svc_cta_call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
