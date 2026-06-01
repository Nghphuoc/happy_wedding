"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { SupportedLang } from "@/libs/i18n-core";

interface LanguageSwitcherProps {
    currentLang: SupportedLang;
}

const LANGUAGES = [
    { code: "vi", label: "Tiếng Việt", short: "VI" },
    { code: "en", label: "English", short: "EN" },
];

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const switchLanguage = (newLang: string) => {
        if (newLang === currentLang) {
            setIsOpen(false);
            return;
        }
        // eslint-disable-next-line react-hooks/immutability
        document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
        router.refresh();
        setIsOpen(false);
    };

    const current =
        LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-[#52594a]/40 hover:shadow-sm transition-all duration-300 text-sm text-[#52594a] focus:outline-none"
            >
                <Globe className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                <span className="font-medium tracking-wide">
                    {current.short}
                </span>
                <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-1.5 z-50 origin-top-right animate-in fade-in zoom-in duration-200">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                                currentLang === lang.code
                                    ? "text-[#52594a] bg-[#fbf9f4] font-medium"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-[#52594a]"
                            }`}
                        >
                            {lang.label}

                            {currentLang === lang.code && (
                                <Check className="w-4 h-4" strokeWidth={2.5} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
