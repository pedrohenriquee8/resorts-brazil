import RegistroService from "../../services/registroService";

export default class ControllerRegistro {
    registerUser = async (name, email, password) => {
        const registroService = new RegistroService();
        const response = await registroService.registerUser(name, email, password);
        if (!!response) {
            return response;
        }
    };
}
