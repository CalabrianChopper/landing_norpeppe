// Sitemap generata dai dati: home, /kalabria/, /mondo/ e una pagina per ogni uscita in
// Calabria che ha il suo `dettaglio`. Aggiungi un evento e compare da sola.
import type { APIRoute } from 'astro';
import { seo } from '../data/seo';
import { conPagina } from '../data/eventi';
import { mondoConPagina } from '../data/viaggiMondo';
import { urlEvento } from '../data/eventi';

const base = seo.url.replace(/\/$/, '');
const oggi = new Date().toISOString().slice(0, 10);

const immaginiHome = [
  ['/images/hero-aurora.jpg', 'Xploring: viaggi di gruppo nel mondo e viaggi in Calabria'],
];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = () => {
  const pagine = [
    `  <url>
    <loc>${base}/</loc>
    <lastmod>${oggi}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${immaginiHome
  .map(
    ([src, titolo]) => `    <image:image>
      <image:loc>${base}${src}</image:loc>
      <image:title>${esc(titolo)}</image:title>
    </image:image>`
  )
  .join('\n')}
  </url>`,
    ...[
      ['/kalabria/', '/images/kalabria-gruppo.jpg', 'Trekking ed escursioni in Calabria con Xploring Kalabria'],
      ['/mondo/', '/images/from-calabria.jpg', 'Viaggi di gruppo organizzati nel mondo con Xploring'],
    ].map(
      ([pagina, src, titolo]) => `  <url>
    <loc>${base}${pagina}</loc>
    <lastmod>${oggi}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${base}${src}</image:loc>
      <image:title>${esc(titolo)}</image:title>
    </image:image>
  </url>`
    ),
    ...[...conPagina, ...mondoConPagina].map(
      (e) => `  <url>
    <loc>${base}${urlEvento(e)}</loc>
    <lastmod>${oggi}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${
      e.immagine
        ? `
    <image:image>
      <image:loc>${base}${e.immagine}</image:loc>
      <image:title>${esc(e.titolo)}</image:title>
    </image:image>`
        : ''
    }
  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pagine.join('\n')}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
