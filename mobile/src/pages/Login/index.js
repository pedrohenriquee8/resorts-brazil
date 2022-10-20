import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { THEME } from "../../theme";
import Background from "../../components/Background";
import Poster from "../../components/Poster";
import Button from "../../components/Button";

export default function Login() {
    const image = require('../../assets/background-login.png');
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        setEmail(data.email);
        setPassword(data.password)
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
                image={image}
                resizeMode="cover"
                style={styles.background}
            />
            <View style={styles.content}>
                <Poster style={styles.poster}>
                    <Text style={styles.title}>Bem-vindo, viajante!</Text>
                    <Text style={styles.subTitle}>Faça seu login e planeje suas viagens.</Text>

                    <View style={styles.form}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => {
                                return (
                                    <View style={styles.fieldInput}>
                                        <View style={styles.iconText}>
                                            <Ionicons
                                                name="mail-outline"
                                                size={22}
                                            />

                                            <TextInput
                                                style={styles.input}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                placeholder="Insira seu e-mail"
                                                placeholderTextColor={THEME.COLORS.TEXT.GRAY}
                                            />
                                        </View>
                                    </View>
                                )
                            }}
                            name="email"
                        />
                        {errors.email && <Text style={styles.error}>Este campo é obrigatório.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => {
                                return (
                                    <View style={styles.fieldInput}>
                                        <View style={styles.iconText}>
                                            <Ionicons
                                                name="key-outline"
                                                size={22}
                                            />

                                            <TextInput
                                                style={styles.input}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                secureTextEntry={showPassword ? false : true}
                                                placeholder="Insira sua senha"
                                                placeholderTextColor={THEME.COLORS.TEXT.GRAY}
                                            />
                                        </View>

                                        <TouchableOpacity
                                            onPress={handleShowPassword}
                                        >
                                            {showPassword ?
                                                <Ionicons
                                                    name="eye"
                                                    size={22}
                                                /> :
                                                <Ionicons
                                                    name="eye-off"
                                                    size={22}
                                                />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                            name="password"
                        />
                        {errors.password && <Text style={styles.error}>Este campo é obrigatório.</Text>}
                    </View>

                    <View style={styles.buttons}>
                        <Button
                            onPress={handleScreenRegister}
                            styleButton={styles.buttonRegister}
                            text="Registrar-se"
                            styleText={styles.buttonRegisterText}
                        >
                        </Button>
                        <Button
                            onPress={handleSubmit(onSubmit)}
                            styleButton={styles.buttonLogin}
                            text="Acessar"
                            styleText={styles.buttonLoginText}
                        >
                        </Button>
                    </View>
                </Poster>
            </View>
        </SafeAreaView>
    )
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
        height: 350,
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
    title: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_700BOLD,
        fontSize: THEME.FONT_SIZE.LG,
        color: THEME.COLORS.TEXT.BLACK,
    },
    subTitle: {
        fontFamily: THEME.FONT_FAMILY.POPPINS_600SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT.GRAY,
    },
    form: {
        flex: 1,
        marginTop: 24,
    },
    fieldInput: {
        flexDirection: "row",
        marginBottom: 12,
        padding: 12,
        height: 50,
        width: 300,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: THEME.COLORS.BORDER,
        backgroundColor: THEME.COLORS.INPUT.BACKGROUND,
        color: THEME.COLORS.TEXT.BLACK,
    },
    iconText: {
        flexDirection: "row",
    },
    input: {
        marginLeft: 12,
    },
    buttons: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    buttonRegister: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "transparent",
        padding: 12,
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
        padding: 12,
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
        marginLeft: 4,
        bottom: 10,
    }
})