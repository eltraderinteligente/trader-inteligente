/**
 * One-off generator for the simple content pages (title + intro, no custom
 * layout). Each page is identical apart from its route key and translation
 * prefix, so generating them keeps the pattern uniform. Safe to re-run:
 * it refuses to overwrite a file that already exists.
 */
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const PAGES = [
  { es: 'mentoria', en: 'mentoring', route: 'mentoring', key: 'mentoring' },
  { es: 'gratis', en: 'free', route: 'free', key: 'free' },
  { es: 'guias', en: 'guides', route: 'guides', key: 'guides' },
  { es: 'herramientas', en: 'tools', route: 'tools', key: 'tools' },
  { es: 'sobre-mi', en: 'about', route: 'about', key: 'about' },
  { es: 'contacto', en: 'contact', route: 'contact', key: 'contact' },
  { es: 'gracias', en: 'thank-you', route: 'thankYou', key: 'thankYou', noindex: true },
  { es: 'aviso-de-riesgo', en: 'risk-disclosure', route: 'riskDisclosure', key: 'legalPages.riskDisclosure' },
  { es: 'terminos', en: 'terms', route: 'terms', key: 'legalPages.terms' },
  { es: 'privacidad', en: 'privacy', route: 'privacy', key: 'legalPages.privacy' },
  { es: 'cookies', en: 'cookies', route: 'cookies', key: 'legalPages.cookies' },
];

const template = ({ locale, route, key, noindex }) => {
  const up = locale === 'es' ? '..' : '../..';
  return `---
import PageLayout from '${up}/layouts/PageLayout.astro';
import { useTranslations, alternatesForRoute } from '${up}/i18n/utils';

const t = useTranslations('${locale}');
---

<PageLayout
  title={t('${key}.title')}
  intro={t('${key}.intro')}
  alternates={alternatesForRoute('${route}')}${noindex ? '\n  noindex' : ''}
/>
`;
};

const root = new URL('../src/pages/', import.meta.url).pathname;
let written = 0;
let skipped = 0;

for (const page of PAGES) {
  for (const locale of ['es', 'en']) {
    const file = join(
      root,
      locale === 'es' ? `${page.es}.astro` : `en/${page.en}.astro`,
    );
    if (existsSync(file)) {
      console.log(`skip   ${file.replace(root, '')}`);
      skipped++;
      continue;
    }
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, template({ locale, ...page }));
    console.log(`create ${file.replace(root, '')}`);
    written++;
  }
}

console.log(`\n${written} created, ${skipped} skipped`);
