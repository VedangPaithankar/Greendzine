// PrivateRoute component to handle authentication
import React from 'react';
import { Navigate } from 'react-router-dom';
import EmployeeProductivityDashboard from '../pages/home';

const PrivateRoute = ({ element: Element, ...rest }) => {
    // Check if user is authenticated, if not Navigate to login page
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  
    return isAuthenticated ? <EmployeeProductivityDashboard /> : <Navigate to="/login" />;
};

export default PrivateRoute;