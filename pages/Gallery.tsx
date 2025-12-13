import React, { useState } from 'react';
import { GALLERY_DATA } from '../constants';
import { GalleryItem } from '../types';
import { X, ZoomIn, ImageOff } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Religi', 'Kegiatan', 'Prestasi', 'Ekskul', 'Acara'];
  
  const filteredData = filter === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen animate-fade-in">
       <div className="bg-emerald-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Galeri Kegiatan</h1>
        <p className="text-emerald-200">Dokumentasi momen berharga keluarga besar MI Al-Hasani</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === cat 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        {filteredData.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {filteredData.map((item) => (
              <div 
                key={item.id} 
                className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                      <ZoomIn className="text-white mx-auto mb-2" size={32} />
                      <p className="text-white font-bold text-sm px-4">{item.title}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <ImageOff size={48} />
            </div>
            <p className="text-lg font-medium">Belum ada foto yang tersedia saat ini.</p>
            <p className="text-sm">Silakan cek kembali nanti untuk dokumentasi terbaru.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          >
            <X size={40} />
          </button>
          <div className="max-w-4xl w-full max-h-screen">
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-400 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};