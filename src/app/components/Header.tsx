import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: '首頁', href: '#home', active: true },
  { label: '服務項目', href: '#services' },
  { label: '醫療團隊', href: '#team' },
  { label: '聯絡我們', href: '#contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('首頁');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-[#1DB8A0] rounded-full flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2.5 6 6 6s6-2.5 6-6c0-3.5-2.5-6-6-6z" fill="white" opacity="0.3"/>
                <ellipse cx="5" cy="6" rx="2" ry="2.5" fill="white"/>
                <ellipse cx="19" cy="6" rx="2" ry="2.5" fill="white"/>
                <ellipse cx="9" cy="3" rx="1.5" ry="2" fill="white"/>
                <ellipse cx="15" cy="3" rx="1.5" ry="2" fill="white"/>
                <path d="M12 10c-4 0-7 3-7 7 0 2 1 3 2.5 3 1 0 2-1 4.5-1s3.5 1 4.5 1C18 20 19 19 19 17c0-4-3-7-7-7z" fill="white"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-bold text-gray-900 tracking-tight">愛心動物醫院</div>
              <div className="text-[10px] text-[#1DB8A0] uppercase tracking-widest font-medium">Pet Veterinary Clinic</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeLink === link.label
                    ? 'text-[#1DB8A0]'
                    : 'text-gray-600 hover:text-[#1DB8A0]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1">
              <Globe className="w-4 h-4" />
              <span className="font-medium">中文</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <a
              href="#contact"
              className="bg-[#1DB8A0] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#17a08b] transition-colors shadow-sm"
            >
              立即預約
            </a>
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                  activeLink === link.label
                    ? 'text-[#1DB8A0] bg-teal-50'
                    : 'text-gray-600 hover:text-[#1DB8A0] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href="#contact"
                className="block w-full text-center bg-[#1DB8A0] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#17a08b] transition-colors"
              >
                立即預約
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
