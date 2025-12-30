import logo from "@/assets/logo.png";
import { Instagram, Phone, Mail, MessageCircle, ChevronsUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
              href="https://wa.me/5585989198911" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/juridico.arrudaearaujo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:arrudaaraujocj@gmail.com"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+5585989198911"
              className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light hover:bg-gold-light/10 hover:border-gold-light transition-all duration-300"
              aria-label="Telefone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          {/* Back to Top Button - Centered */}
          {isVisible && (
            <div className="mb-8">
              <button
                onClick={scrollToTop}
                className="flex flex-col items-center justify-center gap-1 text-gold-light hover:text-gold-dark transition-all duration-300 group animate-fade-in"
                aria-label="Voltar ao topo"
              >
                <ChevronsUp className="w-8 h-8 animate-bounce" />
                <span className="text-xs font-body uppercase tracking-wider">Voltar ao topo</span>
              </button>
            </div>
          )}
          
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
