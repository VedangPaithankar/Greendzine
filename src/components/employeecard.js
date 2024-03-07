import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ empid, name, position, dob }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the employee productivity dashboard on click
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#131816] text-[#646665] shadow-md rounded-md text-xl p-4 mb-4 cursor-pointer" onClick={handleClick}>
      <p className='mb-2'>EMP ID: {empid}</p>
      <p className='mb-2'>Name:{name}</p>
      <p className='mb-2'>Position:{position}</p>
      <p className='mb-2'>Date of Birth: {dob}</p>
    </div>
  );
};

export default EmployeeCard;