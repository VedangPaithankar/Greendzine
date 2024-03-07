import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Navbar from './components/navbar';
import SearchPage from './pages/profile';
import PrivateRoute from './components/privateroute-d';
import PrivateRoute2 from './components/privateroute-s';
function App() {
  return (
    <Router>
      <div className="text-4xl">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />} />
          <Route path="/search" element={<PrivateRoute2 />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
