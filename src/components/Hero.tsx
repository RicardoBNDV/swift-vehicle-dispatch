
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-pattern min-h-screen flex items-center pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Fast & Reliable <span className="gradient-text">Vehicle Dispatch</span> Service
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Streamline your vehicle documentation process with our efficient and secure dispatch services. Save time, avoid hassle, and ensure compliance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-gradient-primary text-white px-8 py-6 text-lg rounded-full">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-float">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-full opacity-20"></div>
              <img 
                src="/lovable-uploads/f224f626-0bd8-4c38-a261-5bf791b1a1ea.png" 
                alt="Vehicle Dispatch Service" 
                className="relative z-10 rounded-xl shadow-2xl mx-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
