import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard, { DashboardIndex } from './pages/Dashboard'
import FeedbackList from './components/Feedbacklist'
import AIInsights from './components/AIInsights'

// A wrapper component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // If no token is found, redirect to the login page
    return <Navigate to="/login" replace />;
  }
  return children;
};

// A wrapper component for routes that should only be accessible to unauthenticated users
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    // If a token is found, it means the user is logged in, so redirect to the dashboard
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }>
        <Route index element={<DashboardIndex />} />
        <Route path="feedback" element={<FeedbackList />} />
        <Route path="insights" element={<AIInsights />} />
      </Route>
    </Routes>
  );
}

export default App
