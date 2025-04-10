import React from 'react';
import { motion } from 'framer-motion';

const EmailSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-[#FFFFFF] rounded-lg shadow p-6"
    >
      <h2 className="text-2xl font-bold text-[#212121] mb-6">Email System</h2>
      <div className="text-center py-12 text-[#757575]">
        <p>Email functionality will be implemented here</p>
      </div>
    </motion.div>
  );
};

export default EmailSection;
