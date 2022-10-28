import RegistroService from "../../services/registroService";

export default class ControllerRegistro {
    registerUser = async (name, email, password) => {
        const registroService = new RegistroService();
        const data = await registroService.registerUser(name, email, password);
        if (!!data) {
            return data;
        }
    };
}
