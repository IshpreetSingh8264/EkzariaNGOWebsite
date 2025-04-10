// import React, { useEffect, useRef } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/opacity.css';

// const ImageGallery = () => {
//   const scrollingRowRef = useRef(null);
//   const speed = 0.5;
//   const imageSize = 'w-[300px] h-[200px]';
//   const imageGap = 'mx-8'; // Increased gap between images

//   const row1Images = [
//     'https://images.unsplash.com/photo-1606326608606-aa0b629d1932',
//     'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
//     'https://images.unsplash.com/photo-1521791136064-7986c2920216',
//     'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
//     'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
//   ];

//   const row2Images = [
//     'https://images.unsplash.com/photo-1524179091875-bccc98646bb2',
//     'https://images.unsplash.com/photo-1521791136064-7986c2920216',
//     'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
//     'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
//     'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
//   ];

//   useEffect(() => {
//     let animationFrameId;
//     let position = 0;
//     let lastTime = 0;
//     const fps = 60;
//     const interval = 1000 / fps;
//     let containerWidth = 0;

//     const calculateContainerWidth = () => {
//       if (scrollingRowRef.current) {
//         const firstImage = scrollingRowRef.current.firstChild;
//         if (firstImage) {
//           const imageWidth = firstImage.offsetWidth;
//           const gap = 32; // mx-8 = 32px
//           containerWidth = (imageWidth + gap) * row1Images.length;
//         }
//       }
//     };

//     const animate = (timestamp) => {
//       if (!lastTime) lastTime = timestamp;
//       const delta = timestamp - lastTime;

//       if (delta > interval) {
//         if (scrollingRowRef.current) {
//           position -= speed;
//           // Reset position when first copy is completely scrolled
//           if (position <= -containerWidth) {
//             position = 0;
//           }
//           scrollingRowRef.current.style.transform = `translateX(${position}px)`;
//           scrollingRowRef.current.style.willChange = 'transform';
//         }
//         lastTime = timestamp - (delta % interval);
//       }
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     calculateContainerWidth();
//     animationFrameId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="w-full relative overflow-hidden">
//       {/* Scrolling row with fade effect */}
//       <div className="relative py-8">
//         <div 
//           ref={scrollingRowRef}
//           className="flex gap-6 items-center whitespace-nowrap will-change-transform"
//         >
//           {[...row1Images, ...row1Images].map((src, index) => (
//             <LazyLoadImage
//               key={`scroll-${index}`}
//               src={`${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80`}
//               effect="opacity"
//               className={`${imageSize} object-cover ${imageGap}`}
//             />
//           ))}
//         </div>
//         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
//         <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
//       </div>

//       {/* Static row */}
//       <div className="flex justify-center py-4 overflow-x-hidden">
//         {row2Images.map((src, index) => (
//           <LazyLoadImage
//             key={`static-${index}`}
//             src={`${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80`}
//             effect="opacity"
//             className={`${imageSize} object-cover ${imageGap}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
