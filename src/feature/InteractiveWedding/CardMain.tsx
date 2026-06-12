import { Great_Vibes, Playfair_Display } from "next/font/google";
import { ArrowRight, ArrowDown } from "lucide-react";
import { GoldDivider } from "./ui";
import { WEDDING } from "./wedding.config";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

type CardMainProps = {
    showHint: boolean;
    name?: string;
    checkLocation?: boolean;
};

export function CardMain({ showHint, name, checkLocation }: CardMainProps) {
    const { groomName, brideName, date_male, date_female, venue, address_male, address_female } = WEDDING;

    return (
        <div className="w-full md:w-105 lg:w-115 shrink-0 flex flex-col items-center justify-center px-5 sm:px-8 py-10 sm:py-12 text-center relative z-10">
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
                    {name || "Quý Khách"}
                </p>
                <p className="text-[11px] sm:text-xs mb-1">
                    Đến dự buổi tiệc chung vui cùng gia đình chúng tôi
                </p>

                <h4 className="text-[clamp(1.4rem,5vw,2rem)] font-bold mt-2 text-[#721527]">
                    {groomName}
                </h4>
                <span className="text-3xl italic text-[#dca54c]">&</span>
                <h4 className="text-[clamp(1.4rem,5vw,2rem)] font-bold text-[#721527] mb-1">
                    {brideName}
                </h4>

                <GoldDivider className="mx-auto my-2.5" />

                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    {checkLocation ? date_male.weekday : date_female.weekday}
                </p>

                <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#721527] my-1.5">
                    {(
                        checkLocation 
                            ? [date_male.day, date_male.month, date_male.year]
                            : [date_female.day, date_female.month, date_female.year]
                    ).map((part, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-3 sm:gap-4"
                        >
                            <span className="text-lg sm:text-xl">{part}</span>
                            {i < 2 && (
                                <span className="text-2xl sm:text-3xl font-light">
                                    |
                                </span>
                            )}
                        </span>
                    ))}
                </div>

                <p className={`text-xs sm:text-sm mt-2 font-medium ${playfair.className}`}>
                    {venue}
                </p>
                <p className="text-[10px] sm:text-[12px] text-[#8c7462] font-medium">
                    {checkLocation ? address_male : address_female}
                </p>
            </div>

            {showHint && (
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 text-[#dca54c] animate-pulse">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                        Chi tiết tiệc
                    </span>
                    <ArrowRight size={13} className="hidden md:block" />
                    <ArrowDown size={13} className="block md:hidden" />
                </div>
            )}
        </div>
    );
}
