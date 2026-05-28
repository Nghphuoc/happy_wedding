import { type LucideIcon } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
export function GoldDivider({ className = "" }: { className?: string }) {
    return <div className={`w-10 h-px bg-[#dca54c] opacity-50 ${className}`} />;
}

interface SectionHeadingProps {
    icon: LucideIcon;
    label: string;
}
export function SectionHeading({ icon: Icon, label }: SectionHeadingProps) {
    return (
        <div className="flex items-center justify-center gap-2 text-[#dca54c]">
            <Icon size={18} />
            <h5
                className={`font-bold uppercase tracking-widest text-xs sm:text-sm ${playfair.className}`}
            >
                {label}
            </h5>
        </div>
    );
}

export function TextureOverlay({
    src,
    opacity = "opacity-40",
}: {
    src: string;
    opacity?: string;
}) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none rounded-md ${opacity}`}
            style={{ backgroundImage: `url(${src})` }}
        />
    );
}
