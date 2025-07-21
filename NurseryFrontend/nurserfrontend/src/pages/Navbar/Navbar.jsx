import { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-green-800 text-white py-2 px-4 text-xs sm:text-sm">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mb-2 sm:mb-0">
                        <span className="flex items-center whitespace-nowrap">
                            <i className="fas fa-phone mr-1"></i>
                            (555) 123-4567
                        </span>
                        <span className="flex items-center whitespace-nowrap">
                            <i className="fas fa-envelope mr-1"></i>
                            hello@shivnursery.com
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1">
                        <a href="#" className="hover:text-green-200 flex items-center whitespace-nowrap">
                            <i className="fas fa-truck mr-1"></i>
                            Track Order
                        </a>
                        <a href="#" className="hover:text-green-200 flex items-center whitespace-nowrap">
                            <i className="fas fa-question-circle mr-1"></i>
                            Help
                        </a>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
                    {/* Logo and Mobile Menu Button */}
                    <div className="flex items-center">
                        <button
                            className="md:hidden mr-3 text-gray-700"
                            onClick={toggleMobileMenu}
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                        <div className="flex items-center">
                            <img
                                src="https://img.icons8.com/color/48/000000/forest.png"
                                alt="Shiv Nursery Logo"
                                className="h-8 w-8 sm:h-10 sm:w-10 mr-2"
                            />
                            <span className="text-xl sm:text-2xl font-bold text-green-700">Shiv Nursery</span>
                        </div>
                    </div>

                    {/* Search - Hidden on mobile */}
                    <div className="hidden md:block w-1/3 mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for plants, seeds, tools..."
                                className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button className="absolute right-0 top-0 h-full px-4 text-gray-600 hover:text-green-700">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <a href="#" className="hidden sm:block text-gray-700 hover:text-green-700">
                            <i className="fas fa-user text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 relative">
                            <i className="fas fa-heart text-xl"></i>
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-700 relative">
                            <i className="fas fa-shopping-cart text-xl"></i>
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Search - Visible only on mobile */}
                <div className="md:hidden px-4 pb-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for plants..."
                            className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="absolute right-0 top-0 h-full px-4 text-gray-600 hover:text-green-700">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="container mx-auto px-4 py-2">
                        <ul className="flex flex-col space-y-2 py-2">
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-home mr-2"></i> Home
                                </a>
                            </li>
                            <li>
                                <NavLink to="/products"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-seedling mr-2"></i> Plants
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-leaf mr-2"></i> Seeds
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-spa mr-2"></i> Planters
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-tools mr-2"></i> Tools
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-gift mr-2"></i> Gifts
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-tag mr-2"></i> Sale
                                </a>
                            </li>
                            <li className="border-t border-gray-200 pt-2 mt-1">
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-book mr-2"></i> Care Guides
                                </a>
                            </li>
                            <li className="border-t border-gray-200 pt-2 mt-1">
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-user mr-2"></i> My Account
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Navigation - Desktop */}
                <nav className="hidden md:block bg-green-700 text-white">
                    <div className="container mx-auto px-4">
                        <ul className="flex flex-wrap py-2">
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-home mr-1"></i> Home
                                </a>
                            </li>
                            <li>
                                <NavLink to="/products"
                                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    <i className="fas fa-seedling mr-2"></i> Plants
                                </NavLink>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-leaf mr-1"></i> Seeds
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-spa mr-1"></i> Planters
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-tools mr-1"></i> Tools
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-gift mr-1"></i> Gifts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-tag mr-1"></i> Sale
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-3 py-2 hover:bg-green-600 rounded-md font-medium">
                                    <i className="fas fa-book mr-1"></i> Care Guides
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;