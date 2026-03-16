import { useState } from 'react';
import { Link } from 'react-router';
import {
  Star, Users, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight,
  Stethoscope, Heart, Scissors, Zap, Award,
  CalendarDays, Send, User, Phone, Mail
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLang } from '../context/LanguageContext';
import translations from '../i18n/translations';

/* ─── Hero ─────────────────────────────────────────────────── */
const heroImages = [
  'https://images.unsplash.com/photo-1639143179508-9af61af32604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBjYXQlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM2MjY3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpbmclMjByb29tJTIwdmV0fGVufDF8fHx8MTc3MzM4Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1770836037816-4445dbd449fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwZXhhbWluYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMzg2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

function Hero() {
  const [cur, setCur] = useState(0);
  const { lang } = useLang();
  const t = translations[lang];

  const slides = [
    { tag: t.hero1_tag, title: t.hero1_title, desc: t.hero1_desc, cta: t.hero1_cta, ctaTo: '/contact' },
    { tag: t.hero2_tag, title: t.hero2_title, desc: t.hero2_desc, cta: t.hero2_cta, ctaTo: '/services' },
    { tag: t.hero3_tag, title: t.hero3_title, desc: t.hero3_desc, cta: t.hero3_cta, ctaTo: '/team' },
  ];

  const prev = () => setCur((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCur((c) => (c + 1) % slides.length);
  const s = slides[cur];

  return (
    <section className="relative h-[520px] md:h-[580px] overflow-hidden">
      {heroImages.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === cur ? 'opacity-100' : 'opacity-0'}`}>
          <ImageWithFallback src={img} alt={slides[i].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3.5 py-1.5 rounded-full mb-5">
            {s.tag}
          </div>
          <h1 className="text-white mb-4 whitespace-pre-line" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15 }}>
            {s.title}
          </h1>
          <p className="text-white/80 mb-7 max-w-md" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
            {s.desc}
          </p>
          <Link
            to={s.ctaTo}
            className="inline-flex items-center gap-2 bg-[#1DB8A0] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#17a08b] transition-colors shadow-lg"
          >
            {s.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/20 hover:bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/20 hover:bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} className={`w-2 h-2 rounded-full transition-all ${i === cur ? 'bg-white w-5' : 'bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
}

/* ─── Stats Bar ─────────────────────────────────────────────── */
function StatsBar() {
  const { lang } = useLang();
  const t = translations[lang];

  const stats = [
    { icon: Star,       color: 'text-yellow-400', bg: 'bg-yellow-50', value: '5-Star', label: t.stat_rating_label,   sub: t.stat_rating_sub,   valueColor: 'text-yellow-400' },
    { icon: Users,      color: 'text-[#1DB8A0]',  bg: 'bg-teal-50',  value: '8,000+', label: t.stat_patients_label, sub: t.stat_patients_sub, valueColor: 'text-[#1DB8A0]' },
    { icon: ShieldCheck,color: 'text-blue-500',   bg: 'bg-blue-50',  value: 'Board',  label: t.stat_vets_label,     sub: t.stat_vets_sub,     valueColor: 'text-blue-500' },
    { icon: Clock,      color: 'text-red-400',    bg: 'bg-red-50',   value: '24/7',   label: t.stat_emg_label,      sub: t.stat_emg_sub,      valueColor: 'text-red-400' },
  ];

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100" style={{ height: 180 }}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex items-center gap-3 px-4 md:px-7 hover:bg-gray-50 transition-colors">
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
  );
}

/* ─── Services ──────────────────────────────────────────────── */
function ServicesSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const services = [
    { icon: Stethoscope, title: t.home_svc1_title, desc: t.home_svc1_desc, iconColor: 'text-[#1DB8A0]', iconBg: 'bg-teal-50',
      img: 'https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB3ZWxsbmVzcyUyMGV4YW0lMjB2ZXRlcmluYXJ5JTIwY2hlY2t1cHxlbnwxfHx8fDE3NzM2MjY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { icon: Heart,       title: t.home_svc2_title, desc: t.home_svc2_desc, iconColor: 'text-red-500',    iconBg: 'bg-red-50',
      img: 'https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpbmclMjByb29tJTIwdmV0fGVufDF8fHx8MTc3MzM4Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { icon: Scissors,    title: t.home_svc3_title, desc: t.home_svc3_desc, iconColor: 'text-blue-500',   iconBg: 'bg-blue-50',
      img: 'https://images.unsplash.com/photo-1606619788441-a9a360e8f685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBkZW50YWwlMjBjbGVhbmluZyUyMHZldGVyaW5hcnklMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc3MzYyNjc3OXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { icon: Zap,         title: t.home_svc4_title, desc: t.home_svc4_desc, iconColor: 'text-orange-500', iconBg: 'bg-orange-50',
      img: 'https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjB2ZXRlcmluYXJ5JTIwY2FyZSUyMGFuaW1hbCUyMGhvc3BpdGFsfGVufDF8fHx8MTc3MzYyNjc3OXww&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-[#1DB8A0] rounded-full" />
            {t.home_svc_pill}
          </div>
          <h2 className="text-gray-900 mb-2" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700 }}>
            {t.home_svc_title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '0.9rem' }}>
            {t.home_svc_desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-36 overflow-hidden">
                  <ImageWithFallback src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-4">
                  <div className={`w-8 h-8 ${svc.iconBg} rounded-lg flex items-center justify-center mb-2.5`}>
                    <Icon className={`w-4 h-4 ${svc.iconColor}`} />
                  </div>
                  <h3 className="text-gray-900 mb-1.5" style={{ fontSize: '0.95rem', fontWeight: 700 }}>{svc.title}</h3>
                  <p className="text-gray-500 mb-3" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>{svc.desc}</p>
                  <Link to="/services" className="flex items-center gap-1 text-[#1DB8A0] text-xs font-semibold hover:gap-2 transition-all">
                    {t.home_svc_read_more} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#1DB8A0] font-semibold text-sm hover:gap-3 transition-all border border-[#1DB8A0] px-5 py-2 rounded-full hover:bg-teal-50">
            {t.home_svc_view_all} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Team ──────────────────────────────────────────────────── */
const doctorImgs = [
  'https://images.unsplash.com/photo-1676285773909-c19b900d3f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjJkb2N0b3IlMjJ3aGl0ZSUyMGNvYXQlMjJwb3J0cmFpdHxlbnwxfHx8fDE3NzMzODY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1640161415278-a5ac46f82d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBzcGVjaWFsaXN0JTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBjbGluaWN8ZW58MXx8fHwxNzczNjI2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1736289173074-df6009da27c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMGRvY3RvciUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzODY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdmV0ZXJpbmFyaWFuJTIwZG9jdG9yJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzM4Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
];
const doctorNames  = ['Dr. Emily Chen', 'Dr. Jason Lin', 'Dr. Amanda Ward', 'Dr. Shirley Brown'];
const doctorExps   = ['20 yrs exp', '15 yrs exp', '10 yrs exp', '12 yrs exp'];

function TeamSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const doctors = [
    { name: doctorNames[0], title: t.doc1_title, specialty: t.doc1_spec, exp: doctorExps[0], img: doctorImgs[0] },
    { name: doctorNames[1], title: t.doc2_title, specialty: t.doc2_spec, exp: doctorExps[1], img: doctorImgs[1] },
    { name: doctorNames[2], title: t.doc3_title, specialty: t.doc3_spec, exp: doctorExps[2], img: doctorImgs[2] },
    { name: doctorNames[3], title: t.doc4_title, specialty: t.doc4_spec, exp: doctorExps[3], img: doctorImgs[3] },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-[#1DB8A0] rounded-full" />
            {t.home_team_pill}
          </div>
          <h2 className="text-gray-900 mb-2" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700 }}>
            {t.home_team_title}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto" style={{ fontSize: '0.9rem' }}>
            {t.home_team_desc}
          </p>
          <div className="flex justify-end mt-2">
            <Link to="/team" className="hidden sm:flex items-center gap-1.5 text-[#1DB8A0] font-semibold text-sm hover:gap-2.5 transition-all whitespace-nowrap">
              {t.home_team_view_all} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.map((doc, i) => (
            <div key={i} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <ImageWithFallback src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-[#1DB8A0] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {doc.exp}
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-bold" style={{ fontSize: '0.95rem' }}>{doc.name}</div>
                  <div className="text-white/75 text-xs">{doc.title}</div>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#1DB8A0]" />
                  <span className="text-gray-500 text-xs">{doc.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Appointment Form ──────────────────────────────────────── */
function AppointmentSection() {
  const [tab, setTab] = useState<'details' | 'appointment'>('details');
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#1DB8A0] rounded-full" />
              {t.home_appt_pill}
            </div>
            <h2 className="text-gray-900 mb-2" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700 }}>{t.home_appt_title}</h2>
            <p className="text-gray-500" style={{ fontSize: '0.9rem' }}>{t.home_appt_desc}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {(['details', 'appointment'] as const).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setTab(tabKey)}
                  className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                    tab === tabKey ? 'text-[#1DB8A0] border-b-2 border-[#1DB8A0]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tabKey === 'details' ? (
                    <span className="flex items-center justify-center gap-2"><User className="w-4 h-4" /> {t.home_appt_tab_details}</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2"><CalendarDays className="w-4 h-4" /> {t.home_appt_tab_appt}</span>
                  )}
                </button>
              ))}
            </div>

            <div className="p-7">
              {tab === 'details' ? (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_fname}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_lname}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_phone}</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="tel" className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_email}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0]" />
                    </div>
                  </div>
                  <button onClick={() => setTab('appointment')} className="w-full flex items-center justify-center gap-2 bg-[#1DB8A0] text-white font-semibold py-3 rounded-lg hover:bg-[#17a08b] transition-colors">
                    {t.home_appt_next} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_pet_name}</label>
                    <input type="text" className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0]" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_pet_type}</label>
                      <select className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] text-gray-600 appearance-none">
                        <option value="">{t.home_appt_select_pet}</option>
                        <option>{t.home_appt_dog}</option>
                        <option>{t.home_appt_cat}</option>
                        <option>{t.home_appt_rabbit}</option>
                        <option>{t.home_appt_bird}</option>
                        <option>{t.home_appt_other}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_date}</label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input type="date" className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] text-gray-600" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5">{t.home_appt_service}</label>
                    <select className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] text-gray-600 appearance-none">
                      <option value="">{t.home_appt_select_svc}</option>
                      <option>{t.home_appt_svc1}</option>
                      <option>{t.home_appt_svc2}</option>
                      <option>{t.home_appt_svc3}</option>
                      <option>{t.home_appt_svc4}</option>
                      <option>{t.home_appt_svc5}</option>
                      <option>{t.home_appt_svc6}</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setTab('details')} className="flex-1 py-3 text-sm border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                      {t.home_appt_back}
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#1DB8A0] text-white font-semibold py-3 rounded-lg hover:bg-[#17a08b] transition-colors">
                      <Send className="w-4 h-4" /> {t.home_appt_submit}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">{t.home_appt_privacy}</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Page export ───────────────────────────────────────────── */
export function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <TeamSection />
      <AppointmentSection />
    </>
  );
}
