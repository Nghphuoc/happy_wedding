"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import InteractiveWeddingCard from "@/feature/InteractiveWedding/index"; 

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Invitation card", href: "#" }, // Menu sẽ mở Modal
    { name: "Blessings", href: "/blessings" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false); // State quản lý việc mở Modal Thiệp

    // Hàm xử lý khi click vào bất kỳ Link nào trên Navbar
    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        linkName: string,
    ) => {
        if (linkName === "Invitation card") {
            e.preventDefault(); // Chặn việc đổi URL
            setIsCardOpen(true); // Mở thiệp lên
        }
        setIsMenuOpen(false); // Bấm xong thì đóng luôn cái menu mobile nếu nó đang mở
    };

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

                    {/* 2. Desktop Left Links */}
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

                    {/* 3. LOGO */}
                    <div className="text-2xl md:text-3xl font-serif italic text-[#52594a] text-center shrink-0 px-8">
                        VINH & LINH
                    </div>

                    {/* 4. Desktop Right Links */}
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

                    {/* Spacer cho Mobile */}
                    <div className="md:hidden flex-1"></div>
                </nav>

                {/* 5. Mobile Dropdown Menu */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-[#fbf9f4] shadow-lg transition-all duration-300 ease-in-out border-t border-gray-200/50 ${
                        isMenuOpen
                            ? "max-h-[400px] opacity-100 py-6"
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
                onClose={() => setIsCardOpen(false)}
            />
        </>
    );
};

export default Navbar;
