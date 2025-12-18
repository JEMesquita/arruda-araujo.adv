import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", phone: "", email: "", area: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold gold-gradient-text mb-4">
              Fale com nossos advogados
            </h2>
            <div className="w-24 h-0.5 gold-gradient-bg mx-auto" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gold-light mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-light/50 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-gold-light mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-light/50 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm text-gold-light mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-light/50 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="area" className="block text-sm text-gold-light mb-2">Área de interesse</label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 rounded-md text-foreground focus:outline-none focus:border-gold-light/50 transition-colors"
                >
                  <option value="">Selecione...</option>
                  <option value="criminal">Direito Criminal</option>
                  <option value="civil">Direito Cível</option>
                  <option value="previdenciario">Direito Previdenciário</option>
                  <option value="militar">Direito Militar</option>
                  <option value="militar">Direito Militar</option>
                
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gold-light mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-light/50 transition-colors resize-none"
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Solicitar Atendimento
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
