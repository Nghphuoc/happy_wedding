import { useState, useEffect, useCallback } from "react";

/**
 * Quản lý toàn bộ state & side-effects của modal thiệp cưới.
 * Component chỉ cần gọi hook này — không có logic nào rải rác trong JSX.
 */
export function useWeddingCard(isOpen: boolean, onClose: () => void) {
    const [step, setStep] = useState(0);

    // Reset về bìa mỗi lần modal mở lại
    useEffect(() => {
        if (!isOpen) return;
        const id = requestAnimationFrame(() => setStep(0));
        return () => cancelAnimationFrame(id);
    }, [isOpen]);

    // Đóng khi bấm Escape
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    // Khoá scroll body
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const advance = useCallback(() => setStep((s) => (s >= 2 ? 0 : s + 1)), []);

    return { step, advance };
}
