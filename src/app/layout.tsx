import "@/styles/globals.css";
import {
    getLangFromCookies,
    LANG_MAP,
    DEFAULT_LANG,
    SupportedLang,
    Translations,
} from "@/libs/i18n-core";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { ThemeProvider } from "@/libs/ThemeProvider";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const lang: SupportedLang = await getLangFromCookies();
    const translations = (LANG_MAP[lang] ??
        LANG_MAP[DEFAULT_LANG]) as Translations;
    return (
        <html lang={lang} suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="bg-background text-foreground">
                        <TranslationProvider
                            lang={lang}
                            translations={translations}
                        >
                            {children}
                        </TranslationProvider>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
