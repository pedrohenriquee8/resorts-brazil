import { StyleSheet, Text, View } from "react-native";

import { THEME } from "../../theme";

export default function Heading({ title, subtitle, children, ...rest }) {
    return (
        <View {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                {subtitle}
            </Text>

            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.XL,
        color: THEME.COLORS.TEXT.BLACK,
        textAlign: "center",
    },
    subtitle: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT.GRAY,
        textAlign: "center",
    }
})