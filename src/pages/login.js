import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import componylogo from '../assets/images/Group3.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform authentication logic here
        // For demonstration purposes, setting authenticated status to true
        localStorage.setItem('authenticated', 'true');

        // Redirect to dashboard after successful login
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000000] to-[#000E09]">
            <div className="mb-8">
                <img src={componylogo} alt="Company Logo" className="w-24 h-24" />
            </div>
            <h2 className="text-sm font-semibold text-green-800 mb-4 custom-font">We are electric</h2>
            <form className="w-64 flex flex-col items-center" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="E - mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="bg-[#1F191966] rounded-full p-4 text-base m-4 text-white" 
                    style={{width: 'calc(100% - 20px)', height: '40px'}} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="bg-[#1F191966] shadow-2xl shadow-inner rounded-full p-4 text-base text-white" 
                    style={{width: 'calc(100% - 20px)', height: '40px'}} 
                />
                <button 
                    type="submit" 
                    className="bg-gradient-to-b from-green-700 to-[#000E09] rounded-full text-base mt-8 mb-2 text-white embossed-button" 
                    style={{width: 'calc(100% - 20px)', height: '40px'}}
                >
                    Login
                </button>
                <a href="#" className="text-green-700 text-sm mt-2">Forgot Password?</a>
            </form>
        </div>
    );
};

export default Login;