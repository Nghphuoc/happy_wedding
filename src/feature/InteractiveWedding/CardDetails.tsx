import { RotateCcw } from "lucide-react";
import { GoldDivider, SectionHeading } from "./ui";
import { WEDDING } from "./wedding.config";
import Timeine from "@/components/shares/TimeLine";
import QRSection from "@/components/shares/QRSection";
import { montserrat } from "@/utils/Fonts";

interface CardDetailsProps {
    visible: boolean;
    onClose: (e: React.MouseEvent) => void;
    checkLocation?: boolean;
}

export function CardDetails({ visible, onClose }: CardDetailsProps) {
    const { timeline, nuptialMass } = WEDDING;

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

            <div className="flex flex-col items-center justify-center gap-7 sm:gap-8 px-6 sm:px-8 py-10 sm:py-12 text-[#5a101d] w-full md:w-105 lg:w-115">
                <Timeine
                    items={
                        timeline as unknown as { time: string; label: string }[]
                    }
                />
                <QRSection />

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
