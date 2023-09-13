import React from 'react';
import { useNavigate } from 'react-router-dom';

function AuthGuard({ children }) {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check your authentication status

  if (!isLoggedIn) {
    // If the user is not logged in, redirect to the login page
    navigate('/login');
    return null; // Render nothing until the redirection takes place
  }

  return <>{children}</>; // Render the authenticated content
}

export default AuthGuard;
