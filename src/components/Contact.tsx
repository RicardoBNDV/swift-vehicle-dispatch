
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-600 mb-12">
            Have questions or ready to streamline your vehicle documentation? Contact us today for personalized assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary">
                  <Send className="mr-2 h-4 w-4" /> Submit Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-hero text-white rounded-xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@swiftdispatch.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">123 Documentation Dr.<br />Vehicle City, VS 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-primary text-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
                <MessageSquare className="h-8 w-8 mb-3" />
                <h4 className="text-lg font-semibold mb-2">Chat With Us</h4>
                <p className="text-sm mb-4">Get instant answers through our live chat support.</p>
                <Button variant="secondary" size="sm" className="mt-auto w-full bg-white text-primary hover:bg-gray-100">
                  Start Chat
                </Button>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
                <Phone className="h-8 w-8 mb-3 text-primary" />
                <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                <p className="text-sm text-gray-600 mb-4">Speak directly with our support team.</p>
                <Button variant="outline" size="sm" className="mt-auto w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
