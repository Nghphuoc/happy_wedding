import type { Metadata } from "next";
import { headers } from "next/headers";
import mainHero from "@/assets/mainHero.jpg";
import { WEDDING } from "@/feature/InteractiveWedding/wedding.config";
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

export async function generateMetadata(): Promise<Metadata> {
    const requestHeaders = await headers();
    const host = requestHeaders.get("host") ?? "localhost:3000";
    const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1")
        ? "http" : "https";
    const metadataBase = new URL(process.env.SITE_URL || `${protocol}://${host}`);
    const title = "Thiệp cưới Quang Vinh & Diễm Linh";
    const description = `Trân trọng kính mời bạn chung vui trong ngày cưới của ${WEDDING.groomName} & ${WEDDING.brideName}, ngày 03–04/10/2026 tại An Giang.`;
    const images = [{
        url: new URL(mainHero.src, metadataBase).toString(),
        width: mainHero.width,
        height: mainHero.height,
        alt: title,
    }];
    return {
        metadataBase,
        title,
        description,
        openGraph: {
            type: "website",
            url: metadataBase,
            locale: "vi_VN",
            siteName: "Quang Vinh & Diễm Linh",
            title,
            description,
            images,
        },
        twitter: { card: "summary_large_image", title, description, images },
    };
}

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
