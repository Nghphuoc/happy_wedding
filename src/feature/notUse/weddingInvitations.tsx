"use client";

import { useState, useEffect, useCallback } from "react";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import stuccoBg from "@/assets/stucod.png";
import {
    Clock,
    Shirt,
    QrCode,
    MousePointerClick,
    ArrowRight,
    ArrowDown,
    RotateCcw,
} from "lucide-react";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function InteractiveWeddingCard({
    isOpen,
    onClose,
}: ModalProps) {
    const [step, setStep] = useState(0);

    // Reset về cover mỗi lần mở lại
    useEffect(() => {
        if (!isOpen) return;
        const frame = window.requestAnimationFrame(() => setStep(0));
        return () => window.cancelAnimationFrame(frame);
    }, [isOpen]);

    // Đóng khi bấm Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    // Khoá scroll body khi modal mở
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleNextStep = useCallback(() => {
        setStep((s) => (s >= 2 ? 0 : s + 1));
    }, []);

    if (!isOpen) return null;

    return (
        /* ── OVERLAY ── */
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 backdrop-blur-sm p-3 sm:p-4 md:p-6 overflow-y-auto"
            onClick={onClose}
        >
            {/*
             * CARD WRAPPER
             * - step 0  → nhỏ gọn (bìa)
             * - step 1  → nửa trái mở ra
             * - step 2  → cả hai nửa mở ra
             */}
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    handleNextStep();
                }}
                className={[
                    "relative my-auto cursor-pointer select-none",
                    "bg-[#580d1c] rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
                    "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    step === 0
                        ? "w-full max-w-[340px] sm:max-w-[420px]"
                        : step === 1
                          ? "w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px]"
                          : "w-full max-w-[95vw] sm:max-w-[680px] md:max-w-[900px] lg:max-w-[980px]",
                ].join(" ")}
            >
                {/* Texture chung bìa đỏ */}
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none rounded-md z-10"
                    style={{ backgroundImage: `url(${stuccoBg.src})` }}
                />

                {/* ═══════════════════════════════
                    STEP 0 — BÌA NGOÀI
                ═══════════════════════════════ */}
                <div
                    className={[
                        "absolute inset-0 z-50 bg-[#4d0917] rounded-md",
                        "flex flex-col items-center justify-center",
                        "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        step === 0
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 scale-[1.04] pointer-events-none",
                    ].join(" ")}
                >
                    {/* Texture bìa */}
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none rounded-md"
                        style={{ backgroundImage: `url(${stuccoBg.src})` }}
                    />

                    <span className="relative z-10 text-[clamp(3.5rem,10vw,5rem)] font-serif text-[#dca54c] mb-4 drop-shadow-md leading-none">
                        囍
                    </span>

                    <h2
                        className={`relative z-10 text-[clamp(1.8rem,6vw,2.5rem)] text-[#dca54c] mb-2 ${greatVibes.className}`}
                    >
                        Sincere Invitation
                    </h2>

                    <div className="relative z-10 w-10 h-px bg-[#dca54c] my-3 opacity-50" />

                    <h3
                        className={`relative z-10 text-[clamp(1rem,3.5vw,1.4rem)] text-[#dca54c] tracking-wider mb-1 ${playfair.className}`}
                    >
                        Quang Vinh{" "}
                        <span className="italic text-[#dca54c]">&</span> Diem
                        Linh
                    </h3>

                    <p
                        className={`relative z-10 text-[clamp(0.75rem,2.5vw,1rem)] uppercase tracking-[0.3em] text-[#dca54c]/70 mt-2 ${playfair.className}`}
                    >
                        25 . 10 . 2026
                    </p>

                    {/* Hint chạm */}
                    <div className="absolute z-10 bottom-6 w-full flex flex-col items-center gap-1.5 text-[#dca54c] animate-pulse">
                        <MousePointerClick size={20} />
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">
                            Chạm để mở thiệp
                        </span>
                    </div>
                </div>

                {/* ═══════════════════════════════
                    STEP 1 & 2 — RUỘT THIỆP
                ═══════════════════════════════ */}
                <div
                    className={[
                        "p-2.5 sm:p-3.5 md:p-4",
                        "transition-opacity duration-700",
                        step === 0 ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                >
                    <div className="flex flex-col md:flex-row w-full bg-[#fdfbf7] shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] relative overflow-hidden rounded-sm">
                        {/* ── NỬA TRÁI: THÔNG TIN CHÍNH ── */}
                        <div className="w-full md:w-[420px] lg:w-[460px] flex-shrink-0 flex flex-col items-center justify-center px-5 sm:px-8 py-10 sm:py-12 text-center relative z-10">
                            <h3
                                className={`text-[clamp(2rem,7vw,2.8rem)] text-[#dca54c] mb-5 ${greatVibes.className}`}
                            >
                                Invitation
                            </h3>

                            <div
                                className={`text-[#5a101d] flex flex-col gap-2 w-full ${playfair.className}`}
                            >
                                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8c7462]">
                                    Trân trọng kính mời
                                </p>
                                <p className="text-sm sm:text-base font-medium border-b border-dashed border-[#5a101d]/30 pb-1 w-3/4 mx-auto mb-1">
                                    Khách quý
                                </p>
                                <p className="text-[11px] sm:text-xs mb-1">
                                    Đến dự buổi tiệc chung vui cùng gia đình
                                    chúng tôi
                                </p>

                                <h4 className="text-[clamp(1.4rem,5vw,2rem)] font-bold mt-2 text-[#721527]">
                                    Quang Vinh
                                </h4>
                                <span className="text-sm italic text-[#dca54c]">
                                    &
                                </span>
                                <h4 className="text-[clamp(1.4rem,5vw,2rem)] font-bold text-[#721527] mb-1">
                                    Diem Linh
                                </h4>

                                <div className="w-10 h-px bg-[#dca54c] mx-auto my-2.5" />

                                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                    Chủ Nhật
                                </p>

                                <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#721527] my-1.5">
                                    <span className="text-lg sm:text-xl">
                                        25
                                    </span>
                                    <span className="text-2xl sm:text-3xl font-light">
                                        |
                                    </span>
                                    <span className="text-lg sm:text-xl">
                                        10
                                    </span>
                                    <span className="text-2xl sm:text-3xl font-light">
                                        |
                                    </span>
                                    <span className="text-lg sm:text-xl">
                                        2026
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm mt-2 font-medium">
                                    Trung Tâm Tiệc Cưới Diamond Palace
                                </p>
                                <p className="text-[10px] sm:text-[11px] text-[#8c7462]">
                                    Số 18 Song Hành, TP. Hồ Chí Minh
                                </p>
                            </div>

                            {/* Gợi ý bước tiếp theo */}
                            {step === 1 && (
                                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 text-[#dca54c] animate-pulse">
                                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                                        Chi tiết tiệc
                                    </span>
                                    <ArrowRight
                                        size={13}
                                        className="hidden md:block"
                                    />
                                    <ArrowDown
                                        size={13}
                                        className="block md:hidden"
                                    />
                                </div>
                            )}
                        </div>

                        {/* ── NỬA PHẢI: THÔNG TIN THÊM ──*/}
                        <div
                            className={[
                                "flex-shrink-0 relative overflow-hidden",
                                "bg-[#f9f7f2]",
                                "border-t md:border-t-0 md:border-l border-dashed border-[#721527]/20",
                                "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                step === 2
                                    ? "max-h-[800px] opacity-100"
                                    : "max-h-0 opacity-0",
                                "md:max-h-none",
                                step === 2
                                    ? "md:w-[420px] lg:w-[460px] md:opacity-100"
                                    : "md:w-0 md:opacity-0",
                            ].join(" ")}
                        >
                            {/* Shadow cạnh trái desktop */}
                            <div className="hidden md:block absolute left-0 top-0 w-5 h-full bg-gradient-to-r from-black/[0.04] to-transparent pointer-events-none z-10" />

                            <div className="flex flex-col items-center justify-center gap-7 sm:gap-8 px-6 sm:px-8 py-10 sm:py-12 text-[#5a101d] w-full md:w-[420px] lg:w-[460px]">
                                {/* DRESS CODE */}
                                <div className="text-center w-full">
                                    <div className="flex items-center justify-center gap-2 mb-2.5 text-[#dca54c]">
                                        <Shirt size={18} />
                                        <h5
                                            className={`font-bold uppercase tracking-widest text-xs sm:text-sm ${playfair.className}`}
                                        >
                                            Dress Code
                                        </h5>
                                    </div>
                                    <p className="text-[10px] sm:text-xs text-[#8c7462] mb-3">
                                        Trang phục khuyến khích theo tone màu:
                                    </p>
                                    <div className="flex justify-center gap-3">
                                        {[
                                            "#721527",
                                            "#dca54c",
                                            "#2b2b2b",
                                            "#fdfbf7",
                                        ].map((c) => (
                                            <div
                                                key={c}
                                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm border border-black/10 transition-transform hover:scale-110"
                                                style={{ backgroundColor: c }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* TIMELINE */}
                                <div className="text-center w-full">
                                    <div className="flex items-center justify-center gap-2 mb-3 text-[#dca54c]">
                                        <Clock size={18} />
                                        <h5
                                            className={`font-bold uppercase tracking-widest text-xs sm:text-sm ${playfair.className}`}
                                        >
                                            Timeline
                                        </h5>
                                    </div>
                                    <div className="space-y-2.5 text-xs sm:text-sm px-4">
                                        {[
                                            {
                                                time: "17:30",
                                                label: "Đón khách",
                                            },
                                            {
                                                time: "18:30",
                                                label: "Cử hành hôn lễ",
                                            },
                                            {
                                                time: "19:00",
                                                label: "Khai tiệc",
                                            },
                                        ].map(({ time, label }, i, arr) => (
                                            <div
                                                key={time}
                                                className={`flex justify-between pb-1.5 ${i < arr.length - 1 ? "border-b border-[#721527]/10" : ""}`}
                                            >
                                                <span className="font-bold">
                                                    {time}
                                                </span>
                                                <span className="text-[#8c7462]">
                                                    {label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* QR CODE */}
                                <div className="text-center bg-white p-4 rounded-md shadow-sm border border-[#721527]/10 w-full max-w-[220px]">
                                    <div className="flex items-center justify-center gap-1.5 mb-2 text-[#721527]">
                                        <QrCode size={16} />
                                        <h5
                                            className={`font-bold uppercase tracking-widest text-[10px] sm:text-xs ${playfair.className}`}
                                        >
                                            Gửi Lời Chúc
                                        </h5>
                                    </div>
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 mx-auto mb-2 flex items-center justify-center text-[9px] text-gray-400 rounded-sm">
                                        [Mã QR]
                                    </div>
                                    <p className="text-[9px] sm:text-[10px] text-[#8c7462] italic">
                                        Quét mã để gửi lời chúc hoặc xác nhận
                                        tham dự.
                                    </p>
                                </div>
                            </div>

                            {/* Nút đóng */}
                            {step === 2 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onClose();
                                    }}
                                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 text-gray-400 hover:text-[#721527] transition-colors cursor-pointer z-20"
                                >
                                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                                        Đóng lại
                                    </span>
                                    <RotateCcw size={13} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
