/**
 * RecipientPageWithModal Component
 * 
 * This component displays a list of students who need support. It allows users to:
 * - View the list of students.
 * - Add a new student to the list by applying through the form.
 * - Navigate to a detailed view of a specific student in order to donate money to them.
 * 
 * The component uses localStorage for now to persist the list of students and React Router for navigation.
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const LoadingSpinner = lazy(() => import('../components/common/LoadingSpinner'));
const ErrorBoundary = lazy(() => import('../components/common/ErrorBoundary'));
const Navbar = lazy(() => import('../components/common/Navbar'));
const StudentCard = lazy(() => import('../components/RecipientProfile/StudentCard'));

const RecipientPageWithModal = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadStudents = () => {
      const savedStudents = localStorage.getItem('needyStudents');
      if (savedStudents) {
        setStudents(JSON.parse(savedStudents));
      }
    };
    loadStudents();
  }, []);

  const handleNewStudent = (studentData) => {
    const newStudent = { id: uuidv4(), ...studentData };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('needyStudents', JSON.stringify(updatedStudents));
  };

  const handleViewDetail = (student) => {
    navigate('/recipient/detail', { state: { student } });
  };

  const renderStudentCards = () => {
    if (students.length === 0) {
      return (
        <div className="text-center text-gray-600 mt-8">
          No students found.
        </div>
      );
    }

    return students.map((student) => (
      <Suspense fallback={<LoadingSpinner />} key={student.id}>
        <ErrorBoundary>
          <StudentCard student={student} onClick={() => handleViewDetail(student)} />
        </ErrorBoundary>
      </Suspense>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary>
          <Navbar onNewStudent={handleNewStudent} />
        </ErrorBoundary>
      </Suspense>

      <div className="container mx-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4">
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
              Students Needing Support
            </h1>
          </ErrorBoundary>
        </Suspense>

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-screen-xl mx-auto px-4">
          {renderStudentCards()}
        </div>
      </div>
    </div>
  );
};

export default RecipientPageWithModal;
