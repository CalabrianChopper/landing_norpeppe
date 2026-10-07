// Dati per Privacy Policy e Cookie Policy (/privacy/ e /cookie/).
// ⚠️ Manca solo `hosting`: va scritto appena si sceglie dove pubblicare il sito.
// Se un campo resta vuoto, la pagina semplicemente non lo mostra.
import { site } from './site';

export const legale = {
  /** Nome del titolare del trattamento: ragione sociale, associazione o nome e cognome. */
  titolare: 'XPLORING KALABRIA',
  /** Indirizzo (sede legale o residenza del titolare). */
  indirizzo: 'Catanzaro (CZ), 88100, Calabria',
  /** Partita IVA o codice fiscale, se c'è. */
  piva: '04073850796',
  email: site.email,
  /** Chi ospita il sito, es. 'Aruba S.p.A.' o 'Netlify, Inc.'. */
  hosting: '', // TODO
  aggiornamento: '7 ottobre 2026',
};
