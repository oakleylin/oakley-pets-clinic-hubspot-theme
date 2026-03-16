import { useState } from 'react';
import { Link } from 'react-router';
import {
  MapPin, Phone, Mail, Zap, ChevronRight, ArrowRight,
  CheckCircle, ExternalLink
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import translations from '../i18n/translations';

/* ─── Step Indicator ─────────────────────────────────────────── */
function StepIndicator({ step, t }: { step: 1 | 2; t: typeof translations['en'] }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-7">
      <div className="flex items-center gap-2">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
          step === 1 ? 'bg-[#1DB8A0] border-[#1DB8A0] text-white' : 'bg-[#1DB8A0] border-[#1DB8A0] text-white'
        }`}>
          {step === 2 ? <CheckCircle className="w-4 h-4" /> : '1'}
        </div>
        <span className={`text-sm font-semibold ${step === 1 ? 'text-gray-800' : 'text-gray-400'}`}>
          {t.contact_step1}
        </span>
      </div>
      <div className="w-16 h-px bg-gray-200 mx-3" />
      <div className="flex items-center gap-2">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
          step === 2 ? 'bg-[#1DB8A0] border-[#1DB8A0] text-white' : 'border-gray-300 text-gray-400 bg-white'
        }`}>
          2
        </div>
        <span className={`text-sm font-semibold ${step === 2 ? 'text-gray-800' : 'text-gray-400'}`}>
          {t.contact_step2}
        </span>
      </div>
    </div>
  );
}

const inputCls = 'w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] placeholder-gray-400 transition-colors';
const labelCls = 'block text-xs text-gray-600 font-medium mb-1.5';

/* ─── Main Page ─────────────────────────────────────────────── */
export function ContactPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];

  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', petType: '', petName: '',
    service: '', date: '', time: '', notes: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const CLINIC_HOURS = [
    { day: t.contact_mon, hours: '9:00 AM – 7:00 PM', isToday: true },
    { day: t.contact_tue, hours: '9:00 AM – 7:00 PM' },
    { day: t.contact_wed, hours: '9:00 AM – 7:00 PM' },
    { day: t.contact_thu, hours: '9:00 AM – 7:00 PM' },
    { day: t.contact_fri, hours: '9:00 AM – 5:00 PM' },
    { day: t.contact_sat, hours: '9:00 AM – 5:00 PM' },
    { day: t.contact_sun, hours: t.contact_emg_only, emergency: true },
  ];

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link to="/" className="hover:text-[#1DB8A0] transition-colors">{t.bc_home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600">{t.bc_contact}</span>
          </div>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-8 right-32 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3.5 py-1.5 rounded-full mb-5">
            {t.contact_pill}
          </div>
          <h1 className="text-white mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: 700 }}>
            {t.contact_h1}
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
            {t.contact_desc}
          </p>
        </div>
      </div>

      {/* ── Get In Touch + Clinic Hours ── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left — Get In Touch */}
            <div>
              <h2 className="text-gray-900 mb-1" style={{ fontSize: '1.45rem', fontWeight: 400 }}>
                {t.contact_get_touch}
              </h2>
              <p className="text-gray-500 mb-6" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                {t.contact_get_sub}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 bg-[#F9FAFB] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin style={{ width: 18, height: 18 }} className="text-[#1DB8A0]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{t.contact_visit}</div>
                    <div className="text-gray-800 text-sm font-semibold">456 Paw Avenue, Suite 1</div>
                    <div className="text-gray-500 text-xs">Pet Town, CA 90210</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F9FAFB] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone style={{ width: 18, height: 18 }} className="text-[#1DB8A0]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{t.contact_call}</div>
                    <div className="text-gray-800 text-sm font-semibold">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F9FAFB] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail style={{ width: 18, height: 18 }} className="text-[#1DB8A0]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{t.contact_email_lbl}</div>
                    <div className="text-gray-800 text-sm font-semibold">hello@pawclinic.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F9FAFB] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap style={{ width: 18, height: 18 }} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{t.contact_emg_lbl}</div>
                    <div className="text-gray-800 text-sm font-semibold">{t.contact_emg_val}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Clinic Hours */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-[#F9FAFB]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                  {t.contact_hours_title}
                </h3>
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  {t.contact_open_today}
                </span>
              </div>

              <div className="divide-y divide-gray-50">
                {CLINIC_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className={`flex items-center justify-between px-5 py-3 ${row.isToday ? 'bg-teal-50/60' : ''}`}
                  >
                    <span className={`text-sm ${row.isToday ? 'text-[#1DB8A0] font-bold' : 'text-gray-600 font-medium'}`}>
                      {row.isToday ? `● ${row.day} (${t.contact_today})` : row.day}
                    </span>
                    <span className={`text-sm ${row.emergency ? 'text-red-400 font-semibold' : row.isToday ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mx-4 mb-4 mt-3 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                <p className="text-xs text-red-500" style={{ lineHeight: 1.55 }}>
                  <span className="font-semibold">{t.contact_emg_note}{' '}</span>
                  <a href="tel:5559990000" className="font-bold underline">(555) 999-0000</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="relative bg-gray-100" style={{ height: 380 }}>
        <iframe
          title="PawClinic Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-118.3500%2C34.0500%2C-118.3300%2C34.0650&layer=mapnik&marker=34.0580%2C-118.3400"
          className="w-full h-full border-0"
          style={{ filter: 'saturate(0.85)' }}
        />

        <div className="absolute top-5 left-5 bg-white rounded-xl shadow-lg border border-gray-100 p-4 max-w-[220px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 bg-[#1DB8A0] rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-900 text-xs font-bold leading-tight">PawClinic Veterinary Clinic</span>
          </div>
          <p className="text-gray-500 text-xs mb-3 leading-snug">456 Paw Avenue, Suite 1, Pet Town, CA 90010</p>
          <div className="flex flex-col gap-1.5">
            <a
              href="https://maps.google.com/?q=456+Paw+Avenue+Pet+Town+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#1DB8A0] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#17a08b] transition-colors"
            >
              <MapPin className="w-3 h-3" /> {t.contact_directions}
            </a>
            <a
              href="https://maps.google.com/?q=456+Paw+Avenue+Pet+Town+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 border border-gray-200 text-gray-600 text-xs font-semibold py-2 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="w-3 h-3" /> {t.contact_gmaps}
            </a>
          </div>
        </div>

        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 bg-white/80 px-2 py-0.5 rounded whitespace-nowrap">
          {t.contact_map_note}
        </p>
      </section>

      {/* ── Booking Form ── */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 text-[#1DB8A0] text-xs font-semibold">
              {t.contact_form_badge}
            </span>
          </div>

          <h2 className="text-gray-900 text-center mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', fontWeight: 700 }}>
            {t.contact_form_title}
          </h2>
          <p className="text-gray-500 text-center mb-8 whitespace-pre-line" style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>
            {t.contact_form_desc}
          </p>

          {submitted ? (
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-12 text-center">
              <div className="w-14 h-14 bg-[#1DB8A0] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.1rem', fontWeight: 700 }}>{t.contact_success_h}</h3>
              <p className="text-gray-500 text-sm mb-6">{t.contact_success_p}</p>
              <button
                onClick={() => { setSubmitted(false); setStep(1); }}
                className="text-[#1DB8A0] text-sm font-semibold hover:underline"
              >
                {t.contact_success_btn}
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <StepIndicator step={step} t={t} />

              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>{t.contact_fullname}</label>
                      <input type="text" placeholder="Jane Smith" value={form.fullName} onChange={set('fullName')} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>{t.contact_phone}</label>
                      <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={set('phone')} className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>{t.contact_email}</label>
                    <input type="email" placeholder="example@gmail.com" value={form.email} onChange={set('email')} className={inputCls} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>{t.contact_pet_type}</label>
                      <select value={form.petType} onChange={set('petType')} className={`${inputCls} text-gray-500 appearance-none`}>
                        <option value="">{t.contact_select_pet}</option>
                        <option>{t.contact_dog}</option>
                        <option>{t.contact_cat}</option>
                        <option>{t.contact_rabbit}</option>
                        <option>{t.contact_bird}</option>
                        <option>{t.contact_hamster}</option>
                        <option>{t.contact_other}</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>{t.contact_pet_name}</label>
                      <input type="text" placeholder="Buddy" value={form.petName} onChange={set('petName')} className={inputCls} />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center gap-2 bg-[#1DB8A0] text-white font-semibold py-3 rounded-full hover:bg-[#17a08b] transition-colors mt-2"
                  >
                    {t.contact_next} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>{t.contact_date}</label>
                      <input type="date" value={form.date} onChange={set('date')} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>{t.contact_time}</label>
                      <select value={form.time} onChange={set('time')} className={`${inputCls} text-gray-500 appearance-none`}>
                        <option value="">{t.contact_select_time}</option>
                        {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(t2 => (
                          <option key={t2} value={t2}>{t2}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>{t.contact_service}</label>
                    <select value={form.service} onChange={set('service')} className={`${inputCls} text-gray-500 appearance-none`}>
                      <option value="">{t.contact_select_svc}</option>
                      <option>{t.contact_svc1}</option>
                      <option>{t.contact_svc2}</option>
                      <option>{t.contact_svc3}</option>
                      <option>{t.contact_svc4}</option>
                      <option>{t.contact_svc5}</option>
                      <option>{t.contact_svc6}</option>
                      <option>{t.contact_svc7}</option>
                      <option>{t.contact_svc8}</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>{t.contact_notes}</label>
                    <textarea
                      rows={3}
                      placeholder={t.contact_notes_ph}
                      value={form.notes}
                      onChange={set('notes')}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 text-sm border border-gray-200 text-gray-600 font-semibold rounded-full hover:bg-gray-50 transition-colors"
                    >
                      {t.contact_back}
                    </button>
                    <button
                      onClick={() => setSubmitted(true)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#1DB8A0] text-white font-semibold py-3 rounded-full hover:bg-[#17a08b] transition-colors"
                    >
                      {t.contact_submit} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              <p className="text-center text-[11px] text-gray-400 mt-5">
                {t.contact_privacy}{' '}
                <span className="text-[#1DB8A0] font-semibold">{t.contact_powered}</span>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
