
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-pattern min-h-screen flex items-center pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-6 animate-fade-in">
              <span className="mr-2">✓</span> Autorizado pelos orgãos do Detran
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in">
              <span className="text-[#00ea84]">Seu despachante online, <br />
                seguro e sem burocracias.
              </span>

            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Automatize, organize e simplifique a gestão dos seus documentos, mudando a forma como você faz negócio.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-[#5660f8] hover:bg-[#00ea84]/90 text-white px-8 py-6 text-lg rounded-full flex items-center">
                Transfira Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-white text-gray-800 hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                Contato
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-4">
                <img src="/lovable-uploads/dddffebf-b655-4131-948a-a9f7fd82d237.png" alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="/lovable-uploads/dddffebf-b655-4131-948a-a9f7fd82d237.png" alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="/lovable-uploads/dddffebf-b655-4131-948a-a9f7fd82d237.png" alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <span className="ml-4 text-white text-sm">+ de 2 milhões de documentos<br />transferidos por mês!</span>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 hidden lg:block">
            <div className="relative">
              <img
                src="/lovable-uploads/hero2.avif"
                alt="Vehicle Dispatch Service"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
