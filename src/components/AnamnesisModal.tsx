import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Heart, 
  User, 
  Send, 
  Activity, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { StudioInfo } from '../data/treatments';

interface AnamnesisModalProps {
  isOpen: boolean;
  onClose: () => void;
  studioInfo: StudioInfo;
  preselectedTreatment?: string;
}

export const AnamnesisModal: React.FC<AnamnesisModalProps> = ({
  isOpen,
  onClose,
  studioInfo,
  preselectedTreatment
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    birthDate: '',
    chosenTreatment: preselectedTreatment || 'Massaggio Svedese',
    treatmentLocation: 'studio', // 'studio' | 'domicilio'
    // Health status
    musclePain: '',
    circulationIssues: false,
    isPregnant: false,
    recentSurgeries: '',
    allergies: '',
    chronicConditions: '',
    // Treatment preferences
    mainGoal: 'Rilassamento profondo e antistress',
    pressureIntensity: 'Media', // 'Leggera', 'Media', 'Forte'
    notes: '',
    privacyConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert('È necessario acconsentire al trattamento dei dati personali per motivi di anamnesi e sicurezza.');
      return;
    }

    // Build formatted message for WhatsApp
    const message = `🌿 *SCHEDA ANAMNESI PRE-TRATTAMENTO* 🌿
*Studio Massaggi Gabriela – Armonia & Benessere*

👤 *Dati Anagrafici:*
• Nome e Cognome: ${formData.fullName}
• Telefono: ${formData.phone}
• Data di Nascita: ${formData.birthDate || 'Non specificata'}
• Modalità: ${formData.treatmentLocation === 'studio' ? 'In Studio' : 'A Domicilio'}
• Trattamento desiderato: ${formData.chosenTreatment}

🩺 *Stato di Salute Generale:*
• Dolori/tensioni muscolari: ${formData.musclePain || 'Nessuna zona specifica'}
• Problemi di circolazione/gonfiore: ${formData.circulationIssues ? 'Sì' : 'No'}
• Gravidanza in corso: ${formData.isPregnant ? 'Sì' : 'No'}
• Interventi recenti/traumi: ${formData.recentSurgeries || 'Nessuno'}
• Allergie a oli essenziali o creme: ${formData.allergies || 'Nessuna'}
• Altre patologie o note mediche: ${formData.chronicConditions || 'Nessuna'}

✨ *Preferenze sul Trattamento:*
• Obiettivo principale: ${formData.mainGoal}
• Pressione desiderata: ${formData.pressureIntensity}
• Note aggiuntive: ${formData.notes || 'Nessuna'}

✅ *Consenso Privacy:* Accettato conformemente al GDPR.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#4E6B56] text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-100">
              <ShieldCheck className="w-4 h-4" />
              <span>Questionario Preliminare Riservato</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif-brand font-bold text-white">
              Modulo di Anamnesi Online
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
              Per garantire un trattamento personalizzato, sicuro ed efficace, compila queste brevi informazioni prima della seduta.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Chiudi modulo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E5EFE7] text-[#4E6B56] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">
              Grazie! La tua scheda è stata preparata
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Se la chat di WhatsApp non si è aperta automaticamente, puoi riprovare cliccando sul pulsante sottostante. Gabriela leggerà le tue note per preparare il trattamento migliore per te.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-white text-sm font-medium"
              >
                Modifica risposte
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#4E6B56] text-white text-sm font-semibold hover:bg-[#3D5544] shadow-sm"
              >
                Torna al sito
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* 1. Dati Anagrafici */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#4E6B56] font-semibold text-sm border-b border-stone-100 pb-2">
                <User className="w-4 h-4" />
                <span>1. Dati Anagrafici</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Es. Maria Rossi"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Numero di Telefono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Es. +39 340 1234567"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Data di Nascita
                  </label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Dove preferisci il trattamento?
                  </label>
                  <select
                    value={formData.treatmentLocation}
                    onChange={(e) => setFormData({...formData, treatmentLocation: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  >
                    <option value="studio">In Studio (45 € – 50 €)</option>
                    <option value="domicilio">A Domicilio (60 € – 65 €)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Stato di Salute Generale */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#4E6B56] font-semibold text-sm border-b border-stone-100 pb-2">
                <Activity className="w-4 h-4" />
                <span>2. Stato di Salute Generale</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Dolori muscolari, contratture o zone specifiche di tensione:
                  </label>
                  <input
                    type="text"
                    value={formData.musclePain}
                    onChange={(e) => setFormData({...formData, musclePain: e.target.value})}
                    placeholder="Es. cervicale rigida, zona lombare, spalle contratte"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg border border-stone-200 bg-[#FAF8F5] cursor-pointer hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={formData.circulationIssues}
                      onChange={(e) => setFormData({...formData, circulationIssues: e.target.checked})}
                      className="w-4 h-4 text-[#4E6B56] rounded focus:ring-[#4E6B56]"
                    />
                    <span className="text-xs text-stone-700 font-medium">
                      Problemi di circolazione, capillari fragili o gonfiore
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg border border-stone-200 bg-[#FAF8F5] cursor-pointer hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={formData.isPregnant}
                      onChange={(e) => setFormData({...formData, isPregnant: e.target.checked})}
                      className="w-4 h-4 text-[#4E6B56] rounded focus:ring-[#4E6B56]"
                    />
                    <span className="text-xs text-stone-700 font-medium">
                      Stato di gravidanza in corso
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Allergie o sensibilità a oli, creme o profumi:
                    </label>
                    <input
                      type="text"
                      value={formData.allergies}
                      onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                      placeholder="Es. allergia alla mandorla, lavanda, nessuna"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Interventi chirurgici recenti o traumi:
                    </label>
                    <input
                      type="text"
                      value={formData.recentSurgeries}
                      onChange={(e) => setFormData({...formData, recentSurgeries: e.target.value})}
                      placeholder="Es. operazione al ginocchio 6 mesi fa, nessuno"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Patologie diagnosticate o altre avvertenze mediche:
                  </label>
                  <input
                    type="text"
                    value={formData.chronicConditions}
                    onChange={(e) => setFormData({...formData, chronicConditions: e.target.value})}
                    placeholder="Es. pressione bassa, ernie discali, nessuna"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  />
                </div>
              </div>
            </div>

            {/* 3. Preferenze sul Trattamento */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#4E6B56] font-semibold text-sm border-b border-stone-100 pb-2">
                <Heart className="w-4 h-4" />
                <span>3. Preferenze sul Trattamento</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Obiettivo Principale Desiderato *
                  </label>
                  <select
                    value={formData.mainGoal}
                    onChange={(e) => setFormData({...formData, mainGoal: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                  >
                    <option value="Rilassamento profondo e antistress">Rilassamento profondo e antistress</option>
                    <option value="Sciogliere contratture e tensioni muscolari">Sciogliere contratture e tensioni muscolari</option>
                    <option value="Drenaggio liquidi e riduzione gonfiore">Drenaggio liquidi e riduzione gonfiore</option>
                    <option value="Riequilibrio energetico e del sistema nervoso">Riequilibrio energetico e del sistema nervoso</option>
                    <option value="Rimodellamento e tonificazione (Legnoterapia/Bamboo)">Rimodellamento e tonificazione (Legnoterapia/Bamboo)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Intensità della Pressione Desiderata *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Leggera', 'Media', 'Forte'] as const).map((level) => (
                      <button
                        type="button"
                        key={level}
                        onClick={() => setFormData({...formData, pressureIntensity: level})}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          formData.pressureIntensity === level
                            ? 'bg-[#4E6B56] text-white border-[#4E6B56] shadow-sm'
                            : 'bg-[#FAF8F5] text-stone-700 border-stone-300 hover:border-stone-400'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Note aggiuntive per Gabriela (facoltativo):
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Eventuali richieste specifiche o dettagli che ritieni utili..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5A7862] bg-[#FAF8F5]"
                />
              </div>
            </div>

            {/* 4. Consenso Privacy */}
            <div className="bg-[#FAF8F5] rounded-xl p-4 border border-stone-300/80 space-y-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({...formData, privacyConsent: e.target.checked})}
                  className="w-4 h-4 mt-0.5 text-[#4E6B56] rounded focus:ring-[#4E6B56]"
                />
                <span className="text-xs text-stone-600 leading-relaxed">
                  <strong>Consenso Privacy:</strong> Dichiaro che le informazioni fornite corrispondono al vero e autorizzo il trattamento dei miei dati personali e relativi allo stato di salute esclusivamente per l'erogazione sicura e su misura del trattamento, ai sensi del Regolamento UE 2016/679 (GDPR).
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-stone-600 hover:bg-stone-200/50 text-sm font-medium transition-colors"
              >
                Annulla
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#4E6B56] hover:bg-[#3D5544] text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Invia Anamnesi su WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
