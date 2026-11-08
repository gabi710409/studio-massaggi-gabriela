import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesPricing } from './components/ServicesPricing';
import { AboutMeContact } from './components/AboutMeContact';
import { Footer } from './components/Footer';
import { AnamnesisModal } from './components/AnamnesisModal';
import { SettingsModal } from './components/SettingsModal';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';
import { DEFAULT_STUDIO_INFO, StudioInfo } from './data/treatments';
import { Monitor, Tablet, Smartphone, Eye, Sparkles, ChevronUp } from 'lucide-react';

export default function App() {
  const [studioInfo, setStudioInfo] = useState<StudioInfo>(() => {
    try {
      const saved = localStorage.getItem('gabriela_studio_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.whatsappNumber || parsed.whatsappNumber === '393400000000') {
          parsed.whatsappNumber = DEFAULT_STUDIO_INFO.whatsappNumber;
          parsed.phone = DEFAULT_STUDIO_INFO.phone;
        }
        if (!parsed.address || parsed.address.includes('Milano')) {
          parsed.address = DEFAULT_STUDIO_INFO.address;
        }
        if (!parsed.homeVisits || parsed.homeVisits.includes('Milano') || parsed.homeVisits.includes('limitrofe')) {
          parsed.homeVisits = DEFAULT_STUDIO_INFO.homeVisits;
        }
        localStorage.setItem('gabriela_studio_info', JSON.stringify(parsed));
        return parsed;
      }
      return DEFAULT_STUDIO_INFO;
    } catch {
      return DEFAULT_STUDIO_INFO;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAnamnesisOpen, setIsAnamnesisOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedTreatmentForAnamnesis, setSelectedTreatmentForAnamnesis] = useState<string | undefined>(undefined);
  
  // Responsive simulator tool state
  const [deviceSimulation, setDeviceSimulation] = useState<'responsive' | 'desktop' | 'tablet' | 'mobile'>('responsive');
  const [showSimBar, setShowSimBar] = useState(true);

  // Save changes to localStorage
  const handleSaveStudioInfo = (updated: StudioInfo) => {
    setStudioInfo(updated);
    try {
      localStorage.setItem('gabriela_studio_info', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenAnamnesis = (treatmentName?: string) => {
    setSelectedTreatmentForAnamnesis(treatmentName);
    setIsAnamnesisOpen(true);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'servizi', 'contatti'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#27342C] flex flex-col selection:bg-[#4E6B56] selection:text-white">
      
      {/* Top Device Simulator Bar for testing responsive behavior on any screen */}
      {showSimBar && (
        <aside className="sticky top-0 z-50 bg-[#253328] text-stone-200 text-xs px-4 py-2 border-b border-[#35483A] shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-emerald-200">Studio Massaggi Gabriela</span>
              <span className="text-stone-400 hidden sm:inline">— Test Responsività Dispositivi</span>
            </div>

            <div className="flex items-center gap-1 bg-[#1A251D] p-1 rounded-lg border border-stone-700/60">
              <span className="text-[11px] text-stone-400 px-2 font-medium hidden md:inline">Visualizzazione:</span>
              
              <button
                onClick={() => setDeviceSimulation('responsive')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  deviceSimulation === 'responsive' 
                    ? 'bg-[#4E6B56] text-white shadow-sm' 
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Largo schermo reale (100% fluido)"
              >
                Fluido (100%)
              </button>

              <button
                onClick={() => setDeviceSimulation('desktop')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  deviceSimulation === 'desktop' 
                    ? 'bg-[#4E6B56] text-white shadow-sm' 
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Visualizzazione Desktop (1200px)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setDeviceSimulation('tablet')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  deviceSimulation === 'tablet' 
                    ? 'bg-[#4E6B56] text-white shadow-sm' 
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Visualizzazione Tablet (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>

              <button
                onClick={() => setDeviceSimulation('mobile')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  deviceSimulation === 'mobile' 
                    ? 'bg-[#4E6B56] text-white shadow-sm' 
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Visualizzazione Telefono (390px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Telefono</span>
              </button>
            </div>

            <button
              onClick={() => setShowSimBar(false)}
              className="text-stone-400 hover:text-white text-xs underline ml-2"
              title="Nascondi barra di simulazione"
            >
              Nascondi
            </button>
          </div>
        </aside>
      )}

      {/* Main Container wrapping simulated device frame or full width */}
      <div className={`flex-1 flex flex-col items-center justify-start w-full ${
        deviceSimulation === 'responsive' 
          ? '' 
          : 'bg-[#ECE8DF] py-4 px-2 sm:px-4'
      }`}>
        
        <div 
          className={`w-full bg-[#FAF8F5] transition-all duration-300 flex flex-col ${
            deviceSimulation === 'responsive' 
              ? 'max-w-full' 
              : deviceSimulation === 'desktop'
              ? 'max-w-6xl rounded-2xl shadow-2xl border border-stone-300 overflow-hidden my-2'
              : deviceSimulation === 'tablet'
              ? 'max-w-[768px] rounded-3xl shadow-2xl border-4 border-stone-800 overflow-hidden my-4'
              : 'max-w-[390px] rounded-[36px] shadow-2xl border-4 border-stone-900 overflow-hidden my-4'
          }`}
        >
          {/* Main Navigation */}
          <Navbar 
            studioInfo={studioInfo}
            onOpenAnamnesis={() => handleOpenAnamnesis()}
            onOpenSettings={() => setIsSettingsOpen(true)}
            activeSection={activeSection}
          />

          {/* Main Content Sections */}
          <main className="flex-1 pb-16 sm:pb-0">
            {/* Sezione 1: Home */}
            <Hero 
              studioInfo={studioInfo}
              onOpenAnamnesis={() => handleOpenAnamnesis()}
            />

            {/* Sezione 2: Servizi & Tariffe */}
            <ServicesPricing 
              studioInfo={studioInfo}
              onOpenAnamnesis={handleOpenAnamnesis}
            />

            {/* Sezione 3: Chi Sono & Contatti */}
            <AboutMeContact 
              studioInfo={studioInfo}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onOpenAnamnesis={() => handleOpenAnamnesis()}
            />
          </main>

          {/* Footer */}
          <Footer 
            studioInfo={studioInfo}
            onOpenAnamnesis={() => handleOpenAnamnesis()}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        </div>
      </div>

      {/* Floating & Mobile WhatsApp CTA Button */}
      <StickyWhatsAppButton 
        studioInfo={studioInfo}
        onOpenAnamnesis={() => handleOpenAnamnesis()}
      />

      {/* Interactive Anamnesis Online Modal */}
      <AnamnesisModal 
        isOpen={isAnamnesisOpen}
        onClose={() => setIsAnamnesisOpen(false)}
        studioInfo={studioInfo}
        preselectedTreatment={selectedTreatmentForAnamnesis}
      />

      {/* Studio Settings Modal */}
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        info={studioInfo}
        onSave={handleSaveStudioInfo}
      />
    </div>
  );
}
