import { View, ActivityIndicator, StyleSheet } from "react-native";

import { THEME } from "../../theme";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={THEME.COLORS.ACTIVY_INDICATOR}
                size='large'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifiyContent: 'center',
        alignItems: 'center',
    }
})