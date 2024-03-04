import React from 'react';
//import { a } from 'react-router-dom'; // Import a from react-router-dom if using React Router
import homeimg from '../assets/images/asset.svg';
const Navbar = () => {
    return (
        <nav className="bg-[#1A2C2C] p-4 z-2 flex items-center justify-between">
            {/* Home logo and a */}
            <a to="/" className="mx-auto flex items-center text-white mr-4">
                <img src={homeimg} alt="Home" className="w-8 h-8 mr-2" />
            </a>
            {/* Profile logo and a */}
            <a to="/" className="mx-auto flex items-center text-white">
                <img src={homeimg} alt="Profile" className="w-8 h-8 mr-2" />
            </a>
        </nav>
    );
}

export default Navbar;