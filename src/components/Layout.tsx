import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '../context/CartContext';
import SEOMetaTags from './SEOMetaTags';

const Layout: React.FC = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <SEOMetaTags 
          title="Artisan Bakery | Fresh Bread, Cakes & Pastries"
          description="Discover handcrafted breads, delicious cakes, and fresh pastries at our artisan bakery. Made with love using traditional recipes and finest ingredients."
        />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;