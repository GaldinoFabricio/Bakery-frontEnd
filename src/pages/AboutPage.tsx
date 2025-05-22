import React from 'react';
import HeroSection from '../components/HeroSection';
import { Clock, Award, Users, ThumbsUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="About Our Bakery"
        subtitle="The story behind our passion for artisan baking"
        imageSrc="https://images.pexels.com/photos/3992376/pexels-photo-3992376.jpeg"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Founded in 1985 by master baker Thomas Laurent, Artisan Bakery began as a small family-owned shop with a simple mission: to bring authentic, traditionally-crafted bread and pastries to our community.
              </p>
              
              <p>
                What started as a cozy corner bakery has grown into a beloved local institution, but our commitment to quality and craftsmanship remains unchanged. Each day, our team of passionate bakers rises before dawn to mix, knead, shape, and bake everything by hand.
              </p>
              
              <p>
                We believe in using only the finest ingredients – organic flour, cultured butter, seasonal fruits, and our prized sourdough starter that has been nurtured for over three decades. No preservatives, no shortcuts, just honest baking done the traditional way.
              </p>
              
              <p>
                Today, the second generation of the Laurent family continues the legacy, combining time-honored techniques with innovative recipes to create baked goods that delight and inspire. We're proud to be part of our customers' daily rituals, special celebrations, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We pour our heart and soul into every product we make. Here's what sets us apart:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest organic and locally-sourced ingredients to ensure exceptional flavor and quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Traditional Methods</h3>
              <p className="text-gray-600">
                We honor time-tested baking techniques, giving our products authentic flavor and texture.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skilled Artisans</h3>
              <p className="text-gray-600">
                Our team of passionate bakers brings years of expertise and dedication to their craft.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to be part of our local community, supporting local farmers and charitable initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5486748/pexels-photo-5486748.jpeg" 
            alt="Bakery team" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-8">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg" 
                    alt="Claire Laurent" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Claire Laurent</h3>
                <p className="text-amber-700 font-medium">Head Baker & Owner</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/8108108/pexels-photo-8108108.jpeg" 
                    alt="Marco Gianetti" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Marco Gianetti</h3>
                <p className="text-amber-700 font-medium">Pastry Chef</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/8108186/pexels-photo-8108186.jpeg" 
                    alt="Sophie Chen" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sophie Chen</h3>
                <p className="text-amber-700 font-medium">Cake Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;