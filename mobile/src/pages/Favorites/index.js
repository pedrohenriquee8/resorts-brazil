import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../../contexts/authContext";
import { useFavorites } from "../../contexts/favoriteContext";

import Background from "../../components/Background";
import Card from "../../components/Card";

import { THEME } from "../../theme";

export default function Favorites() {
    const image = require("../../assets/background-home.png");
    const userLogo = require("../../assets/user-logo.png");

    const { favorites } = useFavorites();
    const { user } = useAuth();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background
                source={image}
                style={{ height: "100%", width: "100%" }}
            />

            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Seus favoritos,</Text>
                        <Text style={styles.subtitle}>{user.name}</Text>
                    </View>

                    <Background
                        source={userLogo}
                        style={{ height: 40, width: 40, bottom: 4 }}
                    />
                </View>

                <View style={{ marginTop: 12, marginBottom: 120 }}>
                    <FlatList
                        data={favorites}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Card
                                    image={{ uri: item.image }}
                                    title={item.name}
                                    rating={item.rating}
                                    description={item.description}
                                    location={item.location}
                                />
                            </View>
                        )}
                        ListEmptyComponent={() => {
                            return (
                                <Text style={styles.noFavorites}>Nenhum favorito adicionado!</Text>
                            );
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        marginHorizontal: 20,
        marginVertical: 50,
        width: "90%",
        height: "100%",
    },
    header: {
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
    card: {
        backgroundColor: THEME.COLORS.CARD.BACKGROUND,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: THEME.COLORS.BORDER.BLACK,
        marginBottom: 12,
    },
    noFavorites: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_500MEDIUM,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT.BLACK,
    }
});