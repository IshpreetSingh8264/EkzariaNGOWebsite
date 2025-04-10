import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../common/Navbar';

const RecipientDetailView = ({ student, onClose }) => {
  const { state } = useLocation(); // Access state passed via navigation
  const navigate = useNavigate(); // Navigation hook for programmatic routing
  const currentStudent = student || state?.student; // Use prop or state to determine the current student

  // Redirect to the recipient list if no student is available
  if (!currentStudent) {
    navigate('EkzariaNGOWebsite/recipient');
    return null;
  }

  // Function to render the funding progress bar
  const renderProgressBar = () => {
    const progress = Math.min(
      100,
      ((currentStudent.fundsReceived || 0) / currentStudent.totalAmountNeeded) * 100
    );
    return (
      <div className="mt-4 w-full px-0">
        {/* Progress bar labels */}
        <div className="flex justify-between mb-1">
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Funding Progress: ${currentStudent.fundsReceived || 0} of ${currentStudent.totalAmountNeeded}
            </span>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
          <div
            className="bg-[#C62828] h-2.5 rounded-full"
            style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
          ></div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              {/* Student photo and name */}
              <div className="w-full sm:w-auto flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-4">
                {currentStudent.photo && (
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src={
                        currentStudent.photo.startsWith('data:image')
                          ? currentStudent.photo
                          : `data:image/jpeg;base64,${currentStudent.photo}`
                      }
                      alt={currentStudent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  {/* Name and verification status */}
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                      {currentStudent.name}
                    </h1>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        currentStudent.verified ? 'bg-[#43A047] text-white' : 'bg-[#FB8C00] text-white'
                      }`}
                    >
                      {currentStudent.verified ? 'Verified' : 'Pending'}
                    </span>
                  </div>
                  {/* Institution */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">{currentStudent.institution}</p>
                </div>
              </div>
              {/* Action buttons */}
              <div className="w-full sm:w-auto flex flex-col items-center">
                <div className="w-full flex flex-col sm:flex-row gap-2 items-center">
                  <button
                    onClick={onClose ? onClose : () => navigate(-1)} // Back button
                    className="w-full sm:w-auto px-2 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 text-sm sm:text-base"
                  >
                    Back to List
                  </button>
                  <button
                    onClick={() => {
                      /* Add donation handler here */
                    }}
                    className="w-full sm:w-auto px-2 py-2 bg-[#C62828] text-white rounded-md hover:bg-[#B71C1C] transition-colors text-sm sm:text-base"
                  >
                    Donate Now
                  </button>
                </div>
                {/* Funding progress bar */}
                {renderProgressBar()}
              </div>
            </div>

            {/* Information Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h2>
                <div className="space-y-3">
                  <p>
                    <span className="font-medium">Gender:</span> {currentStudent.gender}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {currentStudent.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> {currentStudent.phone}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span> {currentStudent.location}
                  </p>
                  <p>
                    <span className="font-medium">Nationality:</span> {currentStudent.nationality}
                  </p>
                </div>
              </div>

              {/* Education Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education Background</h2>
                <div className="space-y-3">
                  <p>
                    <span className="font-medium">Education Level:</span> {currentStudent.educationLevel}
                  </p>
                  <p>
                    <span className="font-medium">Institution:</span> {currentStudent.institution}
                  </p>
                  <p>
                    <span className="font-medium">Field of Study:</span> {currentStudent.fieldOfStudy}
                  </p>
                  <p>
                    <span className="font-medium">Achievements:</span> {currentStudent.achievements}
                  </p>
                </div>
              </div>

              {/* Financial Information */}
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Financial Need</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <span className="font-medium">Amount Needed:</span> ${currentStudent.totalAmountNeeded}
                    </p>
                    <p>
                      <span className="font-medium">Deadline:</span> {currentStudent.fundingDeadline}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Funding Needs:</h3>
                    <p className="text-gray-700">
                      ${currentStudent.totalAmountNeeded - (currentStudent.fundsReceived || 0)}
                    </p>
                    <h3 className="font-medium mb-1 mt-3">Reason for Financial Help:</h3>
                    <p className="text-gray-700">{currentStudent.financialHelpReason}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecipientDetailView;
