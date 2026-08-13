import { getUserInfo, infoUserResult } from "@/services/UserInforService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const useGetInfo = (codeFromUrl: string) => {
    const [userInfo, setUserInfo] = useState<infoUserResult>({ status: "pending" });

    const getInfo = useMutation<infoUserResult, unknown, void>({
        mutationFn: async () => {
            return await getUserInfo(codeFromUrl);
        },
        onSuccess: async (apiResponse: infoUserResult) => {
            return apiResponse;
        },
        onError: (err) => {
            throw err || "Lỗi khi tải thông tin User!";
        },
    });

    const fetchUserInfo = async () => {
        try {
            const response = await getInfo.mutateAsync();
            setUserInfo(response || null);
        } catch (error) {
            console.error("Lỗi khi tải thông tin User", error);
        }
    };

    return {
        userInfo,
        loading: getInfo.isPending,
        error: getInfo.error as string | null,
        fetchUserInfo,
    };
};

export default useGetInfo;