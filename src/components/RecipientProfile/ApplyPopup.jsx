import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ApplyPopup = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    photo: '',
    email: '',
    phone: '',
    location: '',
    nationality: '',
    educationLevel: '',
    institution: '',
    fieldOfStudy: '',
    achievements: '',
    totalAmountNeeded: '',
    fundingDeadline: '',
    financialHelpReason: '',
    terms: false,
    fundsUsage: false,
    verification: false,
    verified: false,
    fundsReceived: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const renderInputField = (label, name, type = 'text', required = false) => (
    <div>
      <label className="block text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md"
        required={required}
      />
    </div>
  );

  const renderCheckbox = (label, name) => (
    <div>
      <label className="flex items-start">
        <input
          type="checkbox"
          name={name}
          checked={formData[name]}
          onChange={handleChange}
          className="mt-1 mr-2"
          required
        />
        <span className="text-gray-700">{label}</span>
      </label>
    </div>
  );

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
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderInputField('Full Name', 'name', 'text', true)}
                {renderInputField('Gender', 'gender', 'text', true)}
                {renderInputField('Email Address', 'email', 'email', true)}
                {renderInputField('Phone Number', 'phone', 'tel', true)}
                {renderInputField('Address', 'location', 'text', true)}
                {renderInputField('Nationality', 'nationality', 'text', true)}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Educational Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderInputField('Education Level', 'educationLevel', 'text', true)}
                {renderInputField('Institution Name', 'institution', 'text', true)}
                {renderInputField('Field of Study', 'fieldOfStudy', 'text', true)}
                {renderInputField('Achievements', 'achievements', 'text', true)}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Need</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderInputField('Total Amount Needed', 'totalAmountNeeded', 'text', true)}
                {renderInputField('Funding Deadline', 'fundingDeadline', 'date', true)}
                {renderInputField('Reason for Financial Help', 'financialHelpReason', 'text', true)}
              </div>
            </div>

            <div className="space-y-4">
              {renderCheckbox(
                "I confirm that all the information provided is accurate and that I agree to the platform's verification process.",
                'terms'
              )}
              {renderCheckbox(
                'I understand that all funds received must be used strictly for educational purposes.',
                'fundsUsage'
              )}
              {renderCheckbox(
                'I allow the platform to verify my application before approval.',
                'verification'
              )}
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
