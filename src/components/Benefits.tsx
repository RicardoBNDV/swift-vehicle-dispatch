
import React from 'react';
import { Zap, Lock, Clock, CreditCard, ThumbsUp, FileCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Processing",
      description: "Complete most documentation processes in under 24 hours, saving you valuable time.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Secure & Confidential",
      description: "Your personal and vehicle information is protected with enterprise-grade security.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "24/7 Availability",
      description: "Access our services anytime, anywhere through our user-friendly online platform.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or unexpected charges.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: "Expert Support",
      description: "Get assistance from knowledgeable professionals who understand vehicle documentation.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      title: "Guaranteed Accuracy",
      description: "Documents are verified for compliance and accuracy before submission.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-hero to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">SwiftDispatch</span></h2>
          <p className="text-gray-300 mb-12">
            Our service combines speed, security, and expertise to make vehicle documentation simple and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors border border-gray-700"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {React.cloneElement(benefit.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-primary">
            <button className="bg-hero hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-all">
              Experience the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
