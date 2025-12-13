import React from 'react';
import { NEWS_DATA } from '../constants';
import { Calendar, User } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="bg-emerald-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Berita Terbaru</h1>
        <p className="text-emerald-200">Informasi terkini seputar kegiatan dan prestasi</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
                {NEWS_DATA.map((news) => (
                    <div key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition">
                        <div className="md:w-1/3 h-48 md:h-auto relative">
                             <img src={news.image} alt={news.title} className="w-full h-full object-cover absolute inset-0" />
                        </div>
                        <div className="p-6 md:w-2/3">
                            <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                <span className="flex items-center"><Calendar size={14} className="mr-1" /> {news.date}</span>
                                <span className="flex items-center"><User size={14} className="mr-1" /> Admin</span>
                                <span className="text-yellow-600 font-semibold bg-yellow-50 px-2 py-0.5 rounded">{news.category}</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-emerald-600 cursor-pointer">{news.title}</h2>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                            <button className="text-emerald-600 font-medium hover:underline text-sm">Baca Selengkapnya &rarr;</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Kategori</h3>
                    <ul className="space-y-2">
                        {['Kegiatan Sekolah', 'Pengumuman', 'Prestasi Siswa', 'Artikel Islami'].map((cat, i) => (
                            <li key={i} className="flex justify-between items-center text-gray-600 hover:text-emerald-600 cursor-pointer">
                                <span>{cat}</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">{(i + 1) * 3}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                 <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Berita Populer</h3>
                    <div className="space-y-4">
                        {NEWS_DATA.slice(0, 2).map((news) => (
                             <div key={news.id} className="flex items-start gap-3">
                                 <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                                     <img src={news.image} className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                     <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-emerald-600 cursor-pointer">{news.title}</h4>
                                     <span className="text-xs text-gray-400">{news.date}</span>
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};