import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  FileText, 
  Settings, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { StudioInfo } from '../data/treatments';

interface NavbarProps {
  studioInfo: StudioInfo;
  onOpenAnamnesis: () => void;
  onOpenSettings: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  studioInfo,
  onOpenAnamnesis,
  onOpenSettings,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
    'Ciao Gabriela, vorrei informazioni e prenotare un appuntamento per un massaggio.'
  )}`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Servizi & Tariffe', href: '#servizi' },
    { label: 'Chi Sono & Contatti', href: '#contatti' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6E1D8] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Brand Logo */}
          <a href="#home" className="flex flex-col group py-1">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#65856E] font-medium">
              Studio Massaggi
            </span>
            <span className="font-cursive text-3xl sm:text-4xl text-[#344738] leading-none my-0.5 group-hover:text-[#4E6B56] transition-colors">
              Gabriela
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#738479] font-light">
              Armonia & Benessere
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#2D4233] bg-[#E8EFE9] font-semibold'
                    : 'text-[#48594E] hover:text-[#2D4233] hover:bg-[#EFECE6]'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Anamnesi Online Quick Action */}
            <button
              onClick={onOpenAnamnesis}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#44604C] hover:text-[#2E4334] hover:bg-[#E8EFE9] rounded-lg transition-colors border border-dashed border-[#5A7862]/40"
              title="Compila il questionario anamnestico prima del trattamento"
            >
              <FileText className="w-4 h-4 text-[#5A7862]" />
              <span>Anamnesi Online</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            {/* Settings button to customize real studio data */}
            <button
              onClick={onOpenSettings}
              className="p-2 text-[#738479] hover:text-[#344738] hover:bg-[#EFECE6] rounded-full transition-colors"
              title="Configura dati studio e numero WhatsApp"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#4E6B56] hover:bg-[#3D5544] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>Prenota su WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={onOpenSettings}
              className="p-2 text-[#738479] hover:text-[#344738] rounded-full"
              title="Configura dati"
            >
              <Settings className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#344738] hover:bg-[#EFECE6] focus:outline-none"
              aria-label="Apri menu di navigazione"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E6E1D8] bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-[#344738] hover:bg-[#EFECE6] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAnamnesis();
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-[#44604C] bg-[#E8EFE9] rounded-lg text-left"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#44604C]" />
              Anamnesi Online
            </span>
            <span className="text-xs font-semibold bg-[#44604C] text-white px-2 py-0.5 rounded-full">
              Modulo
            </span>
          </button>

          <div className="pt-3 space-y-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4E6B56] text-white text-sm font-semibold shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Prenota un appuntamento su WhatsApp</span>
            </a>

            <div className="flex items-center justify-center pt-2 text-xs text-[#738479]">
              <Phone className="w-3.5 h-3.5 mr-1" />
              <span>{studioInfo.phone}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
