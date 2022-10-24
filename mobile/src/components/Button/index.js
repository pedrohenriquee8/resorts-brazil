import { TouchableOpacity } from "react-native";

export default function Button({ children, ...rest }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    );
}