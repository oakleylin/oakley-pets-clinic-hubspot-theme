import { Facebook, Instagram, Youtube, Phone, MapPin, Mail } from 'lucide-react';

const quickLinks = ['首頁', '服務項目', '醫療團隊', '關於我們', '聯絡我們'];
const serviceLinks = ['健康檢查', '外科手術', '疫苗注射', '美容護理', '住院照護', '緊急醫療'];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-10 py-14 border-b border-gray-800">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#1DB8A0] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="5" cy="6" rx="2" ry="2.5" fill="white"/>
                  <ellipse cx="19" cy="6" rx="2" ry="2.5" fill="white"/>
                  <ellipse cx="9" cy="3" rx="1.5" ry="2" fill="white"/>
                  <ellipse cx="15" cy="3" rx="1.5" ry="2" fill="white"/>
                  <path d="M12 10c-4 0-7 3-7 7 0 2 1 3 2.5 3 1 0 2-1 4.5-1s3.5 1 4.5 1C18 20 19 19 19 17c0-4-3-7-7-7z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">愛心動物醫院</div>
                <div className="text-[10px] text-[#1DB8A0] uppercase tracking-widest">Pet Veterinary Clinic</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              提供專業、溫馨的寵物醫療服務，20年來讓每位毛孩都能得到最好的照顧。
            </p>
            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1DB8A0] transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">快速連結</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-[#1DB8A0] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">服務項目</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-[#1DB8A0] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">聯絡資訊</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1DB8A0] mt-0.5 flex-shrink-0" />
                <span className="text-sm">台北市大安區忠孝東路四段123號</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1DB8A0] flex-shrink-0" />
                <span className="text-sm">02-2345-6789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">緊急：0912-345-678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1DB8A0] flex-shrink-0" />
                <span className="text-sm">service@petcare.com.tw</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-3">
          <p className="text-xs text-gray-500">
            © 2026 愛心動物醫院. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a href="#" className="hover:text-[#1DB8A0] transition-colors">隱私政策</a>
            <a href="#" className="hover:text-[#1DB8A0] transition-colors">服務條款</a>
            <a href="#" className="hover:text-[#1DB8A0] transition-colors">Cookie 設定</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
