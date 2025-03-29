
import React from 'react';
import { Shield, Clock, FileCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">SwiftDispatch</span></h2>
          <p className="text-gray-600 mb-12">
            We're revolutionizing vehicle documentation with our innovative dispatch service, making the process faster, more reliable, and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard 
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Trusted Service"
            description="With over 10 years of experience and thousands of satisfied customers, we've built a reputation for reliability and excellence."
          />
          <FeatureCard 
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Fast Processing"
            description="Our streamlined system allows for quick document processing, reducing wait times and getting you back on the road faster."
          />
          <FeatureCard 
            icon={<FileCheck className="h-10 w-10 text-primary" />}
            title="Guaranteed Compliance"
            description="We ensure all documentation meets regulations and standards, giving you peace of mind about your vehicle's legal status."
          />
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At SwiftDispatch, we're on a mission to transform vehicle documentation from a tedious chore into a simple, efficient process that respects your time and meets your needs.
              </p>
              <p className="text-gray-600">
                Founded in 2014, we've helped over 50,000 clients successfully navigate vehicle registration, licensing, and ownership transfers with ease and confidence.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">ISO Certified</h4>
                </div>
                <p className="text-gray-600">
                  Our operations meet international standards for quality management and information security, ensuring your data is handled with the utmost care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;
