import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  CheckCircle, 
  Heart, 
  FileText, 
  ShieldCheck,
  Edit3
} from 'lucide-react';
import { StudioInfo } from '../data/treatments';
import gabrielaPhoto from '../assets/images/gabriela_attestato_professionale.jpg';

interface AboutMeContactProps {
  studioInfo: StudioInfo;
  onOpenSettings: () => void;
  onOpenAnamnesis: () => void;
}

export const AboutMeContact: React.FC<AboutMeContactProps> = ({
  studioInfo,
  onOpenSettings,
  onOpenAnamnesis
}) => {
  const whatsappLink = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
    'Ciao Gabriela, vorrei mettermi in contatto con te per prenotare un massaggio.'
  )}`;

  return (
    <section id="contatti" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 3: Chi Sono & Presentazione */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Gabriela Portrait / Studio image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="absolute -inset-3 rounded-3xl bg-[#DCE7DF] -rotate-1 -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] sm:aspect-[4/5] bg-stone-100">
                <img
                  src={gabrielaPhoto}
                  alt="Gabriela operatrice olistica con attestato di formazione professionale"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>

              {/* Floating quote badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-4 rounded-2xl shadow-lg border border-stone-200 max-w-[240px]">
                <p className="font-cursive text-2xl text-[#4E6B56] leading-none mb-1">Gabriela</p>
                <p className="text-xs text-stone-600 font-medium leading-snug">
                  Armonia & Benessere attraverso l'ascolto e il tocco consapevole.
                </p>
              </div>
            </div>
          </div>

          {/* Chi Sono Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A7862] font-semibold block">
                Chi Sono
              </span>
              <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl text-[#243428] font-bold">
                « Mi chiamo Gabriela e la mia missione è prendermi cura del benessere delle persone. »
              </h2>
            </div>

            {/* Exact Presentation Copy */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#DFD9CD] shadow-sm space-y-4">
              <p className="text-base sm:text-lg text-[#3E4E43] leading-relaxed">
                Attraverso l'ascolto, la professionalità e l'integrazione di diverse tecniche manuali, creo un ambiente caldo e accogliente dove poterti staccare dalla routine quotidiana e ritrovare la tua armonia naturale.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm text-[#5A7862] font-semibold">
                <Heart className="w-4 h-4 text-[#4E6B56] fill-emerald-100" />
                <span>Trattamenti personalizzati e rispetto della persona</span>
              </div>
            </div>

            {/* User workflow flow cards (Section 4 of the brief) */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm uppercase tracking-wider font-bold text-stone-800">
                Come Funziona la Prenotazione (In 3 semplici passaggi)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 space-y-1">
                  <span className="w-6 h-6 rounded-full bg-[#E3EDE5] text-[#3E5745] text-xs font-bold flex items-center justify-center">1</span>
                  <p className="text-xs font-bold text-stone-800">1. Contatto Diretto</p>
                  <p className="text-[11px] text-stone-600 leading-snug">Clicchi su WhatsApp e mi scrivi quale trattamento ti incuriosisce.</p>
                </div>
                <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 space-y-1">
                  <span className="w-6 h-6 rounded-full bg-[#E3EDE5] text-[#3E5745] text-xs font-bold flex items-center justify-center">2</span>
                  <p className="text-xs font-bold text-stone-800">2. Accordo & Data</p>
                  <p className="text-[11px] text-stone-600 leading-snug">Definiamo insieme data, orario e se in studio o a domicilio.</p>
                </div>
                <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 space-y-1">
                  <span className="w-6 h-6 rounded-full bg-[#E3EDE5] text-[#3E5745] text-xs font-bold flex items-center justify-center">3</span>
                  <p className="text-xs font-bold text-stone-800">3. Anamnesi Online</p>
                  <p className="text-[11px] text-stone-600 leading-snug">Compili il breve questionario online per adattare la pressione alle tue esigenze.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section 3: Informazioni Logistiche & Contatti Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD6C9] shadow-md space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#5A7862] font-semibold">
                Contatti & Recapiti
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#27382B]">
                Informazioni Logistiche
              </h3>
            </div>
            
            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FAF8F5] hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors"
              title="Modifica indirizzo o recapiti"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#5A7862]" />
              <span>Personalizza Indirizzo / Orari</span>
            </button>
          </div>

          {/* 4 Logistics items from the brief */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Studio */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#4E6B56] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Studio</h4>
              <p className="text-sm font-semibold text-stone-800 leading-snug">
                {studioInfo.address}
              </p>
            </div>

            {/* Domicilio */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#4E6B56] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Domicilio</h4>
              <p className="text-sm font-semibold text-stone-800 leading-snug">
                Roma
              </p>
              <span className="inline-block px-2 py-0.5 rounded-md bg-[#E8EFE9] text-[#2C4132] text-[11px] font-semibold">
                Riservato ai già clienti dello studio
              </span>
            </div>

            {/* WhatsApp / Telefono */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#4E6B56] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">WhatsApp / Telefono</h4>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#2D4334] hover:text-[#1E824C] hover:underline flex items-center gap-1.5 transition-colors"
                title="Clicca per aprire la chat WhatsApp"
              >
                <span>{studioInfo.phone}</span>
              </a>
            </div>

            {/* Orari */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#4E6B56] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Orari</h4>
              <p className="text-sm font-semibold text-stone-800 leading-snug">
                {studioInfo.hours}
              </p>
            </div>

          </div>

          {/* CTA Button: Invia un messaggio su WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#4E6B56] hover:bg-[#3B5241] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Invia un messaggio su WhatsApp</span>
            </a>

            <button
              onClick={onOpenAnamnesis}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FAF8F5] text-[#344738] border border-stone-300 font-medium text-sm transition-colors"
            >
              <FileText className="w-4 h-4 text-[#5A7862]" />
              <span>Compila Anamnesi Online</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
