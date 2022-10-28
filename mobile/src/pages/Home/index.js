import { SafeAreaView, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";

import { useAuth } from "../../contexts/authContext";

export default function Home() {
    const { signOut, user } = useAuth();

    const handleSignOut = () => {
        signOut();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={handleSignOut}>
                <Text>Clique {user.name}</Text>
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})