import { TextInput, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { THEME } from "../../theme";

export default function Input({ iconLeft, children, ...rest }) {
    return (
        <View style={styles.container}>
            <Ionicons
                name={iconLeft}
                size={22}
                style={{ marginLeft: 12 }}
            />
            <TextInput
                style={styles.input}
                {...rest}
            />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 4,
        alignItems: "center",
        height: 50,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: THEME.COLORS.BORDER.BLACK,
        borderWidth: 1,
    },
    input: {
        flexDirection: "row",
        padding: 12,
        width: "75%",
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.POPPINS_500MEDIUM,
    },
})