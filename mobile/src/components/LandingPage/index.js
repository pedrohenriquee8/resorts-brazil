import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { THEME } from "../../theme";
import Background from "../Background";

export default function LandingPage() {
    const image = require('../../assets/landingpage.png');
    const Navigation = useNavigation();

    const handleNavigateToLogin = () => {
        Navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Background
                image={image}
                resizeMode="cover"
                height="100%"
                width="100%"
            >
                <View style={styles.content}>
                    <LinearGradient
                        colors={[THEME.COLORS.LINEAR_GRADIENT.START, THEME.COLORS.LINEAR_GRADIENT.END]}
                        style={styles.linearGradient}
                        start={[1.8, 2]}
                        end={[0, 0]}
                    >
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
                    </LinearGradient>
                </View>
            </Background>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        height: 200,
        width: 380,
        right: 2,
        marginTop: 550,
        marginBottom: 32,
    },
    linearGradient: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
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