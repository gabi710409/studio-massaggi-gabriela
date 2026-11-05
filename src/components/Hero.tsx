import React from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  ArrowDown, 
  ShieldCheck, 
  Heart, 
  Leaf, 
  Home as HomeIcon,
  CheckCircle2
} from 'lucide-react';
import { StudioInfo } from '../data/treatments';
import heroImage from '../assets/images/hero_female_massage_1793910148106.jpg';

interface HeroProps {
  studioInfo: StudioInfo;
  onOpenAnamnesis: () => void;
}

export const Hero: React.FC<HeroProps> = ({ studioInfo, onOpenAnamnesis }) => {
  const whatsappLink = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
    'Ciao Gabriela, vorrei prenotare un appuntamento per un massaggio.'
  )}`;

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle organic background accents in sage & cream */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#E7EFE9]/70 via-[#F3EFE7]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFE9] border border-[#C5D8CB] text-[#3D5643] text-xs sm:text-sm font-medium tracking-wide">
              <Leaf className="w-4 h-4 text-[#4E6B56]" />
              <span>Massaggi Olistici e Terapeutici su Misura</span>
            </div>

            {/* Title & Brand heading */}
            <div className="space-y-3">
              <h1 className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#5A7862] font-semibold">
                Studio Massaggi Gabriela – Armonia & Benessere
              </h1>
              <p className="font-serif-brand text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] leading-[1.18] text-[#243428] font-bold">
                Massaggi personalizzati per ritrovare equilibrio, leggerezza e relax profondo.
              </p>
            </div>

            {/* Presentazione del Brand (Exact copy from the brief) */}
            <div className="relative pl-0 lg:pl-5 border-l-0 lg:border-l-2 border-[#5A7862]/40">
              <p className="text-base sm:text-lg text-[#415146] leading-relaxed font-normal">
                Ogni persona è unica e ogni corpo parla in modo diverso. Nel mio studio non applico uno schema fisso: ascolto le tue esigenze e combino le migliori tecniche per offrirti un trattamento davvero su misura, orientato al tuo benessere fisico e mentale.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#4E6B56] hover:bg-[#3B5342] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Prenota un appuntamento su WhatsApp</span>
              </a>

              <a
                href="#servizi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#344738] border border-[#D5D0C6] font-medium text-sm sm:text-base transition-colors"
              >
                <span>Scopri i Trattamenti</span>
                <ArrowDown className="w-4 h-4 text-[#5A7862]" />
              </a>
            </div>

            {/* Highlights pill list */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#46574D]">
                <CheckCircle2 className="w-4 h-4 text-[#5A7862] shrink-0" />
                <span>In Studio ({studioInfo.priceStudio})</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#46574D]">
                <CheckCircle2 className="w-4 h-4 text-[#5A7862] shrink-0" />
                <span>A Domicilio ({studioInfo.priceHome})</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#46574D] col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#5A7862] shrink-0" />
                <span>Ascolto e Metodo su Misura</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Atmosphere Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D5E4D8] to-[#EBE5DA] opacity-60 -rotate-2 scale-95 transition-all" />

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-100">
                <img
                  src={heroImage}
                  alt="Trattamento massaggio professionale studio Gabriela"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-lg text-[#26352A]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#5A7862] font-semibold">
                        Atmosfera Esclusiva
                      </p>
                      <p className="text-sm font-bold text-stone-900">
                        Oli essenziali caldi e musica rilassante
                      </p>
                    </div>
                    <span className="font-cursive text-3xl text-[#4E6B56]">G</span>
                  </div>
                </div>
              </div>

              {/* Little Floating Badge */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#FAF8F5] border border-[#DCD5C9] shadow-md rounded-2xl p-3 flex items-center gap-2.5 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-[#E5EFE7] text-[#4E6B56] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase tracking-wider">Esperienza</p>
                  <p className="text-xs font-bold text-stone-800">100% Personalizzata</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
