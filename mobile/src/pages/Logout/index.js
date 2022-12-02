import { Alert, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/Button";

export default function Logout() {
    const { signOut } = useAuth();

    const handleLogout = () => {
        signOut();
    }

    return (
        <View style={{ marginTop: 100 }}>
            <Button
                onPress={handleLogout}
            >
                <Text>ASADKAJDAIJDIAJI</Text>
            </Button>
        </View>
    );
}