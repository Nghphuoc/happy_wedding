"use client";
import { useMutation } from "@tanstack/react-query";
import { blessingFetch } from "@/services/BlessingService";
import { WishInfo } from "@/components/WishCard";
import { useState } from "react";

interface BlessingResponse {
    status: string;
    data?: WishInfo[];
    message?: string;
}

const useBlessing = () => {
    const [blessingData, setBlessingData] = useState<WishInfo[] | null>(null);

    const getBlessings = useMutation<BlessingResponse, unknown, void>({
        mutationFn: async () => {
            return await blessingFetch();
        },
        onSuccess: async (apiResponse: BlessingResponse) => {
            return apiResponse;
        },
        onError: (err) => {
            throw err || "Lỗi khi tải lời chúc!";
        },
    });

    const fetchBlessings = async () => {
        try {
            const response = await getBlessings.mutateAsync();
            setBlessingData(response.data || null);
        } catch (error) {
            console.error("Lỗi khi tải lời chúc:", error);
        }
    };

    return {
        blessingData,
        loading: getBlessings.isPending,
        error: getBlessings.error as string | null,
        fetchBlessings,
    };
};

export default useBlessing;
