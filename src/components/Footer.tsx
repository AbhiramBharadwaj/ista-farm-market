
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">I</span>
              </div>
              <div>
                <span className="text-2xl font-serif font-light">Ista Farm</span>
                <p className="text-green-100 text-sm">Grown with love, harvested with care</p>
              </div>
            </div>
            <p className="text-green-100 mb-6 max-w-md leading-relaxed">
              A 2.5-acre organic farm in Shivamogga, where we follow chemical-free practices 
              and handcraft products in small batches, honoring the natural rhythm of seasons.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-green-100">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Shivamogga, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2 text-green-100">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@istafarm.com</span>
              </div>
            </div>

            {/* WhatsApp and Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors p-2">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors p-2">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Farm Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-green-100 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="text-green-100 hover:text-white transition-colors">Farm Life Blog</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Seasonal Updates</h3>
            <p className="text-green-100 text-sm mb-4">
              Get notified when your favorite seasonal products are ready for harvest
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-green-800 text-white placeholder-green-300 border border-green-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-500 transition-colors rounded-r-lg">
                <Mail className="h-4 w-4" />
              </button>
            </div>
            <p className="text-green-200 text-xs mt-2">
              No spam, just seasonal love from our farm family
            </p>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm">
            © 2024 Ista Farm. Handcrafted with 🌱 in Shivamogga.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
