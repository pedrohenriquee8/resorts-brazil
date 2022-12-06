import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { THEME } from "../../theme";
import Background from "../../components/Background";
import Poster from "../../components/Poster";
import Heading from "../../components/Heading";

export default function LandingPage() {
    const image = require('../../assets/background-landingpage.png');
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Background
                source={image}
                resizeMode="cover"
                style={styles.background}
            />
            <Animatable.View
                animation="fadeInUp"
                style={styles.content}
            >
                <Poster style={styles.poster}>
                    <Heading
                        title="Conheça os melhores resorts!"
                        subtitle="Explore e encontre os paraísos à beira-mar."
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleNavigateToLogin}
                    >
                        <Ionicons
                            name="airplane-outline"
                            size={28}
                            style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
                </Poster>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    background: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    content: {
        position: "absolute",
        bottom: 48,
        height: 200,
        width: "100%",
    },
    poster: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER,
    },
    button: {
        marginTop: 18,
        padding: 12,
        borderRadius: 50,
        backgroundColor: THEME.COLORS.BUTTON.BLACK,
    },
    buttonIcon: {
        color: THEME.COLORS.BUTTON.WHITE,
    }
})