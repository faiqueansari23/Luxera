import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location from React Router

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the mobile menu when the route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className="sticky z-50 top-6 bg-white shadow-lg rounded-full max-w-screen-lg mx-auto mt-6">
            <nav className="border-gray-200 rounded-full bg-white py-2.5">
                <div className="container mx-auto flex items-center justify-between px-4 lg:px-6 h-16 rounded-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/image/luxera-logo.png" className="h-16 lg:h-20 mr-4" alt="Luxera Logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-4 flex-grow">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/Shop"
                            className={({ isActive }) =>
                                `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/FAQ"
                            className={({ isActive }) =>
                                `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                            }
                        >
                            FAQ
                        </NavLink>
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <Bars3Icon className="w-6 h-6" />
                    </button>

                    {/* Auth Buttons (desktop) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            to="/LogIn"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 shadow"
                        >
                            Log in
                        </Link>
                        <Link
                            to="SignUp"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300"
                        >
                            SignUp
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-black bg-opacity-50"
                        onClick={toggleMenu}
                    ></div>
                )}

                {/* Mobile Menu */}
                <div className={`fixed inset-x-0 top-16 z-40 bg-white bg-opacity-90 transform transition-transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} lg:hidden`}>
                    <div className="flex items-center justify-between p-4">
                        <Link to="/" className="flex items-center">
                            <img src="/image/luxera-logo.png" className="h-16 lg:h-20" alt="Luxera Logo" />
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <ul className="space-y-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Shop"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                                    }
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/FAQ"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive ? "text-orange-700 bg-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-orange-700"}`
                                    }
                                >
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                        <div className="flex flex-col space-y-2 mt-4">
                            <Link
                                to="/LogIn"
                                className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 shadow"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300"
                            >
                                SignUp
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
