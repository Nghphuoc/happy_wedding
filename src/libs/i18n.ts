'use client';

import { useEffect, useState } from "react";
import { getTransByLang, supportedLangs, DEFAULT_LANG, type SupportedLang } from "@/libs/i18n-core";


function getLangFromClientCookies(): SupportedLang {
  if (typeof document === "undefined") return DEFAULT_LANG;

  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  const lang = match?.[1];

  return supportedLangs.includes(lang as SupportedLang) ? (lang as SupportedLang) : DEFAULT_LANG;
}


export function t(key: string): string {
  const lang = getLangFromClientCookies();
  return getTransByLang(lang, key);
}

/**
 * React Hook 
 */
export function useI18n() {
  const [lang, setLang] = useState<SupportedLang>(DEFAULT_LANG);

  useEffect(() => {
    const currentLang = getLangFromClientCookies();
    setLang(currentLang);
  }, []);

  const translate = (key: string) => getTransByLang(lang, key);

  return { lang, t: translate };
}
