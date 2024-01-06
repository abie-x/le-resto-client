import React, { useState } from "react";
import Searchbar from "./Searchbar";

const Navbar = ({isProfile}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full px-2 sm:px-6 lg:px-8 text-white">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img className="h-5 w-auto" src="logo.png" alt="Your Company" />
                    </div>
                    {/* Nav Links */}
                    {
                        isProfile && (
                            <Searchbar />
                        )
                    }
                    <div className="hidden sm:block">
                        {isProfile ?  (
                            <div className="flex items-center">
                                <div className="flex-col justify-center">
                                    <h6 className="text-sm text-right">Hey doodle</h6>
                                    <h6 className="text-xs">see your dashboard</h6>
                                </div>
                                <img src="profile.png" className="w-14 h-14 object-contain" />
                        </div>
                        ) : (
                            <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                        </div>
                        )}
                    </div>
                    {/* Mobile Hamburger Menu */}
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            {/* Mobile Menu */}
            <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
