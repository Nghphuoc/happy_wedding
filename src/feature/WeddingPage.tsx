import Image from "next/image";
import { Dancing_Script, Oswald, Montserrat } from "next/font/google";
import coupleImg from "@/assets/couple.png";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function TropicalWeddingCard() {
    return (
        <div className="min-h-screen bg-[#e3ded4] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-fit opacity-80 pointer-events-none">
            </div>
            <div className="hidden md:block absolute right-0 bottom-10 w-48 lg:w-64 h-80 opacity-80 pointer-events-none">
            </div>

            <div className="relative w-full max-w-[400px] md:max-w-[650px] lg:max-w-[750px] bg-[#f5f3eb] shadow-2xl overflow-hidden flex flex-col items-center rounded-sm">
                <div className="relative w-full aspect-4/3 md:aspect-16/11 bg-gray-300">
                    <Image
                        src={coupleImg}
                        alt="Couple"
                        fill
                        className="object-cover object-center"
                    />

                    <div className="absolute top-4 md:top-8 left-4 md:left-8 w-12 md:w-20 h-12 md:h-20 z-20">
                    </div>
                    <div className="absolute top-1/2 right-2 md:right-4 w-14 md:w-24 h-14 md:h-24 z-20 -translate-y-1/2">
                    </div>

                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-0.5">
                        <svg
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="w-full h-8 md:h-16 lg:h-20 text-[#f5f3eb] fill-current"
                        >
                            <path d="M0,120 C150,120 200,60 300,90 C400,120 450,50 600,70 C750,90 800,30 900,80 C1000,130 1100,60 1200,100 L1200,120 Z" />
                        </svg>
                    </div>
                </div>

                <div className="relative w-full px-6 md:px-12 lg:px-16 pt-4 pb-8 md:pb-12 flex flex-col">
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    </div>

                    <div className="relative z-10">
                        <div className="text-center relative mt-2 md:mt-4 mb-6 md:mb-12">
                            <span
                                className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl md:text-9xl text-[#394a2b]/10 select-none ${dancingScript.className}`}
                            >
                                &
                            </span>
                            <h1
                                className={`text-5xl md:text-7xl lg:text-8xl text-[#394a2b] leading-tight ${dancingScript.className}`}
                            >
                                Hữu Phước
                                <br />
                                <span className="text-4xl md:text-6xl lg:text-7xl mt-2 block">
                                    [Tên Cô Dâu]
                                </span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-10 items-start my-6 md:my-10">
                            <div className="flex flex-col text-[#394a2b] justify-center h-full">
                                <p
                                    className={`text-lg md:text-3xl lg:text-4xl uppercase font-bold leading-tight tracking-wider ${oswald.className}`}
                                >
                                    Invite You
                                    <br />
                                    To Celebrate
                                </p>
                            </div>

                            <div
                                className={`flex flex-col text-right text-[#394a2b] ${montserrat.className}`}
                            >
                                <p className="font-bold text-xs md:text-base lg:text-lg uppercase tracking-wide">
                                    Trung Tâm Tiệc Cưới
                                    <br />
                                    Diamond Palace
                                </p>
                                <p className="text-[9px] md:text-sm lg:text-base mt-1 md:mt-2 mb-3 md:mb-4">
                                    Số 18 Song Hành, TP. Hồ Chí Minh
                                </p>
                                <p className="font-bold text-xs md:text-base lg:text-lg uppercase tracking-wide">
                                    Sunday
                                    <br />
                                    October 25, 2026
                                </p>
                            </div>
                        </div>

                        <div
                            className={`text-center text-[#394a2b]/80 text-[9px] md:text-sm lg:text-base leading-relaxed max-w-[90%] md:max-w-[80%] mx-auto mb-6 md:mb-10 ${montserrat.className}`}
                        >
                            Sự hiện diện của quý vị là niềm vinh hạnh lớn nhất
                            cho gia đình chúng tôi. Kính mong quý vị sắp xếp
                            thời gian đến chung vui.
                        </div>

                        {/* Footer Website */}
                        <div
                            className={`text-center text-[#394a2b] font-bold text-[9px] md:text-sm lg:text-base tracking-[0.2em] uppercase ${oswald.className}`}
                        >
                            For More Information
                            <br />
                            <span className="text-[10px] md:text-sm lg:text-base lowercase tracking-normal font-normal mt-1 block">
                                www.ourwedding.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
