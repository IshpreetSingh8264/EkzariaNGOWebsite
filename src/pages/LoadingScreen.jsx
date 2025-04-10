import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoadingScreen = () => {
  const [searchParams] = useSearchParams();
  const profile = searchParams.get('profile');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(profile === 'B' ? '/recipients' : '/Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-20 h-20 border-4 border-t-[#C62828] border-r-[#EF5350] border-b-[#C62828] border-l-[#EF5350] rounded-full mb-8"
      ></motion.div>
      
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
