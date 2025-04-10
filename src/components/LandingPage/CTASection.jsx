import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-8 sm:px-6 lg:px-8 bg-[#C62828] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of donors who are changing lives every day through their generosity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#C62828] px-8 py-3 rounded-md font-bold text-lg"
            onClick={() => navigate('/recipients')}
          >
            Donate Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
