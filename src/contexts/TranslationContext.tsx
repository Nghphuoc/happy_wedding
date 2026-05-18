"use client";

import { createContext, useContext } from "react";
import { type SupportedLang, type Translations } from "@/libs/i18n-core";

// Interface context
type TranslationContextType = {
  lang: SupportedLang;
  t: (key: string, options?: { [key: string]: string | number }) => string;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

function deepGet(obj: unknown, path: string): string | undefined {
  return path.split(".").reduce((acc, part) => {
    if (typeof acc === "object" && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj) as string | undefined;
}

// Provider
export function TranslationProvider({
  lang,
  translations,
  children,
}: {
  lang: SupportedLang;
  translations: Translations;
  children: React.ReactNode;
}) {
  const t = (key: string, options?: { [key: string]: string | number }): string => {
    const result = deepGet(translations, key);
    let message = typeof result === "string" ? result : key;
    if (options) {
      for (const optionKey in options) {
        const placeholder = `{{${optionKey}}}`;
        message = message.replace(new RegExp(placeholder, 'g'), String(options[optionKey]));
        }
      }
    return message;
  };

  return (
    <TranslationContext.Provider value={{ lang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Hook
export function useTranslation(): TranslationContextType {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
