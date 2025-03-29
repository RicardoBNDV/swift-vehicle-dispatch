
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SwiftDispatch - Vehicle Documentation Services",
    "description": "Professional vehicle documentation and dispatch services including registration, licensing, and ownership transfer.",
    "url": "https://swiftdispatch.com",
    "telephone": "(555) 123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Documentation Dr.",
      "addressLocality": "Vehicle City",
      "addressRegion": "VS",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/swiftdispatch",
      "https://twitter.com/swiftdispatch",
      "https://instagram.com/swiftdispatch",
      "https://linkedin.com/company/swiftdispatch"
    ]
  };

  return (
    <>
      <Helmet>
        <title>SwiftDispatch - Professional Vehicle Documentation Services</title>
        <meta name="description" content="Streamline your vehicle documentation with SwiftDispatch. Fast, secure, and reliable vehicle registration, licensing, and ownership transfer services." />
        <meta name="keywords" content="vehicle registration, license renewal, vehicle documentation, ownership transfer, dispatch service" />
        
        <meta property="og:title" content="SwiftDispatch - Professional Vehicle Documentation Services" />
        <meta property="og:description" content="Streamline your vehicle documentation with SwiftDispatch. Fast, secure, and reliable vehicle registration, licensing, and ownership transfer services." />
        <meta property="og:image" content="/lovable-uploads/f224f626-0bd8-4c38-a261-5bf791b1a1ea.png" />
        <meta property="og:url" content="https://swiftdispatch.com" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="SwiftDispatch - Professional Vehicle Documentation Services" />
        <meta name="twitter:description" content="Streamline your vehicle documentation with SwiftDispatch. Fast, secure, and reliable services." />
        <meta name="twitter:image" content="/lovable-uploads/f224f626-0bd8-4c38-a261-5bf791b1a1ea.png" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
