import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import translations from '../i18n/translations';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang } = useLang();
  const t = translations[lang];

  const navLinks = [
    { label: t.nav_home,     href: '/' },
    { label: t.nav_services, href: '/services' },
    { label: t.nav_team,     href: '/team' },
    { label: t.nav_contact,  href: '/contact' },
  ];

  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-[#1DB8A0] rounded-full flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <ellipse cx="5" cy="6" rx="2" ry="2.5" fill="white" />
                <ellipse cx="19" cy="6" rx="2" ry="2.5" fill="white" />
                <ellipse cx="9" cy="3" rx="1.5" ry="2" fill="white" />
                <ellipse cx="15" cy="3" rx="1.5" ry="2" fill="white" />
                <path d="M12 10c-4 0-7 3-7 7 0 2 1 3 2.5 3 1 0 2-1 4.5-1s3.5 1 4.5 1C18 20 19 19 19 17c0-4-3-7-7-7z" fill="white" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-bold text-gray-900 tracking-tight">PawCare</div>
              <div className="text-[10px] text-[#1DB8A0] uppercase tracking-widest font-medium">
                {lang === 'en' ? 'Pet Veterinary Clinic' : '寵物醫療診所'}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? 'text-[#1DB8A0]' : 'text-gray-600 hover:text-[#1DB8A0]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1DB8A0] transition-colors px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#1DB8A0]"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{lang === 'en' ? 'EN' : '中文'}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400 text-xs">{lang === 'en' ? '中文' : 'EN'}</span>
            </button>
            <Link
              to="/contact"
              className="bg-[#1DB8A0] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#17a08b] transition-colors shadow-sm"
            >
              {t.book_appt}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                    isActive
                      ? 'text-[#1DB8A0] bg-teal-50'
                      : 'text-gray-600 hover:text-[#1DB8A0] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 px-3 flex flex-col gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center justify-center gap-2 text-sm text-gray-600 font-medium border border-gray-200 py-2 rounded-full hover:border-[#1DB8A0] hover:text-[#1DB8A0] transition-colors"
              >
                <Globe className="w-4 h-4" />
                {lang === 'en' ? '切換中文' : 'Switch to EN'}
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#1DB8A0] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#17a08b] transition-colors"
              >
                {t.book_appt}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
