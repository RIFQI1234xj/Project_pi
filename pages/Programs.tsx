import React, { useState } from 'react';
import { Sun, Book, Trophy, ArrowRight } from 'lucide-react';

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'religi' | 'akademik' | 'ekskul'>('religi');

  const religiousPrograms = [
    {
      name: 'Shalat Dhuha Rutin',
      image: 'https://picsum.photos/1200/500?random=15', 
      description: 'Program pembiasaan shalat Dhuha setiap pagi sebelum KBM dimulai untuk menanamkan nilai spiritual, ketenangan jiwa, dan kedisiplinan waktu pada siswa.',
    },
    {
      name: 'Tahfidz Quran',
      image: 'https://picsum.photos/400/300?random=201',
      description: 'Program unggulan hafalan Juz 30 (Juz Amma) dengan metode talqin dan murajaah rutin untuk mencetak generasi penghafal Al-Quran sejak dini.',
    },
    {
      name: 'Shalat Zhuhur Berjamaah',
      image: 'https://picsum.photos/400/300?random=202',
      description: 'Pelaksanaan shalat wajib berjamaah di masjid sekolah untuk melatih kebersamaan, kepemimpinan (adzan/iqomah), dan tata cara ibadah yang benar.',
    }
  ];

  const extracurriculars = [
    {
      name: 'Pramuka',
      image: 'https://picsum.photos/400/300?random=101',
      description: 'Membangun karakter disiplin, mandiri, dan cinta alam melalui kegiatan kepramukaan yang menyenangkan dan edukatif.',
      schedule: 'Sabtu, 08:00 - 10:00'
    },
    {
      name: 'Pencak Silat',
      image: 'https://picsum.photos/400/300?random=102',
      description: 'Melestarikan seni bela diri budaya bangsa serta melatih ketangkasan fisik, fokus, dan sportivitas siswa.',
      schedule: 'Kamis, 16:00 - 17:30'
    },
    {
      name: 'Marawis & Hadroh',
      image: 'https://picsum.photos/400/300?random=103',
      description: 'Mengembangkan bakat seni musik Islami, melatih kekompakan tim, dan menumbuhkan kecintaan bershalawat.',
      schedule: 'Jumat, 13:00 - 15:00'
    },
    {
      name: 'Dokter Kecil',
      image: 'https://picsum.photos/400/300?random=104',
      description: 'Pelatihan dasar kesehatan, pertolongan pertama, dan kampanye hidup bersih sehat di lingkungan sekolah.',
      schedule: 'Rabu, 14:00 - 15:30'
    },
    {
      name: 'Futsal',
      image: 'https://picsum.photos/400/300?random=105',
      description: 'Menyalurkan hobi olahraga sepak bola, melatih fisik, strategi permainan, dan kerjasama tim yang solid.',
      schedule: 'Minggu, 08:00 - 10:00'
    },
    {
      name: 'Kaligrafi',
      image: 'https://picsum.photos/400/300?random=106',
      description: 'Melatih kesabaran, ketelitian, dan estetika dalam menulis ayat-ayat Al-Quran dengan seni kaligrafi Arab.',
      schedule: 'Selasa, 14:00 - 15:30'
    }
  ];

  return (
    <div className="bg-white animate-fade-in">
      <div className="bg-emerald-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Program Sekolah</h1>
        <p className="text-emerald-200">Kegiatan unggulan pembentuk karakter siswa</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('religi')}
            className={`px-6 py-3 rounded-full font-bold flex items-center transition ${activeTab === 'religi' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Sun size={18} className="mr-2" /> Keagamaan
          </button>
          <button 
            onClick={() => setActiveTab('akademik')}
            className={`px-6 py-3 rounded-full font-bold flex items-center transition ${activeTab === 'akademik' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Book size={18} className="mr-2" /> Akademik
          </button>
          <button 
            onClick={() => setActiveTab('ekskul')}
            className={`px-6 py-3 rounded-full font-bold flex items-center transition ${activeTab === 'ekskul' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Trophy size={18} className="mr-2" /> Ekstrakurikuler
          </button>
        </div>

        {/* Content */}
        {activeTab === 'religi' && (
           <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8">
                 {religiousPrograms.map((prog, i) => (
                     <div key={i} className="bg-emerald-50 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full group border border-emerald-100">
                         <div className="h-48 overflow-hidden">
                             <img 
                                src={prog.image} 
                                alt={prog.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" 
                             />
                         </div>
                         <div className="p-6 flex flex-col flex-grow">
                             <h4 className="text-xl font-bold text-emerald-800 mb-3">{prog.name}</h4>
                             <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                {prog.description}
                             </p>
                         </div>
                     </div>
                 ))}
            </div>
        )}

        {activeTab === 'akademik' && (
            <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">Kurikulum Terpadu</h3>
                    <p className="text-gray-600">Memadukan kurikulum Kemenag dan Kemendikbud untuk menghasilkan siswa yang seimbang antara IPTEK dan IMTAQ.</p>
                </div>
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">Les Tambahan (Bimbel)</h3>
                    <p className="text-gray-600">Fasilitas bimbingan belajar khusus untuk kelas 6 dalam persiapan menghadapi ujian akhir sekolah.</p>
                </div>
            </div>
        )}

        {activeTab === 'ekskul' && (
            <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8">
                 {extracurriculars.map((ekskul, i) => (
                     <div key={i} className="bg-emerald-50 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full group border border-emerald-100">
                         {/* Image Container */}
                         <div className="h-48 overflow-hidden">
                             <img 
                                src={ekskul.image} 
                                alt={ekskul.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" 
                             />
                         </div>
                         <div className="p-6 flex flex-col flex-grow">
                             <h4 className="text-xl font-bold text-emerald-800 mb-3">{ekskul.name}</h4>
                             <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                {ekskul.description}
                             </p>
                         </div>
                     </div>
                 ))}
            </div>
        )}

      </div>
    </div>
  );
};