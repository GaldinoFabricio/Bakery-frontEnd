import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import { ChevronLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Reset quantity after adding to cart
      setQuantity(1);
    }
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-block px-6 py-3 bg-amber-700 text-white font-medium rounded-md hover:bg-amber-800 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} | Artisan Bakery`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | Artisan Bakery`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Helmet>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link 
              to="/products" 
              className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Products
            </Link>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                <div className="h-80 md:h-full">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product Details */}
              <div className="md:w-1/2 p-6 md:p-8 lg:p-10">
                <h1 className="text-3xl font-serif font-bold text-gray-900">
                  {product.name}
                </h1>
                
                <div className="mt-4 text-2xl font-medium text-amber-700">
                  ${product.price.toFixed(2)}
                </div>
                
                <div className="mt-6">
                  <h2 className="text-gray-700 font-medium">Description</h2>
                  <p className="mt-2 text-gray-600">
                    {product.description}
                  </p>
                </div>
                
                {product.ingredients && (
                  <div className="mt-6">
                    <h2 className="text-gray-700 font-medium">Ingredients</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient: string, index: number) => (
                        <span 
                          key={index} 
                          className="inline-block bg-amber-50 text-amber-800 text-sm px-3 py-1 rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.nutritionalInfo && (
                  <div className="mt-6">
                    <h2 className="text-gray-700 font-medium">Nutritional Information</h2>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-gray-500 text-xs">Calories</div>
                        <div className="font-medium">{product.nutritionalInfo.calories}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-gray-500 text-xs">Protein</div>
                        <div className="font-medium">{product.nutritionalInfo.protein}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-gray-500 text-xs">Carbs</div>
                        <div className="font-medium">{product.nutritionalInfo.carbs}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-gray-500 text-xs">Fat</div>
                        <div className="font-medium">{product.nutritionalInfo.fat}</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => handleQuantityChange(-1)}
                        className="px-3 py-2 text-gray-600 hover:text-amber-700 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-medium text-gray-800">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(1)}
                        className="px-3 py-2 text-gray-600 hover:text-amber-700 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;