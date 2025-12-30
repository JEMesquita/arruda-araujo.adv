import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpeg";
import captura01 from "@/assets/captura-01.jpeg";
import captura02 from "@/assets/captura-02.jpeg";
import captura03 from "@/assets/Captura-03.jpeg";
import captura05 from "@/assets/Captura-05.jpeg";

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [heroBg, captura01, captura02, captura03, captura05];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Troca de imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Carousel */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 mb-12 rounded-lg overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
              </div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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
          </div>

          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-8">
            Excelência Jurídica com mais de duas décadas de resultados concretos
          </h2>

          {/* Decorative line */}
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto mb-10" />

          {/* Content */}
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-6">
             Nosso escritório <span className="gold-gradient-text font-medium">Arruda & Araújo Consultoria Jurídica</span> atua com excelência e comprometimento nas 
             áreas Criminal, Cível, Previdenciária e Imobiliário, oferecendo soluções jurídicas seguras, estratégicas e personalizadas. Trabalhamos com foco na defesa
             dos direitos e garantias fundamentais de nossos clientes, sempre pautados pela ética, transparência e responsabilidade profissional.

            Com uma atuação técnica sólida e atualização constante, buscamos compreender cada caso de forma individualizada, adotando estratégias jurídicas 
            eficazes e humanas. Nosso compromisso é prestar um atendimento próximo, claro e responsável, assegurando confiança e segurança em todas as etapas
            do processo.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Atendemos Fortaleza, Região Metropolitana e Interior do Estado, sempre com humanidade, precisão 
            técnica e respeito às prerrogativas da advocacia.
          </p>
          {/* Decorative line */}
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto mb-10" />
          </div>
      </div>
    </section>
  );
};

export default AboutSection;
