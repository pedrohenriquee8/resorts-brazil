import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Background from "../Background";
import Button from "../Button";
import { useFavorites } from "../../contexts/favoriteContext";
import { THEME } from "../../theme";

export default function Resort({ data, ...rest }) {
    const navigation = useNavigation();

    const [isFavorite, setIsFavorite] = useState(false);
    const { favorites, setFavorites } = useFavorites();

    const handleDetails = () => {
        navigation.navigate("Details", { infoResort: data });
    }

    const handleAddResortToFavorites = () => {
        setFavorites([...favorites, data]);
        setIsFavorite(!isFavorite);
    }

    const handleRemoveResortFromFavorites = () => {
        const newFavorites = favorites.filter(favorite => favorite.id !== data.id);
        setFavorites(newFavorites);
        setIsFavorite(!isFavorite);
    }

    return (
        <TouchableOpacity {...rest} activeOpacity={0.8} onPress={handleDetails}>
            <View style={styles.container}>
                <Background
                    source={{ uri: data.image }}
                    borderTopLeftRadius={10}
                    borderTopRightRadius={10}
                    style={styles.image}
                />

                <View style={{ padding: 5 }}>
                    <View style={styles.headerCard}>
                        <Text style={styles.title}>{data.name}</Text>
                        <Button onPress={isFavorite ? handleRemoveResortFromFavorites : handleAddResortToFavorites}>
                            <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={20} color={isFavorite ? "red" : "black"} />
                        </Button>
                    </View>

                    <Text style={styles.description}>{data.description}</Text>

                    <View style={styles.location}>
                        <Ionicons
                            name="location-outline"
                            size={12}
                            color={THEME.COLORS.LOCATION.BROWN}
                        />
                        <Text style={styles.locationText}>{data.location}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 450,
        width: 350,
        backgroundColor: "white",
        borderRadius: 10,
    },
    image: {
        height: 200,
        width: "100%",
    },
    headerCard: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    rating: {
        flexDirection: "row",
    },
    ratingText: {
        marginLeft: 3,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.XS,
    },
    description: {
        marginTop: 4,
        textAlign: "justify",
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT.GRAY,
    },
    location: {
        flexDirection: "row",
        marginTop: 6,
    },
    locationText: {
        marginLeft: 1,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.XS,
        color: THEME.COLORS.TEXT.BROWN,
    },
});