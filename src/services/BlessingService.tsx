import { API_KEY } from "@/constants/constants";

export const blessingFetch = async () => {
    const response = await fetch(API_KEY.GOOGLE_SCRIPT_URL, {
        method: "GET",
        redirect: "follow",
    });

    return await response.json();
};
