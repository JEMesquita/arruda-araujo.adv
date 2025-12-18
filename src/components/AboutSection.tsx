const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-8">
            Excelência Jurídica com mais de duas décadas de resultados concretos
          </h2>

          {/* Decorative line */}
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto mb-10" />

          {/* Content */}
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-6">
            Nosso escritório  <span className="gold-gradient-text font-medium">Arruda & Araújo Consultoria Jurídica</span> 
            atua com excelência e comprometimento nas áreas Criminal, Cível, Previdenciária e Imobiliário,
            oferecendo soluções jurídicas seguras, estratégicas e personalizadas. Trabalhamos com foco na defesa dos direitos e garantias
            fundamentais de nossos clientes, sempre pautados pela ética, transparência e responsabilidade profissional.

            Com uma atuação técnica sólida e atualização constante, buscamos compreender cada caso de forma individualizada,
            adotando estratégias jurídicas eficazes e humanas. Nosso compromisso é prestar um atendimento próximo, claro e responsável,
             assegurando confiança e segurança em todas as etapas do processo.
            
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Atendemos Fortaleza, Região Metropolitana e Interior do Estado, sempre com humanidade, precisão 
            técnica e respeito às prerrogativas da advocacia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
