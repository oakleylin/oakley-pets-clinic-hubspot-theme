import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '醫院地址',
    primary: '台北市大安區忠孝東路四段123號',
    secondary: '近捷運忠孝敦化站',
  },
  {
    icon: Phone,
    label: '聯絡電話',
    primary: '02-2345-6789',
    secondary: '緊急專線：0912-345-678',
  },
  {
    icon: Mail,
    label: '電子郵件',
    primary: 'service@petcare.com.tw',
    secondary: '我們將在24小時內回覆',
  },
  {
    icon: Clock,
    label: '營業時間',
    primary: '週一至週日 09:00 – 21:00',
    secondary: '24小時緊急服務',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            聯絡與預約
          </div>
          <h2 className="text-gray-900 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700 }}>
            立即預約，讓我們守護您的毛孩
          </h2>
          <p className="text-gray-500 max-w-md mx-auto" style={{ fontSize: '0.95rem' }}>
            填寫以下表單，我們將盡快與您聯繫安排最適合的看診時間
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form - left, wider */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <h3 className="text-gray-900 mb-6" style={{ fontWeight: 700, fontSize: '1.15rem' }}>
              預約看診表單
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5">您的姓名 *</label>
                  <input
                    type="text"
                    placeholder="請輸入姓名"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5">聯絡電話 *</label>
                  <input
                    type="tel"
                    placeholder="請輸入電話"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1.5">電子郵件</label>
                <input
                  type="email"
                  placeholder="請輸入電子郵件"
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5">寵物名稱</label>
                  <input
                    type="text"
                    placeholder="毛孩的名字"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1.5">服務項目</label>
                  <select className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] transition-colors text-gray-600 appearance-none">
                    <option value="">請選擇服務</option>
                    <option>健康檢查</option>
                    <option>外科手術</option>
                    <option>疫苗注射</option>
                    <option>美容護理</option>
                    <option>住院照護</option>
                    <option>緊急醫療</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-medium mb-1.5">問題描述</label>
                <textarea
                  placeholder="請簡述毛孩的狀況或您的問題..."
                  rows={4}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1DB8A0]/30 focus:border-[#1DB8A0] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#1DB8A0] text-white font-semibold py-3 rounded-xl hover:bg-[#17a08b] transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                送出預約申請
              </button>
            </form>
          </div>

          {/* Right - contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#1DB8A0]/30 hover:bg-teal-50/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#1DB8A0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1DB8A0]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</div>
                    <div className="text-gray-900 text-sm font-semibold">{item.primary}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.secondary}</div>
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-40 bg-gradient-to-br from-teal-50 to-green-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#1DB8A0] mx-auto mb-2" />
                <p className="text-gray-600 text-sm font-medium">忠孝敦化站旁</p>
                <p className="text-gray-400 text-xs">步行5分鐘可達</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
