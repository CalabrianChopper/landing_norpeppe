// I paesi che il mappamondo accende come "già visitati" (lista di Giuseppe, 30/09/2026).
// Il codice è l'ISO 3166-1 numerico a 3 cifre (quello usato da Natural Earth).
// Per aggiungere o togliere un paese basta aggiungere/rimuovere una riga:
// il contatore, i continenti e il globo si aggiornano da soli.
// L'Italia non è nella lista: è "casa", il punto arancione sulla Calabria.
//
// Isole troppo piccole per la mappa (Malta, Canarie, Madeira, Faroe): hanno
// `punto` [lon, lat] e il globo le disegna come un pallino.
// I `territorio: true` stanno sul globo ma non contano come paesi a sé.

export type Paese = {
  /** ISO 3166-1 numerico, 3 cifre con gli zeri davanti. Manca per i territori. */
  id?: string;
  nome: string;
  continente: 'Europa' | 'Africa' | 'Asia' | 'Americhe' | 'Oceania';
  /** [longitudine, latitudine]: per le isole che la mappa non disegna. */
  punto?: [number, number];
  /** Parte di un altro paese: si vede sul globo, non entra nel contatore. */
  territorio?: boolean;
};

export const paesiVisitati: Paese[] = [
  // Europa
  { id: '246', nome: 'Finlandia', continente: 'Europa' },
  { id: '752', nome: 'Svezia', continente: 'Europa' },
  { id: '578', nome: 'Norvegia (Capo Nord e Lofoten)', continente: 'Europa' },
  { id: '208', nome: 'Danimarca', continente: 'Europa' },
  { id: '352', nome: 'Islanda', continente: 'Europa' },
  { id: '372', nome: 'Irlanda', continente: 'Europa' },
  { id: '826', nome: 'Scozia (Regno Unito)', continente: 'Europa' },
  { id: '724', nome: 'Spagna', continente: 'Europa' },
  { id: '620', nome: 'Portogallo', continente: 'Europa' },
  { id: '250', nome: 'Francia', continente: 'Europa' },
  { id: '276', nome: 'Germania', continente: 'Europa' },
  { id: '300', nome: 'Grecia', continente: 'Europa' },
  { id: '470', nome: 'Malta', continente: 'Europa', punto: [14.40, 35.90] },
  { id: '705', nome: 'Slovenia', continente: 'Europa' },
  { id: '191', nome: 'Croazia', continente: 'Europa' },
  { id: '070', nome: 'Bosnia ed Erzegovina', continente: 'Europa' },
  { id: '348', nome: 'Ungheria', continente: 'Europa' },
  { id: '703', nome: 'Slovacchia', continente: 'Europa' },
  { id: '616', nome: 'Polonia', continente: 'Europa' },
  { id: '642', nome: 'Romania', continente: 'Europa' },
  { id: '233', nome: 'Estonia', continente: 'Europa' },
  { id: '428', nome: 'Lettonia', continente: 'Europa' },
  { id: '440', nome: 'Lituania', continente: 'Europa' },

  // Territori: un punto sul globo, ma non contano come paesi a sé.
  { nome: 'Canarie (Fuerteventura, Lanzarote, Tenerife)', continente: 'Europa', punto: [-15.50, 28.30], territorio: true },
  { nome: 'Madeira', continente: 'Europa', punto: [-16.95, 32.75], territorio: true },
  { nome: 'Isole Faroe', continente: 'Europa', punto: [-6.90, 62.00], territorio: true },

  // Africa
  { id: '504', nome: 'Marocco', continente: 'Africa' },
  { id: '818', nome: 'Egitto', continente: 'Africa' },
  { id: '450', nome: 'Madagascar', continente: 'Africa' },

  // Asia
  { id: '792', nome: 'Turchia', continente: 'Asia' },
  { id: '268', nome: 'Georgia', continente: 'Asia' },
  { id: '051', nome: 'Armenia', continente: 'Asia' },
  { id: '400', nome: 'Giordania', continente: 'Asia' },
  { id: '398', nome: 'Kazakistan', continente: 'Asia' },
  { id: '417', nome: 'Kirghizistan', continente: 'Asia' },
  { id: '860', nome: 'Uzbekistan', continente: 'Asia' },
  { id: '144', nome: 'Sri Lanka', continente: 'Asia' },
  { id: '764', nome: 'Thailandia', continente: 'Asia' },
  { id: '116', nome: 'Cambogia', continente: 'Asia' },
  { id: '704', nome: 'Vietnam', continente: 'Asia' },
  { id: '392', nome: 'Giappone', continente: 'Asia' },

  // Americhe
  { id: '484', nome: 'Messico', continente: 'Americhe' },
  { id: '320', nome: 'Guatemala', continente: 'Americhe' },
  { id: '192', nome: 'Cuba', continente: 'Americhe' },
  { id: '604', nome: 'Perù', continente: 'Americhe' },
  { id: '068', nome: 'Bolivia', continente: 'Americhe' },
];

const paesi = paesiVisitati.filter((p) => !p.territorio);

export const totalePaesi = paesi.length;

export const continenti = [...new Set(paesi.map((p) => p.continente))];

/** Mappa id → nome italiano, per le etichette del globo (solo i paesi disegnati dalla mappa). */
export const nomiPerId: Record<string, string> = Object.fromEntries(
  paesiVisitati.filter((p) => p.id && !p.punto).map((p) => [p.id, p.nome])
);

/** Le isole da disegnare come pallino. */
export const isole = paesiVisitati
  .filter((p) => p.punto)
  .map((p) => ({ nome: p.nome, lon: p.punto![0], lat: p.punto![1] }));
