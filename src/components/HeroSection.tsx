import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpeg";
import captura01 from "@/assets/captura-01.jpeg";
import captura02 from "@/assets/captura-02.jpeg";
import captura03 from "@/assets/Captura-03.jpeg";
import captura05 from "@/assets/Captura-05.jpeg";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [heroBg, captura01, captura02, captura03, captura05];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Troca de imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        {/* Logo */}
        <div className="animate-fade-up opacity-0 mb-8">
          <img 
            src={logo} 
            alt="Arruda & Araújo Consultoria Jurídica" 
            className="w-48 md:w-64 lg:w-80 mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="animate-fade-up opacity-0 delay-200 text-3xl md:text-4xl lg:text-5xl font-heading font-semibold tracking-wide gold-gradient-text mb-6">
          ARRUDA & ARAÚJO CONSULTORIA JURÍDICA
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up opacity-0 delay-300 text-lg md:text-xl text-foreground/90 font-light max-w-3xl mx-auto mb-4">
          Há mais de 20 anos defendendo direitos, garantias e conquistas no Estado do Ceará.
        </p>

        {/* Complementary text */}
        <p className="animate-fade-up opacity-0 delay-400 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10">
          Atuação especializada nas áreas Criminal, Cível, Previdenciário, Direito Militar e Imobiliário. 
          Profissionalismo, ética e resultados que constroem confiança.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up opacity-0 delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="xl" asChild>
            <a href="#contato">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Atendimento
            </a>
          </Button>
          <Button variant="goldOutline" size="xl" asChild>
            <a 
              href="https://wa.me/5585989198911" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-gold-light w-8"
                : "bg-gold-light/30 hover:bg-gold-light/50"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-light/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-light/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
