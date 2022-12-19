import { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Text } from "react-native";

import Input from "../../components/Input";
import ResortController from "../../pages/Home/resortController";
import Loading from "../../components/Loading";
import Background from "../../components/Background";
import InfoFavorites from "../../components/InfoFavorites";

import { useAuth } from "../../contexts/authContext";
import { THEME } from "../../theme";

export default function Search() {
    const image = require("../../assets/background-home.png");
    const userLogo = require("../../assets/user-logo.png");

    const { user } = useAuth();

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getResorts();
    }, []);

    const getResorts = async () => {
        try {
            const resortController = await new ResortController().getResort();
            setData(resortController.resort);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = data.filter(resort => {
                const itemData = resort.name ? resort.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(data);
            setSearch(text);
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Background
                source={image}
                style={{ height: "100%", width: "100%" }}
            />

            <View style={styles.content}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Pesquise pelos resorts desejados,</Text>
                        <Text style={styles.subtitle}>{user.name}</Text>
                    </View>

                    <Background
                        source={userLogo}
                        style={{ height: 40, width: 40, bottom: 4 }}
                    />
                </View>

                <View style={styles.input}>
                    <Input
                        iconLeft="search-outline"
                        placeholder="Pesquise por um destino"
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>

                <View style={{ marginBottom: 240 }}>
                    <FlatList
                        data={filteredData}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.cards}>
                                <InfoFavorites
                                    title={item.name}
                                    rating={item.rating}
                                    description={item.description}
                                    image={{ uri: item.image }}
                                    location={item.location}
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        position: "absolute",
        marginTop: 80,
        marginHorizontal: 20,
        height: "100%",
    },
    input: {
        minWidth: "100%",
        marginBottom: 15,
    },
    header: {
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    subtitle: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.XL,
    },
    cards: {
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: THEME.COLORS.BORDER.BLACK,
        backgroundColor: THEME.COLORS.CARD.BACKGROUND,
    }
});