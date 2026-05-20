import { API_KEY } from "@/constants/constants";

export interface RsvpResponse {
    status: string;
    message?: string;
}

export const fetchSendBlessing = async (formData: FormData): Promise<RsvpResponse> => {
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
        searchParams.append(key, value as string);
    });

    const response = await fetch(API_KEY.GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: searchParams,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return await response.json();
};
