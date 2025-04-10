import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/common/LoadingScreen';

const ProfileSelectionPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    if (profile === 'A') {
      navigate('EkzariaNGOWebsite/Home'); // Navigate to LandingPage
    } else if (profile === 'B') {
      navigate('EkzariaNGOWebsite/recipients'); // Navigate to RecipientPageWithModal
    }
  };

  return (
    <LoadingScreen profile={selectedProfile}>
      <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#000000] mb-12"
        >
          Who's donating today?
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Profile A */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => handleProfileClick('A')}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="w-40 h-40 rounded-md bg-[#C62828] flex items-center justify-center mb-2 overflow-hidden">
              <span className="text-white text-4xl font-bold">A</span>
            </div>
            <span className="text-[#212121] text-lg">Donor Profile</span>
          </motion.div>

          {/* Profile B */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => handleProfileClick('B')}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="w-40 h-40 rounded-md bg-[#C62828] flex items-center justify-center mb-2 overflow-hidden">
              <span className="text-white text-4xl font-bold">B</span>
            </div>
            <span className="text-[#212121] text-lg">Recipient Profile</span>
          </motion.div>
        </div>
      </div>
    </LoadingScreen>
  );
};

export default ProfileSelectionPage;
