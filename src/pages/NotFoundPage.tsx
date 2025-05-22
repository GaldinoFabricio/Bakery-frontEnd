import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4">
      <div className="max-w-md w-full text-center">
        <img 
          src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg" 
          alt="Bakery products" 
          className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-md"
        />
        
        <h1 className="text-6xl font-serif font-bold text-amber-700 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for seems to have been eaten.
          Don't worry, we have plenty more delicious content for you.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/products" className="text-amber-700 hover:text-amber-800 transition-colors">
            Our Products
          </Link>
          <Link to="/contact" className="text-amber-700 hover:text-amber-800 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;