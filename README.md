# El Trader Inteligente — website

Marketing site (Layer 1). The courses, logins, and billing live on a separate
platform (Layer 2) and are linked to from here.

Spanish is the primary language and lives at the root (`/cursos`).
English is secondary and lives under a prefix (`/en/courses`).

## Commands

Run these from this folder in a terminal.

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Starts the local preview at `localhost:4321` |
| `npm run build` | Builds the real site into `./dist/` |
| `npm run preview` | Views the built site exactly as visitors will see it |
| `npx astro check` | Checks for mistakes without building |

## How to add a new page in both languages

Three steps. The important idea: **every page has an identity that exists in both
languages**, and the route map is what pairs them up. Get that right and the
language switcher, the sitemap, and the Google hreflang tags all follow for free.

### 1. Add the page identity to the route map

In `src/i18n/routes.ts`, add one line to `ROUTES`:

```ts
webinars: { es: '/webinars', en: '/en/webinars' },
```

The key on the left (`webinars`) is the identity. The two paths are the real URLs.
They do not have to be translations of each other — `/sobre-mi` pairs with
`/en/about`.

### 2. Add the words to both translation files

Never type visible text directly into a page. Put it in `src/i18n/es.json` and
`src/i18n/en.json` under matching keys:

```jsonc
// es.json                    // en.json
"nav": { "webinars": "Webinars" }   "nav": { "webinars": "Webinars" }
```

If you add a key to `es.json` and forget it in `en.json`, `npx astro check`
reports an error instead of the site quietly showing Spanish to English readers.

### 3. Create the two page files

`src/pages/webinars.astro` (Spanish):

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { useTranslations, alternatesForRoute } from '../i18n/utils';

const t = useTranslations('es');
---

<BaseLayout title={t('nav.webinars')} alternates={alternatesForRoute('webinars')}>
  <h1>{t('nav.webinars')}</h1>
</BaseLayout>
```

`src/pages/en/webinars.astro` (English) is identical except for three things:
`'en'` instead of `'es'`, and `../../` instead of `../` on both imports.

That's it. The page now has the correct `lang` attribute, correct hreflang tags,
a working language switcher, and an entry in the sitemap.

> The `alternates` property is deliberately required. A page cannot be built
> without declaring its counterpart URL, so it is not possible to ship a page
> with missing or wrong hreflang tags.

## How the folders are organised

```text
src/
├── config/site.ts        Domain, business name, course platform URL
├── i18n/
│   ├── routes.ts         Every URL on the site, paired by language
│   ├── es.json           All Spanish text
│   ├── en.json           All English text
│   └── utils.ts          Translation lookup, date and currency formatting
├── layouts/BaseLayout.astro   Wraps every page: head tags, header, footer
├── components/           Reusable pieces (header, footer, switcher)
├── content/              Blog posts, courses, and reviews as Markdown
└── pages/                One file per URL. Files under en/ are the English site.
```

## Content

Blog posts, course pages, and reviews are Markdown files under `src/content/`.
Their required fields are defined in `src/content.config.ts` — if a required
field is missing, the build fails rather than publishing a broken page.

Reviews do **not** publish just because the file exists. Each one needs
`approved: true` set by hand, plus a recorded `consentToPublish`, and any
compensation must be declared with `compensated: true`.
