import { SectionHeading } from "@/feature/InteractiveWedding/ui";
import { QrCode } from "lucide-react";

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

export default QRSection;