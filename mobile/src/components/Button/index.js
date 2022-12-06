import { TouchableOpacity } from "react-native";

export default function Button({ children, ...rest }) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    );
}