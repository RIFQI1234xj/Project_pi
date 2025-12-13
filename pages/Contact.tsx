import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      <div className="bg-emerald-800 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Kontak</h1>
        <p className="text-emerald-200">Hubungi kami untuk informasi lebih lanjut</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left: Info (Sesuai Video 00:19) */}
            <div className="space-y-8">
                 <div>
                     <h2 className="text-2xl font-bold text-emerald-800 mb-6">Hubungi Kami</h2>
                     <p className="text-gray-600 mb-8">
                         Silakan hubungi kami untuk informasi PPDB atau menyampaikan kritik dan saran membangun.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex items-start">
                             <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                                 <MapPin size={24} />
                             </div>
                             <div className="ml-4">
                                 <h4 className="font-bold text-gray-800">Alamat</h4>
                                 <p className="text-gray-600 text-sm">Jl. Pendidikan No. 123, Kota Santri</p>
                             </div>
                         </div>
                         <div className="flex items-start">
                             <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                                 <Phone size={24} />
                             </div>
                             <div className="ml-4">
                                 <h4 className="font-bold text-gray-800">Telepon / WA</h4>
                                 <p className="text-gray-600 text-sm">+62 812-3456-7890</p>
                             </div>
                         </div>
                          <div className="flex items-start">
                             <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                                 <Mail size={24} />
                             </div>
                             <div className="ml-4">
                                 <h4 className="font-bold text-gray-800">Email</h4>
                                 <p className="text-gray-600 text-sm">info@mialhasani.sch.id</p>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>

            {/* Right: Form (Sesuai Video 00:19) */}
            <div className="bg-white p-0 rounded-2xl">
                <h2 className="text-2xl font-bold text-emerald-800 mb-6">Kirim Pesan</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="Nama Anda" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="email@contoh.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                        <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="Tulis pesan Anda disini..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition shadow-md">
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};