import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white border-t border-gray-700">
            <div className="container mx-auto px-6 py-12">
                {/* Main Navigation Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {/* About Us Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-3">About Us</h2>
                        <ul className="space-y-2 text-gray-400 text-center">
                            <li><NavLink to="/about" className="hover:text-orange-400">Our Story</NavLink></li>
                            <li><NavLink to="/careers" className="hover:text-orange-400">Careers</NavLink></li>
                            <li><NavLink to="/blog" className="hover:text-orange-400">Blog</NavLink></li>
                            <li><NavLink to="/press" className="hover:text-orange-400">Press</NavLink></li>
                        </ul>
                    </div>

                    {/* Customer Service Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-3">Customer Service</h2>
                        <ul className="space-y-2 text-gray-400 text-center">
                            <li><NavLink to="/faq" className="hover:text-orange-400">FAQ</NavLink></li>
                            <li><NavLink to="/shipping" className="hover:text-orange-400">Shipping Info</NavLink></li>
                            <li><NavLink to="/returns" className="hover:text-orange-400">Returns</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-orange-400">Contact Us</NavLink></li>
                        </ul>
                    </div>

                    {/* Policies Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-3">Policies</h2>
                        <ul className="space-y-2 text-gray-400 text-center">
                            <li><NavLink to="/privacy-policy" className="hover:text-orange-400">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms-of-use" className="hover:text-orange-400">Terms of Use</NavLink></li>
                            <li><NavLink to="/refund-policy" className="hover:text-orange-400">Refund Policy</NavLink></li>
                            <li><NavLink to="/disclaimer" className="hover:text-orange-400">Disclaimer</NavLink></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-gray-400 hover:text-orange-400">
                                <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-orange-400">
                                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-orange-400">
                                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <span className="text-sm text-gray-400 mb-4 md:mb-0">
                        © 2024 <a href="https://github.com/faiqueansari23" className="text-orange-400 hover:underline">Luxera</a>. All Rights Reserved.
                    </span>
                    {/* <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="#" className="text-gray-400 hover:text-gray-300">
                            <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-300">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-300">
                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
