import { Heart, Scissors, Stethoscope, Syringe, BedDouble, Zap, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Stethoscope,
    title: '健康檢查',
    description: '全面性健康評估，包含血液、超音波及X光檢查，早期發現潛在問題，為毛孩制訂個人化健康計劃。',
    image: 'https://images.unsplash.com/photo-1733783506192-653df6185a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBtZWRpY2FsJTIwY2hlY2t1cHxlbnwxfHx8fDE3NzMyNzkzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    iconColor: 'text-[#1DB8A0]',
    iconBg: 'bg-teal-50',
    tag: '預防保健',
  },
  {
    icon: Heart,
    title: '外科手術',
    description: '專業外科團隊配合先進手術室設備，涵蓋軟組織、骨科及微創手術，提供安全高效的外科治療。',
    image: 'https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpbmclMjByb29tJTIwdmV0fGVufDF8fHx8MTc3MzM4Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    tag: '專科治療',
  },
  {
    icon: Syringe,
    title: '疫苗注射',
    description: '依照毛孩年齡與健康狀況，訂製完整的疫苗接種計劃，全面預防常見傳染病，維持長期健康。',
    image: 'https://images.unsplash.com/photo-1725419876939-f8f9987cf0d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB2YWNjaW5lJTIwaW5qZWN0aW9uJTIwdmV0ZXJpbmFyeSUyMGNsaW5pY3xlbnwxfHx8fDE3NzMzODY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    tag: '預防保健',
  },
  {
    icon: Scissors,
    title: '美容護理',
    description: '專業美容師為毛孩提供洗澡、剃毛、修剪造型及皮膚護理服務，讓毛孩時刻保持最佳狀態。',
    image: 'https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMGRvZyUyMGJhdGglMjBzYWxvbnxlbnwxfHx8fDE3NzMzODY3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    tag: '美容護理',
  },
  {
    icon: BedDouble,
    title: '住院照護',
    description: '24小時護理人員全程陪伴，提供舒適的住院環境，並即時更新毛孩的健康狀況，讓您完全放心。',
    image: 'https://images.unsplash.com/photo-1770836037816-4445dbd449fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwZXhhbWluYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMzg2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-50',
    tag: '住院服務',
  },
  {
    icon: Zap,
    title: '緊急醫療',
    description: '全年無休、24小時緊急醫療服務，配備急救設備與緊急手術室，毛孩有緊急狀況隨時來診。',
    image: 'https://images.unsplash.com/photo-1536808479791-c373702f3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHB1cHB5JTIwZG9nJTIwcGxheWluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzczMzg2NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    tag: '緊急處置',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            我們的服務
          </div>
          <h2 className="text-gray-900 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700 }}>
            專業全方位醫療照護
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
            從預防保健到緊急醫療，提供完整的寵物健康服務，守護每位毛孩的身心健康
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/90 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                {/* Body */}
                <div className="p-5">
                  <div className={`w-10 h-10 ${service.iconBg} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-4 leading-relaxed" style={{ fontSize: '0.85rem' }}>
                    {service.description}
                  </p>
                  <button className="flex items-center gap-1.5 text-[#1DB8A0] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    了解更多
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
