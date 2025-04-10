import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StudentTable from './StudentDetails/StudentTable';
import EditStudentModal from './StudentDetails/modals/EditStudentModal';
import StudentDetailModal from './StudentDetails/modals/StudentDetailModal';

const EnhancedStudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Load students from localStorage
  useEffect(() => {
    const loadStudents = () => {
      let needyStudents = JSON.parse(localStorage.getItem('needyStudents') || '[]');
      let needyPersons = JSON.parse(localStorage.getItem('needyPersons') || '[]');
      
      let allStudents = [...needyPersons, ...needyStudents];
      let uniqueStudents = allStudents.filter((student, index, self) =>
        index === self.findIndex(s => s.id === student.id)
      );

      setStudents(uniqueStudents);
    };
    
    loadStudents();
    window.addEventListener('storage', loadStudents);
    return () => window.removeEventListener('storage', loadStudents);
  }, []);

  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem('needyPersons', JSON.stringify(updatedStudents));
    localStorage.setItem('needyStudents', JSON.stringify(updatedStudents));
  };

  const handleVerify = (id) => {
    const updatedStudents = students.map(student => 
      student.id === id ? { ...student, verified: true } : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('needyPersons', JSON.stringify(updatedStudents));
    localStorage.setItem('needyStudents', JSON.stringify(updatedStudents));
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditForm({
      ...student,
      name: student.name || '',
      email: student.email || '',
      gender: student.gender || '',
      phone: student.phone || '',
      location: student.location || '',
      nationality: student.nationality || '',
      educationLevel: student.educationLevel || '',
      institution: student.institution || '',
      fieldOfStudy: student.fieldOfStudy || '',
      achievements: student.achievements || '',
      totalAmountNeeded: student.totalAmountNeeded || 0,
      fundingDeadline: student.fundingDeadline || '',
      fundingNeeds: student.fundingNeeds || '',
      financialHelpReason: student.financialHelpReason || ''
    });
  };

  const handleSaveEdit = () => {
    const updatedStudents = students.map(student => 
      student.id === editingId ? { ...student, ...editForm } : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('needyPersons', JSON.stringify(updatedStudents));
    localStorage.setItem('needyStudents', JSON.stringify(updatedStudents));
    setEditingId(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-[#FFFFFF] rounded-lg shadow p-6"
    >
      <h2 className="text-2xl font-bold text-[#212121] mb-6">Application Details</h2>
      
      <StudentTable
        students={students}
        editingId={editingId}
        editForm={editForm}
        setEditForm={setEditForm}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onVerify={handleVerify}
        onView={setSelectedStudent}
      />

      {editingId && (
        <EditStudentModal
          editForm={editForm}
          setEditForm={setEditForm}
          onSave={handleSaveEdit}
          onClose={() => setEditingId(null)}
        />
      )}

      {selectedStudent && !editingId && (
        <StudentDetailModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </motion.div>
  );
};

export default EnhancedStudentDetails;
