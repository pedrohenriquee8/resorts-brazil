import { Button as ButtonNativeBase, Text } from "native-base";

export default function Button({ textStyle, text, ...rest }) {
    return (
        <ButtonNativeBase
            w="full"
            p={4}
            _pressed={{
                opacity: 0.7,
            }}
            {...rest}
        >
            <Text style={textStyle}>{text}</Text>
        </ButtonNativeBase>
    );
}