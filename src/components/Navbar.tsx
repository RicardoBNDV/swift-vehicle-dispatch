
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">SwiftDispatch</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavItem title="Services" href="#services" />
            <NavItem title="About Us" href="#about" />
            <NavItem title="Benefits" href="#benefits" />
            <NavItem title="Testimonials" href="#testimonials" />
            <NavItem title="Contact" href="#contact" />
            <Button className="bg-gradient-primary">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md animate-fade-in">
            <div className="flex flex-col px-4 py-6 space-y-4">
              <MobileNavItem title="Services" href="#services" setIsOpen={setIsOpen} />
              <MobileNavItem title="About Us" href="#about" setIsOpen={setIsOpen} />
              <MobileNavItem title="Benefits" href="#benefits" setIsOpen={setIsOpen} />
              <MobileNavItem title="Testimonials" href="#testimonials" setIsOpen={setIsOpen} />
              <MobileNavItem title="Contact" href="#contact" setIsOpen={setIsOpen} />
              <Button className="bg-gradient-primary w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ title, href }: { title: string; href: string }) => (
  <a
    href={href}
    className="text-gray-800 hover:text-primary transition-colors font-medium"
  >
    {title}
  </a>
);

const MobileNavItem = ({ 
  title, 
  href, 
  setIsOpen 
}: { 
  title: string; 
  href: string; 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> 
}) => (
  <a
    href={href}
    className="text-gray-800 hover:text-primary transition-colors font-medium py-2 block"
    onClick={() => setIsOpen(false)}
  >
    {title}
  </a>
);

export default Navbar;
