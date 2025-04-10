import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingSpinner from './components/common/LoadingSpinner'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const ProfileSelectionPage = lazy(() => import('./pages/ProfileSelectionPage'))
const LoadingScreen = lazy(() => import('./pages/LoadingScreen'))
const RecipientPageWithModal = lazy(() => import('./pages/RecipientPageWithModal'))
const RecipientDetailView = lazy(() => import('./components/RecipientProfile/RecipientDetailView'))
const AdminPage = lazy(() => import('./pages/AdminPage'))

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/recipient/detail" element={<RecipientDetailView onClose={() => window.history.back()} />}/>
        <Route path="/" element={<ProfileSelectionPage />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/recipients" element={<RecipientPageWithModal />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Suspense>
  )
}

export default Router
