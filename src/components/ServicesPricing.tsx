import React, { useState } from 'react';
import { 
  TREATMENTS, 
  Treatment, 
  StudioInfo 
} from '../data/treatments';
import { 
  MessageCircle, 
  FileText, 
  Check, 
  Sparkles, 
  Clock, 
  Home, 
  Compass, 
  HeartHandshake,
  ArrowRight,
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';

interface ServicesPricingProps {
  studioInfo: StudioInfo;
  onOpenAnamnesis: (treatmentName?: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({
  studioInfo,
  onOpenAnamnesis
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'relax' | 'terapeutico' | 'drenante' | 'olistico'>('all');

  const filteredTreatments = selectedFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedFilter);

  const getWhatsAppBookingLink = (treatmentName: string) => {
    const text = `Ciao Gabriela, vorrei prenotare una seduta di "${treatmentName}". Vorrei accordarmi su data e disponibilità.`;
    return `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servizi" className="py-16 sm:py-24 bg-[#F5F2EB]/60 border-t border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A7862] font-semibold block">
            Servizi & Tariffe
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl text-[#26372B] font-bold">
            Trattamenti su misura per ogni esigenza
          </h2>
          <p className="text-base sm:text-lg text-[#47574D] leading-relaxed">
            Scopri le tecniche manuali proposte. Ogni trattamento è calibrato per sciogliere le tensioni, stimolare la circolazione e donare una profonda sensazione di armonia e leggerezza.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'Tutti i 7 Trattamenti' },
              { id: 'relax', label: 'Relax & Benessere' },
              { id: 'terapeutico', label: 'Decontratturanti & Terapeutici' },
              { id: 'drenante', label: 'Drenanti & Modellanti' },
              { id: 'olistico', label: 'Riequilibrio Olistico' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-[#4E6B56] text-white shadow-sm'
                    : 'bg-white text-[#4A5A4F] hover:bg-[#EAE5DC] border border-[#DDD7CD]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => {
            return (
              <div
                key={treatment.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2DCD2] hover:border-[#5A7862]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Category Badge */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-200">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm text-[#384C3E] text-xs font-semibold uppercase tracking-wider shadow-sm">
                      {treatment.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow">
                      {treatment.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm font-semibold text-[#5A7862] leading-snug">
                      {treatment.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#45544B] leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Benefits bullet points */}
                    <div className="pt-2 border-t border-stone-100 space-y-1.5">
                      <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                        Benefici principali:
                      </p>
                      {treatment.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#38483E]">
                          <Check className="w-3.5 h-3.5 text-[#5A7862] mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions for this specific treatment */}
                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <a
                      href={getWhatsAppBookingLink(treatment.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#4E6B56] hover:bg-[#3D5544] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-200" />
                      <span>Richiedi su WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onOpenAnamnesis(treatment.name)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium text-[#5A7862] hover:text-[#384C3E] hover:bg-[#EAEFEA] transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Compila scheda anamnesi per questo massaggio</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Listino Prezzi & Note Card (Exact copy from the brief) */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#D9D3C7] shadow-lg max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5A7862] font-semibold">
              Trasparenza & Flessibilità
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#243428]">
              Listino Prezzi
            </h3>
          </div>

          {/* Two Main Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* In Studio */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#5A7862]/30 shadow-sm hover:shadow-md transition-shadow relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5A7862]">
                  Accoglienza Dedicata
                </span>
                <span className="p-2 rounded-full bg-[#EBF1EC] text-[#4E6B56]">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-stone-900">Trattamento in Studio</h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Nel calore dello studio privato con luci soffuse e aromaterapia.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#27382B]">
                  {studioInfo.priceStudio}
                </span>
              </div>
              <ul className="text-xs text-stone-600 space-y-2 pt-2 border-t border-stone-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5A7862]" />
                  <span>Ambiente silenzioso, riscaldato e igienizzato</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5A7862]" />
                  <span>Oli vegetali puri e oli essenziali inclusi</span>
                </li>
              </ul>
            </div>

            {/* A Domicilio */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#D9D3C7] hover:border-[#5A7862]/40 shadow-sm hover:shadow-md transition-shadow relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#6C7E72]">
                  Comodità a Casa Tua
                </span>
                <span className="p-2 rounded-full bg-[#EBF1EC] text-[#4E6B56]">
                  <Home className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-stone-900">Trattamento a Domicilio</h4>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF3ED] text-[#2F4A37] border border-[#CDE1D3] text-[11px] font-semibold">
                    <ShieldCheck className="w-3 h-3 text-[#4E6B56]" />
                    Riservato ai già clienti
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  Tutto l'occorrente portato comodamente presso la tua abitazione a Roma.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#27382B]">
                  {studioInfo.priceHome}
                </span>
              </div>
              <ul className="text-xs text-stone-600 space-y-2 pt-2 border-t border-stone-100">
                <li className="flex items-start gap-2 text-[#2A3B2E] font-medium">
                  <Check className="w-4 h-4 text-[#5A7862] shrink-0 mt-0.5" />
                  <span><strong>Requisito:</strong> Servizio riservato a chi ha già effettuato almeno una seduta conoscitiva in studio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5A7862] shrink-0" />
                  <span>Lettino professionale pieghevole e teli sterili</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5A7862] shrink-0" />
                  <span>Nessun traffico o stress post-massaggio</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Nota (Exact copy from the brief) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#E8EFE9] border border-[#CADBCF] text-center space-y-1.5">
            <p className="text-xs uppercase tracking-wider text-[#3D5643] font-bold">
              Nota Personalizzata
            </p>
            <p className="text-sm sm:text-base font-medium text-[#293A2D] italic">
              « La durata e le tecniche vengono modellate insieme durante il primo colloquio conoscitivo. »
            </p>
          </div>

          {/* General WhatsApp CTA for Services */}
          <div className="text-center pt-2">
            <a
              href={`https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
                'Ciao Gabriela, vorrei prenotare un trattamento. Quali sono le prossime disponibilità?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#4E6B56] hover:bg-[#3D5544] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Richiedi un Trattamento su WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
