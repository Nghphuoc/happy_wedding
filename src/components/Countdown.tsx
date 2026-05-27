/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import Couple from "@/assets/couple.png";
import Rose from "@/assets/rose.png";
import Image from "next/image";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown = () => {
    // TODO: Cần chỉnh lại ngày giờ cho đúng với ngày cưới của mình nhé
    const targetDate = new Date("2026-10-25T00:00:00");
    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const mountTimer = window.setTimeout(() => {
            setIsMounted(true);
        }, 0);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(mountTimer);
            clearInterval(timer);
        };
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className="py-8 md:py-12 lg:py-16 bg-[#fcf9f3] flex justify-center items-center overflow-hidden">
            <div className="max-w-6xl w-full px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24">
                <div className="relative flex justify-center items-center w-[260px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[340px] lg:h-[400px]">
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
                        className="relative z-10 w-[220px] h-[260px] sm:w-[260px] sm:h-[300px] lg:w-[290px] lg:h-[340px]"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                    >
                        <Image
                            src={Couple}
                            alt="Couple"
                            className="object-cover object-center w-full h-full"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#4a3f3a]">
                            Quang Vinh{" "}
                            <span className="text-xl md:text-2xl font-light mx-1 md:mx-2">
                                &
                            </span>{" "}
                            Diem Linh
                        </h2>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6 w-full max-w-[450px] lg:max-w-none">
                        <div className="flex flex-col items-center w-14 sm:w-16">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#6b4a45] mb-1 lg:mb-2">
                                {timeLeft.days.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500">
                                Days
                            </span>
                        </div>

                        <div className="relative w-4 h-8 sm:w-6 sm:h-10 lg:w-8 lg:h-12">
                            <Image
                                src={Rose}
                                alt="Rose separator"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col items-center w-14 sm:w-16">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#6b4a45] mb-1 lg:mb-2">
                                {timeLeft.hours.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500">
                                Hours
                            </span>
                        </div>

                        <div className="relative w-4 h-8 sm:w-6 sm:h-10 lg:w-8 lg:h-12">
                            <Image
                                src={Rose}
                                alt="Rose separator"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col items-center w-14 sm:w-16">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#6b4a45] mb-1 lg:mb-2">
                                {timeLeft.minutes.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500">
                                Minutes
                            </span>
                        </div>

                        <div className="relative w-4 h-8 sm:w-6 sm:h-10 lg:w-8 lg:h-12">
                            <Image
                                src={Rose}
                                alt="Rose separator"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col items-center w-14 sm:w-16">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#6b4a45] mb-1 lg:mb-2">
                                {timeLeft.seconds.toString().padStart(2, "0")}
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500">
                                Seconds
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
