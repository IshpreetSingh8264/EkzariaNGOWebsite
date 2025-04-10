import React, { useState } from 'react';
import { FaUsers, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const AdminNavbar = ({ activeTab, setActiveTab, isMenuOpen, toggleMenu }) => {
  const menuItems = [
    { id: 'applications', label: 'Applications', icon: <FaUsers /> },
    { id: 'email', label: 'Email', icon: <FaEnvelope /> }
  ];

  return (
    <div className="md:hidden bg-[#C62828] text-white w-full fixed top-0 z-50">
      <div className="p-4 flex items-center justify-between">
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-[#EF5350] transition-colors"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="w-8"></div>
      </div>
      
      {isMenuOpen && (
        <div className="bg-[#8E0000] w-full">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                toggleMenu();
              }}
              className={`w-full flex items-center p-4 ${activeTab === item.id ? 'bg-[#6a0000]' : 'hover:bg-[#a00000]'}`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
