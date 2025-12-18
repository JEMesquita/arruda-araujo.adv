import { Scale, FileText, Briefcase, Shield } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Direito Criminal",
    description: "Atuação completa em defesa criminal, acompanhamentos de flagrante, júri, habeas corpus, revisões, recursos e casos de grande complexidade."
  },
  {
    icon: FileText,
    title: "Direito Civil",
    description: "Contratos, indenizações, responsabilidade civil, disputas patrimoniais, imobiliário, família e sucessões."
  },
  {
    icon: Briefcase,
    title: "Direito Tributário",
    description: "Defesas fiscais, execuções, planejamento tributário, auditoria jurídica e contencioso administrativo."
  },
  {
    icon: Shield,
    title: "Direito Militar",
    description: "Defesa de militares estaduais, processos administrativos disciplinares, IPM, sindicâncias, garantias e prerrogativas."
  }
];

const PracticeAreasSection = () => {
  return (
    <section id="areas" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-4">
            Soluções Jurídicas Especializadas
          </h2>
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={area.title}
              className="group relative p-8 bg-card border border-border/50 rounded-lg hover:border-gold-light/40 transition-all duration-500 hover:shadow-[0_0_40px_hsl(40_52%_58%_/_0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-lg gold-gradient-bg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                <area.icon className="w-7 h-7 text-background" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-gold-light mb-4">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
