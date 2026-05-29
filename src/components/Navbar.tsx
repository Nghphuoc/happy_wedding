"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import InteractiveWeddingCard from "@/feature/InteractiveWedding/index";
import { useSearchParams } from "next/navigation";
import { API_KEY } from "@/constants/constants";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Invitation card", href: "#" },
    { name: "Blessings", href: "/blessings" },
];

interface infoUserResult {
    status: string;
    data?: {
        NAME: string;
        QUANTITY_ATTENDING: string;
        NICK_NAME: string;
        STATUS: string;
        DATE: string;
        CODE: string;
        CHECK: string;
        NOTE: string;
    };
}

const Navbar = () => {
    const searchParams = useSearchParams();
    const codeFromUrl = searchParams.get("code");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [result, setResult] = useState<infoUserResult>({ status: "pending" });

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        linkName: string,
    ) => {
        if (linkName === "Invitation card") {
            e.preventDefault();
            setIsCardOpen(true);
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (codeFromUrl) {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `${API_KEY.GOOGLE_SCRIPT_URL}?code=${codeFromUrl}`,
                    );
                    const data = await response.json();
                    setResult(data);
                    setIsCardOpen(true);
                } catch (error) {
                    console.error("Lỗi fetch API:", error);
                }
            };

            fetchData();
        }
    }, [codeFromUrl]);

    return (
        <>
            <header className="w-full bg-[#fbf9f4] border-b border-gray-200/50 relative z-50">
                <nav className="flex justify-between items-center py-4 px-6 md:py-6 lg:px-20 w-full text-[#333]">
                    {/* 1. Mobile Menu Button */}
                    <div className="md:hidden flex items-center flex-1">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#52594a] focus:outline-none p-1 transition-transform"
                        >
                            {isMenuOpen ? (
                                <X size={28} strokeWidth={1.5} />
                            ) : (
                                <Menu size={28} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>

                    <div className="hidden md:flex flex-1 justify-start space-x-8 text-sm uppercase tracking-widest text-gray-600">
                        {navLinks.slice(0, 3).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.name)}
                                className="hover:text-[#52594a] transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="text-2xl md:text-3xl font-serif italic text-[#52594a] text-center shrink-0 px-8">
                        VINH & LINH
                    </div>

                    <div className="hidden md:flex flex-1 justify-end space-x-8 text-sm uppercase tracking-widest text-gray-600">
                        {navLinks.slice(3).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.name)}
                                className="hover:text-[#52594a] transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden flex-1"></div>
                </nav>

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
                                onClick={(e) => handleNavClick(e, link.name)}
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
                onClose={() => {
                    setIsCardOpen(false);
                }}
                name={result.data?.NAME}
            />
        </>
    );
};

export default Navbar;
