import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Background from "../../components/Background";
import InfoDetails from "../../components/InfoDetails";

import { THEME } from "../../theme";

export default function Details({ route }) {
    const data = route.params.infoResort;
    console.log(data);

    const image = require("../../assets/background-home.png");
    const userLogo = require("../../assets/user-logo.png");

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background
                source={image}
                resizeMode="cover"
                style={{ height: "100%", width: "100%" }}
            />

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} />
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>{data.name}</Text>

                    <Background
                        source={userLogo}
                        style={{ height: 30, width: 30, bottom: 4 }}
                    />
                </View>

                <ScrollView style={styles.content}>
                    <InfoDetails
                        image={{ uri: data.image }}
                        title={data.name}
                        rating={data.rating}
                        description={data.description}
                        location={data.location}
                        coords={{
                            latitude: data.latitude,
                            longitude: data.longitude,
                        }}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "95%",
        height: "100%",
        marginHorizontal: 10,
    },
    content: {
        backgroundColor: "#fff",
        marginTop: 80,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: THEME.COLORS.BORDER.BLACK,
    },
    header: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        top: 60,
        justifyContent: "space-around",
        alignItems: "center",
    },
    textHeader: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT.BLACK,
    },
});