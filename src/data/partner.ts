// Rete Xploring Kalabria: esperienze prenotabili tutto l'anno,
// gestite dai partner locali. Funzionano anche senza NorPeppe in loco.

export type Partner = {
  slug: string;
  nome: string;
  categoria: string;
  luogo: string;
  esperienza: string;
  descrizione: string;
  /** Link diretto del partner, se ce l'ha. Altrimenti si passa da WhatsApp. */
  url?: string;
};

export const partner: Partner[] = [
  {
    slug: 'cantine-capuano',
    nome: 'Cantine Capuano',
    categoria: 'Cantina',
    luogo: 'Calabria', // TODO CONFERMARE comune e provincia
    esperienza: 'Visita alla cantina e degustazione',
    descrizione:
      'Si scende tra le botti, si assaggiano i vini della casa e si mangia quello che ci sta intorno. Prenotabile in autonomia, tutto l\u2019anno.',
  },
];

// Categorie che stiamo cercando: serve a chi legge per capire se può entrare.
export const cercasi = [
  'Cantine e frantoi',
  'Guide e accompagnatori',
  'Agriturismi e cucine',
  'Case, borghi e B&B',
  'Rafting, kayak, cavalli',
  'Artigiani e botteghe',
];
