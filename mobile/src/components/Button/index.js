import { Text, TouchableOpacity } from "react-native";

export default function Button({ styleButton, text, styleText, onPress }) {
    return (
        <TouchableOpacity
            style={styleButton}
            onPress={onPress}
        >
            <Text style={styleText}>{text}</Text>
        </TouchableOpacity>
    )
}