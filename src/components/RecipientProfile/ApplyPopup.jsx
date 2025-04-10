import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ApplyPopup = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    gender: '',
    photo: '',
    email: '',
    phone: '',
    address: '',
    nationality: '',
    
    // Educational Background
    educationLevel: '',
    institution: '',
    fieldOfStudy: '',
    achievements: '',
    
    // Financial Need
    totalAmountNeeded: '',
    fundingDeadline: '',
    financialHelpReason: '',
    
    // Proof of Authenticity
    admissionLetter: '',
    feeStructure: '',
    academicRecords: '',
    identityProof: '',
    
    // Future Goals
    expenditurePlan: '',
    careerGoals: '',
    giveBack: '',
    
    // Engagement
    videoMessage: '',
    agreement: false,
    
    // Terms
    terms: false,
    fundsUsage: false,
    verification: false,

    // verification by the admin  
    verified: false,
    // amount of funds
    fundsReceived: '',


  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-y-auto max-h-screen"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Student Application Form</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Profile Photo</label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          setFormData(prev => ({ ...prev, photo: event.target.result }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Educational Background Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Educational Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Current Level of Education</label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select Level</option>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Institution Name</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Field of Study & Major</label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Academic Achievements</label>
                  <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    rows="3"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Financial Need Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Need & Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Total Amount Needed</label>
                  <input
                    type="text"
                    name="totalAmountNeeded"
                    value={formData.totalAmountNeeded}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Funding Deadline</label>
                  <input
                    type="date"
                    name="fundingDeadline"
                    value={formData.fundingDeadline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-1">Why You Need Financial Help?</label>
                  <textarea
                    name="financialHelpReason"
                    value={formData.financialHelpReason}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    rows="4"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit Section */}
            <div className="space-y-4">
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                    required
                  />
                  <span className="text-gray-700">
                    I confirm that all the information provided is accurate and that I agree to the platform's verification process.
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="fundsUsage"
                    checked={formData.fundsUsage}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                    required
                  />
                  <span className="text-gray-700">
                    I understand that all funds received must be used strictly for educational purposes.
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="verification"
                    checked={formData.verification}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                    required
                  />
                  <span className="text-gray-700">
                    I allow the platform to verify my application before approval.
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#C62828] text-white rounded-md hover:bg-[#B71C1C]"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ApplyPopup;
