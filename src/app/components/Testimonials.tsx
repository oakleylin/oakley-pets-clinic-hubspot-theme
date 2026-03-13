import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: '王小姐',
    pet: '柴柴 · 柴犬',
    rating: 5,
    comment: '陳醫師非常細心專業，帶柴柴來看診從不焦慮。醫院環境乾淨整潔，護理人員態度溫柔，每次都能讓毛孩安心接受治療！',
    image: 'https://images.unsplash.com/photo-1643435690300-a7af818ea471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldCUyMG93bmVyJTIwd29tYW4lMjBkb2clMjBzbWlsZXxlbnwxfHx8fDE3NzMzODY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025年12月',
  },
  {
    name: '李先生',
    pet: 'Momo · 英國短毛貓',
    rating: 5,
    comment: 'Momo之前病得很嚴重，是這裡的醫師給了牠第二次生命。診療過程中醫師詳細解釋病情，讓我們完全放心，非常感謝！',
    image: 'https://images.unsplash.com/photo-1643435690300-a7af818ea471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldCUyMG93bmVyJTIwd29tYW4lMjBkb2clMjBzbWlsZXxlbnwxfHx8fDE3NzMzODY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025年11月',
  },
  {
    name: '張太太',
    pet: '球球 · 貴賓犬',
    rating: 5,
    comment: '球球骨折手術由林副院長主刀，術後恢復得非常好！醫院設備先進，住院期間護理人員隨時傳報告，真的是最棒的寵物醫院！',
    image: 'https://images.unsplash.com/photo-1643435690300-a7af818ea471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldCUyMG93bmVyJTIwd29tYW4lMjBkb2clMjBzbWlsZXxlbnwxfHx8fDE3NzMzODY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2026年1月',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            客戶評價
          </div>
          <h2 className="text-gray-900 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700 }}>
            飼主們的真實回饋
          </h2>
          <p className="text-gray-500 max-w-md mx-auto" style={{ fontSize: '0.95rem' }}>
            超過 8,000 位飼主的信賴與推薦，是我們持續前進的動力
          </p>
        </div>

        {/* Summary bar */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-gray-900 font-bold text-lg">4.9</span>
          <span className="text-gray-400 text-sm">/ 5.0 · 來自 1,200+ 則評論</span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#1DB8A0]" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 leading-relaxed mb-6 pr-6" style={{ fontSize: '0.9rem' }}>
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.pet}</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
