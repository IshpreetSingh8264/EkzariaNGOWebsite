import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

const LoadingScreen = () => {
  const [searchParams] = useSearchParams(); // Hook to access query parameters
  const profile = searchParams.get('profile'); // Get the selected profile from query params
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    // Redirect to the appropriate page after a delay
    const timer = setTimeout(() => {
      navigate(profile === 'B' ? '/recipients' : '/Home');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigate, profile]);

  const messages = {
    A: "Your generosity changes lives. Every donation makes a difference.",
    B: "Help is on the way. Your needs matter to us."
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4"
    >
      {/* Rotating Loading Spinner */}
      <LoadingSpinner />
      
      {/* Loading Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-[#212121] text-xl max-w-md"
      >
        {messages[profile] || "Loading your experience..."}
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
