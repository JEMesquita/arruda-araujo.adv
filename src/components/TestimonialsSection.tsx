import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Profissionais extremamente dedicados. Obtive resultado rápido e tratamento humano.",
    author: "Cliente atendido na área Penal"
  },
  {
    text: "Escritório sério, transparente e eficiente. Recomendo amplamente.",
    author: "Cliente Imobiliário"
  },
  {
    text: "Atendimento excepcional desde o primeiro contato. Resolveram minha situação com competência.",
    author: "Cliente Cível"
  },
  {
    text: "Profissionalismo e ética. Senti confiança total durante todo o processo.",
    author: "Cliente Militar"
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-4">
            Depoimentos
          </h2>
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-gold-light/30 mx-auto mb-6" />

          {/* Testimonial Content */}
          <div className="min-h-[150px] flex items-center justify-center">
            <div className="text-center animate-fade-in" key={current}>
              <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>
              <p className="text-sm text-gold-light font-medium">
                — {testimonials[current].author}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-8 gold-gradient-bg" 
                    : "bg-gold-light/30 hover:bg-gold-light/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
          {/* Decorative line */}
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
