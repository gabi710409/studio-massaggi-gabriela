import React from 'react';
import { StudioInfo } from '../data/treatments';
import { MessageCircle, Heart, ShieldCheck, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  studioInfo: StudioInfo;
  onOpenAnamnesis: () => void;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  studioInfo,
  onOpenAnamnesis,
  onOpenSettings
}) => {
  return (
    <footer className="bg-[#1E2B22] text-[#D8E2DA] pt-14 pb-12 border-t border-[#2D3E32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8EA996] font-medium block">
              Studio Massaggi
            </span>
            <span className="font-cursive text-4xl text-white block leading-none">
              Gabriela
            </span>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A3B8AA] font-light">
              Armonia & Benessere
            </p>
            <p className="text-xs sm:text-sm text-[#AABAA0] leading-relaxed max-w-sm pt-2">
              Massaggi personalizzati per ritrovare equilibrio, leggerezza e relax profondo. Trattamenti professionali eseguiti con cura in studio e a domicilio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <p className="font-semibold text-white uppercase tracking-wider text-xs">
              Navigazione
            </p>
            <ul className="space-y-2 text-[#C1D2C6]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">Servizi & Tariffe</a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">Chi Sono & Contatti</a>
              </li>
              <li>
                <button 
                  onClick={onOpenAnamnesis} 
                  className="hover:text-white transition-colors text-left"
                >
                  Modulo di Anamnesi Online
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-xs">
              Prenotazioni Rapide
            </p>
            <p className="text-xs text-[#AABAA0] leading-relaxed">
              Il canale privilegiato per prenotare o richiedere informazioni è WhatsApp:
            </p>
            <a
              href={`https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
                'Ciao Gabriela, vorrei prenotare un appuntamento.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4E6B56] hover:bg-[#5E8067] text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Scrivi su WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 border-t border-[#2F4234] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8A9E90]">
          <p>
            © {new Date().getFullYear()} Studio Massaggi Gabriela – Armonia & Benessere. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <span>Trattamenti olistici e del benessere</span>
            <span>•</span>
            <button
              onClick={onOpenSettings}
              className="hover:text-white underline transition-colors"
            >
              Modifica dati studio
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
