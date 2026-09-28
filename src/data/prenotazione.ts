// Regole condivise dal form di prenotazione e dalla pagina d'esito.
// Stanno qui, e non nei componenti, perché le usano entrambi.

/** Lunghezze massime dei campi: le stesse nel form (maxlength) e nello script. */
export const LIMITI = {
  nome: 60,
  email: 120,
  telefono: 30,
  note: 2000,
} as const;

/** I motivi d'errore che la pagina d'esito sa raccontare. Tutto il resto è 'server'. */
export const MOTIVI = ['attivazione', 'rete', 'tempo', 'server'] as const;
export type Motivo = (typeof MOTIVI)[number];

/**
 * Toglie i caratteri di controllo (niente a capo nell'oggetto della mail),
 * compatta gli spazi e taglia alla lunghezza massima. Le note possono andare a capo.
 */
export function pulisci(valore: unknown, max: number, aCapo = false) {
  const testo = String(valore ?? '');
  const pulito = aCapo
    ? testo
        .replace(/\r\n?/g, '\n')
        .replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
    : testo.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ');
  return pulito.trim().slice(0, max);
}

/** Nomi e cognomi: in più niente parentesi angolari, così nessun tag arriva nella mail. */
export function pulisciNome(valore: unknown, max: number) {
  return pulisci(String(valore ?? '').replace(/[<>]/g, ''), max);
}

export function emailValida(email: string) {
  return /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i.test(email);
}

/** L'indirizzo della pagina d'esito. Lo slug passa per encodeURIComponent. */
export function urlEsito(stato: 'ok' | 'errore', slug: string, motivo?: string) {
  const q = new URLSearchParams({ stato, evento: slug });
  if (motivo) q.set('motivo', motivo);
  return `/prenotazione/esito/?${q}`;
}

/**
 * Legge la risposta di FormSubmit: null se è andata, altrimenti il motivo.
 * FormSubmit risponde { success: "true" } oppure { success: "false", message }.
 */
export function motivoDaRisposta(ok: boolean, json: { success?: unknown; message?: unknown }): Motivo | null {
  if (ok && String(json.success) === 'true') return null;
  if (/activat/i.test(String(json.message ?? ''))) return 'attivazione';
  return 'server';
}
