import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaEnvelope } from 'react-icons/fa';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'applications', label: 'Applications Detail', icon: <FaUsers /> },
    { id: 'email', label: 'Email', icon: <FaEnvelope /> }
  ];

  return (
    <motion.aside 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-[#C62828] text-white shadow-lg"
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-[#8E0000]' : 'hover:bg-[#EF5350]'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
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
