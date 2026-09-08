// Calendario Xploring Kalabria.
// Per aggiungere un evento basta inserire un oggetto in questo array.
// `data` è opzionale: se manca, la card mostra il testo di `periodo`.

/**
 * Il racconto lungo di un'uscita: è quello che riempie la sua pagina.
 * Solo le uscite in Calabria ancora da fare ce l'hanno — i viaggi nel mondo
 * restano alla card, e chi è interessato scrive.
 */
export type DettaglioEvento = {
  /** Frase d'apertura della pagina, sotto il titolo. Una riga, non di più. */
  occhiello: string;
  /** Il racconto, un elemento per capoverso. */
  racconto: string[];
  /** Scheda tecnica: ritrovo, difficoltà, dislivello, quando. */
  scheda: { chiave: string; valore: string }[];
  /** Come si svolge la giornata, tappa per tappa. */
  programma?: { quando: string; cosa: string }[];
  /** Cosa comprende la quota. */
  incluso?: string[];
  /** Cosa mettere nello zaino. */
  portare?: string[];
};

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
  /**
   * Se c'è, l'evento ha una pagina tutta sua sotto /kalabria/<slug>/ e la card
   * porta lì invece che su WhatsApp.
   * ⚠️ DA CONFERMARE CON GIUSEPPE ⚠️ ritrovi, orari, dislivelli, quote e cosa
   * è incluso qui sotto sono una traccia scritta sul posto giusto ma non
   * verificata: vanno sostituiti con i dati veri prima di andare online.
   */
  dettaglio?: DettaglioEvento;
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
    dettaglio: {
      occhiello: 'Mezza giornata nella Presila catanzarese, per chi non ha mai camminato con noi.',
      racconto: [
        'La cascata del Litrello non si vede finché non ci sei sopra. Prima la senti: un rumore basso che cresce mentre scendi e che a un certo punto copre le voci, così l’ultimo tratto lo si fa in silenzio senza mettersi d’accordo.',
        'Il sentiero parte dall’alto e scende dentro la forra. Sono poco più di venti minuti su un fondo di foglie e radici che d’inverno tiene l’umido: non serve allenamento, serve una scarpa che non scivoli. Chi cammina piano detta il passo, non il contrario.',
        'In fondo la gola si apre e l’acqua cade da una parete coperta di muschio. Ci si ferma lì il tempo che serve: chi vuole entra, chi vuole si siede sulle pietre a guardare. Il ritorno è la stessa strada, in salita, con più calma.',
        'È l’uscita che consiglio a chi vuole capire come lavoriamo prima di impegnarsi in una giornata intera. Si sta fuori mezza giornata e si torna con un posto in testa che a un’ora da Catanzaro quasi nessuno conosce.',
      ],
      scheda: [
        { chiave: 'Ritrovo', valore: 'Zagarise (CZ), parcheggio all’imbocco del sentiero' },
        { chiave: 'Difficoltà', valore: 'Facile, adatta a chi cammina poco' },
        { chiave: 'Dislivello', valore: 'Circa 120 metri, in discesa all’andata' },
        { chiave: 'Cammino', valore: 'Poco più di un’ora in tutto, soste escluse' },
        { chiave: 'Gruppo', valore: 'Massimo 20 persone' },
        { chiave: 'Stagione', valore: 'Da primavera a inizio autunno' },
      ],
      programma: [
        { quando: 'Ritrovo', cosa: 'Ci si conosce al parcheggio, due parole sul percorso e si parte.' },
        { quando: 'Discesa', cosa: 'Il sentiero dentro il bosco fino al fondo della forra.' },
        { quando: 'Alla cascata', cosa: 'Sosta lunga. Chi se la sente fa il bagno, l’acqua è fredda tutto l’anno.' },
        { quando: 'Risalita', cosa: 'Si torna su con calma e ci si saluta al parcheggio.' },
      ],
      incluso: [
        'Accompagnamento per tutta l’uscita',
        'Racconto del posto e di come ci si è arrivati',
        'Foto della giornata, condivise dopo',
      ],
      portare: [
        'Scarpe da trekking o da ginnastica con suola scolpita',
        'Acqua, almeno un litro a testa',
        'Costume e asciugamano se vuoi entrare',
        'Una maglia di ricambio: sotto la cascata si esce bagnati comunque',
      ],
    },
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
    dettaglio: {
      occhiello: 'Due giorni dentro le gole del Lao, con la notte in tenda sul greto del fiume.',
      racconto: [
        'Questa è l’uscita più selvatica del calendario, e non la propongo a cuor leggero. Si entra nelle gole del Lao dall’alto, si scende il fiume in gommone con le guide fluviali, e la sera si dorme dove si è arrivati.',
        'Il primo giorno è acqua. Rafting sul tratto classico, con i passaggi che fanno urlare tutti e i tratti calmi in cui ci si lascia portare. Non serve saper nuotare in modo particolare né aver mai messo piede su un gommone: l’attrezzatura e il briefing li dà chi le gole le fa da vent’anni.',
        'Il pomeriggio si cambia mezzo. River trekking nella parte stretta della gola, quella dove le pareti si avvicinano e si cammina dentro l’acqua bassa, con qualche tuffo dove il fondale lo permette. È il tratto che la gente vede nelle foto e non sa dove sia.',
        'La notte si monta il campo. Cena semplice, il rumore del fiume che non smette e un cielo che al Pollino, lontano dai paesi, si vede davvero. La mattina dopo si smonta tutto, si risale con calma e si chiude con un pranzo in un posto di Laino dove si mangia quello che c’è.',
      ],
      scheda: [
        { chiave: 'Ritrovo', valore: 'Laino Borgo (CS), base delle guide fluviali' },
        { chiave: 'Difficoltà', valore: 'Media: serve stare in piedi tutto il giorno, non serve allenamento' },
        { chiave: 'Acqua', valore: 'Rafting su tratto adatto ai principianti, con guida a bordo' },
        { chiave: 'Notte', valore: 'Tenda sul greto, campo montato da noi' },
        { chiave: 'Gruppo', valore: 'Massimo 14 persone' },
        { chiave: 'Stagione', valore: 'Da maggio a settembre, in base alla portata del fiume' },
      ],
      programma: [
        { quando: 'Giorno 1, mattina', cosa: 'Ritrovo, briefing e vestizione. Discesa in rafting sul Lao.' },
        { quando: 'Giorno 1, pomeriggio', cosa: 'River trekking dentro la gola stretta, con i tuffi dove si può.' },
        { quando: 'Giorno 1, sera', cosa: 'Si monta il campo, si cena e si resta lì.' },
        { quando: 'Giorno 2, mattina', cosa: 'Colazione, si smonta tutto e si risale.' },
        { quando: 'Giorno 2, pranzo', cosa: 'Tavolata a Laino Borgo prima dei saluti.' },
      ],
      incluso: [
        'Rafting e river trekking con guide fluviali abilitate',
        'Attrezzatura tecnica: muta, casco, giubbotto, calzari',
        'Tenda e materiale del campo',
        'Cena al campo, colazione e pranzo del secondo giorno',
        'Accompagnamento per tutti e due i giorni',
      ],
      portare: [
        'Sacco a pelo e materassino',
        'Scarpe che possono bagnarsi, chiuse, da tenere in acqua',
        'Costume, asciugamano, ricambio completo in sacco impermeabile',
        'Frontalino e una felpa: di notte in gola la temperatura scende',
      ],
    },
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
    dettaglio: {
      occhiello: 'Dal pomeriggio a notte fonda nel paese che guarda lo Ionio e il Tirreno insieme.',
      racconto: [
        'Tiriolo sta sul punto più stretto d’Italia, a cavallo fra i due mari. Nelle giornate pulite, dallo stesso belvedere, si vede l’acqua da tutte e due le parti: è una cosa che si racconta sempre e che quasi nessuno è andato a vedere davvero.',
        'Si parte a metà pomeriggio, quando il sole comincia a calare e il paese si può camminare. I vicoli, i portali di pietra, i cortili che la gente lascia aperti. Ci fermiamo dove c’è qualcosa da raccontare, e a Tiriolo c’è: i telai del vancale, la roccia sopra il paese, le case costruite una sull’altra perché lo spazio era quello.',
        'Al belvedere si arriva per il tramonto, che è il motivo per cui l’uscita comincia a quell’ora e non prima. Poi si scende a mangiare qualcosa in piazza, senza tavolate imposte: chi vuole si siede, chi vuole gira.',
        'La sera il set parte e si resta a ballare. Non è una serata in discoteca portata in un borgo, è un borgo che di sera resta acceso. Si finisce tardi, e chi vuole tornare prima trova sempre un passaggio.',
      ],
      scheda: [
        { chiave: 'Ritrovo', valore: 'Tiriolo (CZ), piazza centrale nel primo pomeriggio' },
        { chiave: 'Difficoltà', valore: 'Facile, ma il paese è in salita: si cammina piano' },
        { chiave: 'Cammino', valore: 'Circa due ore fra vicoli e belvedere, con molte soste' },
        { chiave: 'Musica', valore: 'DJ set in terrazza dopo cena, fino a tardi' },
        { chiave: 'Gruppo', valore: 'Aperto, di solito fra 30 e 60 persone' },
        { chiave: 'Stagione', valore: 'Estate, con data annunciata qui e sui social' },
      ],
      programma: [
        { quando: 'Pomeriggio', cosa: 'Ritrovo in piazza e giro del paese fra vicoli e cortili.' },
        { quando: 'Tramonto', cosa: 'Salita al belvedere sui due mari, che è il momento della giornata.' },
        { quando: 'Sera', cosa: 'Si scende a mangiare, liberi di scegliere dove.' },
        { quando: 'Notte', cosa: 'DJ set in terrazza. Si va avanti finché c’è gente.' },
      ],
      incluso: [
        'Accompagnamento e racconto del paese',
        'Ingresso al set della sera',
      ],
      portare: [
        'Scarpe comode: il selciato è antico e in salita',
        'Una felpa, perché a 690 metri la sera rinfresca anche a luglio',
        'Voglia di restare fino a tardi',
      ],
    },
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

/** Le uscite che hanno una pagina tutta loro: da qui nascono le rotte. */
export const conPagina = eventi.filter((e) => !!e.dettaglio);

/** L'indirizzo della pagina di un'uscita, o niente se non ce l'ha. */
export function urlEvento(e: Evento) {
  return e.dettaglio ? `/kalabria/${e.slug}/` : undefined;
}

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
