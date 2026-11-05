# Studio Massaggi Gabriela – Armonia & Benessere 🌿

Sito web moderno, minimalista e 100% responsive per **Studio Massaggi Gabriela – Armonia & Benessere**, sviluppato con **React**, **TypeScript** e **Tailwind CSS**.

---

## 🌟 Caratteristiche Principali

- **Brand Identity & Stile Naturale:** Palette ispirata alla natura con toni **Verde Salvia** e sfondo caldo **Crem / Carta di riso**, con tipografia elegante e moderna.
- **Navigazione Fluida One-Page:**
  - **Home:** Presentazione del brand e proposta di valore orientata all'ascolto e al benessere su misura.
  - **Servizi & Tariffe:** Tutti i 7 trattamenti (Massaggio Svedese, Decontratturante, Metamerico, Bamboo Massage, Legnoterapia, Coppettazione, Linfodrenaggio) con filtri per categoria e listino trasparente (In Studio e a Domicilio).
  - **Chi Sono & Contatti:** Presentazione di Gabriela, orari, indirizzo, zone coperte a domicilio e modalità di prenotazione.
- **Integrazione WhatsApp Business:** Prenotazione diretta con messaggi preimpostati per ogni trattamento e pulsante mobile sempre accessibile.
- **Modulo di Anamnesi Online:** Questionario preliminare per raccogliere dati anagrafici, stato di salute, preferenze di pressione e consenso GDPR, con invio automatico formattato su WhatsApp.
- **Pannello di Personalizzazione Dati:** Permette di configurare recapiti, indirizzo, orari e tariffe con salvataggio automatico nel browser.
- **100% Mobile & Responsive:** Perfettamente ottimizzato per smartphone, tablet e schermi desktop.

---

## 🛠️ Stack Tecnologico

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Stile:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icone:** [Lucide React](https://lucide.dev/)
- **Font:** Google Fonts (*Great Vibes*, *Playfair Display*, *Plus Jakarta Sans*)

---

## 🚀 Come avviare il progetto localmente

1. **Clona il repository:**
   ```bash
   git clone https://github.com/<tuo-username>/<tuo-repo>.git
   cd <tuo-repo>
   ```

2. **Installa le dipendenze:**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```
   Il sito sarà attivo su `http://localhost:3000` (oppure `http://localhost:5173`).

4. **Compilazione per la produzione:**
   ```bash
   npm run build
   ```
   I file pronti per la pubblicazione verranno generati nella cartella `dist/`.

---

## 📁 Struttura del Progetto

```
├── index.html               # Entry point HTML con font e meta tag SEO
├── package.json             # Dipendenze e script npm
├── vite.config.ts           # Configurazione Vite e plugin
├── tsconfig.json            # Configurazione TypeScript
├── src/
│   ├── main.tsx             # Bootstrap di React
│   ├── App.tsx              # Componente principale
│   ├── index.css            # Stili globali e import Tailwind
│   ├── data/
│   │   └── treatments.ts    # Dati dei trattamenti, prezzi e recapiti
│   └── components/
│       ├── Navbar.tsx       # Barra di navigazione con menu mobile
│       ├── Hero.tsx         # Sezione Home & Presentazione
│       ├── ServicesPricing.tsx # Trattamenti, filtri e listino
│       ├── AboutMeContact.tsx  # Presentazione Gabriela e logistica
│       ├── AnamnesisModal.tsx  # Modulo di anamnesi interattivo
│       ├── SettingsModal.tsx   # Configurazione personalizzata dati
│       ├── StickyWhatsAppButton.tsx # CTA mobile e desktop
│       └── Footer.tsx       # Piè di pagina
```

---

## 📄 Licenza

Questo progetto è privato e realizzato per **Studio Massaggi Gabriela – Armonia & Benessere**.
