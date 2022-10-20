import { ImageBackground } from "react-native";

export default function Background({ image, resizeMode, style }) {
    return (
        <ImageBackground
            source={image}
            resizeMode={resizeMode}
            style={style}
        />
    )
}