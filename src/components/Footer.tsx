
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hero text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">SwiftDispatch</h3>
            <p className="text-gray-300 mb-4">
              Streamlining vehicle documentation with efficient, secure, and reliable dispatch services.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#benefits">Benefits</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Vehicle Registration</FooterLink>
              <FooterLink href="#">License Renewal</FooterLink>
              <FooterLink href="#">Transfer of Ownership</FooterLink>
              <FooterLink href="#">Vehicle History Reports</FooterLink>
              <FooterLink href="#">Commercial Licensing</FooterLink>
              <FooterLink href="#">Expert Consultation</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span>info@swiftdispatch.com</span>
              </li>
              <li className="mt-4">
                <h5 className="font-medium mb-2">Business Hours:</h5>
                <p className="text-gray-300">Monday - Friday: 9AM - 6PM</p>
                <p className="text-gray-300">Saturday: 10AM - 4PM</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SwiftDispatch. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      <ChevronRight className="h-4 w-4 mr-1" />
      {children}
    </a>
  </li>
);

export default Footer;
