import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component

const LoadingScreen = ({ children, profile }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const messages = {
    A: "Your generosity changes lives. Every donation makes a difference.",
    B: "Help is on the way. Your needs matter to us."
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#FDFDFD] z-50 p-4"
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
  }

  return <>{children}</>;
};

export default LoadingScreen;
