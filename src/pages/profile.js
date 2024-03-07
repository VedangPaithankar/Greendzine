import React, { useEffect, useState } from 'react';
import componylogo from '../assets/images/clogo.png';
import axios from 'axios';
import EmployeeCard from '../components/employeecard';

const SearchPage = () => {
  const [employees] = useState([
    { empid: 1, name: 'John Doe', position: 'Software Engineer', dob: '1990-01-01' },
    { empid: 2, name: 'Jane Smith', position: 'Product Manager', dob: '1985-05-15' },
    // Add more employees as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const authenticate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/authenticate', {
        username: 'username', // Replace with actual username
        password: 'password' // Replace with actual password
      });
      const { authenticated } = response.data;
      setAuthenticated(authenticated);
    } catch (error) {
      console.error('Error authenticating:', error);
    }
  };

  // Function to call authenticate when component mounts
  useEffect(() => {
    authenticate();
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#000000] to-[#000E09] flex flex-col items-center justify-center">
      <div className="">
        <img src={componylogo} alt="Company Logo" className="w-24 h-24" />
      </div>
      
      <div className='m-6'>
        <input
          type="text"
          placeholder="Search with name"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full px-8 py-2 text-base text-white bg-[#131816] rounded-[50px]"
        />
      </div>

      {authenticated ? (
        <div className="">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.empid}
              empid={employee.empid}
              name={employee.name}
              position={employee.position}
              dob={employee.dob}
            />
          ))}
        </div>
      ) : (
        <p className="text-white">Please wait... Authenticating</p>
      )}
    </div>
  );
};

export default SearchPage;