import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ApplyPopup from './ApplyPopup';

const RecipientNavbar = ({ onNewStudent }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <motion.nav
        className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center"
      >
        {/* Logo on left */}
        <div className="flex items-center">
          <motion.div
            className="text-2xl font-bold cursor-pointer text-[#C62828]"
          >
            Ekzaria
          </motion.div>
        </div>

        {/* Apply Now button on right */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="bg-[#C62828] text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
        >
          Apply Now
        </motion.button>
      </motion.nav>

      {showPopup && (
        <ApplyPopup
          onClose={() => setShowPopup(false)}
          onSave={onNewStudent}
        />
      )}
    </>
  );
};

export default RecipientNavbar;
