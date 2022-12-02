import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../Card";

import { THEME } from "../../theme";

export default function Resort({ data, ...rest }) {
    const navigation = useNavigation();

    const handleDetails = () => {
        navigation.navigate("Details", { infoResort: data });
    }

    return (
        <TouchableOpacity {...rest} activeOpacity={0.8} onPress={handleDetails}>
            <Card
                image={{ uri: data.image }}
                title={data.name}
                rating={data.rating}
                description={data.description}
                location={data.location}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "5%",
        borderRadius: 10,
        backgroundColor: "#fff",
        borderColor: THEME.COLORS.BORDER.BLACK,
        borderWidth: 1,
    },
});