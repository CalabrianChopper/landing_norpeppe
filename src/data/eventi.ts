// Calendario Xploring Kalabria.
// Per aggiungere un evento basta inserire un oggetto in questo array.
// `data` è opzionale: se manca, la card mostra il testo di `periodo`.

export type Evento = {
  slug: string;
  titolo: string;
  luogo: string;
  /** ISO 8601, es. '2026-09-14'. Lascia vuoto se la data non è ancora fissata. */
  data?: string;
  /** Usato al posto della data, es. 'Data in definizione' o 'Estate 2025'. */
  periodo?: string;
  durata: string;
  tag: string[];
  sintesi: string;
  stato: 'prossimo' | 'passato';
  /**
   * Foto dell'evento, es. '/images/litrello.jpg'.
   * Se manca, la card mostra il pannello con il monogramma X.
   * ⚠️ Le foto che c'erano nel sito erano tutte del nord Europa: sono state
   * tolte dagli eventi calabresi perché raccontavano il posto sbagliato.
   */
  immagine?: string;
};

export const eventi: Evento[] = [
  // ─── PROSSIMI ────────────────────────────────────────────────────────────
  {
    slug: 'cascata-del-litrello',
    titolo: 'Escursione alla Cascata del Litrello',
    luogo: 'Zagarise (CZ)', // TODO CONFERMARE il comune di partenza
    periodo: 'Data in definizione',
    durata: 'Mezza giornata',
    tag: ['Trekking', 'Acqua'],
    sintesi:
      "Un sentiero dentro il bosco, l'acqua che si sente molto prima di vedersi, poi la cascata tutta insieme. Percorso adatto anche a chi cammina poco.",
    stato: 'prossimo',
  },
  {
    slug: 'pollino-rafting-tenda',
    titolo: 'Rafting, river trekking e notte in tenda sul Pollino',
    luogo: 'Parco Nazionale del Pollino (CS)',
    periodo: 'Data in definizione',
    durata: 'Due giorni, una notte',
    tag: ['Rafting', 'River trekking', 'Campo'],
    sintesi:
      'Si scende il fiume in gommone, si risale a piedi dentro la gola, si monta il campo e si dorme lì. Il format più selvatico della stagione.',
    stato: 'prossimo',
  },
  {
    slug: 'tiriolo-urban-trekking-dj-set',
    titolo: 'Urban trekking e DJ set a Tiriolo',
    luogo: 'Tiriolo (CZ)',
    periodo: 'Data in definizione',
    durata: 'Dal pomeriggio a notte',
    tag: ['Borghi', 'Musica'],
    sintesi:
      'Il paese da cui si vedono due mari nello stesso sguardo. Si cammina tra i vicoli fino al tramonto, poi si resta a ballare.',
    stato: 'prossimo',
  },

  // ─── GIÀ FATTI ───────────────────────────────────────────────────────────
  {
    slug: 'canyon-valli-cupe',
    titolo: 'Canyon Valli Cupe',
    luogo: 'Sersale (CZ)',
    periodo: 'Edizione conclusa',
    durata: 'Giornata intera',
    tag: ['Canyon', 'Riserva'],
    sintesi:
      'Il canyon più stretto della Calabria: pareti di roccia sopra la testa, felci giganti e i piedi nell\u2019acqua.',
    stato: 'passato',
  },
  {
    slug: 'bagni-di-guida',
    titolo: 'Bagni di Guida',
    luogo: 'Cerchiara di Calabria (CS)', // TODO CONFERMARE il comune
    periodo: 'Edizione conclusa',
    durata: 'Giornata intera',
    tag: ['Terme naturali', 'Pollino'],
    sintesi:
      'Acqua sulfurea che esce calda dalla roccia in mezzo a una gola. Ci si arriva a piedi e si resta a mollo.',
    stato: 'passato',
  },
  {
    slug: 'serra-san-bruno-forest-bathing',
    titolo: 'Serra San Bruno e Forest Bathing al Bosco Archiforo',
    luogo: 'Serra San Bruno (VV)',
    periodo: 'Edizione conclusa',
    durata: 'Giornata intera',
    tag: ['Forest bathing', 'Boschi'],
    sintesi:
      'Abeti bianchi altissimi e un\u2019ora di cammino lento, in silenzio, tra i tronchi. Poi il paese dei Certosini.',
    stato: 'passato',
  },
  {
    slug: 'ferriere-di-mongiana',
    titolo: 'Ferriere di Mongiana',
    luogo: 'Mongiana (VV)',
    periodo: 'Edizione conclusa',
    durata: 'Mezza giornata',
    tag: ['Storia', 'Archeologia industriale'],
    sintesi:
      'Le fonderie borboniche nel cuore delle Serre: la Calabria che produceva acciaio, raccontata dove è successo.',
    stato: 'passato',
  },
  {
    slug: 'montauro-borgo-dj-set',
    titolo: 'Esplorazione del borgo di Montauro e DJ set in terrazza',
    luogo: 'Montauro (CZ)',
    periodo: 'Edizione conclusa',
    durata: 'Dal pomeriggio a notte',
    tag: ['Borghi', 'Musica'],
    sintesi:
      'Vicoli, portali di granito e cortili aperti. Al calare del sole il set parte da una terrazza che guarda il golfo.',
    stato: 'passato',
  },
];

export const prossimi = eventi.filter((e) => e.stato === 'prossimo');
export const passati = eventi.filter((e) => e.stato === 'passato');

/** '2026-09-14' → { giorno: '14', mese: 'Set' } */
export function formattaData(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return null;
  const mesi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  return { giorno: String(d.getDate()).padStart(2, '0'), mese: mesi[d.getMonth()] };
}

/** Il "plus" di uscire con Xploring Kalabria: l'intro della sezione. */
export const percheKalabria = [
  { chiave: 'Il gruppo', titolo: 'Aperto a chiunque, senza allenamento richiesto' },
  { chiave: 'I posti', titolo: 'Canyon, cascate, boschi vecchi e borghi, mai la cartolina' },
  { chiave: 'Le serate', titolo: 'Si cammina di giorno, la sera si sta in piazza' },
  { chiave: 'Le date', titolo: 'Escono qui e sui social: i posti sono contati' },
];
