import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminNavbar from '../components/Admin/AdminNavbar';

const StudentDetails = lazy(() => import('../components/Admin/StudentDetails'));
const EmailSection = lazy(() => import('../components/Admin/EmailSection'));

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${isMobile ? 'flex flex-col' : 'flex'} h-screen bg-[#FDFDFD]`}
    >
      {!isMobile && (
        <AdminSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isMobile={isMobile}
        />
      )}
      {isMobile && (
        <AdminNavbar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMenuOpen={mobileMenuOpen}
          toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      )}
      
      <main className={`flex-1 overflow-y-auto bg-[#FFFFFF] p-6 transition-all duration-300 ${
        isMobile ? 'w-full mt-16' : ' w-[calc(100vw-5rem)]  hover:w-full'
      }`}>
        <Suspense fallback={<LoadingSpinner />}>
          {activeTab === 'applications' && <StudentDetails />}
          {activeTab === 'email' && <EmailSection />}
        </Suspense>
      </main>
    </motion.div>
  );
};

export default AdminPage;
