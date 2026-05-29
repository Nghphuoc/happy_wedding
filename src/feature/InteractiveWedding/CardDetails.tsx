import { Shirt, Clock, QrCode, RotateCcw } from "lucide-react";
import { SectionHeading } from "./ui";
import { WEDDING } from "./wedding.config";

interface CardDetailsProps {
    visible: boolean;
    onClose: (e: React.MouseEvent) => void;
}

export function CardDetails({ visible, onClose }: CardDetailsProps) {
    const { timeline, dressCodeColors } = WEDDING;

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
                <DressCode colors={dressCodeColors as unknown as string[]} />
                <Timeline
                    items={
                        timeline as unknown as { time: string; label: string }[]
                    }
                />
                <QRSection />
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

// ── Sub-sections ──────────────────────────────────────────────────────────────

function DressCode({ colors }: { colors: string[] }) {
    return (
        <div className="text-center w-full">
            <SectionHeading icon={Shirt} label="Dress Code" />
            <p className="text-[10px] sm:text-xs text-[#8c7462] my-2.5">
                Trang phục khuyến khích theo tone màu:
            </p>
            <div className="flex justify-center gap-3">
                {colors.map((color) => (
                    <div
                        key={color}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm border border-black/10 transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    );
}

function Timeline({ items }: { items: { time: string; label: string }[] }) {
    return (
        <div className="text-center w-full">
            <SectionHeading icon={Clock} label="Timeline" />
            <div className="space-y-2.5 text-xs sm:text-sm px-4 mt-3">
                {items.map(({ time, label }, i) => (
                    <div
                        key={time}
                        className={`flex justify-between pb-1.5 ${i < items.length - 1 ? "border-b border-[#721527]/10" : ""}`}
                    >
                        <span className="font-bold">{time}</span>
                        <span className="text-[#8c7462]">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function QRSection() {
    return (
        <div className="text-center bg-white p-4 rounded-md shadow-sm border border-[#721527]/10 w-full max-w-55">
            <SectionHeading icon={QrCode} label="Gửi Lời Chúc" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 mx-auto my-2 flex items-center justify-center text-[9px] text-gray-400 rounded-sm">
                [Mã QR]
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#8c7462] italic">
                Quét mã để gửi lời chúc hoặc xác nhận tham dự.
            </p>
        </div>
    );
}
