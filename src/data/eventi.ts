// Calendario Xploring Kalabria.
// Per aggiungere un evento basta inserire un oggetto in questo array.
// `data` è opzionale: se manca, la card mostra il testo di `periodo`.

/**
 * Il racconto lungo di un'uscita: è quello che riempie la sua pagina.
 * Ogni uscita in Calabria ha la sua pagina; se `dettaglio` manca, la pagina
 * si arrangia con la sintesi della card. I viaggi nel mondo restano alla card.
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
  /** Avviso in chiusura della pagina, prima del bottone. */
  nota?: string;
};

export type Evento = {
  slug: string;
  titolo: string;
  luogo: string;
  /** ISO 8601, es. '2026-09-14'. Lascia vuoto se la data non è ancora fissata. */
  data?: string;
  /** Usato al posto della data, es. 'Data in definizione' o 'Estate 2025'. */
  periodo?: string;
  /** Ultimo giorno, per le uscite di più giorni consecutivi (es. 12–13 settembre). */
  dataFine?: string;
  /** Altre edizioni della stessa uscita (es. Valli Cupe: 11 e 18 luglio). */
  altreDate?: string[];
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
   * Il racconto della pagina /kalabria/<slug>/. Ogni uscita in Calabria ha la
   * sua pagina comunque: senza `dettaglio` mostra solo la sintesi.
   * ⚠️ DA CONFERMARE CON GIUSEPPE ⚠️ ritrovi, orari, dislivelli, quote e cosa
   * è incluso qui sotto sono una traccia scritta sul posto giusto ma non
   * verificata: vanno sostituiti con i dati veri prima di andare online.
   */
  dettaglio?: DettaglioEvento;
  /**
   * Link al Google Form di prenotazione. Il bottone "Prenota" della pagina
   * apre questo form in una nuova scheda: il sito non prende prenotazioni dirette.
   * Se manca, il bottone apre una mail.
   */
  prenotazione?: string;
};

export const eventi: Evento[] = [
  // ─── PROSSIMI ────────────────────────────────────────────────────────────
  {
    slug: 'xploring-day-cascate-faggi-lupo',
    prenotazione: 'https://forms.gle/ucQJ2tiWs69L4k3y8',
    titolo: 'Xploring Day: Cascate dei Faggi e del Lupo',
    luogo: 'Villaggio Buturo, Sila Piccola (CZ)',
    data: '2026-10-10',
    durata: 'Circa 5 ore',
    tag: ['Trekking', 'Cascate', 'Gratuito'],
    sintesi:
      'Anello di 7 km nei boschi della Sila Piccola, fino a due cascate. Evento gratuito: il nostro grazie alla Community.',
    stato: 'prossimo',
    dettaglio: {
      occhiello: 'Evento gratuito: un anello tra due cascate della Sila Piccola, per festeggiare insieme la Community.',
      racconto: [
        'Evento gratuito! È lo Xploring Day: il giorno in cui Xploring Kalabria ti ringrazia di far parte di questa folle Community.',
        'Si parte da Villaggio Buturo, nella Sila Piccola, per un anello di circa 7 km che tocca la Cascata dei Faggi e la Cascata del Lupo. Un percorso medio-facile, con 350 metri di dislivello, pensato per camminare insieme senza fretta.',
      ],
      scheda: [
        { chiave: 'Quando', valore: 'Sabato 10 ottobre, inizio ore 10.00' },
        { chiave: 'Durata', valore: 'Circa 5 ore' },
        { chiave: 'Lunghezza', valore: 'Circa 7 km' },
        { chiave: 'Tipo', valore: 'Anello' },
        { chiave: 'Dislivello', valore: '350 metri positivi / negativi' },
        { chiave: 'Difficoltà', valore: 'E (medio-facile)' },
        { chiave: 'Quota', valore: 'Gratuito' },
        { chiave: 'Età', valore: '18+' },
      ],
      portare: [
        'Abbigliamento outdoor a strati (maglia, pile, giacca a vento)',
        'Scarpe da trekking',
        'Acqua (almeno 1,5 litri)',
        'Occhiali, cappellino e crema solare',
      ],
      nota: 'Riceverai una mail con orario e punto di incontro esatti il giorno prima dell’evento.',
    },
  },
  {
    slug: 'pausa-sul-monte-scirocco',
    prenotazione: 'https://forms.gle/R5WpUW4HN9ovUQoF9',
    titolo: 'Pausa sul Monte: Monte Scirocco',
    luogo: 'Monte Scirocco, Aspromonte (RC)',
    data: '2026-10-17',
    durata: 'Circa 6 ore',
    tag: ['Trekking', 'Aspromonte'],
    sintesi:
      'Un anello di 7 km in Aspromonte, per fermarsi un giorno in quota. Percorso medio-facile.',
    stato: 'prossimo',
    dettaglio: {
      occhiello: 'Una giornata per staccare e prendersi una pausa, in cima all’Aspromonte.',
      racconto: [
        'Pausa sul Monte è esattamente quello che dice: una giornata per fermarsi, lontano dal rumore, sul Monte Scirocco in Aspromonte.',
        'Il percorso è un anello di circa 7 km con 500 metri di dislivello totale, di difficoltà medio-facile. Si parte alle 10.00 e si sta fuori circa sei ore, con il tempo giusto per le soste.',
      ],
      scheda: [
        { chiave: 'Quando', valore: 'Sabato 17 ottobre, inizio ore 10.00' },
        { chiave: 'Durata', valore: 'Circa 6 ore' },
        { chiave: 'Lunghezza', valore: 'Circa 7 km' },
        { chiave: 'Tipo', valore: 'Anello' },
        { chiave: 'Dislivello', valore: '500 metri totali' },
        { chiave: 'Difficoltà', valore: 'E (medio-facile)' },
        { chiave: 'Età', valore: '18+' },
      ],
      portare: [
        'Abbigliamento outdoor a strati (maglia, pile, giacca a vento)',
        'Scarpe da trekking',
        'Acqua (almeno 1,5 litri)',
        'Occhiali, cappellino e crema solare',
      ],
      nota: 'Riceverai una mail con orario e punto di incontro esatti il giorno prima dell’evento.',
    },
  },
  {
    slug: 'foliage-monte-covello',
    prenotazione: 'https://forms.gle/R5WpUW4HN9ovUQoF9',
    titolo: 'Foliage sul Monte Covello',
    luogo: 'Monte Covello, Girifalco (CZ)',
    data: '2026-10-31',
    durata: 'Circa 6 ore',
    tag: ['Trekking', 'Foliage', 'Sentiero Italia'],
    sintesi:
      'I colori dell’autunno sulle orme del Sentiero Italia: anello di 9 km sul Monte Covello.',
    stato: 'prossimo',
    dettaglio: {
      occhiello: 'Sulle orme del Sentiero Italia, dentro i colori dell’autunno.',
      racconto: [
        'A fine ottobre il bosco del Monte Covello cambia colore. Lo attraversiamo seguendo un tratto del Sentiero Italia, il grande cammino che percorre tutta la penisola.',
        'Il percorso è un anello di circa 9 km con 700 metri di dislivello totale, di difficoltà medio-facile. Si parte alle 10.00 e si sta fuori circa sei ore.',
      ],
      scheda: [
        { chiave: 'Quando', valore: 'Sabato 31 ottobre, inizio ore 10.00' },
        { chiave: 'Durata', valore: 'Circa 6 ore' },
        { chiave: 'Lunghezza', valore: '9 km' },
        { chiave: 'Tipo', valore: 'Anello' },
        { chiave: 'Dislivello', valore: '700 metri totali' },
        { chiave: 'Difficoltà', valore: 'E (medio-facile)' },
        { chiave: 'Età', valore: '18+' },
      ],
      portare: [
        'Abbigliamento outdoor a strati (maglia, pile, giacca a vento)',
        'Scarpe da trekking',
        'Acqua (almeno 1,5 litri)',
        'Occhiali, cappellino e crema solare',
      ],
      nota: 'Riceverai una mail con orario e punto di incontro esatti il giorno prima dell’evento.',
    },
  },
  // ─── GIÀ FATTI ───────────────────────────────────────────────────────────
  {
    slug: 'cascata-del-litrello',
    titolo: 'Hike alla Cascata del Litrello',
    luogo: 'Sila Piccola (CZ)',
    data: '2026-08-20',
    durata: 'Mezza giornata',
    tag: ['Trekking', 'Acqua'],
    sintesi:
      "Un sentiero dentro il bosco, l'acqua che si sente molto prima di vedersi, poi la cascata tutta insieme. Percorso adatto anche a chi cammina poco.",
    stato: 'passato',
    dettaglio: {
      occhiello: 'Mezza giornata nella Presila catanzarese, per chi non ha mai camminato con noi.',
      racconto: [
        'La cascata del Litrello non si vede finché non ci sei sopra. Prima la senti: un rumore basso che cresce mentre scendi e che a un certo punto copre le voci, così l’ultimo tratto lo si fa in silenzio senza mettersi d’accordo.',
        'Il sentiero parte dall’alto e scende dentro la forra. Sono poco più di venti minuti su un fondo di foglie e radici che d’inverno tiene l’umido: non serve allenamento, serve una scarpa che non scivoli. Chi cammina piano detta il passo, non il contrario.',
        'In fondo la gola si apre e l’acqua cade da una parete coperta di muschio. Ci si ferma lì il tempo che serve: chi vuole entra, chi vuole si siede sulle pietre a guardare. Il ritorno è la stessa strada, in salita, con più calma.',
        'È l’uscita che consigliamo a chi vuole capire come lavoriamo prima di impegnarsi in una giornata intera. Si sta fuori mezza giornata e si torna con un posto in testa che a un’ora da Catanzaro quasi nessuno conosce.',
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
    titolo: 'Weekend tra rafting e tenda sul Pollino',
    luogo: 'Parco Nazionale del Pollino (CS)',
    data: '2026-08-22',
    durata: 'Due giorni, una notte',
    tag: ['Rafting', 'River trekking', 'Campo'],
    sintesi:
      'Si scende il fiume in gommone, si risale a piedi dentro la gola, si monta il campo e si dorme lì. Il format più selvatico della stagione.',
    stato: 'passato',
    dettaglio: {
      occhiello: 'Due giorni dentro le gole del Lao, con la notte in tenda sul greto del fiume.',
      racconto: [
        'Questa è l’uscita più selvatica del calendario, e non la proponiamo a cuor leggero. Si entra nelle gole del Lao dall’alto, si scende il fiume in gommone con le guide fluviali, e la sera si dorme dove si è arrivati.',
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
    data: '2026-08-23',
    durata: 'Dal pomeriggio a notte',
    tag: ['Borghi', 'Musica'],
    sintesi:
      'Il paese da cui si vedono due mari nello stesso sguardo. Si cammina tra i vicoli fino al tramonto, poi si resta a ballare.',
    stato: 'passato',
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
  {
    slug: 'canyon-valli-cupe',
    titolo: 'Canyon Valli Cupe',
    luogo: 'Sersale (CZ)',
    data: '2026-07-11',
    altreDate: ['2026-07-18'],
    durata: 'Giornata intera',
    tag: ['Canyon', 'Riserva'],
    sintesi:
      'Il canyon più stretto della Calabria: pareti di roccia sopra la testa, felci giganti e i piedi nell\u2019acqua.',
    stato: 'passato',
  },
  {
    slug: 'bagni-di-guida',
    titolo: 'Bagni di Guida, tra Terme e Cianotipia',
    luogo: 'Bivongi (RC)',
    data: '2026-07-19',
    durata: 'Giornata intera',
    tag: ['Terme naturali', 'Cianotipia'],
    sintesi:
      'Le acque sulfuree dei Bagni di Guida, a Bivongi, e un laboratorio di cianotipia: si stampa con la luce del sole.',
    stato: 'passato',
  },
  {
    slug: 'serra-san-bruno-forest-bathing',
    // ⚠️ DA CONFERMARE: abbinata al 25/07 "Il Bosco che cura a Serra San Bruno".
    titolo: 'Il Bosco che cura a Serra San Bruno',
    luogo: 'Serra San Bruno (VV)',
    data: '2026-07-25',
    durata: 'Giornata intera',
    tag: ['Forest bathing', 'Boschi'],
    sintesi:
      'Abeti bianchi altissimi e un\u2019ora di cammino lento, in silenzio, tra i tronchi. Poi il paese dei Certosini.',
    stato: 'passato',
  },
  {
    slug: 'ferriere-di-mongiana',
    // ⚠️ DA CONFERMARE: abbinata al 07/07 "Serre calabre tra storia, hike e forest bathing".
    titolo: 'Serre calabre tra storia, hike e forest bathing',
    luogo: 'Mongiana (VV)',
    data: '2026-07-07',
    durata: 'Giornata intera',
    tag: ['Storia', 'Forest bathing'],
    sintesi:
      'Le fonderie borboniche nel cuore delle Serre: la Calabria che produceva acciaio, raccontata dove è successo.',
    stato: 'passato',
  },
  {
    slug: 'montauro-borgo-dj-set',
    titolo: 'Esplorazione del borgo di Montauro e DJ set in terrazza',
    luogo: 'Montauro (CZ)',
    data: '2026-08-07',
    durata: 'Dal pomeriggio a notte',
    tag: ['Borghi', 'Musica'],
    sintesi:
      'Vicoli, portali di granito e cortili aperti. Al calare del sole il set parte da una terrazza che guarda il golfo.',
    stato: 'passato',
  },

  // ─── Già fatti, aggiunti il 01/10/2026 ───
  // ⚠️ DA COMPLETARE: luogo, durata e sintesi sono una traccia minima.
  {
    slug: 'hike-monte-tiriolo',
    titolo: 'Hike sul Monte Tiriolo',
    luogo: 'Tiriolo (CZ)',
    data: '2026-04-12',
    durata: 'Mezza giornata',
    tag: ['Trekking'],
    sintesi: 'La prima uscita della stagione: si sale sul Monte Tiriolo, dove nelle giornate pulite si vedono i due mari.',
    stato: 'passato',
  },
  {
    slug: 'star-trek-tiriolo',
    titolo: 'Star Trek a Tiriolo, hike e stelle',
    luogo: 'Tiriolo (CZ)',
    data: '2026-06-27',
    durata: 'Dal tramonto a notte',
    tag: ['Trekking', 'Stelle'],
    sintesi: 'Si cammina fino in quota al calare del sole e si resta lassù, al buio, a guardare il cielo.',
    stato: 'passato',
  },
  {
    slug: 'trekking-notturno-aspromonte',
    titolo: 'Trekking notturno in Aspromonte',
    luogo: 'Aspromonte (RC)',
    data: '2026-08-27',
    durata: 'Serata e notte',
    tag: ['Trekking', 'Notturno'],
    sintesi: 'Si cammina con il buio e le frontali accese, nel silenzio dell’Aspromonte.',
    stato: 'passato',
  },
  {
    slug: 'nardodipace-megaliti-yoga',
    titolo: 'Nardodipace tra megaliti e yoga',
    luogo: 'Nardodipace (VV)',
    data: '2026-09-06',
    durata: 'Giornata intera',
    tag: ['Megaliti', 'Yoga'],
    sintesi: 'I megaliti di Nardodipace nei boschi delle Serre, e una sessione di yoga in mezzo alle pietre.',
    stato: 'passato',
  },
  {
    slug: 'kalabria-coast-to-coast',
    titolo: 'Kalabria Coast to Coast',
    luogo: 'Dal Tirreno allo Ionio',
    data: '2026-09-12',
    dataFine: '2026-09-13',
    durata: 'Due giorni',
    tag: ['Trekking', 'Più giorni'],
    sintesi: 'Due giorni a piedi da un mare all’altro: la Calabria attraversata dal Tirreno allo Ionio.',
    stato: 'passato',
  },
];

const perData = (a: Evento, b: Evento) => (a.data ?? '9999').localeCompare(b.data ?? '9999');

/** In arrivo: dalla più vicina. */
export const prossimi = eventi.filter((e) => e.stato === 'prossimo').sort(perData);
/** Già fatti: dal più recente al più vecchio. */
export const passati = eventi.filter((e) => e.stato === 'passato').sort((a, b) => perData(b, a));

/**
 * La prossima uscita con un modulo d'iscrizione: la più vicina a oggi.
 * ⚠️ Il sito è statico: "oggi" è il giorno della build. Dopo ogni uscita
 * si sposta l'evento fra i già fatti e si rifà la build.
 */
export const prossimaIscrizione = (() => {
  const oggi = new Date().toISOString().slice(0, 10);
  return prossimi.find((e) => e.prenotazione && (!e.data || e.data >= oggi));
})();

/** Le uscite che hanno una pagina tutta loro: da qui nascono le rotte. Tutte. */
export const conPagina = eventi;

/** L'indirizzo della pagina di un'uscita in Calabria. */
export function urlEvento(e: Evento) {
  return `/kalabria/${e.slug}/`;
}

/**
 * La data in breve per l'elenco e la pagina: '27 Giu', '12–13 Set', '11 e 18 Lug'.
 * Se manca la data, il testo di `periodo`.
 */
export function quandoBreve(e: Evento) {
  const d = formattaData(e.data);
  if (!d) return e.periodo ?? '';
  const g = (x: { giorno: string }) => String(Number(x.giorno));
  if (e.dataFine) {
    const f = formattaData(e.dataFine);
    if (f) return f.mese === d.mese ? `${g(d)}–${g(f)} ${d.mese}` : `${g(d)} ${d.mese} – ${g(f)} ${f.mese}`;
  }
  const altre = (e.altreDate ?? []).map((x) => formattaData(x)).filter((x) => !!x) as { giorno: string; mese: string }[];
  if (altre.length && altre.every((x) => x.mese === d.mese)) {
    const giorni = [g(d), ...altre.map(g)];
    return `${giorni.slice(0, -1).join(', ')} e ${giorni.at(-1)} ${d.mese}`;
  }
  return `${g(d)} ${d.mese}`;
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
