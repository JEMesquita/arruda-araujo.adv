import { Building2, Award, Users } from "lucide-react";

const StructureSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold gold-gradient-text mb-6">
              Um Escritório Preparado para Atender com Qualidade e Segurança.
            </h2>
            <div className="w-24 h-0.5 gold-gradient-bg mx-auto mb-10" />
            <p className="text-foreground/85 leading-relaxed mb-6">
              A advocacia moderna exige preparo técnico e estrutura sólida. No Ceará, a OAB-CE conta com o
              <span className="gold-gradient-text font-medium"> CADAA </span>— Centro de Apoio e Defesa do
              Advogado e da Advocacia — órgão essencial para garantir prerrogativas e fortalecer a atuação profissional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No <span className="text-gold-light">Arruda & Araújo</span>, utilizamos metodologias atualizadas,
              tecnologia segura e participação ativa nos órgãos de classe, consolidando uma atuação ética,
              estratégica e de alto impacto.
            </p>
          </div>
          {/* Right - Feature Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-lg group hover:border-gold-light/30 transition-all duration-300">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Estrutura Completa</h3>
                <p className="text-sm text-muted-foreground">Infraestrutura moderna e tecnologia de ponta para atendimento de excelência.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-lg group hover:border-gold-light/30 transition-all duration-300">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Award className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Credibilidade</h3>
                <p className="text-sm text-muted-foreground">Participação ativa na OAB-CE e órgãos de classe, garantindo ética e responsabilidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-lg group hover:border-gold-light/30 transition-all duration-300">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Award className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Confiabilidade</h3>
                <p className="text-sm text-muted-foreground">Cumprimos o que prometemos, agimos com integridade e mantemos consistência entre palavras e atitudes. É um pilar essencial em relações pessoais, profissionais e sociais. Sem confiabilidade, dificilmente se constrói respeito duradouro.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border/50 rounded-lg group hover:border-gold-light/30 transition-all duration-300">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Users className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Atendimento Humanizado</h3>
                <p className="text-sm text-muted-foreground">Cada cliente é único. Oferecemos atenção personalizada e sigilo absoluto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
