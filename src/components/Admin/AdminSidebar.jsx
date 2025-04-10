import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaEnvelope } from 'react-icons/fa';

const AdminSidebar = ({ activeTab, setActiveTab, isMobile, isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (isMobile) {
      setIsHovered(false);
    }
  }, [isMobile]);
  const menuItems = [
    { id: 'applications', label: 'Applications Detail', icon: <FaUsers /> },
    { id: 'email', label: 'Email', icon: <FaEnvelope /> }
  ];

  return (
    <motion.aside 
      initial={isMobile ? { x: -300 } : { x: 0 }}
      animate={isMobile ? (isOpen ? { x: 0 } : { x: -300 }) : { x: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#C62828] text-white shadow-lg ${
        isMobile ? 'fixed h-full z-40 mt-16' : (isHovered ? 'w-64' : 'w-20')
      } transition-all duration-300`}
      onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
    >
      {isMobile && (
        <div className="p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#EF5350] transition-colors"
          >
            ×
          </button>
        </div>
      )}
      <div className="p-4 h-full flex flex-col">
        <h1 className={`px-1 text-2xl flex whitespace-nowrap font-bold mb-8 ${isHovered ? 'block' : 'hidden'}`}>
          Admin Panel
        </h1>
        <h1 className={`px-1 text-2xl flex whitespace-nowrap font-bold mb-8 ${!isHovered ? 'block' : 'hidden'}`}>
          AP
        </h1>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === item.id ? 'bg-[#8E0000]' : 'hover:bg-[#EF5350]'
                  }`}
                >
                  <span className={isHovered ? 'mr-3' : 'mx-auto'}>{item.icon}</span>
                  {isHovered && <span className="overflow-hidden">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
};

export default AdminSidebar;
