"use client";

import { infoUserResult } from "@/services/UserInforService";
import { createContext, useContext, useState, ReactNode } from "react";


interface UserContextType {
    globalUserInfo: infoUserResult | undefined;
    setGlobalUserInfo: (info: infoUserResult) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [globalUserInfo, setGlobalUserInfo] = useState<infoUserResult | undefined>();

    return (
        <UserContext.Provider value={{ globalUserInfo, setGlobalUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};