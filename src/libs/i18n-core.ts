import { cookies } from "next/headers";
import en from "@/messages/en.json";
import vi from "@/messages/vi.json";

// --- Constants ---
export const DEFAULT_LANG = "en" as const;
export const LANG_MAP = {
  en,
  vi,
};

export const supportedLangs = Object.keys(LANG_MAP) as (keyof typeof LANG_MAP)[];
export type SupportedLang = keyof typeof LANG_MAP;
export type Translations = typeof en;
export type TFunction = (key: string) => string;

// --- Deep Getter ---
export function deepGet<T extends object>(obj: T, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (typeof acc === "object" && acc !== null && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

// --- Get translation by lang and key (used anywhere) ---
export function getTransByLang(lang: string, key: string): string {
  const langObj = LANG_MAP[lang as SupportedLang] ?? LANG_MAP[DEFAULT_LANG];
  const result = deepGet(langObj, key);
  return typeof result === "string" ? result : key;
}

// --- Detect lang from cookie (server only) ---
export async function getLangFromCookies(): Promise<SupportedLang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value;
  return supportedLangs.includes(lang as SupportedLang) ? (lang as SupportedLang) : DEFAULT_LANG;
}

// --- Main function: getServerT for server-side translation ---
export async function getServerT(): Promise<{ t: TFunction; lang: SupportedLang }> {
  const lang = await getLangFromCookies();
  const translations: Translations = LANG_MAP[lang];

  const t: TFunction = (key: string) => {
    const result = deepGet(translations, key);
    return typeof result === "string" ? result : key;
  };

  return { t, lang };
}
