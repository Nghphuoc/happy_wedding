"use client";

import React, { useState, useRef } from "react";
import { useSendBlessing } from "@/hooks/useSendBlessing";

interface SendBlessingProps {
    isOpen: boolean;
    onClose: () => void;
}

const SendBlessing: React.FC<SendBlessingProps> = ({ isOpen, onClose }) => {
    const [statusVal, setStatusVal] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);

    // Gọi custom hook
    const sendBlessingMutation = useSendBlessing();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;
        const formData = new FormData(formRef.current);

        // Xử lý data nếu không tham dự
        if (statusVal === "Rất tiếc không thể đến") {
            formData.set("QUANTITY_ATTENDING", "");
        }

        sendBlessingMutation.mutate(formData, {
            onSuccess: () => {
                formRef.current?.reset();
                setStatusVal("");

                setTimeout(() => {
                    sendBlessingMutation.reset();
                    onClose();
                }, 3000);
            },
        });
    };

    const isNotAttending = statusVal === "Rất tiếc không thể đến";

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cover bg-center">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 md:p-14 shadow-2xl rounded-3xl border border-white/20 max-h-[95vh] overflow-y-auto animate-fade-in-up"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors p-2 bg-gray-50 hover:bg-gray-200 rounded-full"
                    title="Đóng"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="text-center mb-10 mt-2">
                    <span className="block text-[#52594a] text-sm uppercase tracking-[0.3em] font-semibold mb-3">
                        blessings
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2c3127] mb-3">
                        Lời Chúc Phúc
                    </h2>
                    <p className="text-gray-500 italic">
                        Vui lòng phản hồi trước ngày 20/10/2026
                    </p>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    {/* Hàng 1: Mã lời mời */}
                    <div className="relative group">
                        <input
                            type="text"
                            name="CODE"
                            placeholder="Mã lời mời in trên thiệp của bạn *"
                            className="w-full border-b-2 border-gray-200 bg-transparent py-3 px-1 text-gray-800 focus:outline-none focus:border-[#52594a] transition-colors uppercase placeholder:normal-case placeholder:text-gray-400"
                            required
                        />
                        {sendBlessingMutation.isError && (
                            <p className="text-red-500 text-sm mt-2 font-medium flex items-center gap-1">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {sendBlessingMutation.error.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                            <select
                                name="STATUS"
                                required
                                value={statusVal}
                                onChange={(e) => setStatusVal(e.target.value)}
                                className="w-full appearance-none border-b-2 border-gray-200 bg-transparent py-3 px-1 pr-10 text-gray-800 focus:outline-none focus:border-[#52594a] transition-colors cursor-pointer invalid:text-gray-400"
                            >
                                <option
                                    value=""
                                    disabled
                                    className="text-gray-400"
                                >
                                    Sẽ tham dự? *
                                </option>
                                <option
                                    value="Sẽ tham dự"
                                    className="text-gray-800"
                                >
                                    Chắc chắn rồi!
                                </option>
                                <option
                                    value="Có thể tham dự"
                                    className="text-gray-800"
                                >
                                    Tôi chưa chắc chắn
                                </option>
                                <option
                                    value="Rất tiếc không thể đến"
                                    className="text-gray-800"
                                >
                                    Rất tiếc, tôi không thể
                                </option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400 group-hover:text-[#52594a] transition-colors">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="relative group">
                            <select
                                name="QUANTITY_ATTENDING"
                                required={!isNotAttending}
                                disabled={isNotAttending}
                                defaultValue=""
                                className={`w-full appearance-none border-b-2 border-gray-200 bg-transparent py-3 px-1 pr-10 text-gray-800 focus:outline-none focus:border-[#52594a] transition-colors ${isNotAttending ? "opacity-40 cursor-not-allowed bg-gray-50" : "cursor-pointer invalid:text-gray-400"}`}
                            >
                                <option
                                    value=""
                                    disabled
                                    className="text-gray-400"
                                >
                                    Số người tham dự {isNotAttending ? "" : "*"}
                                </option>
                                <option value="1" className="text-gray-800">
                                    1 người
                                </option>
                                <option value="2" className="text-gray-800">
                                    2 người
                                </option>
                                <option value="3" className="text-gray-800">
                                    3 người
                                </option>
                                <option value="4" className="text-gray-800">
                                    4 người
                                </option>
                                <option
                                    value="cả nhà luôn"
                                    className="text-gray-800"
                                >
                                    Cả nhà luôn
                                </option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400 group-hover:text-[#52594a] transition-colors">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <textarea
                            name="NOTE"
                            placeholder="Hãy gửi lời yêu thương đến cặp đôi *"
                            rows={3}
                            required
                            className="w-full border-b-2 border-gray-200 bg-transparent py-3 px-1 text-gray-800 focus:outline-none focus:border-[#52594a] transition-colors resize-none placeholder:text-gray-400"
                        ></textarea>
                    </div>

                    <div className="text-center pt-6">
                        <button
                            type="submit"
                            disabled={
                                sendBlessingMutation.isPending || sendBlessingMutation.isSuccess
                            }
                            className="bg-[#52594a] text-white px-12 py-4 rounded-full uppercase tracking-[0.15em] text-sm font-medium hover:bg-[#3a4034] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-lg w-full md:w-auto"
                        >
                            {sendBlessingMutation.isPending ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="animate-spin h-4 w-4 text-white"
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
                                    Đang xử lý...
                                </span>
                            ) : (
                                "Xác Nhận RSVP"
                            )}
                        </button>
                    </div>

                    {sendBlessingMutation.isSuccess && (
                        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-center animate-fade-in-up">
                            <p className="text-green-700 font-medium flex items-center justify-center gap-2">
                                🎉 Cảm ơn bạn! Phản hồi đã được ghi nhận.
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SendBlessing;
