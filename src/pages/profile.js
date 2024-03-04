import React, { useState } from 'react';

// Assuming you have a component for EmployeeCard
const EmployeeCard = ({ empid, name, position, dob }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <p><strong>Employee ID:</strong> {empid}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
    </div>
  );
};

const SearchPage = () => {
  // Sample employee data
  const [employees] = useState([
    { empid: 1, name: 'John Doe', position: 'Software Engineer', dob: '1990-01-01' },
    { empid: 2, name: 'Jane Smith', position: 'Product Manager', dob: '1985-05-15' },
    // Add more employees as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      {/* Company logo */}
      <div className="mb-4">
        <img src="/path/to/company-logo.png" alt="Company Logo" className="w-24 h-24" />
      </div>
      
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employees by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Employee cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default SearchPage;