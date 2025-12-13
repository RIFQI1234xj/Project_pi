import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Kolom 1: Identitas Sekolah */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">
              MI Al-Hasani
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed pr-4">
              Mewujudkan generasi yang berakhlakul karimah, cerdas, terampil, dan berwawasan global dengan landasan nilai-nilai Islami.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
          
          {/* Kolom 2: Kontak Kami */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Kontak Kami</h4>
            <div className="space-y-5 text-sm text-gray-300">
              <div className="flex items-start">
                <MapPin size={22} className="mr-3 flex-shrink-0 text-yellow-500" />
                <span className="leading-relaxed">Jl. Kp. Babakansirna 02/02 Ds. Jogjogan Kec. Cisarua Kab. Bogor 16750</span>
              </div>
              <div className="flex items-center">
                <Phone size={22} className="mr-3 text-yellow-500" />
                <span>+(0251) 8256657 </span>
              </div>
              <div className="flex items-center">
                <Mail size={22} className="mr-3 text-yellow-500" />
                <span>misalhasani@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Kolom 3: Lokasi */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Lokasi</h4>
            <div className="w-full h-40 bg-[#064e3b] rounded-lg border border-emerald-700/50 flex items-center justify-center relative overflow-hidden group">
               {/* Placeholder Visual untuk Maps */}
               <div className="absolute inset-0 bg-emerald-800 opacity-30 pattern-grid-lg"></div>
               <span className="relative z-10 text-emerald-100/70 text-sm font-medium flex flex-col items-center">
                  <MapPin size={24} className="mb-2 opacity-50" />
                  Google Maps Area
               </span>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; MI Al-Hasani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};