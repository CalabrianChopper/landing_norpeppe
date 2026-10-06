// Calendario dei viaggi di gruppo nel mondo.
// Stessa forma degli eventi calabresi (`Evento`), così le card sono le stesse.
// Per aggiungere un viaggio basta inserire un oggetto in questo array.
//
// Tutti i viaggi qui sotto sono confermati: la Lapponia in arrivo e i viaggi già fatti.

import type { Evento, DettaglioEvento } from './eventi';
import { scriviWhatsapp } from './site';

// ─── Lapponia: stesso viaggio, due partenze ─────────────────────────────────
const lapponia: DettaglioEvento = {
  occhiello:
    'Sei giorni nella Lapponia finlandese, con una guida artica e un cacciatore di aurore boreali dall’arrivo alla partenza.',
  racconto: [
    'Un viaggio di gruppo per vedere l’aurora boreale con chi la insegue di mestiere. Di notte si esce a caccia di cielo libero con un cacciatore di aurore; di giorno si attraversa la Lapponia in van: husky safari, tour in motoslitta e la visita al villaggio di Babbo Natale.',
    'Due giornate sono dedicate ai parchi nazionali di Korouoma e Riisitunturi. Dall’arrivo alla partenza il gruppo è accompagnato da una guida artica.',
  ],
  scheda: [
    { chiave: 'Durata', valore: '6 giorni' },
    { chiave: 'Quota', valore: '1.600 € a persona' },
    { chiave: 'Volo', valore: 'A/R dall’Italia, con bagaglio a mano' },
    { chiave: 'Spostamenti', valore: 'Van a noleggio, carburante compreso' },
    { chiave: 'Accompagnamento', valore: 'Guida artica e cacciatore di aurore boreali' },
  ],
  incluso: [
    'Volo A/R dall’Italia (con bagaglio a mano)',
    'Alloggio',
    'Visita al villaggio di Babbo Natale',
    'Husky safari',
    'Caccia all’aurora boreale',
    'Tour in motoslitta',
    'Escursione al Parco Nazionale di Korouoma',
    'Escursione al Parco Nazionale di Riisitunturi',
    'Noleggio van e carburante',
    'Accompagnamento per l’intero viaggio con guida artica e cacciatore di aurore boreali',
  ],
  nonIncluso: ['Pasti e bevande', 'Quanto non indicato alla voce “La quota comprende”'],
  documenti: ['Passaporto o carta d’identità elettronica'],
  valigia:
    'Dopo la prenotazione riceverai una mail con tutte le indicazioni dettagliate, insieme al link di invito al gruppo WhatsApp del viaggio.',
  galleria: [
    { src: '/images/lapponia-stelle.jpg', alt: 'Cielo stellato sopra la foresta lappone, con l’aurora all’orizzonte' },
    { src: '/images/lapponia-strada.jpg', alt: 'Aurora boreale sopra una strada innevata tra gli abeti in Lapponia' },
  ],
};

const partenzaLapponia = (slug: string, data: string, dataFine: string, date: string): Evento => ({
  slug,
  titolo: 'Lapponia: caccia all’aurora boreale',
  luogo: 'Lapponia, Finlandia',
  data,
  dataFine,
  durata: '6 giorni',
  tag: ['Aurora boreale', 'Husky', 'Motoslitta'],
  sintesi: `${date}: aurora boreale, husky safari, motoslitta e due parchi nazionali, con guida artica. Volo dall’Italia compreso.`,
  stato: 'prossimo',
  polo: 'mondo',
  prezzo: '1.600 €',
  prezzoEuro: 1600,
  immagine: '/images/lapponia-aurora.jpg',
  prenotazione: scriviWhatsapp(`Ciao Xploring! Vorrei prenotare "Lapponia: caccia all’aurora boreale" (${date}).`),
  prenotaWhatsapp: true,
  dettaglio: {
    ...lapponia,
    scheda: [{ chiave: 'Quando', valore: date }, ...lapponia.scheda],
  },
});

export const viaggiMondo: Evento[] = [
  // ─── PROSSIMI ────────────────────────────────────────────────────────────
  partenzaLapponia('lapponia-aurora-boreale-novembre-2026', '2026-11-23', '2026-11-28', '23–28 novembre 2026'),
  partenzaLapponia('lapponia-aurora-boreale-dicembre-2026', '2026-12-19', '2026-12-24', '19–24 dicembre 2026'),

  // ─── PASSATI ─────────────────────────────────────────────────────────────
  // Spostati dagli "in arrivo" il 06/10/2026.
  {
    slug: 'norvegia-lofoten',
    titolo: 'Lofoten, tra fiordi e aurora',
    luogo: 'Norvegia',
    periodo: 'Viaggio concluso',
    durata: '8 giorni',
    tag: ['Trekking', 'Aurora', 'Nord'],
    sintesi:
      'Le isole dove le montagne escono dritte dal mare. Si cammina di giorno, la notte si aspetta il cielo. Gruppo piccolo, casa in affitto tra i pescatori.',
    stato: 'passato',
  },
  {
    slug: 'islanda-highlands',
    titolo: 'Islanda, gli altipiani a piedi',
    luogo: 'Islanda',
    periodo: 'Viaggio concluso',
    durata: '10 giorni',
    tag: ['Trekking', 'Campo', 'Terme'],
    sintesi:
      'Dentro l’isola, dove la strada finisce: vulcani, fiumi da guadare, sorgenti calde in mezzo al nulla. Si dorme in tenda e nei rifugi.',
    stato: 'passato',
  },
  {
    slug: 'marocco-atlante',
    titolo: 'Marocco, dall’Atlante al deserto',
    luogo: 'Marocco',
    periodo: 'Viaggio concluso',
    durata: '9 giorni',
    tag: ['Trekking', 'Deserto', 'Persone'],
    sintesi:
      'Villaggi berberi, una notte sotto le dune, il tè offerto da chi conosciamo da anni. Il viaggio dove si entra nelle case, non nei riad.',
    stato: 'passato',
  },
  {
    slug: 'lapponia-inverno',
    titolo: 'Lapponia d’inverno',
    luogo: 'Finlandia e Svezia',
    periodo: 'Inverno scorso',
    durata: '7 giorni',
    tag: ['Neve', 'Aurora'],
    sintesi: 'Slitte, sauna sul lago ghiacciato, notti a −25 con l’aurora sopra la testa.',
    stato: 'passato',
  },
  {
    slug: 'islanda-ring-road',
    titolo: 'Islanda, il giro dell’isola',
    luogo: 'Islanda',
    periodo: 'Estate scorsa',
    durata: '12 giorni',
    tag: ['On the road', 'Cascate'],
    sintesi: 'Tutta la Ring Road in van, con le deviazioni che non stanno sulle guide.',
    stato: 'passato',
  },
];

export const prossimiMondo = viaggiMondo
  .filter((e) => e.stato === 'prossimo')
  .sort((a, b) => (a.data ?? '9999').localeCompare(b.data ?? '9999'));
export const passatiMondo = viaggiMondo.filter((e) => e.stato === 'passato');

/** I viaggi che hanno una pagina tutta loro: quelli con `dettaglio`. */
export const mondoConPagina = viaggiMondo.filter((e) => e.dettaglio);
