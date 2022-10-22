import { View, ActivityIndicator, StyleSheet } from "react-native";

import { THEME } from "../../theme";
import Poster from "../Poster";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Poster style={styles.poster}>
                <ActivityIndicator
                    color={THEME.COLORS.ACTIVY_INDICATOR}
                    size={40}
                />
            </Poster>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    poster: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})