import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Programs } from './pages/Programs';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { AdminSidebar } from './pages/admin/AdminSidebar';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminNews } from './pages/admin/AdminNews';

function App() {
  const [page, setPage] = useState<Page>(Page.HOME);
  const [profileTab, setProfileTab] = useState('identitas');

  // Helper to determine if we are in admin mode
  const isAdmin = [Page.ADMIN_DASHBOARD, Page.ADMIN_NEWS, Page.ADMIN_TEACHERS].includes(page);

  const renderContent = () => {
    switch (page) {
      case Page.HOME: return <Home setPage={setPage} />;
      case Page.PROFILE: return <Profile activeTab={profileTab} setActiveTab={setProfileTab} />;
      case Page.PROGRAMS: return <Programs />;
      case Page.GALLERY: return <Gallery />;
      case Page.NEWS: return <News />;
      case Page.CONTACT: return <Contact />;
      case Page.ADMIN_DASHBOARD: return <AdminDashboard />;
      case Page.ADMIN_NEWS: return <AdminNews />;
      case Page.ADMIN_TEACHERS: return <div className="p-8"><h2 className="text-2xl font-bold">Data Guru Placeholder</h2></div>;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {isAdmin ? (
        <div className="flex bg-gray-100 min-h-screen">
          <AdminSidebar currentPage={page} setPage={setPage} />
          <main className="flex-1 ml-64">
             <div className="bg-white shadow h-16 flex items-center px-8 justify-between sticky top-0 z-10">
                 <h2 className="font-semibold text-gray-700">Admin Panel MI Al-Hasani</h2>
             </div>
             {renderContent()}
          </main>
        </div>
      ) : (
        <>
          <Navbar 
            currentPage={page} 
            setPage={setPage} 
            setProfileTab={setProfileTab} 
          />
          <main>
            {renderContent()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;