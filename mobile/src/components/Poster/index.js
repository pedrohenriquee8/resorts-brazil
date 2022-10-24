import { LinearGradient } from "expo-linear-gradient";

import { THEME } from "../../theme";

export default function Poster({ children, style }) {
    return (
        <LinearGradient
            colors={[THEME.COLORS.LINEAR_GRADIENT.START, THEME.COLORS.LINEAR_GRADIENT.END]}
            style={style}
            start={[1.8, 2]}
            end={[0, 0]}
        >
            {children}
        </LinearGradient>
    );
}