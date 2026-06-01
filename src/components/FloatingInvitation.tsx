"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import InteractiveWeddingCard from "@/feature/InteractiveWedding/index";
import useGetInfo from "@/hooks/useGetInfo";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/contexts/TranslationContext";

const FloatingInvitation = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isRead, setIsRead] = useState(false);
    const searchParams = useSearchParams();
    const codeFromUrl = searchParams.get("code");
    const { userInfo, fetchUserInfo } = useGetInfo(codeFromUrl || "");
    const {t} = useTranslation();
    
    useEffect(() => {
        if (codeFromUrl) {
            fetchUserInfo();
        }
    }, [codeFromUrl]);

    const handleOpenCard = () => {
        setIsCardOpen(true);
        setIsRead(true);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end gap-2">
                {!isRead && (
                    <div
                        className="bg-white px-3 py-2 rounded-xl shadow-lg text-sm text-gray-700 border border-gray-100 animate-bounce cursor-pointer"
                        onClick={handleOpenCard}
                    >
                        {t("mailNotification")}
                    </div>
                )}

                <button
                    onClick={handleOpenCard}
                    className="relative flex items-center justify-center w-14 h-14 bg-[#52594a] text-white rounded-full shadow-2xl hover:bg-[#3d4336] transition-transform duration-300 hover:scale-110 focus:outline-none"
                >
                    <Mail size={24} />
                    {!isRead && (
                        <span className="absolute top-0 right-0 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white justify-center items-center">
                                1
                            </span>
                        </span>
                    )}
                </button>
            </div>

            <InteractiveWeddingCard
                isOpen={isCardOpen}
                onClose={() => setIsCardOpen(false)}
                name={userInfo?.data?.NAME || "Khách mời"}
            />
        </>
    );
};

export default FloatingInvitation;
