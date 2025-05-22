import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import CategorySection from '../components/CategorySection';
import CountdownTimer from '../components/CountdownTimer';
import { ArrowRight, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setFeaturedProducts(products.filter((product: any) => product.featured).slice(0, 4));
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };
    
    fetchProducts();
  }, []);

  const categories = [
    {
      id: 'breads',
      name: 'Artisan Breads',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
      path: '/products?category=breads'
    },
    {
      id: 'cakes',
      name: 'Delicious Cakes',
      image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg',
      path: '/products?category=cakes'
    },
    {
      id: 'brownies',
      name: 'Decadent Brownies',
      image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
      path: '/products?category=brownies'
    },
    {
      id: 'donuts',
      name: 'Fresh Donuts',
      image: 'https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg',
      path: '/products?category=donuts'
    }
  ];

  return (
    <>
      <HeroSection
        title="Artisan Baked Goods Made with Love"
        subtitle="Handcrafted bread, pastries, and cakes using traditional recipes and the finest ingredients."
        buttonText="Explore Our Products"
        buttonLink="/products"
        imageSrc="https://images.pexels.com/photos/1070880/pexels-photo-1070880.jpeg"
        height="large"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-700 font-medium">Our Specialty</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-gray-900">
              Featured Products
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover our most popular handcrafted delights, made fresh daily using traditional recipes and the finest ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors"
            >
              View All Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <CategorySection 
        title="Explore Our Categories" 
        categories={categories} 
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-amber-700 font-medium">Fresh From The Oven</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-gray-900">
                  Next Batch Coming Soon
                </h2>
                <p className="mt-4 text-gray-600">
                  We bake fresh bread throughout the day. Catch our next batch straight from the oven, still warm and aromatic. Set a reminder so you don't miss out!
                </p>
                
                <div className="mt-8">
                  <CountdownTimer 
                    message="next batch of warm breads for you" 
                  />
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg" 
                  alt="Fresh bread from oven" 
                  className="rounded-lg shadow-xl w-full h-auto" 
                />
                <div className="absolute -top-4 -right-4 bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
                  Baked Fresh Daily!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              What Our Customers Say
            </h2>
            
            <div className="mt-12 bg-amber-800 bg-opacity-50 p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl italic">
                "The sourdough bread is absolutely amazing! Crispy crust and soft inside with that perfect tangy flavor. I've tried many bakeries, but this one is truly special."
              </blockquote>
              <div className="mt-4">
                <div className="font-medium">— Sarah Thompson</div>
                <div className="text-amber-300 text-sm">Loyal Customer</div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/about" 
                className="inline-block px-6 py-3 bg-white text-amber-700 font-medium rounded-md hover:bg-amber-100 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;