import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { Map, Clock, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceParam = queryParams.get('service');
  
  let defaultSubject = '';
  if (serviceParam) {
    const services: Record<string, string> = {
      catering: 'Catering Services',
      weddings: 'Wedding Cakes & Desserts',
      classes: 'Baking Classes',
      corporate: 'Corporate Gift Boxes',
      custom: 'Custom Celebration Cakes',
      subscriptions: 'Bread Subscriptions',
    };
    
    defaultSubject = services[serviceParam] || '';
  }

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message or visit our bakery."
        imageSrc="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-4 text-gray-600 mb-8">
                Whether you have a question about our products, need a custom order, or want to inquire about any of our services, we're here to help.
              </p>
              
              <ContactForm initialSubject={defaultSubject} />
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                Visit Our Bakery
              </h2>
              <p className="mt-4 text-gray-600 mb-8">
                Stop by our bakery to experience the aroma of freshly baked goods and enjoy our treats right from the oven.
              </p>
              
              <div className="bg-amber-50 rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4 mb-6">
                  <Map className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600 mt-1">
                      123 Bakery Street<br />
                      Flour City, FC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Opening Hours</h3>
                    <div className="text-gray-600 mt-1 space-y-1">
                      <div className="grid grid-cols-2">
                        <span>Monday - Friday:</span>
                        <span>7:00 AM - 7:00 PM</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span>Saturday:</span>
                        <span>7:00 AM - 5:00 PM</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span>Sunday:</span>
                        <span>8:00 AM - 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      hello@artisanbakery.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden shadow-md h-80">
                {/* Placeholder for Google Maps or similar embedding */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <div className="text-center p-6">
                    <Map className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Map embedding would be here in a production environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Join Our Newsletter
            </h2>
            <p className="mt-4">
              Subscribe to get updates on seasonal specials, new menu items, and exclusive offers.
            </p>
            
            <div className="mt-8 flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
              />
              <button className="bg-amber-900 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="mt-4 text-sm text-amber-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;