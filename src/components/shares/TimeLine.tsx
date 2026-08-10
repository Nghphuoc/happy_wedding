// import { SectionHeading } from "@/feature/InteractiveWedding/ui";
// import { Clock } from "lucide-react";

function Timeline({ items }: { items: { time: string; label: string }[] }) {
    return (
        <div className="text-center w-full">
            {/* <SectionHeading icon={Clock} label="Timeline" /> */}
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

export default Timeline;