import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

import Background from "../../components/Background";
import Loading from "../../components/Loading";
import Input from "../../components/Input";
import ResortController from "./resortController";
import Resort from "../../components/Resort";

import { useAuth } from "../../contexts/authContext";
import { THEME } from "../../theme";

export default function Home() {
    const image = require("../../assets/background-home.png");
    const userLogo = require("../../assets/user-logo.png");

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useAuth();

    const getResorts = async () => {
        try {
            const resortController = new ResortController();
            const response = await resortController.getResort();
            setData(response);
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

            <Animatable.View
                animation="fadeInUp"
                style={styles.content}
            >
                <View style={{ width: "100%", top: 45 }}>
                    <Background
                        source={userLogo}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>Navegue pelos paraísos à beira-mar,</Text>
                    <Text style={styles.subtitle}>{user.name}</Text>
                </View>

                <View style={styles.input}>
                    <Input
                        iconLeft="search-outline"
                        placeholder="Pesquise por um destino"
                    />
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
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    logo: {
        top: "7%",
        left: "85%",
        height: 35,
        width: 35,
    },
    header: {
        top: "9%",
        left: "5%",
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    subtitle: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.XL,
    },
    input: {
        top: "10%",
        paddingHorizontal: "5%",
    },
    scrollView: {
        top: "12%",
        marginLeft: "5%",
    },
    cards: {
        backgroundColor: THEME.COLORS.CARD.BACKGROUND,
        borderColor: THEME.COLORS.BORDER.BLACK,
        borderRadius: 10,
        borderWidth: 1,
        height: 480,
        width: 300,
        marginRight: 8,
    }
});