import { MessageCircle } from "lucide-react";

const WhastAppFloating = () => {
    return (
        <a
            href="https://wa.me/5585989198911"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chame no WhatsApp"
            title="Chame no WhatsApp"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold-dark/90 to-gold-light/90 shadow-lg flex items-center justify-center text-black hover:scale-105 transition-transform duration-200"
        >
        <MessageCircle size={32} />
        </a>
    );
};

export default WhastAppFloating;