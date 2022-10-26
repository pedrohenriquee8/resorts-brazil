import { SafeAreaView, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";

import { useAuth } from "../../contexts/auth";

export default function Home() {
    const { signOut, user } = useAuth();

    const handleSignOut = () => {
        signOut();
    }
    console.log(user)
    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={handleSignOut}>
                <Text>Clique</Text>
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