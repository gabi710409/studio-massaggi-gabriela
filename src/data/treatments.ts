import svedeseImage from '../assets/images/svedese_female_therapist_1793910089945.jpg';
import decontratturanteImage from '../assets/images/decontratturante_female_1793910103766.jpg';
import metamericoImage from '../assets/images/metamerico_essence_1793909667023.jpg';
import bambooImage from '../assets/images/bamboo_massage_sticks_1793909771987.jpg';
import legnoterapiaImage from '../assets/images/maderoterapia_only_tools_1793910791088.jpg';
import coppettazioneImage from '../assets/images/coppette_ventuse_variety_1793910188305.jpg';
import linfodrenaggioImage from '../assets/images/linfodrenaggio_gentle_hands_1793910634497.jpg';

export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
  durationNote: string;
  image: string;
  category: 'relax' | 'terapeutico' | 'drenante' | 'olistico';
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'svedese',
    name: 'Massaggio Svedese',
    subtitle: 'Rilassamento profondo e detensionamento muscolare',
    description: 'Movimenti fluidi e pressioni modulate che sciolgono lo stress quotidiano, migliorano la circolazione e restituiscono elasticità e flessibilità al corpo.',
    benefits: ['Scioglie lo stress quotidiano', 'Migliora la circolazione sanguigna', 'Restituisce flessibilità ed elasticità'],
    recommendedFor: 'Chi cerca relax profondo e leggerezza muscolare generale',
    durationNote: 'Personalizzabile (solitamente 50-60 min)',
    image: svedeseImage,
    category: 'relax'
  },
  {
    id: 'decontratturante',
    name: 'Massaggio Decontratturante',
    subtitle: 'Sollievo mirato per muscoli rigidi e contratture',
    description: 'Un lavoro profondo e specifico per sciogliere i nodi muscolari (zona cervicale, spalle e schiena), alleviando dolori e posture scorrette.',
    benefits: ['Scioglie contratture e nodi muscolari', 'Sollievo zona cervicale, spalle e schiena', 'Correzione delle tensioni da posture scorrette'],
    recommendedFor: 'Tensioni da postura, smart working, sportivi o dolori cervicali e lombari',
    durationNote: 'Profondo e mirato',
    image: decontratturanteImage,
    category: 'terapeutico'
  },
  {
    id: 'metamerico',
    name: 'Massaggio Metamerico',
    subtitle: 'Riequilibrio profondo del sistema nervoso',
    description: 'Stimolazione delle zone riflesse della schiena per agire sulle tensioni collegate al sistema nervoso e ritrovare un\'armonia globale.',
    benefits: ['Riequilibrio del sistema neurovegetativo', 'Agisce sulle somatizzazioni emotive', 'Armonia globale tra corpo e mente'],
    recommendedFor: 'Stress accumulato, insonnia, ansia e stanchezza cronica',
    durationNote: 'Riflessologico & Olistico',
    image: metamericoImage,
    category: 'olistico'
  },
  {
    id: 'bamboo',
    name: 'Bamboo Massage',
    subtitle: 'Trattamento drenante, modellante ed energizzante',
    description: 'L\'utilizzo delle canne di bambù riattiva la circolazione, stimola il linfodrenaggio, tonifica i tessuti e modella la silhouette.',
    benefits: ['Drenaggio linfatico profondo', 'Tonifica i tessuti e modella la silhouette', 'Effetto energizzante e decontratturante'],
    recommendedFor: 'Gambe pesanti, ritenzione idrica e rimodellamento corpo',
    durationNote: 'Dinamico & Rivitalizzante',
    image: bambooImage,
    category: 'drenante'
  },
  {
    id: 'legnoterapia',
    name: 'Legnoterapia',
    subtitle: 'Drenaggio e tonificazione con elementi in legno naturale',
    description: 'Trattamento olistico con strumenti anatomici in legno per combattere la ritenzione idrica, ridurre gli inestetismi e donare immediata leggerezza.',
    benefits: ['Combatte la ritenzione idrica', 'Stimola la produzione di collagene ed elastina', 'Immediata sensazione di leggerezza e vitalità'],
    recommendedFor: 'Rimodellamento naturale, gambe stanche e drenaggio',
    durationNote: 'Naturale al 100%',
    image: legnoterapiaImage,
    category: 'drenante'
  },
  {
    id: 'coppettazione',
    name: 'Coppettazione (Cupping)',
    subtitle: 'Ossigenazione dei tessuti e decontrazione profonda',
    description: 'Tecnica con effetto sottovuoto per liberare le fasce muscolari più profonde, accelerare il recupero e migliorare l\'ossigenazione dei tessuti.',
    benefits: ['Effetto sottovuoto rigenerante', 'Massima ossigenazione delle fasce muscolari', 'Accelera il recupero e scioglie aderenze'],
    recommendedFor: 'Tensioni ostinate, sportivi e circolazione rallentata',
    durationNote: 'Tecnica Tradizionale Olistica',
    image: coppettazioneImage,
    category: 'terapeutico'
  },
  {
    id: 'linfodrenaggio',
    name: 'Linfodrenaggio',
    subtitle: 'Leggerezza, depurazione e contrasto alla ritenzione idrica',
    description: 'Movimenti ritmici e delicati che stimolano la circolazione linfatica, riducono i gonfiori alle gambe e aiutano ad eliminare le tossine.',
    benefits: ['Riduce il gonfiore alle gambe e caviglie', 'Elimina liquidi in eccesso e tossine', 'Effetto rigenerante, rilassante e detossinante'],
    recommendedFor: 'Ritenzione idrica, gambe pesanti, gravidanza (se consentita), post-viaggio',
    durationNote: 'Delicato & Rigenerante',
    image: linfodrenaggioImage,
    category: 'drenante'
  }
];

export interface StudioInfo {
  phone: string;
  whatsappNumber: string; // international format without spaces e.g. 393401234567
  address: string;
  homeVisits: string;
  hours: string;
  priceStudio: string;
  priceHome: string;
}

export const DEFAULT_STUDIO_INFO: StudioInfo = {
  phone: '+39 340 000 0000',
  whatsappNumber: '393400000000',
  address: 'Via Roma, 12, Milano (o su appuntamento)',
  homeVisits: 'Milano e zone limitrofe su richiesta',
  hours: 'Lun – Sab: 09:00 – 20:00 (su prenotazione)',
  priceStudio: '45 € – 50 €',
  priceHome: '60 € – 65 €',
};
