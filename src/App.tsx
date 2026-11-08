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

export default function App() {
  const [studioInfo, setStudioInfo] = useState<StudioInfo>(() => {
    try {
      const saved = localStorage.getItem('gabriela_studio_info');
      if (saved) {
        const raw = JSON.parse(saved);
        if (raw && typeof raw === 'object') {
          const parsed: StudioInfo = { ...DEFAULT_STUDIO_INFO, ...raw };
          if (!parsed.whatsappNumber || parsed.whatsappNumber === '393400000000') {
            parsed.whatsappNumber = DEFAULT_STUDIO_INFO.whatsappNumber;
            parsed.phone = DEFAULT_STUDIO_INFO.phone;
          }
          if (!parsed.address || (typeof parsed.address === 'string' && parsed.address.includes('Milano'))) {
            parsed.address = DEFAULT_STUDIO_INFO.address;
          }
          if (!parsed.homeVisits || (typeof parsed.homeVisits === 'string' && (parsed.homeVisits.includes('Milano') || parsed.homeVisits.includes('limitrofe')))) {
            parsed.homeVisits = DEFAULT_STUDIO_INFO.homeVisits;
          }
          if (!parsed.hours || (typeof parsed.hours === 'string' && (parsed.hours.includes('Lun') || parsed.hours.includes('09:00')))) {
            parsed.hours = DEFAULT_STUDIO_INFO.hours;
          }
          localStorage.setItem('gabriela_studio_info', JSON.stringify(parsed));
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Fallback to DEFAULT_STUDIO_INFO:', e);
    }
    return DEFAULT_STUDIO_INFO;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAnamnesisOpen, setIsAnamnesisOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedTreatmentForAnamnesis, setSelectedTreatmentForAnamnesis] = useState<string | undefined>(undefined);

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
    <div className="min-h-screen bg-[#FAF8F5] text-[#27342C] flex flex-col selection:bg-[#4E6B56] selection:text-white w-full">
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
