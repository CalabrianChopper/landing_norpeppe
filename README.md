# Xploring

Sito di Giuseppe Lupis (brand Xploring / Xploring Kalabria). Due attività, due percorsi:

- **Viaggi di gruppo nel mondo** → `/viaggi`
- **Xploring Kalabria** (eventi e partner locali) → `/kalabria`

Astro, statico, senza framework client. Il colore fa da segnaletica: il polo
"mondo" è verde acqua, il polo "Kalabria" è arancio. Ogni sezione dichiara il
suo polo con `class="pole-mondo"` o `class="pole-kalabria"` e tutto quello che
sta dentro (bottoni, bordi, occhielli) si tinge da solo.

## Dove si cambiano i contenuti

Tutto quello che si aggiorna spesso sta in `src/data/`. Non serve toccare i
componenti.

| File | Cosa contiene |
| :--- | :--- |
| `src/data/site.ts` | Nome, email, telefono, social, link a Viaggi Wild |
| `src/data/eventi.ts` | Calendario Xploring Kalabria: prossimi e già fatti |
| `src/data/paesi.ts` | Paesi accesi sul mappamondo (codice ISO a 3 cifre) |
| `src/data/partner.ts` | Rete di partner locali e categorie cercate |
| `src/data/viaggi.ts` | Testi dei viaggi: il "perché con me" e i passaggi per prenotare |

Cerca `TODO CONFERMARE` per trovare i punti ancora da verificare con Giuseppe.

### Aggiungere un evento

Apri `src/data/eventi.ts` e aggiungi un oggetto all'array `eventi`:

```ts
{
  slug: 'nome-univoco',
  titolo: 'Escursione a ...',
  luogo: 'Comune (SIGLA)',
  data: '2026-09-14',      // togli questa riga se la data non è fissata
  periodo: 'Data in definizione', // usato solo se manca `data`
  durata: 'Mezza giornata',
  tag: ['Trekking'],
  sintesi: 'Due righe su cosa si fa.',
  stato: 'prossimo',        // 'prossimo' oppure 'passato'
  immagine: '/images/mia-foto.jpg', // opzionale
}
```

Se `immagine` manca, la card mostra una piastra col monogramma X al posto della
foto. **Meglio nessuna foto che una foto di un altro posto.**

### Aggiungere un paese al mappamondo

In `src/data/paesi.ts`, una riga per paese. `id` è il codice ISO 3166-1
numerico a **tre cifre, zeri compresi** (Austria = `'040'`, Australia = `'036'`).
Contatore, continenti e colori si aggiornano da soli.

## Immagini

Le foto in `public/images/` sono già ottimizzate (max 2000px, JPEG progressivo).
Gli originali a piena risoluzione stanno in `src/immagini-originali/` e non
vengono pubblicati.

Quando aggiungi una foto nuova, ridimensionala prima: sopra i 300 KB per
immagine il sito inizia a pesare.

## Comandi

| Comando | Cosa fa |
| :--- | :--- |
| `npm install` | Installa le dipendenze |
| `npm run dev` | Server locale su `localhost:4321` |
| `npm run build` | Compila il sito statico in `./dist/` |
| `npm run preview` | Anteprima del build |

## Il mappamondo

`src/components/Globo.astro`. Canvas 2D con proiezione ortografica di
[d3-geo](https://github.com/d3/d3-geo); i confini arrivano da
`public/data/countries-110m.json` (Natural Earth via `world-atlas`).

Si carica solo quando la sezione entra nello schermo, così l'apertura della home
resta leggera.

**Sta fermo di default.** Si muove solo quando lo muovi tu: trascinamento col
mouse, trascinamento col dito, o frecce da tastiera. Passandoci sopra col
cursore il globo non ruota: si illumina solo il paese sotto al puntatore, col
nome. Il ciclo di disegno si ferma da solo appena il globo è a riposo, quindi a
schermo fermo non consuma niente (l'anello che pulsa sul pin è un'animazione
CSS, non canvas).

Il pin arancione sulla Calabria è un link vero a `/kalabria`, posizionato sopra
al puntino disegnato.

Il bottone **Portami in Calabria** fa tre cose di fila: ruota il globo fino a
centrare la Calabria (1s), ci si tuffa dentro con uno zoom accelerato mentre un
velo arancione copre la pagina (0,95s), e poi apre `/kalabria`. Con
`prefers-reduced-motion` salta l'animazione e va dritto alla pagina.
