import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

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
          Atuação especializada nas áreas Criminal, Civil, Tributária e Direito Militar. 
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
              href="https://wa.me/5585999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
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
