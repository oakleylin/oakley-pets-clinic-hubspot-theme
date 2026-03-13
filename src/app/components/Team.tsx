import { Award, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: '陳怡君',
    title: '院長 · 資深獸醫師',
    specialty: '內科、外科、影像診斷',
    experience: '20年經驗',
    image: 'https://images.unsplash.com/photo-1676285773909-c19b900d3f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjJ3aGl0ZSUyMGNvYXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzODY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    certifications: ['AVMA認證', '國際獸醫學會會員'],
  },
  {
    name: '林建宏',
    title: '副院長 · 外科專科醫師',
    specialty: '骨科、軟組織外科、微創手術',
    experience: '15年經驗',
    image: 'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdmV0ZXJpbmFyaWFuJTIwZG9jdG9yJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzM4Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    certifications: ['外科專科認證', 'AAHA認證'],
  },
  {
    name: '黃雅婷',
    title: '主治獸醫師',
    specialty: '貓科專科、牙科、皮膚科',
    experience: '10年經驗',
    image: 'https://images.unsplash.com/photo-1736289173074-df6009da27c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMGRvY3RvciUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzODY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    certifications: ['貓科認證專科', '牙科認證'],
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#1DB8A0] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              醫療團隊
            </div>
            <h2 className="text-gray-900" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700 }}>
              認識我們的專業醫師
            </h2>
            <p className="text-gray-500 mt-2 max-w-md" style={{ fontSize: '0.95rem' }}>
              擁有豐富臨床經驗的醫師團隊，持續進修最新醫療技術，為您的毛孩提供頂級照護
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-1.5 text-[#1DB8A0] text-sm font-semibold hover:gap-2.5 transition-all mt-4 md:mt-0"
          >
            查看全部醫師
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-[#1DB8A0] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {member.experience}
                </div>
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white" style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm">{member.title}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">專長</span>
                  <p className="text-gray-700 text-sm mt-0.5">{member.specialty}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.certifications.map((cert, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1 bg-teal-50 text-[#1DB8A0] text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      <Award className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
