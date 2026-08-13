import { RotateCcw } from "lucide-react";
import { WEDDING } from "./wedding.config";
import Timeine from "@/components/shares/TimeLine";
import QRSection from "@/components/shares/QRSection";
import { montserrat } from "@/utils/Fonts";

interface CardDetailsProps {
    visible: boolean;
    onClose: (e: React.MouseEvent) => void;
    onBlessingOpenChange: (isOpen: boolean) => void;
    checkLocation?: boolean;
}

export function CardDetails({
    visible,
    onClose,
    onBlessingOpenChange,
    checkLocation,
}: CardDetailsProps) {
    const { timeline, date_female, date_male, venue, address_male, address_female } = WEDDING;

    return (
        <div
            className={[
                "shrink-0 relative overflow-hidden",
                "bg-[#f9f7f2] border-t md:border-t-0 md:border-l border-dashed border-[#721527]/20",
                "transition-all duration-700 ease-in-out",
                visible ? "max-h-200 opacity-100" : "max-h-0 opacity-0",
                "md:max-h-none",
                visible
                    ? "md:w-105 lg:w-115 md:opacity-100"
                    : "md:w-0 md:opacity-0",
            ].join(" ")}
        >

            <div className="hidden md:block absolute left-0 top-0 w-5 h-full bg-linear-to-r from-black/4 to-transparent pointer-events-none z-10" />

            <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-5 px-6 sm:px-8 py-10 sm:py-12 text-[#5a101d] w-full md:w-105 lg:w-115">
                
                {mainData(checkLocation as boolean, date_male, date_female, venue, address_male, address_female)}

                <Timeine
                    items={timeline as unknown as { time: string; label: string }[]}
                />

                <QRSection onOpenChange={onBlessingOpenChange} />

            </div>

            {visible && (
                <button
                    onClick={onClose}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 text-gray-400 hover:text-[#721527] transition-colors cursor-pointer z-20"
                >
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                        Đóng lại
                    </span>
                    <RotateCcw size={13} />
                </button>
            )}
        </div>
    );
}


const mainData = (checkLocation: boolean, date_male: any, date_female: any, venue: string, address_male: string, address_female: string) => {
    return (
        <>
        <div className={`text-[#5a101d] flex flex-col gap-2 sm:pt-6 font-bold items-center w-full ${montserrat.className}`} >

                    <p className="sm:text-sm md:text-lg font-bold uppercase">
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

                    <p className={`text-sm sm:text-xs font-bold uppercase`}>
                        {venue}
                    </p>
                    <p className={`text-[10px] sm:text-[12px] text-[#8c7462] font-bold`}>
                        DC: {checkLocation ? address_male : address_female}
                    </p>
                </div>
        </>
    );
}
