// SEO e GEO (ottimizzazione per i motori generativi: ChatGPT, Perplexity, AI Overview).
// Le 4 keyword su cui è costruita la pagina, in ordine di priorità.
// Cambia qui e cambiano title, description, JSON-LD e testi di supporto.

import { site } from './site';
import { totalePaesi, continenti } from './paesi';
import { formato } from './viaggi';

export const keywords = [
  'viaggi di gruppo',
  'viaggi in Calabria',
  'trekking in Calabria',
  'viaggi di gruppo organizzati',
] as const;

export const seo = {
  // ⚠️ DA SOSTITUIRE con il dominio vero appena c'è (senza slash finale).
  // Serve a canonical, Open Graph, sitemap e dati strutturati.
  url: 'https://www.xploringkalabria.it',

  // ≤ 60 caratteri: le due keyword principali per prime.
  title: 'Viaggi di gruppo e viaggi in Calabria | Xploring con NorPeppe',

  // ≤ 155 caratteri, con le 4 keyword e una promessa concreta.
  description:
    'Viaggi di gruppo organizzati nel mondo e viaggi in Calabria con NorPeppe: trekking in Calabria, canyon, borghi e partenze in piccoli gruppi da 8 a 14 persone.',

  ogImage: '/images/hero-aurora.jpg',
  locale: 'it_IT',
  lingua: 'it',

  // Geo-tag: la Calabria è il luogo fisico dell'attività.
  geo: {
    regione: 'IT-78', // ISO 3166-2 Calabria
    luogo: 'Calabria, Italia',
    lat: 38.9,
    lon: 16.5,
  },

  persona: {
    nome: site.persona,
    alias: 'NorPeppe',
    ruolo: 'Viaggiatore, esploratore e storyteller',
  },
} as const;

/**
 * Domande e risposte: sono la parte che i motori generativi citano.
 * Risposte brevi, con dati concreti e la keyword dentro alla prima frase.
 * Vengono mostrate in pagina (sezione "Domande") ed emesse come FAQPage.
 */
export const faq = [
  {
    domanda: 'Come funzionano i viaggi di gruppo con NorPeppe?',
    risposta:
      'I viaggi di gruppo con NorPeppe sono viaggi organizzati in piccoli gruppi da 8 a 14 persone, verso mete che Giuseppe Lupis ha già percorso di persona. Voli, spostamenti, guide locali e imprevisti sono a carico dell’organizzazione: chi parte porta solo lo zaino. Si prenota con un messaggio su WhatsApp, una chiamata senza impegno e un acconto.',
  },
  {
    domanda: 'Cosa sono i viaggi in Calabria di Xploring Kalabria?',
    risposta:
      'Xploring Kalabria è il calendario di viaggi in Calabria ed escursioni di NorPeppe: trekking nei canyon, cascate, rafting sul Pollino, notti in tenda, borghi e serate con DJ set. Ogni uscita è un gruppo aperto a chiunque, con posti contati; le date escono sul sito e sui social.',
  },
  {
    domanda: 'Serve essere allenati per fare trekking in Calabria con Xploring Kalabria?',
    risposta:
      'No. Il trekking in Calabria di Xploring Kalabria è pensato per chi ha voglia di camminare e stare in gruppo, non per atleti. Quando un percorso è impegnativo viene indicato prima, in modo chiaro. Molte uscite, come la Cascata del Litrello, sono adatte anche a chi cammina poco.',
  },
  {
    domanda: 'Quante persone partecipano ai viaggi di gruppo organizzati?',
    risposta:
      `I viaggi di gruppo organizzati da NorPeppe hanno tra ${formato.gruppo.replace('–', ' e ')}, con ${formato.partenzeAnno}. Il numero è scelto per poter entrare in una casa, sedersi a un tavolo solo o prendere una barca piccola nei posti visitati.`,
  },
  {
    domanda: 'Dove si va con i viaggi di gruppo nel mondo?',
    risposta:
      `Le mete dei viaggi di gruppo nel mondo sono paesi che NorPeppe ha già visitato: al momento ${totalePaesi} paesi in ${continenti.length} continenti, con una forte presenza del Nord Europa (Norvegia, Islanda, Lapponia) e itinerari nati dalle persone conosciute sul posto.`,
  },
  {
    domanda: 'Come si prenota un viaggio o un’escursione con NorPeppe?',
    risposta:
      `Si scrive su WhatsApp al ${site.telefono} o via email a ${site.email}. Per i viaggi di gruppo nel mondo segue una chiamata con costi, ritmo e difficoltà, poi l’acconto blocca il posto. Per le escursioni in Calabria basta prenotare il singolo evento e presentarsi al punto di ritrovo.`,
  },
];
