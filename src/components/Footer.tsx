import logo from "@/assets/logo.png";
import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/30">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Arruda & Araújo Consultoria Jurídica" 
            className="w-32 md:w-40 mb-6"
          />

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a 
              href="https://wa.me/5585999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/arrudaaraujo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contato@arrudaaraujo.adv.br"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+5585999999999"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="Telefone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arruda & Araújo Consultoria Jurídica · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
