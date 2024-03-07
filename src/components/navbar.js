import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/asset.svg';
//import profileIcon from '../assets/images/profile.svg';

const Navbar = () => {
    return (
        <nav className="bg-[#1A2C2C] p-4 z-2 flex items-center justify-between">
            {/* Home link */}
            <Link to="/dashboard" className="mx-auto flex items-center text-white mr-4">
                <img src={homeIcon} alt="Home" className="w-8 h-8 mr-2" />
            </Link>
            {/* Profile link */}
            <Link to="/search" className="mx-auto flex items-center text-white">
                <img src={homeIcon} alt="Profile" className="w-8 h-8 mr-2" />
            </Link>
        </nav>
    );
}

export default Navbar;