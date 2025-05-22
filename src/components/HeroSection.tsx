import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  overlay?: boolean;
  height?: 'small' | 'medium' | 'large' | 'full';
  position?: 'center' | 'top' | 'bottom';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink = '/products',
  imageSrc,
  overlay = true,
  height = 'large',
  position = 'center',
}) => {
  const heightClasses = {
    small: 'min-h-[40vh]',
    medium: 'min-h-[60vh]',
    large: 'min-h-[80vh]',
    full: 'min-h-screen',
  };

  const positionClasses = {
    center: 'bg-center',
    top: 'bg-top',
    bottom: 'bg-bottom',
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} bg-no-repeat bg-cover ${positionClasses[position]} flex items-center`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-40"></div>
      )}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-white opacity-90 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {buttonText && (
            <div className="mt-8">
              <Link
                to={buttonLink}
                className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;