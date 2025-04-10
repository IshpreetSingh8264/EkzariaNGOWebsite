import React, { Suspense } from 'react';
import Navbar from '../components/common/Navbar';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import ImageSlider from '../components/LandingPage/ImageSlider';
import AboutSection from '../components/LandingPage/AboutSection';
import VideoSection from '../components/LandingPage/VideoSection';
import ScrollingGallery from '../components/LandingPage/ScrollingGallery';
import CTASection from '../components/LandingPage/CTASection';
import Footer from '../components/LandingPage/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with ErrorBoundary and Suspense */}
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <ImageSlider />
          <AboutSection />
          <VideoSection />
          <ScrollingGallery />
          <CTASection />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default LandingPage;
