import SendingData from "../../services/registroService";

export default class ControllerRegistro {
    registerUser = async (name, email, password) => {
        const sendingData = new SendingData();
        const dataToServer = await sendingData.registerUser(name, email, password);
        const status = dataToServer.status;
        return status;
    };
}
