"use client";
import React, { useEffect } from "react";
import WishCard from "@/components/WishCard";
import useBlessing from "@/hooks/useBlessing";

export default function Blessings() {
    const { blessingData, loading, error, fetchBlessings } = useBlessing();

    useEffect(() => {
        fetchBlessings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const wishes = blessingData || [];

    return (
        <section className="py-20 bg-[#fafaf9] min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-[#2c3127]">
                        Sổ Lưu Bút
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Những lời chúc tốt đẹp nhất từ những người thân yêu
                    </p>
                </div>

                {error && (
                    <div className="text-center text-red-500 mb-8">
                        Đã có lỗi xảy ra khi tải lời chúc. Vui lòng thử lại sau!
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-48">
                        <span className="flex items-center gap-2 text-[#52594a]">
                            <svg
                                className="animate-spin h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Đang tải những lời yêu thương...
                        </span>
                    </div>
                ) : wishes.length === 0 ? (
                    <div className="text-center text-gray-400 italic py-12">
                        Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời yêu
                        thương đến cặp đôi nhé!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishes.map((item, index) => (
                            <WishCard key={index} data={item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
