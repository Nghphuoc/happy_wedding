import { API_KEY } from "@/constants/constants";

export interface infoUserResult {
    status: string;
    data?: {
        NAME: string;
        QUANTITY_ATTENDING: string;
        NICK_NAME: string;
        STATUS: string;
        DATE: string;
        CODE: string;
        CHECK: string;
        NOTE: string;
    };
}

export const getUserInfo = async (codeFromUrl: string) => {
    const response = await fetch(
        `${API_KEY.GOOGLE_SCRIPT_URL}?code=${codeFromUrl}`,
    );
    return response.json();
};