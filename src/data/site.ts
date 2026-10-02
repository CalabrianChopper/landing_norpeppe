// Dati trasversali del sito: brand, contatti, link esterni.
// Modifica qui e cambiano ovunque.

export const site = {
  brand: 'Xploring',
  claim: 'Il mondo è grande. La Calabria è casa.',
  persona: 'Giuseppe Lupis',
  email: 'xploringkalabria@gmail.com',
  luogo: 'Calabria, Italia',
  social: {
    instagram: 'https://www.instagram.com/xploringkalabria',
    facebook: 'https://www.facebook.com/share/1TfBtoMqwZ/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@giuseppe.lupis?_r=1&_t=ZG-98O4bUasj9k',
  },
  // TODO CONFERMARE: indirizzo ufficiale di Viaggi Wild (sito o profilo social).
  viaggiWild: {
    nome: 'Viaggi Wild',
    url: 'https://www.viaggiwild.com/',
  },
} as const;

// Coordinate del pin sulla Calabria (centro regione, zona Catanzaro).
export const CALABRIA = { lon: 16.5, lat: 38.9, label: 'Calabria' } as const;

/**
 * Link per scrivere una mail con l'oggetto già scritto.
 * I contatti passano solo da qui: niente WhatsApp, così arrivano richieste
 * scritte e specifiche.
 */
export const scriviMail = (oggetto: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(oggetto)}`;
