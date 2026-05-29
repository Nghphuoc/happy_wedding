"use client";

import React, { useState } from "react";

export interface WishInfo {
    name: string;
    note: string;
}

interface WishCardProps {
    data: WishInfo;
}

const WishCard: React.FC<WishCardProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative w-full h-64 cursor-pointer perspective-[1000px] group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`relative w-full h-full duration-700 transform-3d transition-transform ${
                    isOpen ? "transform-[rotateY(180deg)]" : ""
                }`}
            >
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-6 group-hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-[#f4f5f2] rounded-full flex items-center justify-center mb-4 text-[#52594a]">
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>

                    <h3 className="text-xl font-serif text-[#2c3127] text-center line-clamp-2">
                        {data.name}
                    </h3>

                    <span className="mt-4 text-xs uppercase tracking-widest text-gray-400 flex items-center gap-1 animate-pulse">
                        Click để mở
                        <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </span>
                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] bg-[#52594a] text-white rounded-2xl shadow-lg flex flex-col p-6">
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        <svg
                            className="w-6 h-6 text-white/30 mb-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p className="text-sm md:text-base leading-relaxed italic text-white/90">
                            &quot;{data.note}&quot;
                        </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/20 text-right">
                        <span className="text-sm font-semibold text-white/80">
                            - {data.name}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishCard;
