import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';
import { StudioInfo } from '../data/treatments';

interface StickyWhatsAppButtonProps {
  studioInfo: StudioInfo;
  onOpenAnamnesis: () => void;
}

export const StickyWhatsAppButton: React.FC<StickyWhatsAppButtonProps> = ({
  studioInfo,
  onOpenAnamnesis
}) => {
  const whatsappLink = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
    'Ciao Gabriela, vorrei prenotare un appuntamento per un massaggio.'
  )}`;

  return (
    <>
      {/* Floating Desktop / Tablet circular badge (bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2.5">
        <button
          onClick={onOpenAnamnesis}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 text-[#3E5544] hover:bg-white text-xs font-semibold shadow-md border border-stone-200 backdrop-blur-sm transition-all hover:scale-105"
          title="Compila il modulo di anamnesi pre-trattamento"
        >
          <FileText className="w-3.5 h-3.5 text-[#5A7862]" />
          <span>Anamnesi Online</span>
        </button>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group font-medium text-sm"
          title="Prenota su WhatsApp Business"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="font-semibold tracking-wide">Prenota su WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Only on phones) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#DFD9CD] p-3 shadow-2xl flex items-center gap-2">
        <button
          onClick={onOpenAnamnesis}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#DDD6C8] text-[#36493B] text-xs font-semibold shadow-sm"
        >
          <FileText className="w-4 h-4 text-[#5A7862]" />
          <span>Anamnesi</span>
        </button>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          <span>Prenota su WhatsApp</span>
        </a>
      </div>
    </>
  );
};
