// import React, { useState, useEffect, Suspense, lazy } from 'react';
// // import { v4 as uuidv4 } from 'uuid';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import { useNavigate } from 'react-router-dom';

// const RecipientNavbar = lazy(() => import('../components/RecipientProfile/RecipientNavbar'));
// const StudentCard = lazy(() => import('../components/RecipientProfile/StudentCard'));
// const RecipientDetailView = lazy(() => import('../components/RecipientProfile/RecipientDetailView'));

// const RecipientProfilePage = () => {
//   const navigate = useNavigate();
//   const [students, setStudents] = useState([]);

//   // Load students from localStorage on component mount
//   useEffect(() => {
//     const savedStudents = localStorage.getItem('needyStudents');
//     if (savedStudents) {
//       setStudents(JSON.parse(savedStudents));
//     }

//   }, []);

//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleNewStudent = (studentData) => {
//     const newStudent = {
//       id: uuidv4(),
//       ...studentData
//     };
//     const updatedStudents = [...students, newStudent];
//     setStudents(updatedStudents);
//     localStorage.setItem('needyStudents', JSON.stringify(updatedStudents));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 relative">
//       <Suspense fallback={<LoadingSpinner />}>
//         <RecipientNavbar onNewStudent={handleNewStudent} />
//       </Suspense>
//       <Suspense fallback={<LoadingSpinner />}>
//         <div className="container  mx-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center sm:text-center">
//             Students Needing Support
//           </h1>

//           <div className="flex flex-wrap justify-center gap-4 w-full max-w-screen-xl mx-auto px-4">
//             {students.map(student => (
//               <div key={student.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[320px] flex justify-center">
//                 <Suspense fallback={<LoadingSpinner />}>
//                   <StudentCard
//                     student={student}
//                     onClick={() => handleCardClick(student)}
//                   />
//                 </Suspense>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Suspense>

//       {/* Student Detail Modal */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <RecipientDetailView 
//               student={selectedStudent} 
//               onClose={() => setSelectedStudent(null)} 
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecipientProfilePage;
