import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { THEME } from "../../theme";
import Background from "../../components/Background";
import Poster from "../../components/Poster";

export default function LandingPage() {
    const image = require('../../assets/background-landingpage.png');
    const Navigation = useNavigation();

    const handleNavigateToLogin = () => {
        Navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Background
                source={image}
                resizeMode="cover"
                style={styles.background}
            />
            <View style={styles.content}>
                <Poster style={styles.poster}>
                    <Text style={styles.title}>Conheça os melhores resorts!</Text>
                    <Text style={styles.subTitle}>Explore e encontre os paraísos à beira-mar.</Text>

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
            </View>
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
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.LG,
        color: THEME.COLORS.TEXT.BLACK,
    },
    subTitle: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT.GRAY,
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