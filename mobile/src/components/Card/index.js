import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Background from "../Background";

import { THEME } from "../../theme";

export default function Card({ image, title, rating, description, location }) {
    return (
        <View style={{ flex: 1 }}>
            <Background
                source={image}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                style={styles.image}
            />

            <View style={{ padding: 5 }}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.rating}>
                    <Ionicons
                        name="star"
                        size={12}
                        color={THEME.COLORS.RATING.YELLOW}
                    />
                    <Text style={styles.ratingText}>{rating}/5</Text>
                </View>

                <Text style={styles.description}>{description}</Text>

                <View style={styles.location}>
                    <Ionicons
                        name="location-outline"
                        size={12}
                        color={THEME.COLORS.LOCATION.BROWN}
                    />
                    <Text style={styles.locationText}>{location}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: "100%",
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