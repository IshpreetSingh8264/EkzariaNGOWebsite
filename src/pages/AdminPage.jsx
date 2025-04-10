import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AdminSidebar from '../components/Admin/AdminSidebar';
import ErrorBoundary from '../components/common/ErrorBoundary';
import EnhancedStudentDetails from '../components/Admin/StudentDetails';
import EmailSection from '../components/Admin/EmailSection';
import LoadingScreen from '../components/common/LoadingScreen'; // Import LoadingScreen component

const AdminPage = () => {
  const [activeTab, setActiveTab] = React.useState('applications'); // State to track the active tab

  const renderActiveTab = () => {
    // Render the content based on the active tab
    switch (activeTab) {
      case 'applications':
        return <EnhancedStudentDetails />;
      case 'email':
        return <EmailSection />;
      default:
        return null;
    }
  };

  return (
    <LoadingScreen>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex h-screen bg-[#FDFDFD]"
      >
        {/* Sidebar for navigation */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#FFFFFF]">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              {renderActiveTab()}
            </Suspense>
          </ErrorBoundary>
        </main>
      </motion.div>
    </LoadingScreen>
  );
};

export default AdminPage;
