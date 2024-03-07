// PrivateRoute component to handle authentication
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import SearchPage from '../pages/profile';

const PrivateRoute = ({ element: Element, ...rest }) => {
    // Check if user is authenticated, if not Navigate to login page
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  
    return isAuthenticated ? <SearchPage/> : <Navigate to="/login" />;
};

export default PrivateRoute;
