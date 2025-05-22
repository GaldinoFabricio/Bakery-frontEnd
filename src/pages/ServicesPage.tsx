import React from 'react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { 
  Cake, 
  Coffee, 
  Gift, 
  GraduationCap, 
  Heart, 
  UtensilsCrossed 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'catering',
      title: 'Catering Services',
      description: 'From corporate events to intimate gatherings, our catering services provide delicious baked goods, sandwiches, and desserts for any occasion.',
      icon: <UtensilsCrossed className="w-8 h-8 text-amber-700" />,
      image: 'https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg',
    },
    {
      id: 'weddings',
      title: 'Wedding Cakes & Desserts',
      description: 'Make your special day even more memorable with our custom wedding cakes, cupcake towers, and dessert tables tailored to your vision.',
      icon: <Heart className="w-8 h-8 text-amber-700" />,
      image: 'https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg',
    },
    {
      id: 'classes',
      title: 'Baking Classes',
      description: 'Learn the art of baking with our hands-on classes. From bread basics to advanced pastry techniques, our expert bakers will guide you.',
      icon: <GraduationCap className="w-8 h-8 text-amber-700" />,
      image: 'https://images.pexels.com/photos/6605303/pexels-photo-6605303.jpeg',
    },
    {
      id: 'corporate',
      title: 'Corporate Gift Boxes',
      description: 'Impress clients and reward employees with our curated gift boxes filled with an assortment of our finest treats.',
      icon: <Gift className="w-8 h-8 text-amber-700" />,
      image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
    },
    {
      id: 'custom',
      title: 'Custom Celebration Cakes',
      description: 'Celebrate birthdays, anniversaries, and special moments with our beautifully designed custom cakes made to your specifications.',
      icon: <Cake className="w-8 h-8 text-amber-700" />,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg',
    },
    {
      id: 'subscriptions',
      title: 'Bread Subscriptions',
      description: 'Never run out of fresh bread with our subscription service. Choose your favorites and have them delivered to your door weekly.',
      icon: <Coffee className="w-8 h-8 text-amber-700" />,
      image: 'https://images.pexels.com/photos/137103/pexels-photo-137103.jpeg',
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Explore the range of services we offer to make your occasions special"
        imageSrc="https://images.pexels.com/photos/1693642/pexels-photo-1693642.jpeg"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              From catering and custom cakes to baking classes and subscriptions, we have everything you need for your baking needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-4 px-6">
                    <div className="flex items-center">
                      <div className="mr-3 bg-white p-2 rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={`/contact?service=${service.id}`} 
                    className="inline-block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded transition-colors"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg" 
                  alt="Special orders" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Special Orders
                </h3>
                <p className="text-gray-600 mb-6">
                  Have a specific request or dietary requirement? We're happy to accommodate special orders with advance notice. Contact us to discuss your needs for:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2 text-amber-600">•</span>
                    Gluten-free and vegan options
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-amber-600">•</span>
                    Sugar-free or reduced-sugar items
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-amber-600">•</span>
                    Allergen-conscious baking
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-amber-600">•</span>
                    Custom flavor combinations
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 mb-10"></div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-amber-900 bg-opacity-50 p-6 rounded-lg">
                <p className="italic mb-4">
                  "The catering service was impeccable for our corporate event. The pastry selection was diverse, fresh, and absolutely delicious. Our clients were impressed!"
                </p>
                <div className="font-medium">— James Wilson, Marketing Director</div>
              </div>
              
              <div className="bg-amber-900 bg-opacity-50 p-6 rounded-lg">
                <p className="italic mb-4">
                  "Our wedding cake was not only stunning but tasted amazing as well. The team was attentive to all our preferences and created exactly what we envisioned."
                </p>
                <div className="font-medium">— Emma & David, Newlyweds</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;