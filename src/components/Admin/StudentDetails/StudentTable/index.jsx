import React from 'react';
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
// import StudentStatusBadge from '../';
import StudentStatusBadge from '../components/StudentStatusBadge';
import StudentActions from '../components/StudentActions';

const StudentTable = ({ 
  students, 
  editingId, 
  editForm, 
  setEditForm,
  onEdit,
  onDelete,
  onVerify,
  onView
}) => {
  return (
    <div className="w-full overflow-x-auto">
      
      <table className="w-full divide-y divide-[#E0E0E0] min-w-[600px]">
        <thead className="bg-[#FBE9E7]">
          <tr>
            <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#424242] uppercase tracking-wider">Name</th>
            <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#424242] uppercase tracking-wider">Email</th>
            <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#424242] uppercase tracking-wider">Status</th>
            <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#424242] uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-[#E0E0E0]">
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-[#424242]">
                  {editingId === student.id ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="border rounded p-1 w-full"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-[#424242]">
                  {editingId === student.id ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="border rounded p-1 w-full"
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-[#424242]">
                  <StudentStatusBadge verified={student.verified} />
                </td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-[#424242]">
                  <StudentActions 
                    student={student}
                    editingId={editingId}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onVerify={onVerify}
                    onView={onView}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-2 sm:px-4 md:px-6 py-4 text-center text-xs sm:text-sm text-[#757575]">
                No student records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
