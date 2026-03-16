import { useState } from 'react';
import { Link } from 'react-router';
import { Award, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLang } from '../context/LanguageContext';
import translations from '../i18n/translations';

const doctorImgs = [
  'https://images.unsplash.com/photo-1676285773909-c19b900d3f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjJkb2N0b3IlMjJ3aGl0ZSUyMGNvYXQlMjJwb3J0cmFpdHxlbnwxfHx8fDE3NzMzODY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1640161415278-a5ac46f82d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBzcGVjaWFsaXN0JTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBjbGluaWN8ZW58MXx8fHwxNzczNjI2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1736289173074-df6009da27c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMGRvY3RvciUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzODY3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdmV0ZXJpbmFyaWFuJTIwZG9jdG9yJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzM4Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdmV0ZXJpbmFyaWFuJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjBjbGluaWN8ZW58MXx8fHwxNzczNjMxMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjB2ZXRlcmluYXJ5JTIwd2hpdGUlMjBjb2F0JTIwc21pbGluZ3xlbnwxfHx8fDE3NzM2MzEzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNjMxMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1687269469755-5fc368afa22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBhbmltYWwlMjBob3NwaXRhbCUyMHNwZWNpYWxpc3R8ZW58MXx8fHwxNzczNjMxMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

const doctorNames = [
  'Dr. Emily Chen', 'Dr. Jason Lin', 'Dr. Amanda Ward', 'Dr. Shirley Brown',
  'Dr. Marcus Reid', 'Dr. Claire Huang', 'Dr. Kevin Park', 'Dr. Sofia Reyes',
];
const doctorExps = ['20 yrs', '15 yrs', '10 yrs', '12 yrs', '14 yrs', '11 yrs', '9 yrs', '8 yrs'];

const PER_PAGE = 4;

export function TeamPage() {
  const [page, setPage] = useState(1);
  const { lang } = useLang();
  const t = translations[lang];

  const doctors = [
    { name: doctorNames[0], title: t.doc1_title, specialty: t.doc1_spec, exp: doctorExps[0], img: doctorImgs[0], bio: t.doc1_bio, certs: [t.doc1_cert1, t.doc1_cert2] },
    { name: doctorNames[1], title: t.doc2_title, specialty: t.doc2_spec, exp: doctorExps[1], img: doctorImgs[1], bio: t.doc2_bio, certs: [t.doc2_cert1, t.doc2_cert2] },
    { name: doctorNames[2], title: t.doc3_title, specialty: t.doc3_spec, exp: doctorExps[2], img: doctorImgs[2], bio: t.doc3_bio, certs: [t.doc3_cert1, t.doc3_cert2] },
    { name: doctorNames[3], title: t.doc4_title, specialty: t.doc4_spec, exp: doctorExps[3], img: doctorImgs[3], bio: t.doc4_bio, certs: [t.doc4_cert1, t.doc4_cert2] },
    { name: doctorNames[4], title: t.doc5_title, specialty: t.doc5_spec, exp: doctorExps[4], img: doctorImgs[4], bio: t.doc5_bio, certs: [t.doc5_cert1, t.doc5_cert2] },
    { name: doctorNames[5], title: t.doc6_title, specialty: t.doc6_spec, exp: doctorExps[5], img: doctorImgs[5], bio: t.doc6_bio, certs: [t.doc6_cert1, t.doc6_cert2] },
    { name: doctorNames[6], title: t.doc7_title, specialty: t.doc7_spec, exp: doctorExps[6], img: doctorImgs[6], bio: t.doc7_bio, certs: [t.doc7_cert1, t.doc7_cert2] },
    { name: doctorNames[7], title: t.doc8_title, specialty: t.doc8_spec, exp: doctorExps[7], img: doctorImgs[7], bio: t.doc8_bio, certs: [t.doc8_cert1, t.doc8_cert2] },
  ];

  const TOTAL_PAGES = Math.ceil(doctors.length / PER_PAGE);
  const pageDoctors = doctors.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link to="/" className="hover:text-[#1DB8A0] transition-colors">{t.bc_home}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600">{t.bc_team}</span>
          </div>
        </div>
      </div>

      {/* Page hero */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 overflow-hidden pb-0">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ height: 330, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4 w-fit justify-center">
            <Users className="w-3.5 h-3.5" /> {t.team_pill}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-white mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700 }}>
                {t.team_h1}
              </h1>
              <p className="text-white/75 max-w-lg" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                {t.team_desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pageDoctors.map((doc, i) => (
              <div key={`${page}-${i}`} className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="sm:w-44 h-52 sm:h-auto overflow-hidden bg-gray-100 flex-shrink-0">
                  <ImageWithFallback src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-gray-900" style={{ fontSize: '1.05rem', fontWeight: 700 }}>{doc.name}</h3>
                      <span className="bg-[#1DB8A0] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ml-2">{doc.exp}</span>
                    </div>
                    <p className="text-[#1DB8A0] text-sm font-medium mb-2">{doc.title}</p>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">{doc.bio}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {doc.certs.map((c, j) => (
                        <span key={j} className="flex items-center gap-1 bg-teal-50 text-[#1DB8A0] text-xs font-medium px-2.5 py-1 rounded-full">
                          <Award className="w-3 h-3" />{c}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">{t.team_specialty} {doc.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#1DB8A0] hover:text-[#1DB8A0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  p === page ? 'bg-[#1DB8A0] text-white shadow-md' : 'border border-gray-200 text-gray-500 hover:border-[#1DB8A0] hover:text-[#1DB8A0]'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === TOTAL_PAGES}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#1DB8A0] hover:text-[#1DB8A0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Page info */}
          <p className="text-center text-xs text-gray-400 mt-3">
            {lang === 'en'
              ? `Showing ${(page - 1) * PER_PAGE + 1}–${Math.min(page * PER_PAGE, doctors.length)} of ${doctors.length} doctors`
              : `顯示第 ${(page - 1) * PER_PAGE + 1}–${Math.min(page * PER_PAGE, doctors.length)} 位，共 ${doctors.length} 位醫師`
            }
          </p>
        </div>
      </section>
    </>
  );
}
