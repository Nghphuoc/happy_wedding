import { Great_Vibes, Playfair_Display } from "next/font/google";
import { MousePointerClick } from "lucide-react";
import { GoldDivider, TextureOverlay } from "./ui";
import { WEDDING } from "./wedding.config";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

interface CardCoverProps {
    textureSrc: string;
    visible: boolean;
}

export function CardCover({ textureSrc, visible }: CardCoverProps) {
    const { groomName, brideName, date } = WEDDING;

    return (
        <div
            className={[
                "absolute inset-0 z-50 bg-[#4d0917] rounded-md",
                "flex flex-col items-center justify-center",
                "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                visible
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 scale-[1.04] pointer-events-none",
            ].join(" ")}
        >
            <TextureOverlay src={textureSrc} opacity="opacity-20" />

            <span className="relative z-10 text-[clamp(3.5rem,10vw,5rem)] font-serif text-[#dca54c] mb-4 drop-shadow-md leading-none">
                囍
            </span>

            <h2
                className={`relative z-10 text-[clamp(1.8rem,6vw,2.5rem)] text-[#dca54c] mb-2 ${greatVibes.className}`}
            >
                Sincere Invitation
            </h2>

            <GoldDivider className="relative z-10 my-3" />

            <h3
                className={`relative z-10 text-[clamp(1rem,3.5vw,1.4rem)] text-[#dca54c] tracking-wider mb-1 ${playfair.className}`}
            >
                {groomName} <span className="italic">&</span> {brideName}
            </h3>

            <p
                className={`relative z-10 text-[clamp(0.75rem,2.5vw,1rem)] uppercase tracking-[0.3em] text-[#dca54c]/70 mt-2 ${playfair.className}`}
            >
                {date.day} . {date.month} . {date.year}
            </p>

            <div className="absolute z-10 bottom-6 w-full flex flex-col items-center gap-1.5 text-[#dca54c] animate-pulse">
                <MousePointerClick size={20} />
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">
                    Chạm để mở thiệp
                </span>
            </div>
        </div>
    );
}
