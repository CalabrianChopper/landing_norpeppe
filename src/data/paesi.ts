// ⚠️ LISTA DA CONFERMARE ⚠️
// Questi sono i paesi che il mappamondo colora come "già visitati".
// Il codice è l'ISO 3166-1 numerico a 3 cifre (quello usato da Natural Earth).
// Per aggiungere o togliere un paese basta aggiungere/rimuovere una riga:
// il contatore, i continenti e il globo si aggiornano da soli.

export type Paese = {
  /** ISO 3166-1 numerico, 3 cifre con gli zeri davanti. */
  id: string;
  nome: string;
  continente: 'Europa' | 'Africa' | 'Asia' | 'Americhe' | 'Oceania';
};

export const paesiVisitati: Paese[] = [
  // Europa
  { id: '380', nome: 'Italia', continente: 'Europa' },
  { id: '578', nome: 'Norvegia', continente: 'Europa' },
  { id: '752', nome: 'Svezia', continente: 'Europa' },
  { id: '246', nome: 'Finlandia', continente: 'Europa' },
  { id: '352', nome: 'Islanda', continente: 'Europa' },
  { id: '208', nome: 'Danimarca', continente: 'Europa' },
  { id: '826', nome: 'Regno Unito', continente: 'Europa' },
  { id: '372', nome: 'Irlanda', continente: 'Europa' },
  { id: '250', nome: 'Francia', continente: 'Europa' },
  { id: '724', nome: 'Spagna', continente: 'Europa' },
  { id: '620', nome: 'Portogallo', continente: 'Europa' },
  { id: '528', nome: 'Paesi Bassi', continente: 'Europa' },
  { id: '276', nome: 'Germania', continente: 'Europa' },
  { id: '040', nome: 'Austria', continente: 'Europa' },
  { id: '756', nome: 'Svizzera', continente: 'Europa' },
  { id: '300', nome: 'Grecia', continente: 'Europa' },
  { id: '008', nome: 'Albania', continente: 'Europa' },

  // Africa
  { id: '504', nome: 'Marocco', continente: 'Africa' },
  { id: '788', nome: 'Tunisia', continente: 'Africa' },
  { id: '818', nome: 'Egitto', continente: 'Africa' },
  { id: '834', nome: 'Tanzania', continente: 'Africa' },

  // Asia
  { id: '792', nome: 'Turchia', continente: 'Asia' },
  { id: '400', nome: 'Giordania', continente: 'Asia' },
  { id: '524', nome: 'Nepal', continente: 'Asia' },
  { id: '356', nome: 'India', continente: 'Asia' },
  { id: '764', nome: 'Thailandia', continente: 'Asia' },
  { id: '360', nome: 'Indonesia', continente: 'Asia' },

  // Americhe
  { id: '840', nome: 'Stati Uniti', continente: 'Americhe' },
  { id: '484', nome: 'Messico', continente: 'Americhe' },
  { id: '192', nome: 'Cuba', continente: 'Americhe' },
  { id: '604', nome: 'Perù', continente: 'Americhe' },

  // Oceania
  { id: '036', nome: 'Australia', continente: 'Oceania' },
];

export const totalePaesi = paesiVisitati.length;

export const continenti = [...new Set(paesiVisitati.map((p) => p.continente))];

/** Mappa id → nome italiano, per le etichette del globo. */
export const nomiPerId: Record<string, string> = Object.fromEntries(
  paesiVisitati.map((p) => [p.id, p.nome])
);
