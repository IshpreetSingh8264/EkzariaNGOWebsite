import React from 'react';

const StudentDetailModal = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl w-full">
        <div className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-4">
              {student.photo && (
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-200">
                  <img 
                    src={student.photo.startsWith('data:image') ? student.photo : `data:image/jpeg;base64,${student.photo}`}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{student.name}</h2>
                  <span className={`text-sm px-2 py-1 rounded ${student.verified ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {student.verified ? "Verified" : "Not Verified"}
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">{student.institution}</p>
              </div>
            </div>
            <div className='w-full sm:w-auto flex flex-col items-center'>
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 text-sm sm:text-base"
              >
                Close
              </button>
              
              {/* Progress Bar */}
              <div className="mt-4 w-full px-0">
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    Funding Progress: ${student.fundsReceived || 0} of ${student.totalAmountNeeded}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {Math.round(((student.fundsReceived || 0) / student.totalAmountNeeded) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                  <div 
                    className="bg-[#C62828] h-2.5 rounded-full" 
                    style={{ 
                      width: `${Math.min(100, ((student.fundsReceived || 0) / student.totalAmountNeeded) * 100)}%`,
                      transition: 'width 0.3s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Personal Information
              </h3>
              <div className="space-y-3">
                <p><span className="font-medium">Gender:</span> {student.gender || 'N/A'}</p>
                <p><span className="font-medium">Email:</span> {student.email}</p>
                <p><span className="font-medium">Phone:</span> {student.phone || 'N/A'}</p>
                <p><span className="font-medium">Address:</span> {student.location || 'N/A'}</p>
                <p><span className="font-medium">Nationality:</span> {student.nationality || 'N/A'}</p>
              </div>
            </div>

            {/* Education Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Education Background
              </h3>
              <div className="space-y-3">
                <p><span className="font-medium">Education Level:</span> {student.educationLevel || 'N/A'}</p>
                <p><span className="font-medium">Institution:</span> {student.institution || 'N/A'}</p>
                <p><span className="font-medium">Field of Study:</span> {student.fieldOfStudy || 'N/A'}</p>
                <p><span className="font-medium">Achievements:</span> {student.achievements || 'N/A'}</p>
              </div>
            </div>

            {/* Financial Information */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Financial Need
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><span className="font-medium">Amount Needed:</span> ${student.totalAmountNeeded || '0'}</p>
                  <p><span className="font-medium">Deadline:</span> {student.fundingDeadline || 'N/A'}</p>
                </div>
                <div>
                  <h4 className="font-medium">Funding Needs:</h4>
                  <p className="text-gray-700">{student.fundingNeeds || 'N/A'}</p>
                  <h4 className="font-medium mt-3">Reason for Financial Help:</h4>
                  <p className="text-gray-700">{student.financialHelpReason || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailModal;
