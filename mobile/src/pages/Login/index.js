import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Ionicons from "@expo/vector-icons/Ionicons";

import { THEME } from "../../theme";
import Background from "../../components/Background";
import Poster from "../../components/Poster";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Heading from "../../components/Heading";

import { useAuth } from "../../contexts/authContext";
import ControllerLogin from "./controllerLogin";

export default function Login() {
    const image = require('../../assets/background-login.png');
    const navigation = useNavigation();
    const { signIn } = useAuth();

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

    const onSubmit = async (data) => {
        const controllerLogin = new ControllerLogin();
        const responseLogin = await controllerLogin.loginUser(data.email, data.password);

        {
            !!responseLogin && responseLogin.sucess === true ?
                signIn(responseLogin.user.name, responseLogin.user.email, responseLogin.user.password) :
                Alert.alert(
                    'Erro!',
                    'Não foi possível encontrar a conta, confira se o e-mail já está cadastrado ou confira se a senha está correta.',
                    [
                        { text: 'OK', onPress: () => { } },
                    ],
                );
        }

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
                style={{ height: "100%", width: "100%" }}
            />

            <Animatable.View
                animation="fadeInUp"
                style={styles.content}
            >
                <Poster style={styles.poster}>
                    <Heading
                        title="Bem-vindo de volta!"
                        subtitle="Faça seu login e planeje suas viagens."
                        style={{ marginBottom: 12 }}
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => {
                            return (
                                <Input
                                    iconLeft="mail"
                                    placeholder="Insira seu e-mail"
                                    placeholderTextColor={THEME.COLORS.TEXT.GRAY}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            );
                        }}
                        name="email"
                    />
                    {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => {
                            return (
                                <Input
                                    iconLeft="key"
                                    placeholder="Insira sua senha"
                                    placeholderTextColor={THEME.COLORS.TEXT.GRAY}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={showPassword ? false : true}
                                >
                                    <TouchableOpacity onPress={handleShowPassword} style={{ marginHorizontal: 10 }}>
                                        {showPassword ?
                                            <Ionicons
                                                name="eye"
                                                size={24}
                                            /> :
                                            <Ionicons
                                                name="eye-off"
                                                size={24}
                                            />
                                        }
                                    </TouchableOpacity>
                                </Input>
                            );
                        }}
                        name="password"
                    />
                    {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

                    <View style={styles.buttons}>
                        <Button
                            onPress={handleScreenRegister}
                            style={styles.buttonRegister}
                        >
                            <Text style={styles.buttonRegisterText}>Registrar-se</Text>
                        </Button>
                        <Button
                            onPress={handleSubmit(onSubmit)}
                            style={styles.buttonLogin}
                        >
                            <Text style={styles.buttonLoginText}>Acessar</Text>
                        </Button>
                    </View>
                </Poster>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    buttons: {
        flexDirection: "row",
        marginTop: 12,
    },
    buttonRegister: {
        flex: 1,
        padding: 12,
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
        padding: 12,
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
        marginLeft: 6,
        color: THEME.COLORS.TEXT.WHITE,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    error: {
        bottom: 4,
        right: 90,
        color: THEME.COLORS.TEXT.RED,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.XS,
    },
})