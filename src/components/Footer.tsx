import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Artisan Bakery</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Handcrafted breads, pastries, and cakes made with love using traditional
              recipes and the finest ingredients.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" className="text-amber-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-amber-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-amber-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-200 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-200 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-amber-200 hover:text-white text-sm transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amber-200 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-amber-200 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-amber-200">
                  123 Bakery Street, Flour City, FC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-300 flex-shrink-0" />
                <span className="text-sm text-amber-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-300 flex-shrink-0" />
                <span className="text-sm text-amber-200">hello@artisanbakery.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm text-amber-200">
                <span className="font-medium">Mon - Fri:</span> 7:00 AM - 7:00 PM
              </li>
              <li className="text-sm text-amber-200">
                <span className="font-medium">Saturday:</span> 7:00 AM - 5:00 PM
              </li>
              <li className="text-sm text-amber-200">
                <span className="font-medium">Sunday:</span> 8:00 AM - 3:00 PM
              </li>
            </ul>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block px-4 py-2 bg-amber-700 hover:bg-amber-600 transition-colors text-white text-sm rounded-md"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-300 text-sm">
            © {new Date().getFullYear()} Artisan Bakery. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-xs text-amber-300">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;