"use client";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function WeddingInvitations() {
    return (
        <div className="min-h-screen bg-[#f4ead5] flex items-center justify-center p-4 py-12">
            {/* Grid chứa 2 mặt của thiệp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
                {/* =========================================
                    MẶT 1: BÌA NGOÀI CỦA THIỆP 
                ========================================= */}
                <div className="relative w-full max-w-[500px] mx-auto aspect-[3/4.2] bg-[#721527] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm overflow-hidden flex flex-col justify-center items-center">
                    {/* Hiệu ứng texture giấy nhám nhẹ (Tùy chọn) */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] mix-blend-overlay pointer-events-none"></div>

                    {/* Họa tiết ren/hoa góc trên bên trái */}
                    <div className="absolute top-0 left-0 w-40 h-40 opacity-80">
                        {/* Thay bằng ảnh PNG hoa văn ren vàng của bạn */}
                        {/* <Image src="/gold-lace-corner.png" fill className="object-contain object-top-left" alt="Lace" /> */}
                    </div>

                    <div className="absolute top-[45%] right-8 w-16 h-24 transform -translate-y-1/2 opacity-90">
                        {/* Thay bằng ảnh PNG hoa hồng nét mảnh màu vàng */}
                        {/* <Image src="/gold-rose-lineart.png" fill className="object-contain" alt="Rose" /> */}
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-[#dca54c]">
                        <span className="text-7xl font-serif mb-6 drop-shadow-md">
                            囍
                        </span>

                        <h2
                            className={`text-4xl tracking-wide mb-2 ${greatVibes.className}`}
                        >
                            Sincere Invitation
                        </h2>

                        <div className="w-12 h-px bg-[#dca54c] my-3 opacity-50"></div>

                        <p
                            className={`text-[10px] uppercase tracking-[0.25em] font-light ${playfair.className}`}
                        >
                            Welcome to our wedding
                        </p>
                    </div>
                </div>

                {/* =========================================
                    MẶT 2: RUỘT THIỆP (POCKET FOLD)
                ========================================= */}
                <div className="relative w-full max-w-[500px] mx-auto aspect-[3/4.2] bg-[#721527] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm flex">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] mix-blend-overlay pointer-events-none z-0"></div>

                    <div className="w-2 md:w-4 h-full bg-[#5a101d] border-r border-black/20 z-10 shadow-inner"></div>

                    <div className="flex-1 my-3 bg-[#fdfbf7] shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] relative z-0 flex flex-col items-center px-6 py-10 text-center">
                        <h3
                            className={`text-3xl text-[#dca54c] mb-6 ${greatVibes.className}`}
                        >
                            Invitation
                        </h3>

                        <div
                            className={`text-[#5a101d] flex flex-col gap-3 ${playfair.className}`}
                        >
                            <p className="text-xs uppercase tracking-widest text-[#8c7462]">
                                Trân trọng kính mời
                            </p>
                            <p className="text-sm font-medium border-b border-dashed border-[#5a101d]/30 pb-1 w-3/4 mx-auto mb-2">
                                &nbsp;
                            </p>

                            <p className="text-xs">
                                Đến dự buổi tiệc chung vui cùng gia đình chúng
                                tôi
                            </p>

                            <h4 className="text-2xl font-bold mt-4 text-[#721527]">
                                Hữu Phước
                            </h4>
                            <span className="text-sm italic text-[#dca54c]">
                                &
                            </span>
                            <h4 className="text-2xl font-bold text-[#721527]">
                                [Tên Cô Dâu]
                            </h4>

                            <div className="w-8 h-px bg-[#dca54c] mx-auto my-4"></div>

                            <p className="text-xs font-bold uppercase tracking-widest">
                                Chủ Nhật
                            </p>
                            <div className="flex items-center justify-center gap-4 text-[#721527] my-2">
                                <span className="text-lg">25</span>
                                <span className="text-2xl font-light">|</span>
                                <span className="text-lg">10</span>
                                <span className="text-2xl font-light">|</span>
                                <span className="text-lg">2026</span>
                            </div>

                            <p className="text-xs mt-2 font-medium">
                                Trung Tâm Tiệc Cưới Diamond Palace
                            </p>
                            <p className="text-[10px] text-[#8c7462]">
                                Số 18 Song Hành, TP. Hồ Chí Minh
                            </p>
                        </div>
                    </div>

                    {/* Nếp gấp túi (Pocket Flap) bên phải */}
                    <div className="w-16 md:w-24 h-full bg-[#721527] border-l border-black/30 relative z-20 shadow-[-8px_0_15px_rgba(0,0,0,0.25)] flex items-center justify-start">
                        <div className="absolute top-1/3 -left-8 w-16 h-20 opacity-90">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
