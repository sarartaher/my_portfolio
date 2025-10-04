import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md sm:px-6 lg:px-8 px-4 h-18 flex justify-between items-center">
            {/* Logo / Brand */}
            <div className="flex items-center space-x-2">
                <img src="/Logo.png" alt="Logo" className="h-10 w-10 object-cover" />
                <span className="text-2xl font-bold">My Portfolio</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
                <li>
                    <Link to="/Home" className="hover:text-blue-500 transition">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/About" className="hover:text-blue-500 transition">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/Projects" className="hover:text-blue-500 transition">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className="hover:text-blue-500 transition">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/Update" className="hidden">
                        Update
                    </Link>
                </li>
            </ul>

            {/* Mobile Hamburger (Optional) */}
            {/* You can add a hamburger menu for mobile here later */}
        </nav>
    );
};

export default Navbar;
