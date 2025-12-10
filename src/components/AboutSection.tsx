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
            O escritório <span className="gold-gradient-text font-medium">Arruda & Araújo Consultoria Jurídica</span> reúne 
            experiência, compromisso e atuação estratégica em diversas frentes do Direito. São mais de 20 anos de 
            atividade no Ceará, com vitórias expressivas em diferentes varas e tribunais, representando clientes 
            em causas de alta complexidade.
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
