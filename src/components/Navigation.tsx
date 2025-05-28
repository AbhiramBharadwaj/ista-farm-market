
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-green-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-2xl font-serif font-bold text-green-800">Ista</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`${
                isActive('/shop') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className={`${
                isActive('/blog') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
