import React from 'react';
import { FaEdit, FaTrash, FaCheckCircle, FaEye } from 'react-icons/fa';

const StudentActions = ({ student, editingId, onEdit, onDelete, onVerify, onView }) => {
  return (
    <div className="flex space-x-2">
      {editingId !== student.id && (
        <>
          <button
            onClick={() => onView(student)}
            className="p-2 text-[#1976D2] hover:bg-[#E3F2FD] rounded-full transition-colors"
            title="View Details"
          >
            <FaEye size={16} />
          </button>
          
          <button
            onClick={() => onEdit(student)}
            className="p-2 text-[#FFA000] hover:bg-[#FFF3E0] rounded-full transition-colors"
            title="Edit"
          >
            <FaEdit size={16} />
          </button>
          
          {!student.verified && (
            <button
              onClick={() => onVerify(student.id)}
              className="p-2 text-[#388E3C] hover:bg-[#E8F5E9] rounded-full transition-colors"
              title="Verify"
            >
              <FaCheckCircle size={16} />
            </button>
          )}
          
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this student?')) {
                onDelete(student.id);
              }
            }}
            className="p-2 text-[#D32F2F] hover:bg-[#FFEBEE] rounded-full transition-colors"
            title="Delete"
          >
            <FaTrash size={16} />
          </button>
        </>
      )}
    </div>
  );
};

export default StudentActions;
