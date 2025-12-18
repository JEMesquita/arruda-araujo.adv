import drCristiano from "@/assets/dr-cristiano-arruda.JPG";
import drLucas from "@/assets/dr-Lucas.JPG";

const lawyers = [
  {
    name: "Dr. Cristiano Queiroz Arruda",
    oab: "OAB/CE 28.114",
    description: "Advogado com sólida trajetória em Direito Criminal, Civil e Militar. Reconhecido por conduzir casos complexos com seriedade, preparo técnico e compromisso absoluto com o cliente.",
    image: drCristiano
  },
  {
    name: "Dr. Lucas Araújo",
    oab: "OAB/CE 50.727",
    description: "Profissional especializado em Direito Tributário, Penal e Contencioso. Atuação moderna, estratégica e focada em soluções eficazes para demandas de alta exigência.",
    image: drLucas
  }
];

const LawyersSection = () => {
  return (
    <section id="advogados" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-4">
            Sobre os Advogados
          </h2>
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto" />
        </div>

        {/* Lawyers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {lawyers.map((lawyer) => (
            <div 
              key={lawyer.name}
              className="group relative p-8 bg-card border border-border/50 rounded-lg text-center hover:border-gold-light/40 transition-all duration-500 overflow-hidden"
            >
              {/* Photo */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-light/30 group-hover:border-gold-light group-hover:shadow-[0_0_30px_hsl(40_52%_58%_/_0.4)] transition-all duration-500">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-heading font-semibold gold-gradient-text mb-2">
                {lawyer.name}
              </h3>

              {/* OAB */}
              <p className="text-sm text-gold-light/80 font-medium mb-4">
                {lawyer.oab}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {lawyer.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold-light/20 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gold-light/20 rounded-br-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawyersSection;
