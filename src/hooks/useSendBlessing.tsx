import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchSendBlessing, RsvpResponse } from "@/services/SendBlessingService";

export const useSendBlessing = () => {
    const queryClient = useQueryClient();

    const sendBlessingMutation = useMutation<RsvpResponse, Error, FormData>({
        mutationFn: async (formData: FormData) => {
            return await fetchSendBlessing(formData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishes"] });
        },
        onError: (err) => {
            console.error("Lỗi gửi lời chúc:", err.message);
        },
    });

    return sendBlessingMutation;
};
