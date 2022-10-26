import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import Loading from "../components/Loading";

export default function Routes() {
    const { signed, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <NavigationContainer>
            {signed ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}