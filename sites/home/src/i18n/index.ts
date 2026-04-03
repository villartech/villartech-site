import { pt } from './pt';
import { en } from './en';

const translations = { 'pt-br': pt, en } as const;

export type Lang = keyof typeof translations;

export function getLang(url: URL): Lang {
  const firstSegment = url.pathname.split('/').filter(Boolean)[0];
  if (firstSegment === 'en') return 'en';
  return 'pt-br';
}

export function t(lang: Lang) {
  return translations[lang];
}

export function getAlternateUrl(lang: Lang, site: string): string {
  if (lang === 'pt-br') return `${site}/en/`;
  return `${site}/`;
}
