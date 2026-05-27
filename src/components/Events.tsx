"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Heart, Wine, Camera, Sparkles } from "lucide-react";
import Frame from "@/assets/frame.png";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
}

function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

const services = [
    {
        title: "Photography",
        description:
            "Chụp hình cưới lưu giữ những khoảnh khắc đáng nhớ và tạo ra những kỷ niệm vĩnh cửu cho cặp đôi.",
        icon: Camera,
    },
    {
        title: "Ceremony",
        description:
            "Nghi thức cưới tuyên thề nơi cặp đôi trao lời thề hôn nhân và cam kết bên nhau trước sự chứng kiến của gia đình và bạn bè.",
        icon: Heart,
    },
    {
        title: "Drink & Dinner",
        description:
            "Một bữa tiệc cưới là một sự kiện vui vẻ để kết nối và thưởng thức cùng nhau, tạo nên những kỷ niệm đáng nhớ cho cặp đôi.",
        icon: Wine,
    },
    {
        title: "Ceremony",
        description:
            "Lễ cưới là một sự kiện chính thức nhằm tôn vinh sự kết hợp của hai cá nhân trong hôn nhân. Nó thường bao gồm các nghi thức truyền thống, lời thề hôn nhân và sự chứng kiến của gia đình và bạn bè.",
        icon: Sparkles,
    },
];

export default function Events() {
    return (
        <section
            id="events"
            className={`bg-[#fbf8f1] min-h-screen py-12 lg:py-16 px-4 sm:px-8 flex justify-center items-center overflow-hidden ${montserrat.className}`}
        >
            <div className="max-w-5xl w-full">
                <h3
                    className={`text-center text-3xl md:text-4xl font-medium text-[#596157] mb-12 lg:mb-16 ${playfair.className}`}
                >
                    Events & Services
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex justify-center">
                        <ScrollReveal>
                            <div className="relative w-[300px] h-[360px] sm:w-[400px] sm:h-[480px] lg:w-[480px] lg:h-[580px]">
                                <div
                                    className="absolute top-1/2 left-[58.33%] transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[93%] rounded-full overflow-hidden"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80"
                                        alt="Wedding Couple"
                                        className="object-cover"
                                        fill
                                        priority={false}
                                    />
                                </div>
                                <Image
                                    src={Frame}
                                    alt="Background"
                                    className="w-full h-full object-center z-50 pointer-events-none"
                                    fill
                                    priority={false}
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    <ul className="flex flex-col gap-8 sm:gap-10">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            const isLast = index === services.length - 1;

                            return (
                                <li key={index} className="group">
                                    <ScrollReveal delay={index * 150}>
                                        <div className="flex gap-4 sm:gap-6 cursor-default">
                                            <div className="w-12 h-12 rounded-full bg-[#d8b8ab]/15 flex justify-center items-center shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#d8b8ab]/30 group-hover:shadow-sm">
                                                <IconComponent
                                                    size={24}
                                                    strokeWidth={1.5}
                                                    className="text-[#7d594f] transition-colors"
                                                />
                                            </div>

                                            <div className="relative flex flex-col items-center shrink-0 w-4 pt-4 sm:flex">
                                                <div className="w-3 h-3 bg-[#7d594f] rounded-full z-10 shadow-sm transition-all duration-300 group-hover:ring-4 group-hover:ring-[#d8b8ab]/40 group-hover:bg-[#572528]" />
                                                {!isLast && (
                                                    <div className="absolute top-7 -bottom-16 w-0.5 bg-[#d8b8ab]/70 z-0" />
                                                )}
                                            </div>

                                            <div className="flex-1 pt-1.5 pb-2">
                                                <h3
                                                    className={`text-xl font-medium text-[#7d594f] mb-2 transition-colors duration-300 group-hover:text-[#572528] ${playfair.className}`}
                                                >
                                                    {service.title}
                                                </h3>
                                                <p className="text-[#7a7371] text-sm leading-relaxed font-light">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
