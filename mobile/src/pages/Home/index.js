import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Background from "../../components/Background";
import Loading from "../../components/Loading";
import Resort from "../../components/Resort";
import Button from "../../components/Button";

import ResortController from "./resortController";

import { useAuth } from "../../contexts/authContext";
import { THEME } from "../../theme";

export default function Home() {
    const image = require("../../assets/background-home.png");
    const userLogo = require("../../assets/user-logo.png");

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user, signOut } = useAuth();

    const handleExit = () => {
        signOut();
    }

    const getResorts = async () => {
        try {
            const resortController = await new ResortController().getResort();
            setData(resortController);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getResorts();
    }, []);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background
                source={image}
                style={{ height: "100%", width: "100%" }}
            />

            <View style={styles.content}>
                <View style={styles.topPage}>
                    <Button onPress={handleExit}>
                        <Ionicons
                            name="exit-outline"
                            size={24}
                            color="red"
                        />
                    </Button>
                    <Background
                        source={userLogo}
                        style={{ height: 35, width: 35, bottom: 8 }}
                    />
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>Navegue pelos paraísos à beira-mar,</Text>
                    <Text style={styles.subtitle}>{user.name}</Text>
                </View>

                <View style={styles.scrollView}>
                    {data.length !== 0 ?
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        >
                            <View style={{ flexDirection: "row" }}>
                                {data.resort.map((item) => {
                                    return (
                                        <Resort key={item.id} data={item} style={styles.cards} />
                                    );
                                })}
                            </View>
                        </ScrollView>
                        : <Loading />}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    topPage: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        top: 45,
    },
    header: {
        top: 60,
        left: 20,
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    subtitle: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.XL,
    },
    scrollView: {
        top: 100,
        marginLeft: 12,
    },
    cards: {
        marginRight: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: THEME.COLORS.BORDER.BLACK,
    }
});