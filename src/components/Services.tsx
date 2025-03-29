
import React from 'react';
import { FileText, KeyRound, Briefcase, RefreshCw, FileSearch, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Vehicle Registration",
      description: "Complete new vehicle registrations quickly and correctly with our step-by-step guided process.",
      link: "#"
    },
    {
      icon: <KeyRound className="h-10 w-10" />,
      title: "License Renewal",
      description: "Renew your vehicle licenses before they expire with our timely reminders and simplified process.",
      link: "#"
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Transfer of Ownership",
      description: "Transfer vehicle ownership seamlessly with our comprehensive documentation service.",
      link: "#"
    },
    {
      icon: <FileSearch className="h-10 w-10" />,
      title: "Vehicle History Reports",
      description: "Access comprehensive vehicle history reports to make informed decisions about purchases.",
      link: "#"
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Commercial Licensing",
      description: "Specialized services for business fleets and commercial vehicle requirements.",
      link: "#"
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "Expert Consultation",
      description: "Get personalized advice from our vehicle documentation experts for complex cases.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-600 mb-12">
            Comprehensive vehicle documentation services to meet all your needs, from registration to ownership transfer and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardHeader className="bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <div className="bg-white w-16 h-16 rounded-lg shadow-md flex items-center justify-center mb-4 text-primary group-hover:text-secondary transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-primary hover:text-secondary">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
