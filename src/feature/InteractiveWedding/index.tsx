"use client";

import stuccoBg from "@/assets/stucod.png";
import { TextureOverlay } from "./ui";
import { CardCover } from "./CardCover";
import { CardMain } from "./CardMain";
import { CardDetails } from "./CardDetails";
import { useWeddingCard } from "./useWeddingCard";
import { CARD_WIDTH_BY_STEP } from "./wedding.config";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    name?: string;
    checkLocation?: boolean;
}

export default function InteractiveWeddingCard({
    isOpen,
    onClose,
    name,
    checkLocation,
}: ModalProps) {
    const { step, advance } = useWeddingCard(isOpen, onClose);

    if (!isOpen) return null;

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/65 backdrop-blur-sm p-3 sm:p-4 md:p-6 overflow-y-auto"
            onClick={onClose}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    advance();
                }}
                className={[
                    "relative my-auto cursor-pointer select-none",
                    "bg-[#580d1c] rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
                    "transition-all duration-700 ease-in-out",
                    CARD_WIDTH_BY_STEP[step],
                ].join(" ")}
            >
                <TextureOverlay src={stuccoBg.src} opacity="opacity-40" />

                <CardCover textureSrc={stuccoBg.src} visible={step === 0} checkLocation={checkLocation} />

                <div
                    className={`p-2.5 sm:p-3.5 md:p-4 transition-opacity duration-700 ${step === 0 ? "opacity-0" : "opacity-100"}`}
                >
                    <div className="flex flex-col md:flex-row w-full bg-[#fdfbf7] shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] overflow-hidden rounded-sm">
                        <CardMain showHint={step === 1} name={name} checkLocation={checkLocation}/>
                        <CardDetails
                            visible={step === 2}
                            onClose={handleClose}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
