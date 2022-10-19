import { ImageBackground } from "react-native";

export default function Background({ image, resizeMode, height, width, children }) {
    return (
        <ImageBackground
            source={image}
            resizeMode={resizeMode}
            style={{
                height: height,
                width: width,
            }}
        >
            {children}
        </ImageBackground>
    )
}