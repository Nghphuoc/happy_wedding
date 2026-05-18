/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Couple from "@/assets/couple.png";
import Image from "next/image";
const Countdown = () => {
    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 10,
        minutes: 46,
        seconds: 25,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-[#fcf9f3] flex justify-center items-center overflow-hidden">
            <div className="max-w-5xl w-full px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                <div className="relative w-70 h-80 flex justify-center items-center">
                    <div className="absolute inset-0 z-0">
                        <svg
                            viewBox="0 0 100 115"
                            className="w-full h-full stroke-[#d4b98e] stroke-[0.5] fill-none overflow-visible"
                        >
                            <polygon points="50,2 98,28 98,85 50,113 2,85 2,28" />
                            <polygon
                                points="50,-4 104,26 104,89 50,119 -4,89 -4,26"
                                className="stroke-[#d4b98e]/50 stroke-[0.2]"
                            />
                        </svg>
                    </div>

                    <div
                        className="relative w-60 h-70 z-10"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                    >
                        <Image
                            src={Couple}
                            alt="Couple"
                            className="object-cover object-center w-full h-full"
                            width={120}
                            height={120}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="text-4xl font-serif text-[#4a3f3a]">
                            Quang Vinh{" "}
                            <span className="text-2xl font-light mx-1">&</span>{" "}
                            Diem Linh
                        </h2>
                        <div className="hidden md:block w-24 h-px bg-[#a89d90]"></div>
                    </div>

                    {/* Khung đếm ngược kết hợp icon */}
                    <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
                        <div className="flex flex-col items-center w-16">
                            <span className="text-4xl font-serif text-[#6b4a45] mb-2">
                                {timeLeft.days}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500">
                                Days
                            </span>
                        </div>

                        {/* Icon ngăn cách 1 (Hoa hồng nhỏ) */}
                        <div className="relative w-8 h-12">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/10/16/08/leaves-1814644_1280.png"
                                alt="Rose"
                                className="object-contain"
                            />
                        </div>

                        {/* Cụm Hours */}
                        <div className="flex flex-col items-center w-16">
                            <span className="text-4xl font-serif text-[#6b4a45] mb-2">
                                {timeLeft.hours.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500">
                                Hours
                            </span>
                        </div>

                        {/* Icon ngăn cách 2 (Cành lá) */}
                        <div className="relative w-8 h-12">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/10/16/08/leaves-1814644_1280.png"
                                alt="Leaves"
                                className="object-contain"
                            />
                        </div>

                        {/* Cụm Minutes */}
                        <div className="flex flex-col items-center w-16">
                            <span className="text-4xl font-serif text-[#6b4a45] mb-2">
                                {timeLeft.minutes.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500">
                                Minutes
                            </span>
                        </div>

                        {/* Icon ngăn cách 3 (Cành lá dài) */}
                        <div className="relative w-8 h-12">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/10/16/08/leaves-1814644_1280.png"
                                alt="Leaves"
                                className="object-contain"
                            />
                        </div>

                        {/* Cụm Seconds */}
                        <div className="flex flex-col items-center w-16">
                            <span className="text-4xl font-serif text-[#6b4a45] mb-2">
                                {timeLeft.seconds.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-gray-500">
                                Second
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
