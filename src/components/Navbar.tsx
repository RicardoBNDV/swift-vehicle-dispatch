
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Truck, Users, Award, MessageSquare, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav 
        className={cn(
          "flex items-center justify-between mx-auto max-w-7xl rounded-[50px] transition-all duration-300",
          isScrolled 
            ? "bg-white shadow-lg py-3 px-6" 
            : "bg-white/90 backdrop-blur-sm shadow-md py-4 px-6"
        )}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">SwiftDispatch</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-1 flex-1 mx-4">
          <div className="flex space-x-6">
            <NavItem title="Services" href="#services" icon={<Truck size={18} />} />
            <NavItem title="About Us" href="#about" icon={<Users size={18} />} />
            <NavItem title="Benefits" href="#benefits" icon={<Award size={18} />} />
            <NavItem title="Testimonials" href="#testimonials" icon={<MessageSquare size={18} />} />
            <NavItem title="Contact" href="#contact" icon={<Phone size={18} />} />
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-gradient-primary text-white px-6 rounded-full hover:shadow-md transition-all duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-primary focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="mt-2 rounded-[50px] bg-white shadow-lg animate-fade-in p-4 mx-auto max-w-7xl">
            <div className="flex flex-col py-2 space-y-2">
              <MobileNavItem title="Services" href="#services" icon={<Truck size={18} />} setIsOpen={setIsOpen} />
              <MobileNavItem title="About Us" href="#about" icon={<Users size={18} />} setIsOpen={setIsOpen} />
              <MobileNavItem title="Benefits" href="#benefits" icon={<Award size={18} />} setIsOpen={setIsOpen} />
              <MobileNavItem title="Testimonials" href="#testimonials" icon={<MessageSquare size={18} />} setIsOpen={setIsOpen} />
              <MobileNavItem title="Contact" href="#contact" icon={<Phone size={18} />} setIsOpen={setIsOpen} />
              <div className="pt-2">
                <Button className="bg-gradient-primary w-full text-white rounded-full" onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover:bg-gray-50 flex items-center gap-2"
  >
    {icon}
    {title}
  </a>
);

const MobileNavItem = ({ 
  title, 
  href, 
  icon,
  setIsOpen 
}: { 
  title: string; 
  href: string; 
  icon: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> 
}) => (
  <a
    href={href}
    className="text-gray-700 hover:text-primary transition-colors font-medium py-3 px-4 rounded-md hover:bg-gray-50 flex items-center gap-2"
    onClick={() => setIsOpen(false)}
  >
    {icon}
    {title}
  </a>
);

export default Navbar;
