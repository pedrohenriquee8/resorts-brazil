import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../contexts/authContext";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import Loading from "../components/Loading";
import { FavoriteProvider } from "../contexts/favoriteContext";

export default function Routes() {
    const { signed, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <NavigationContainer>
            {signed ?
                <FavoriteProvider>
                    <AppRoutes />
                </FavoriteProvider>
                : <AuthRoutes />}
        </NavigationContainer>
    );
}