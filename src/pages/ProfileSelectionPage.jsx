import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileSelection/ProfileCard';

const ProfileSelectionPage = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  const handleProfileClick = (profile) => {
    // Navigate to the loading screen with the selected profile
    navigate(`/loading?profile=${profile}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#000000] mb-12"
      >
        Who's donating today?
      </motion.h1>

      {/* Profile Selection Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        <ProfileCard profile="A" label="Donor Profile" onClick={handleProfileClick} />
        <ProfileCard profile="B" label="Recipient Profile" onClick={handleProfileClick} />
      </div>
    </div>
  );
};

export default ProfileSelectionPage;
