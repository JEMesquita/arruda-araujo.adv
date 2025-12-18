import { Scale, FileText, Briefcase, Shield } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Direito Criminal",
    description: "Atuação completa em defesa criminal, acompanhamentos de flagrante, júri, habeas corpus, revisões, recursos e casos de grande complexidade."
  },
  {
    icon: FileText,
    title: "Direito Cível",
    description: "Resolução de conflitos privados, proteção de direitos da personalidade, responsabilidade civil, contratos e obrigações, propriedade e posse, família e sucessões, tutela de direitos individuais, relações entre particulares, interpretação de cláusulas contratuais, reparação de danos morais e materiaisContratos, indenizações, responsabilidade civil, disputas patrimoniais, imobiliário, família e sucessões."
  },
  {
    icon: Briefcase,
    title: "Direito Previdenciário",
    description: "Concessão e revisão de benefícios previdenciários, aposentadorias por idade, tempo de contribuição ou invalidez, auxílio-doença, auxílio-acidente, salário-maternidade, pensão por morte, benefício de prestação continuada (BPC/LOAS), carência e tempo de contribuição, análise de vínculos empregatícios para fins previdenciários, defesa administrativa e judicial na esfera previdenciária."  
  },
  {
    icon: Shield,
    title: "Direito Militar",
    description: "Regulamentação das relações jurídicas no âmbito da Justiça Militar, regime disciplinar militar, crimes militares e justiça castrense, direitos e deveres dos militares, estabilidade e hierarquia na carreira militar, regime jurídico único dos militares, processos administrativos disciplinares, pensões e benefícios militares, incorporação, promoção e licenciamento de militares, aplicação do Estatuto dos Militares e do Código Penal Militar."
  },
  {
    icon: Shield,
    title: "Imobiliário",
    description: "Compra e venda de imóveis, registro de imóveis, usucapião, locação residencial e comercial, doação de bens imóveis, constituição e regulamentação de condomínios, alienação fiduciária, hipoteca e outras garantias reais, regularização fundiária, incorporação imobiliária, direito de laje, divisão e desmembramento de terrenos, IPTU e tributação imobiliária, rescisão de contratos imobiliários, proteção ao inquilino e ao proprietário, mediação e responsabilidade civil em transações imobiliárias."
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
