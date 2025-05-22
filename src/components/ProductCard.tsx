import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden pb-[65%]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <Link to={`/products/${product.id}`} className="block">
            <h3 className="text-lg font-medium text-gray-900 hover:text-amber-700 transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="font-medium text-amber-700">${product.price.toFixed(2)}</div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/products/${product.id}`}
            className="text-sm font-medium text-amber-800 hover:text-amber-700 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center px-3 py-2 bg-amber-100 hover:bg-amber-200 rounded-full text-amber-800 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;