import React, { Suspense, lazy } from 'react';
import Navbar from '../components/LandingPage/Navbar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ImageSlider = lazy(() => import('../components/LandingPage/ImageSlider'));
const AboutSection = lazy(() => import('../components/LandingPage/AboutSection'));
const VideoSection = lazy(() => import('../components/LandingPage/VideoSection'));
const ScrollingGallery = lazy(() => import('../components/LandingPage/ScrollingGallery'));
const CTASection = lazy(() => import('../components/LandingPage/CTASection'));
const Footer = lazy(() => import('../components/LandingPage/Footer'));

const LandingPage = () => {
  return ( 
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ImageSlider />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <VideoSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ScrollingGallery />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;
