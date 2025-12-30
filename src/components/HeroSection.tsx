import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">{/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/30" />
      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 -mt-20 md:-mt-32">
        {/* Logo */}
        <div className="animate-fade-up opacity-0 mb-8 w-full max-w-md md:max-w-2xl mx-auto">
          <img 
            src={logo} 
            alt="Arruda & Araújo Consultoria Jurídica" 
            className="w-full h-auto"
          />
        </div>
        {/* Subtitle */}
        <p className="animate-fade-up opacity-0 delay-300 text-lg md:text-xl text-foreground/90 font-light max-w-3xl mx-auto mb-4">
          Há mais de 20 anos defendendo direitos, garantias e conquistas no Estado do Ceará.
        </p>
        {/* Complementary text */}
        <p className="animate-fade-up opacity-0 delay-400 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10">
          Atuação especializada nas áreas Criminal, Cível, Previdenciário, Direito Militar e Imobiliário. 
          Profissionalismo, ética e resultados que constroem confiança.
        </p>
      {/* Scroll indicator */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-light/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-light/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
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
    </section>
  );
};

export default HeroSection;
