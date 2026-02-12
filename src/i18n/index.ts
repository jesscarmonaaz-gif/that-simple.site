import es from "./es";
import pt from "./pt";
import en from "./en";

export type Locale = "es" | "pt" | "en";

export const locales: Locale[] = ["es", "pt", "en"];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  pt: "Português",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  es: "ES",
  pt: "PT",
  en: "EN",
};

const translations = { es, pt, en } as const;

export type Translations = typeof es;

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export default translations;
