import React from 'react'
import Login from './pages/login';
import Navbar from './components/navbar';
import EmployeeProductivityDashboard from './pages/home';
import SearchPage from './pages/profile';

function App() {
  return (
    <div className="text-4xl">
      <SearchPage/>
      <Navbar/>
    </div>
  );
}

export default App;
