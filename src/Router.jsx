import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const ProfileSelectionPage = lazy(() => import('./pages/ProfileSelectionPage'));
const RecipientPageWithModal = lazy(() => import('./pages/RecipientPageWithModal'));
const RecipientDetailView = lazy(() => import('./components/RecipientProfile/RecipientDetailView'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Profile Selection Page */}
        <Route path="/" element={<ProfileSelectionPage />} />

        {/* Landing Page */}
        <Route path="/Home" element={<LandingPage />} />

        {/* Recipients Page */}
        <Route path="/recipients" element={<RecipientPageWithModal />} />

        {/* Recipient Detail View */}
        <Route path="/recipient/detail" element={<RecipientDetailView onClose={() => window.history.back()} />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
