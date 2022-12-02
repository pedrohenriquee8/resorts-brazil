import { Text, View } from "react-native";

export default function Details({ route }) {
    const data = route.params.infoResort;

    return (
        <View>
            <Text>{data.name}</Text>
        </View>
    )

}