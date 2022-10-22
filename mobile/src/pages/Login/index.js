import { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { THEME } from "../../theme";
import Background from "../../components/Background";
import Poster from "../../components/Poster";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
    const image = require('../../assets/background-login.png');
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const schema = yup.object({
        email: yup.string().required("Esse campo é obrigatório.").email("Insira um e-mail válido."),
        password: yup.string().required("Esse campo é obrigatório."),
    }).required();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setEmail(data.email);
        setPassword(data.password);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleScreenRegister = () => {
        navigation.navigate("Registro");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Background
                source={image}
                resizeMode="cover"
                style={styles.background}
            />
            <View style={styles.content}>
                <Poster style={styles.poster}>
                    <VStack
                        flex={1}
                        w="full"
                    >
                        <Text
                            fontFamily={THEME.FONT_FAMILY.POPPINS_700BOLD}
                            fontSize={THEME.FONT_SIZE.XL}
                            color={THEME.COLORS.TEXT.BLACK}
                            textAlign="center"
                        >
                            Bem-vindo, viajante!
                        </Text>

                        <Text
                            fontFamily={THEME.FONT_FAMILY.POPPINS_600SEMIBOLD}
                            fontSize={THEME.FONT_SIZE.MD}
                            color={THEME.COLORS.TEXT.GRAY}
                            textAlign="center"
                        >
                            Faça seu login e planeje suas viagens.
                        </Text>

                        <View style={styles.controllers}>
                            <Controller
                                control={control}
                                render={({ field: { onChange } }) => {
                                    return (
                                        <Input
                                            InputLeftElement={
                                                <Ionicons
                                                    name="mail-outline"
                                                    size={22}
                                                    style={{ marginLeft: 4 }}
                                                />
                                            }
                                            placeholder="Insira seu e-mail"
                                            onChangeText={onChange}
                                            errorMessage={
                                                <Text style={styles.error}>{errors.email?.message}</Text>
                                            }
                                        />
                                    );
                                }}
                                name="email"
                            />

                            <Controller
                                control={control}
                                render={({ field: { onChange } }) => {
                                    return (
                                        <Input
                                            InputLeftElement={
                                                <Ionicons
                                                    name="key-outline"
                                                    size={22}
                                                    style={{ marginLeft: 4 }}
                                                />
                                            }
                                            InputRightElement={
                                                <TouchableOpacity onPress={handleShowPassword}>
                                                    {showPassword ?
                                                        <Ionicons
                                                            name="eye"
                                                            size={22}
                                                            style={{ marginRight: 6 }}
                                                        /> :
                                                        <Ionicons
                                                            name="eye-off"
                                                            size={22}
                                                            style={{ marginRight: 6 }}
                                                        />
                                                    }
                                                </TouchableOpacity>
                                            }
                                            placeholder="Insira sua senha"
                                            secureTextEntry={showPassword ? false : true}
                                            onChangeText={onChange}
                                            errorMessage={
                                                <Text style={styles.error}>{errors.password?.message}</Text>
                                            }
                                        />
                                    );
                                }}
                                name="password"
                            />
                        </View>

                        <View style={styles.buttons}>
                            <Button
                                onPress={handleScreenRegister}
                                style={styles.buttonRegister}
                                text="Registrar-se"
                                textStyle={styles.buttonRegisterText}
                            >
                            </Button>
                            <Button
                                onPress={handleSubmit(onSubmit)}
                                style={styles.buttonLogin}
                                text="Acessar"
                                textStyle={styles.buttonLoginText}
                            >
                            </Button>
                        </View>
                    </VStack>
                </Poster>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    content: {
        position: "absolute",
        height: 360,
        width: "100%",
    },
    poster: {
        flex: 1,
        padding: 32,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER,
    },
    controllers: {
        marginVertical: 16,
    },
    buttons: {
        flexDirection: "row",
    },
    buttonRegister: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "transparent",
        marginRight: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER.BLACK,
    },
    buttonLogin: {
        flex: 1,
        alignItems: "center",
        backgroundColor: THEME.COLORS.BUTTON.BLACK,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER.BLACK,
    },
    buttonRegisterText: {
        color: THEME.COLORS.TEXT.BLACK,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    buttonLoginText: {
        color: THEME.COLORS.TEXT.WHITE,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    error: {
        color: THEME.COLORS.TEXT.RED,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.TN,
    },
})