
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-serif font-bold">Ista</span>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Bringing you the finest natural products from traditional farming practices. 
              Pure, organic, and sustainably grown with love and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-green-100 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-green-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-green-100 text-sm mb-4">
              Subscribe to get updates on new products and farming tips
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-green-800 text-white placeholder-green-300 border border-green-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-500 transition-colors rounded-r-md">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm">
            © 2024 Ista Natural Farming. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
