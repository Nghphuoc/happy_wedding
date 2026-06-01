"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import InteractiveWeddingCard from "@/feature/InteractiveWedding/index";
import { useSearchParams } from "next/navigation";
import LanguageSwitcher from "@/feature/LanguageSwicher";
import { useTranslation } from "@/contexts/TranslationContext";
import useGetInfo from "@/hooks/useGetInfo";

const Navbar = () => {
    const searchParams = useSearchParams();
    const codeFromUrl = searchParams.get("code");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const { lang } = useTranslation();
    const { t } = useTranslation();
    const { userInfo, fetchUserInfo } = useGetInfo(codeFromUrl || "");

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsCardOpen(true);
        setIsMenuOpen(false);
    };

    const navLinks = [
        {
            name: t("navigation.home"),
            href: "#home",
            action: () => setIsMenuOpen(false),
        },
        {
            name: t("navigation.Story"),
            href: "#story",
            action: () => setIsMenuOpen(false),
        },
        {
            name: t("navigation.Gallery"),
            href: "#gallery",
            action: () => setIsMenuOpen(false),
        },
        {
            name: t("navigation.Events"),
            href: "#events",
            action: () => setIsMenuOpen(false),
        },
        {
            name: t("navigation.Invitation card"),
            href: "#",
            action: (e: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavClick(e),
        },
        {
            name: t("navigation.Blessings"),
            href: "/blessings",
            action: () => setIsMenuOpen(false),
        },
    ];

    useEffect(() => {
        if (codeFromUrl) {
            fetchUserInfo();
        }
    }, [codeFromUrl]);

    return (
        <>
            <header className="w-full bg-[#fbf9f4] border-b border-gray-200/50 relative z-50">
                <nav className="flex justify-between items-center py-4 px-6 md:py-6 lg:px-20 w-full text-[#333]">
                    {/* --- CỤM TRÁI: Nút Menu (Mobile) & 3 Links đầu (Desktop) --- */}
                    <div className="flex-1 flex justify-start items-center">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-[#52594a] focus:outline-none p-1 transition-transform"
                        >
                            {isMenuOpen ? (
                                <X size={28} strokeWidth={1.5} />
                            ) : (
                                <Menu size={28} strokeWidth={1.5} />
                            )}
                        </button>

                        {/* Desktop Links (Left) */}
                        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-600">
                            {navLinks.slice(0, 3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={link.action}
                                    className="hover:text-[#52594a] transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* --- CỤM GIỮA: Logo --- */}
                    <div className="text-2xl md:text-3xl font-serif italic text-[#52594a] text-center shrink-0 px-4 md:px-8">
                        VINH & LINH
                    </div>

                    {/* --- CỤM PHẢI: 3 Links sau (Desktop) & Language Switcher --- */}
                    <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
                        {/* Desktop Links (Right) */}
                        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-600">
                            {navLinks.slice(3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={link.action}
                                    className="hover:text-[#52594a] transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Language Switcher (Hiển thị trên cả Mobile và Desktop ở góc phải) */}
                        <LanguageSwitcher currentLang={lang} />
                    </div>
                </nav>

                {/* --- MENU DROPDOWN CHO MOBILE --- */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-[#fbf9f4] shadow-lg transition-all duration-300 ease-in-out border-t border-gray-200/50 ${
                        isMenuOpen
                            ? "max-h-100 opacity-100 py-6"
                            : "max-h-0 opacity-0 overflow-hidden py-0"
                    }`}
                >
                    <div className="flex flex-col items-center space-y-6 text-sm uppercase tracking-widest text-gray-600">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={link.action}
                                className="hover:text-[#52594a] transition-colors w-full text-center cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            {/* NHÚNG MODAL THIỆP CƯỚI VÀO ĐÂY */}
            <InteractiveWeddingCard
                isOpen={isCardOpen}
                onClose={() => setIsCardOpen(false)}
                name={userInfo?.data?.NAME}
            />
        </>
    );
};

export default Navbar;
