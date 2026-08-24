// Testi dei viaggi di gruppo nel mondo.
// I numeri qui sotto sono i soli punti da tarare: cambiali e cambia il sito.

export const formato = {
  // TODO CONFERMARE: dimensione reale dei gruppi.
  gruppo: '8–14 persone',
  // TODO CONFERMARE: quante partenze all'anno.
  partenzeAnno: '4 partenze l’anno',
};

/** Il "plus" di partire con NorPeppe invece che con un catalogo. */
export const perche = [
  {
    chiave: 'Il gruppo',
    titolo: 'Siamo pochi, e ci si conosce',
    testo: `Gruppi da ${formato.gruppo}. Il numero giusto per entrare in una casa, sedersi a un tavolo solo, prendere una barca piccola. Sopra questa soglia si diventa una comitiva e i posti si chiudono.`,
  },
  {
    chiave: 'L’itinerario',
    titolo: 'Non è un giro che puoi comprare altrove',
    testo:
      'Gli itinerari nascono dai posti dove sono già stato e dalle persone che ci ho conosciuto. Si dorme dove dormono loro, si mangia dove mangiano loro, si passa dalle porte che di solito restano chiuse.',
  },
  {
    chiave: 'L’organizzazione',
    titolo: 'Tu pensi a partire, al resto penso io',
    testo:
      'Voli, spostamenti, permessi, guide locali, imprevisti. Arrivi in aeroporto con lo zaino e basta: da lì in poi la testa la puoi spegnere.',
  },
  {
    chiave: 'Il racconto',
    titolo: 'Torni a casa con il viaggio in mano',
    testo:
      'Racconto per mestiere. Durante il viaggio giro e fotografo, e alla fine il materiale è anche tuo: non solo il ricordo, ma le immagini per raccontarlo a chi non c’era.',
  },
];

/** Come si entra in un viaggio: qui l'ordine conta davvero. */
export const comeFunziona = [
  {
    titolo: 'Scrivi',
    testo: 'Un messaggio su WhatsApp o una mail. Mi dici cosa ti attira e quando puoi muoverti.',
  },
  {
    titolo: 'Ci sentiamo',
    testo: 'Una chiamata, senza impegno. Ti racconto il viaggio per intero: costi, ritmo, difficoltà, cosa non c’è.',
  },
  {
    titolo: 'Prenoti',
    testo: 'Acconto e posto bloccato. Ti arriva la lista di cosa serve e il gruppo con cui partirai.',
  },
  {
    titolo: 'Si parte',
    testo: 'Ci si trova in aeroporto. Da lì in poi si va.',
  },
];
