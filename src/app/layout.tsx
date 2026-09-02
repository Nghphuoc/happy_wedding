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
import Providers from "@/providers/Provider";
import Navbar from "@/components/Navbar";
import AnimatedTabTitle from "@/components/AnimatedTabTitle";
import { UserProvider } from "@/providers/UserProvider";

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
            <body className="bg-background text-foreground w-full min-h-screen">
                <AnimatedTabTitle />
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="bg-background text-foreground w-full min-h-screen">
                            <TranslationProvider
                                lang={lang}
                                translations={translations}
                            >
                                <UserProvider>
                                    <Navbar />
                                    {children}
                                </UserProvider>
                            </TranslationProvider>
                        </div>
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
