import React from 'react';
import componylogo from '../assets/images/clogo.png';
import grp4logo from '../assets/images/grp4.png';

const productivityData = [
    { day: 'Monday', productivity: 4 },
    { day: 'Tuesday', productivity: 92 },
    { day: 'Wednesday', productivity: 122 },
    { day: 'Thursday', productivity: 93 },
    { day: 'Friday', productivity: 89 },
    { day: 'Saturday', productivity: 98 },
];

const Progressbar = ({ day, productivity }) => {
    return (
        <div>
            <p className='text-white text-sm'>Productivity on {day}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-green-600 border-green-300 h-2.5 rounded-full" style={{ width: `${productivity}%`, maxWidth: '100%' }}></div>
                <div className='text-[10px] text-white text-end'>
                {productivity}
                </div>
            </div>
        </div>
    );
};

const EmployeeProductivityDashboard = () => {
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-[#000000] to-[#000E09] flex flex-col items-center justify-center'>
            <div className="fixed top-0 right-0 mt-4 mr-4">
                <img src={grp4logo} alt="Company Logo" className="w-12 h-12" />
            </div>
            <div className="mb-8">
                <img src={componylogo} alt="Company Logo" className="w-24 h-24" />
            </div>
            <h6 className='bg-[#1A2C2C] text-white text-sm p-4 rounded-[25px] w-[257px] z-[10]'>Employee Productivity Dashboard</h6>
            <div className="flex flex-col items-left bg-[#5E5E5E82] p-10 rounded-b-[25px] mt-[-22px]">
                {productivityData.map((data, index) => (
                    <div key={index} className="my-4">
                        <Progressbar day={data.day} productivity={data.productivity} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeProductivityDashboard;