import { useState, useEffect, useCallback } from "react";

export function useWeddingCard(isOpen: boolean, onClose: () => void) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isOpen) return;
        const id = requestAnimationFrame(() => setStep(0));
        return () => cancelAnimationFrame(id);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const advance = useCallback(() => setStep((s) => (s >= 2 ? 0 : s + 1)), []);

    return { step, advance };
}
