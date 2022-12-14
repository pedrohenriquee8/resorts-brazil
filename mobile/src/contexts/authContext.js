import { createContext, useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../services/authService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadStorageData = async () => {
            const storagedUser = await AsyncStorage.getItem("@ResortBrazil:user");
            const storagedToken = await AsyncStorage.getItem("@ResortBrazil:token");

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }
        }

        loadStorageData();
    }, []);

    const signIn = async (name, email, password) => {
        const response = await auth.Auth();
        response["user"]["name"] = name;
        response["user"]["email"] = email;
        response["user"]["password"] = password;
        setUser(response.user);
        await AsyncStorage.setItem("@ResortBrazil:user", JSON.stringify(response.user));
        await AsyncStorage.setItem("@ResortBrazil:token", response.token);
    }

    const signOut = () => {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, isLoading, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
};