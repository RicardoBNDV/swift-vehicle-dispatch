
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "SwiftDispatch transformed how I handle vehicle documentation for my delivery business. Their commercial licensing service saved me countless hours and ensured all our vehicles are compliant with regulations.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      position: "Fleet Manager",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Managing a fleet of 20+ vehicles used to be a documentation nightmare until we found SwiftDispatch. Their bulk processing capabilities and detailed record-keeping have been game-changers.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      position: "Car Dealership Owner",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "As a dealership, we process dozens of ownership transfers monthly. SwiftDispatch's streamlined system has cut our processing time in half and virtually eliminated errors. Highly recommended!",
      rating: 4,
    },
    {
      name: "David Wilson",
      position: "Private Vehicle Owner",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      content: "I was dreading the registration process for my imported vehicle until a friend recommended SwiftDispatch. They handled all the complex paperwork and made the entire process surprisingly simple.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-gray-600 mb-12">
            Don't just take our word for it – hear from the thousands of clients who've experienced the SwiftDispatch difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="md:hidden flex justify-center space-x-2 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg md:transform md:rotate-[-2deg] hover:rotate-0 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonials[currentIndex].rating 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonials[currentIndex].content}"</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg md:transform md:rotate-[2deg] hover:rotate-0 transition-transform md:mt-4">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[(currentIndex + 1) % testimonials.length].image} 
                    alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonials[(currentIndex + 1) % testimonials.length].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[(currentIndex + 1) % testimonials.length].position}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonials[(currentIndex + 1) % testimonials.length].rating 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonials[(currentIndex + 1) % testimonials.length].content}"</p>
              </CardContent>
            </Card>
          </div>

          <div className="md:hidden flex justify-center mt-8">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors mr-4"
            >
              <ChevronLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
