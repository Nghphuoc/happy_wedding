export function Divider({ icon, align = "center" }: { icon: React.ReactNode; align?: "left" | "center" }) {
    return <div className={`flex items-center py-6 text-[#dca54c] ${align === "left" ? "justify-center md:justify-start" : "justify-center"}`}><span className="h-px w-16 bg-[#dca54c]/50 sm:w-24" /><span className="mx-4">{icon}</span><span className="h-px w-16 bg-[#dca54c]/50 sm:w-24" /></div>;
}
