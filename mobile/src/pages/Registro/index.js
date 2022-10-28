import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Ionicons from "@expo/vector-icons/Ionicons";

import { THEME } from "../../theme";
import Background from "../../components/Background";
import Poster from "../../components/Poster";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ControllerRegistro from "./controllerRegistro";

export default function Registro() {
    const image = require('../../assets/background-register.png');
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const schema = yup.object({
        name: yup.string().required("Esse campo é obrigatório."),
        email: yup.string().required("Esse campo é obrigatório.").email("Insira um e-mail válido."),
        password: yup.string().required("Esse campo é obrigatório."),
    }).required();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const controllerRegistro = new ControllerRegistro();
        const dataRegister = await controllerRegistro.registerUser(data.name, data.email, data.password);

        {
            !!dataRegister && dataRegister.sucess === true ?
                Alert.alert(
                    'Sucesso!',
                    'Conta criada com sucesso!',
                    [
                        { text: 'OK', onPress: () => navigation.navigate('Login') },
                    ],
                ) :
                Alert.alert(
                    'Erro!',
                    'Não foi possível criar a conta, confira se o e-mail já está cadastrado.',
                    [
                        { text: 'OK', onPress: () => { } },
                    ],
                );
        }

        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Background
                source={image}
                resizeMode="cover"
                style={{ height: "100%", width: "100%" }}
            />
            <View style={styles.content}>
                <Poster style={styles.poster}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} />
                    </TouchableOpacity>

                    <Heading
                        title="Registre-se, viajante!"
                        subtitle="Preencha os dados e realize seu cadastro com sucesso."
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => {
                            return (
                                <Input
                                    iconLeft="person-circle-sharp"
                                    placeholder="Insira seu nome"
                                    placeholderTextColor={THEME.COLORS.TEXT.GRAY}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            );
                        }}
                        name="name"
                    />
                    {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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

                    <Button
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Button>
                </Poster>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        position: "absolute",
        height: 485,
        width: "100%",
    },
    poster: {
        flex: 1,
        padding: 24,
        flexDirection: "column",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER,
    },
    error: {
        bottom: 4,
        color: THEME.COLORS.TEXT.RED,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.TN,
    },
    button: {
        marginTop: 24,
        padding: 12,
        alignItems: "center",
        backgroundColor: THEME.COLORS.BUTTON.BLACK,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER.BLACK,
    },
    buttonText: {
        color: THEME.COLORS.TEXT.WHITE,
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
})