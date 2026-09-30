// Dati trasversali del sito: brand, contatti, link esterni.
// Modifica qui e cambiano ovunque.

export const site = {
  brand: 'Xploring',
  claim: 'Il mondo è grande. La Calabria è casa.',
  persona: 'Giuseppe Lupis',
  email: 'xploringkalabria@gmail.com',
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
