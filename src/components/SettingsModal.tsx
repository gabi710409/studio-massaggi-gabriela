import React, { useState } from 'react';
import { X, Check, Settings, MapPin, Phone, Clock, DollarSign } from 'lucide-react';
import { StudioInfo } from '../data/treatments';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: StudioInfo;
  onSave: (updated: StudioInfo) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  info,
  onSave
}) => {
  const [formData, setFormData] = useState<StudioInfo>(info);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#4E6B56] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-emerald-200" />
            <h2 className="text-lg font-bold">Personalizza Dati di Contatto & Studio</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <p className="text-xs text-stone-600">
            Qui puoi inserire o modificare i tuoi dati reali (indirizzo, numero WhatsApp e orari) per sostituire i segnaposto. Verranno salvati nel tuo browser.
          </p>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#4E6B56]" />
              Numero WhatsApp Business (per i link diretti wa.me):
            </label>
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value.replace(/[^0-9]/g, '')})}
              placeholder="393401234567 (prefisso senza +)"
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
            />
            <span className="text-[11px] text-stone-500">Formato internazionale solo cifre (es: 393401234567 per l'Italia)</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#4E6B56]" />
              Telefono da mostrare sul sito:
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+39 340 123 4567"
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#4E6B56]" />
              Indirizzo dello Studio:
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="Es. Roma (zona Villa Bonelli)"
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#4E6B56]" />
              Trattamenti a Domicilio (Zone coperte):
            </label>
            <input
              type="text"
              value={formData.homeVisits}
              onChange={(e) => setFormData({...formData, homeVisits: e.target.value})}
              placeholder="Es. Roma (riservato ai già clienti dello studio)"
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4E6B56]" />
              Orari di apertura:
            </label>
            <input
              type="text"
              value={formData.hours}
              onChange={(e) => setFormData({...formData, hours: e.target.value})}
              placeholder="Es. Da concordare"
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#4E6B56]" />
                Tariffa In Studio:
              </label>
              <input
                type="text"
                value={formData.priceStudio}
                onChange={(e) => setFormData({...formData, priceStudio: e.target.value})}
                placeholder="45 € – 50 €"
                className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#4E6B56]" />
                Tariffa A Domicilio:
              </label>
              <input
                type="text"
                value={formData.priceHome}
                onChange={(e) => setFormData({...formData, priceHome: e.target.value})}
                placeholder="60 € – 65 €"
                className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#5A7862] bg-white"
              />
            </div>
          </div>

          <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm text-stone-600 hover:bg-stone-200/60"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#4E6B56] hover:bg-[#3D5544] text-white text-sm font-semibold shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Salva Modifiche</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
