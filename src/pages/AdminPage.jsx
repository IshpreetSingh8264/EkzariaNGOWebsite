import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AdminSidebar from '../components/Admin/AdminSidebar';

const EnhancedStudentDetails = lazy(() => import('../components/Admin/StudentDetails'));
const EmailSection = lazy(() => import('../components/Admin/EmailSection'));

const AdminPage = () => {
  const [activeTab, setActiveTab] = React.useState('applications');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-screen bg-[#FDFDFD]"
    >
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto p-6 bg-[#FFFFFF]">
        <Suspense fallback={<LoadingSpinner />}>
          {activeTab === 'applications' && <EnhancedStudentDetails />}
          {activeTab === 'email' && <EmailSection />}
        </Suspense>
      </main>
    </motion.div>
  );
};

export default AdminPage;
