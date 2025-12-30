import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-4">
            Estamos preparados para atender você.
          </h2>
          <div className="w-24 h-0.5 gold-gradient-bg mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Address Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Endereço</h3>
                <p className="text-foreground/85">Rua Alípio Oliveira Lima, 31, Centro</p>
                <p className="text-foreground/85">Pacajus – CE</p>
                <p className="text-muted-foreground">CEP: 62.870-000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Clock className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Atendimento em</h3>
                <ul className="text-foreground/85 space-y-1">
                  <li>• Fortaleza</li>
                  <li>• Região Metropolitana</li>
                  <li>• Interior do Ceará</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Phone className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">Contato</h3>
                <p className="text-foreground/85">(85) 98919-8911 ou (85) 98557-5314</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Mail className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-light mb-2">E-mail</h3>
                <p className="text-foreground/85">arrudaaraujocj@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Map placeholder */}
          <div className="h-80 lg:h-auto min-h-[300px] bg-card border border-border/50 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929.176850754983!2d-38.47!3d-4.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0a3f8d55e7a5d%3A0x4e7c3e2c1f2d3e4a!2sPacajus%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Arruda & Araújo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
