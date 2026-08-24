import { Great_Vibes, Playfair_Display } from "next/font/google";
import { MousePointerClick } from "lucide-react";
import { GoldDivider, TextureOverlay } from "./ui";
import { WEDDING } from "./wedding.config";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

interface CardCoverProps {
    textureSrc: string;
    visible: boolean;
    checkLocation?: boolean;
}

export function CardCover({ textureSrc, visible, checkLocation }: CardCoverProps) {
    const { groomName, brideName, date_female, date_male } = WEDDING;

    return (
        <div
            className={[
                "absolute inset-0 z-50 bg-[#4d0917] rounded-md",
                "flex flex-col items-center justify-center",
                "transition-all duration-700 ease-in-out scroll-smooth",
                visible
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 scale-[1.04] pointer-events-none",
            ].join(" ")}
        >

            <TextureOverlay src={textureSrc} opacity="opacity-20" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 -pt-2.5">

                <span className="relative z-10 text-[clamp(3.5rem,10vw,5rem)] font-serif text-[#dca54c] mb-4 drop-shadow-md leading-none">
                    囍
                </span>

                <h2
                    className={`relative z-10 text-[clamp(1.8rem,6vw,2.5rem)] text-[#dca54c] mb-2 ${greatVibes.className}`}
                >
                    Sincere Invitation
                </h2>

                <GoldDivider className="relative z-10 my-3" />

                {checkLocation ? (
                    <>
                        <h4 className={`relative z-10 text-xl text-[#dca54c] tracking-wider mb-1 ${playfair.className}`}>
                            {groomName}
                        </h4>

                        <span className={`text-3xl italic text-[#dca54c] ${playfair.className}`}>&</span>

                        <h4 className={`relative z-10 text-xl text-[#dca54c] tracking-wider mb-1 ${playfair.className}`}>
                            {brideName}
                        </h4>
                    </>
                ) : (
                    <>
                        <h4 className={`relative z-10 text-xl text-[#dca54c] tracking-wider mb-1 ${playfair.className}`}>
                            {brideName}
                        </h4>

                        <span className={`text-3xl italic text-[#dca54c] ${playfair.className}`}>&</span>

                        <h4 className={`relative z-10 text-xl text-[#dca54c] tracking-wider mb-1 ${playfair.className}`}>
                            {groomName}
                        </h4>
                    </>

                )}

                <p
                    className={`relative z-10 text-[clamp(0.75rem,2.5vw,1rem)] uppercase tracking-[0.3em] text-[#dca54c]/70 mt-2 ${playfair.className}`}
                >
                    {checkLocation ? date_male.day : date_female.day} . {checkLocation ? date_male.month : date_female.month} . {checkLocation ? date_male.year : date_female.year}
                </p>

            </div>

            <div className="absolute z-10 bottom-6 w-full flex flex-col items-center gap-1.5 text-[#dca54c] animate-pulse">
                <MousePointerClick size={20} />
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">
                    Chạm để mở thiệp
                </span>
            </div>
        </div>
    );
}
