import React from 'react';
import { Page } from '../../types';
import { LayoutDashboard, Users, FileText, Image, LogOut, GraduationCap } from 'lucide-react';

interface AdminSidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ currentPage, setPage }) => {
  const menuItems = [
    { label: 'Dashboard', value: Page.ADMIN_DASHBOARD, icon: <LayoutDashboard size={20} /> },
    { label: 'Data Guru', value: Page.ADMIN_TEACHERS, icon: <Users size={20} /> },
    { label: 'Berita & Artikel', value: Page.ADMIN_NEWS, icon: <FileText size={20} /> },
    // { label: 'Galeri', value: Page.ADMIN_GALLERY, icon: <Image size={20} /> }, // Placeholder for now
  ];

  return (
    <aside className="w-64 bg-emerald-900 text-white min-h-screen fixed left-0 top-0 flex flex-col shadow-xl z-20">
      <div className="h-16 flex items-center justify-center border-b border-emerald-800">
        <div className="flex items-center font-bold text-lg">
           <GraduationCap className="mr-2 text-yellow-400" /> Admin Panel
        </div>
      </div>

      <div className="p-4 border-b border-emerald-800">
        <div className="flex items-center space-x-3">
            <img src="https://picsum.photos/50/50?random=100" className="w-10 h-10 rounded-full border-2 border-yellow-400" alt="Admin" />
            <div>
                <p className="text-sm font-semibold">Admin Sekolah</p>
                <p className="text-xs text-emerald-300">Online</p>
            </div>
        </div>
      </div>

      <nav className="flex-1 py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setPage(item.value)}
                className={`w-full flex items-center px-6 py-3 transition-colors ${
                  currentPage === item.value
                    ? 'bg-emerald-800 border-l-4 border-yellow-400 text-white'
                    : 'text-emerald-100 hover:bg-emerald-800'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-emerald-800">
        <button 
            onClick={() => setPage(Page.HOME)}
            className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
        >
            <LogOut size={16} className="mr-2" /> Logout
        </button>
      </div>
    </aside>
  );
};