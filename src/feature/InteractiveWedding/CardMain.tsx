import { Great_Vibes, Playfair_Display } from "next/font/google";
import { ArrowRight, ArrowDown } from "lucide-react";
import { GoldDivider } from "./ui";
import { WEDDING } from "./wedding.config";
import { montserrat } from "@/utils/Fonts";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

type CardMainProps = {
    showHint: boolean;
    name?: string;
    checkLocation?: boolean;
};

export function CardMain({ showHint, name, checkLocation }: CardMainProps) {
    const { groomName, brideName, nuptialMass,  } = WEDDING;

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
                <p className={`text-[10px] sm:text-xs mb-1 ${montserrat.className}`}>
                    Đến dự buổi tiệc chung vui cùng gia đình chúng tôi
                </p>

                {checkLocation ? (
                    <><h5 
                    className="text-xl font-bold mt-2 text-[#721527]">
                        {groomName}
                    </h5>
                        <span className="text-3xl italic text-[#dca54c]">&</span>
                    <h5 
                    className="text-xl font-bold text-[#721527] mb-1">
                        {brideName}
                    </h5></>
                ) : (
                    <>
                    <h5 className="text-xl font-bold mt-2 text-[#721527]">
                        {brideName}
                    </h5>
                        <span className="text-3xl italic text-[#dca54c]">&</span>
                    <h5
                     className="text-xl font-bold text-[#721527] mb-1">
                        {groomName}
                    </h5></>

                )}

                {/* <GoldDivider className="mx-auto my-2.5" /> */}

                <div className={`text-[#5a101d] flex flex-col gap-2 items-center w-full ${montserrat.className}`} >
                    <GoldDivider className="mx-auto my-2 mb-8"/>
                    <p className="text-sm sm:text-xs font-bold uppercase items-center text-center">
                        Thánh Lễ Hôn Phối Sẽ Được Cử Hành Tại
                    </p>
                    <p className="text-[10px] sm:text-[12px] text-[#8c7462] font-bold">
                        {nuptialMass.location}
                    </p>
                    <p className="text-[10px] sm:text-[12px] text-[#8c7462] font-bold">
                        Vào Lúc: {nuptialMass.time} Giờ | Ngày {nuptialMass.date}
                    </p>
                </div>

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
