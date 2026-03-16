import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import translations from '../i18n/translations';

export function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  const navLinks = [
    { label: t.nav_home,     to: '/' },
    { label: t.nav_services, to: '/services' },
    { label: t.nav_team,     to: '/team' },
    { label: t.nav_contact,  to: '/contact' },
  ];

  const hours = [
    { day: t.footer_mon_fri, time: '9:00 AM – 9:00 PM' },
    { day: t.footer_sat,     time: '9:00 AM – 6:00 PM' },
    { day: t.footer_sun,     time: '10:00 AM – 4:00 PM' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 py-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#1DB8A0] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="5" cy="6" rx="2" ry="2.5" fill="white" />
                  <ellipse cx="19" cy="6" rx="2" ry="2.5" fill="white" />
                  <ellipse cx="9" cy="3" rx="1.5" ry="2" fill="white" />
                  <ellipse cx="15" cy="3" rx="1.5" ry="2" fill="white" />
                  <path d="M12 10c-4 0-7 3-7 7 0 2 1 3 2.5 3 1 0 2-1 4.5-1s3.5 1 4.5 1C18 20 19 19 19 17c0-4-3-7-7-7z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">PawCare</div>
                <div className="text-[10px] text-[#1DB8A0] uppercase tracking-widest">
                  {lang === 'en' ? 'Pet Veterinary Clinic' : '寵物醫療診所'}
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">{t.footer_tagline}</p>
            <div className="flex gap-2.5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1DB8A0] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer_nav}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-[#1DB8A0] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer_contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1DB8A0] mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.footer_addr}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1DB8A0] flex-shrink-0" />
                <span className="text-sm">(02) 2345-6789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">{t.footer_emg}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1DB8A0] flex-shrink-0" />
                <span className="text-sm">hello@pawcare.vet</span>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">{t.footer_hours}</h4>
            <ul className="space-y-2">
              {hours.map((h) => (
                <li key={h.day}>
                  <div className="text-xs text-gray-500 font-medium">{h.day}</div>
                  <div className="text-sm text-gray-300">{h.time}</div>
                </li>
              ))}
              <li className="mt-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs text-red-400 font-medium">{t.footer_emergency}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-3">
          <p className="text-xs text-gray-500">{t.footer_copy}</p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a href="#" className="hover:text-[#1DB8A0] transition-colors">{t.footer_privacy}</a>
            <a href="#" className="hover:text-[#1DB8A0] transition-colors">{t.footer_terms}</a>
            <a href="#" className="hover:text-[#1DB8A0] transition-colors">{t.footer_cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
