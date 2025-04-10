import React from 'react';
import { motion } from 'framer-motion';

const StudentCard = ({ student, onClick }) => {
  // Function to render the student's photo or a fallback if no photo is available
  const renderPhoto = () => {
    if (student.photo) {
      const photoSrc = student.photo.startsWith('data:image')
        ? student.photo
        : `data:image/jpeg;base64,${student.photo}`;
      return <img src={photoSrc} alt={student.name} className="w-full h-full object-cover filter blur-sm" />;
    }
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-lg">No Photo</span>
      </div>
    );
  };

  return (
    // Main container for the student card with hover and tap animations
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-64 transition-all duration-300"
    >
      {/* Profile photo section */}
      <div className="relative h-48 overflow-hidden group">
        {renderPhoto()}
        {/* Overlay with student name */}
        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40">
          <span className="text-white text-xl font-bold transition-all duration-300 group-hover:text-2xl">
            {student.name}
          </span>
        </div>
      </div>

      {/* Student information section */}
      <div className="p-4">
        {/* Name and verification status */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#C62828]">{student.name}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              student.verified ? 'bg-[#43A047] text-white' : 'bg-[#FB8C00] text-white'
            }`}
          >
            {student.verified ? 'Verified' : 'Pending'}
          </span>
        </div>
        {/* Location */}
        <p className="text-gray-600">{student.location}</p>
        {/* Funding needs */}
        <div className="mt-2 flex gap-2">
          <p className="text-sm font-medium text-gray-700">Funding Needs:</p>
          <p className="text-gray-600 text-sm">{student.totalAmountNeeded}</p>
        </div>
        {/* View Details button */}
        <motion.button
          whileHover={{ backgroundColor: '#8E0000' }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 w-full bg-[#C62828] text-white py-2 rounded-md text-sm font-medium"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StudentCard;
