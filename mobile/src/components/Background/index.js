import { ImageBackground } from "react-native";

export default function Background({ children, ...rest }) {
    return (
        <ImageBackground {...rest}>
            {children}
        </ImageBackground>
    );
}