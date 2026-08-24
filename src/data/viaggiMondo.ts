// Calendario dei viaggi di gruppo nel mondo.
// Stessa forma degli eventi calabresi (`Evento`), così le card sono le stesse.
// Per aggiungere un viaggio basta inserire un oggetto in questo array.
//
// ⚠️ DATI DA CONFERMARE CON GIUSEPPE ⚠️
// Le voci qui sotto sono una traccia: mete, date, durate e testi vanno
// sostituiti con i viaggi veri in programma e con quelli già fatti.

import type { Evento } from './eventi';

export const viaggiMondo: Evento[] = [
  // ─── PROSSIMI ────────────────────────────────────────────────────────────
  {
    slug: 'norvegia-lofoten',
    titolo: 'Lofoten, tra fiordi e aurora',
    luogo: 'Norvegia',
    periodo: 'Data in definizione',
    durata: '8 giorni',
    tag: ['Trekking', 'Aurora', 'Nord'],
    sintesi:
      'Le isole dove le montagne escono dritte dal mare. Si cammina di giorno, la notte si aspetta il cielo. Gruppo piccolo, casa in affitto tra i pescatori.',
    stato: 'prossimo',
  },
  {
    slug: 'islanda-highlands',
    titolo: 'Islanda, gli altipiani a piedi',
    luogo: 'Islanda',
    periodo: 'Data in definizione',
    durata: '10 giorni',
    tag: ['Trekking', 'Campo', 'Terme'],
    sintesi:
      'Dentro l’isola, dove la strada finisce: vulcani, fiumi da guadare, sorgenti calde in mezzo al nulla. Si dorme in tenda e nei rifugi.',
    stato: 'prossimo',
  },
  {
    slug: 'marocco-atlante',
    titolo: 'Marocco, dall’Atlante al deserto',
    luogo: 'Marocco',
    periodo: 'Data in definizione',
    durata: '9 giorni',
    tag: ['Trekking', 'Deserto', 'Persone'],
    sintesi:
      'Villaggi berberi, una notte sotto le dune, il tè offerto da chi conosco da anni. Il viaggio dove si entra nelle case, non nei riad.',
    stato: 'prossimo',
  },

  // ─── PASSATI ─────────────────────────────────────────────────────────────
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

export const prossimiMondo = viaggiMondo.filter((e) => e.stato === 'prossimo');
export const passatiMondo = viaggiMondo.filter((e) => e.stato === 'passato');
