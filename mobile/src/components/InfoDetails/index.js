import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView from "react-native-maps";

import Background from "../Background";
import Loading from "../Loading";

import { THEME } from "../../theme";

export default function InfoDetails({ image, title, rating, description, location, coords }) {
    const { latitude, longitude } = coords;

    return (
        <SafeAreaView style={{ flex: 1 }}>
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

                <View style={styles.map}>
                    {latitude && longitude ? <MapView
                        style={{ flex: 1 }}
                        minZoomLevel={12}
                        maxZoomLevel={20}
                        camera={{
                            center: {
                                latitude: latitude,
                                longitude: longitude,
                            },
                            pitch: 0,
                            heading: 0,
                            zoom: 12,
                        }}
                        mapType="standard"
                    /> : <Loading />}
                </View>
            </View>
        </SafeAreaView>
    );
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
    map: {
        height: 270,
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        borderColor: THEME.COLORS.BORDER.BLACK,
        borderWidth: 1,
        borderRadius: 2,
    }
})