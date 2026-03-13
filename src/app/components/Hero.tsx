import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    badge: '🏆 台北市評鑑最佳寵物醫院',
    title: '給毛孩最專業\n的醫療照護',
    description: '20年以上豐富臨床經驗，全天候守護您的寵物健康，提供安心、溫馨的診療環境。',
    cta: '探索我們的服務',
    image: 'https://images.unsplash.com/photo-1770836037816-4445dbd449fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwZXhhbWluYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMzg2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    badge: '🔬 院內先進檢驗設備',
    title: '精準診斷\n先進外科手術',
    description: '配備頂尖影像診斷設備、院內實驗室及專業手術室，由資深專科醫師主刀，守護每一條生命。',
    cta: '探索我們的服務',
    image: 'https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBob3NwaXRhbCUyMHN1cmdlcnklMjBvcGVyYXRpbmclMjByb29tJTIwdmV0fGVufDF8fHx8MTc3MzM4Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    badge: '❤️ 溫馨住院照護服務',
    title: '24小時專人\n陪伴住院照護',
    description: '全天候護理團隊駐守，讓您的毛孩在溫馨舒適的環境中恢復健康，您安心、我們用心。',
    cta: '探索我們的服務',
    image: 'https://images.unsplash.com/photo-1536808479791-c373702f3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHB1cHB5JTIwZG9nJTIwcGxheWluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzczMzg2NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section id="home" className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImageWithFallback
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5 border border-white/30">
            {slide.badge}
          </div>

          {/* Heading */}
          <h1
            className="text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.25 }}
          >
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < slide.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-white/80 mb-8 leading-relaxed" style={{ fontSize: '0.95rem', maxWidth: '400px' }}>
            {slide.description}
          </p>

          {/* CTA */}
          <a
            href="#services"
            className="inline-block bg-[#1DB8A0] text-white font-medium px-7 py-3 rounded-full hover:bg-[#17a08b] transition-colors shadow-lg"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2.5 bg-[#1DB8A0]'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Social icons - right side vertical */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 items-center">
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#1DB8A0] hover:border-[#1DB8A0] transition-colors"
          >
            <Icon className="w-3.5 h-3.5" />
          </a>
        ))}
        {/* Slide counter */}
        <div className="mt-2 text-white/70 text-xs font-medium">
          {current + 1}/{slides.length}
        </div>
      </div>
    </section>
  );
}
