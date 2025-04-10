import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <motion.nav 
      className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center"
    >
      <div className="flex items-center">
        <motion.div 
          className="text-2xl font-bold cursor-pointer text-[#C62828]"
        >
          Ekzaria
        </motion.div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#C62828] text-white px-6 py-2 rounded-md font-medium"
        onClick={() => navigate('/recipients')}
      >
        Donate Now
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
