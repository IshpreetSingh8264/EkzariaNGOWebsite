import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ApplyPopup from '../RecipientProfile/ApplyPopup';

const Navbar = ({ onNewStudent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const isLandingPage = location.pathname === '/Home';

  return (
    <>
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
        
        {isLandingPage ? (
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C62828] text-white px-6 py-2 rounded-md font-medium"
            onClick={() => navigate('/recipients')}
          >
            Donate Now
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(true)}
            className="bg-[#C62828] text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
          >
            Apply Now
          </motion.button>
        )}
      </motion.nav>

      {!isLandingPage && showPopup && (
        <ApplyPopup
          onClose={() => setShowPopup(false)}
          onSave={onNewStudent}
        />
      )}
    </>
  );
};

export default Navbar;
