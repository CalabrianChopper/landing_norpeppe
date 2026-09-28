// Dati trasversali del sito: brand, contatti, link esterni.
// Modifica qui e cambiano ovunque.

export const site = {
  brand: 'Xploring',
  brandSub: 'con NorPeppe',
  claim: 'Il mondo è grande. La Calabria è casa.',
  persona: 'Giuseppe Lupis',
  email: 'giuseppelupis1997@gmail.com',
  /** Dove arrivano le prenotazioni delle uscite in Calabria (via FormSubmit). */
  emailPrenotazioni: 'xploringkalabria@gmail.com',
  /**
   * L'indirizzo a cui il form spedisce, su formsubmit.co.
   * TODO SICUREZZA: dopo l'attivazione FormSubmit manda una stringa casuale
   * (es. 'a1b2c3d4e5...'): mettila qui al posto della mail, così l'indirizzo
   * vero non compare nel codice della pagina e non lo raccolgono gli spammer.
   */
  formsubmitId: 'xploringkalabria@gmail.com',
  telefono: '+39 320 417 0356',
  telefonoRaw: '393204170356',
  luogo: 'Calabria, Italia',
  social: {
    instagram:
      'https://www.instagram.com/norpeppe?igsh=MTIxeTY3YjJ2dWZmaQ%3D%3D&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1TfBtoMqwZ/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@giuseppe.lupis?_r=1&_t=ZG-98O4bUasj9k',
    whatsapp: 'https://wa.me/+393204170356',
  },
  // TODO CONFERMARE: indirizzo ufficiale di Viaggi Wild (sito o profilo social).
  viaggiWild: {
    nome: 'Viaggi Wild',
    url: 'https://www.viaggiwild.com/',
  },
} as const;

// Coordinate del pin sulla Calabria (centro regione, zona Catanzaro).
export const CALABRIA = { lon: 16.5, lat: 38.9, label: 'Calabria' } as const;
