// import React, { useState, lazy, Suspense } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import LoadingSpinner from '../components/common/LoadingSpinner';

// // Lazy load all major components
// const RecipientNavbar = lazy(() => import('../components/RecipientProfile/RecipientNavbar'));
// const DonationPopup = lazy(() => import('../components/RecipientProfile/DonationPopup'));
// const StudentDetailsSection = lazy(() => import('../components/RecipientProfile/StudentDetailsSection'));
// const BackButton = lazy(() => import('../components/common/BackButton'));

// const RecipientDetailPage = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { student } = state || {};

//   if (!student) {
//     navigate('/recipients');
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Suspense fallback={<LoadingSpinner />}>
//         <RecipientNavbar />
//         <div className="container mx-auto py-8 px-4">
//           <Suspense fallback={<div className="h-10" />}>
//             <BackButton 
//               onClick={() => navigate(-1)}
//               className="mb-6 text-blue-600 hover:text-blue-800"
//             />
//           </Suspense>

//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <LazyLoadComponent>
//               <div className="md:flex">
//                 {/* Student photo with lazy loading */}
//                 <div className="md:w-1/3 relative">
//                   <LazyLoadImage
//                     src={student.photo}
//                     alt={student.name}
//                     className="w-full h-64 md:h-full object-cover"
//                     effect="blur"
//                     wrapperClassName="lazy-load-image-wrapper"
//                     placeholderSrc={student.photo}
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-200 hover:opacity-0">
//                     <span className="text-white text-2xl font-bold">{student.name}</span>
//                   </div>
//                 </div>

//                 {/* Student details section with lazy loading */}
//                 <Suspense fallback={<LoadingSpinner />}>
//                   <StudentDetailsSection student={student} />
//                 </Suspense>
//               </div>
//             </LazyLoadComponent>

//             {/* Donate button */}
//             <LazyLoadComponent>
//               <div className="p-6 text-center">
//                 <button
//                   onClick={() => setShowPopup(true)}
//                   className="bg-[#C62828] text-white px-6 py-3 rounded-md font-medium hover:bg-[#B71C1C] transition-all duration-200 hover:scale-105"
//                 >
//                   Donate Now
//                 </button>
//               </div>
//             </LazyLoadComponent>
//           </div>
//         </div>
//       </Suspense>

//       {/* Donation Popup with lazy loading */}
//       {showPopup && (
//         <Suspense fallback={<LoadingSpinner />}>
//           <DonationPopup 
//             student={student}
//             onClose={() => setShowPopup(false)}
//           />
//         </Suspense>
//       )}
//     </div>
//   );
// };

// export default RecipientDetailPage;
