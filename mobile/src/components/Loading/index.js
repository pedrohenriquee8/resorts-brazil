import { ActivityIndicator, StyleSheet } from "react-native";

import { THEME } from "../../theme";

export default function Loading() {
    return (
        <ActivityIndicator
            color={THEME.COLORS.ACTIVY_INDICATOR.BLUE}
            style={styles.container}
            size={40}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});