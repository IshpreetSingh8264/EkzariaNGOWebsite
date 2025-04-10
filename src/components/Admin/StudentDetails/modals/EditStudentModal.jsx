import React from 'react';
import StudentFormFields from '../components/StudentFormFields';

const EditStudentModal = ({ editForm, setEditForm, onSave, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Edit Student Details</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>

          <StudentFormFields 
            formData={editForm}
            setFormData={setEditForm}
            showPersonalInfo={true}
            showEducationInfo={true}
            showFinancialInfo={true}
          />

          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="verified"
                checked={editForm.verified || false}
                onChange={(e) => setEditForm({...editForm, verified: e.target.checked})}
                className="h-4 w-4 text-[#43A047] rounded border-gray-300 focus:ring-[#43A047]"
              />
              <label htmlFor="verified" className="ml-2 block text-sm text-gray-700">
                Verify Applicant
              </label>
            </div>
            <button
              onClick={onSave}
              className="px-6 py-2 bg-[#43A047] text-white rounded-md hover:bg-[#2E7D32] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentModal;
