import SendingData from "../../services/sendingData";

export default class ControllerRegistro {
    registerUser = async (name, email, password) => {
        const sendingData = new SendingData();
        const dataToServer = await sendingData.registerUser(name, email, password);
        const status = dataToServer.status;
        console.log("STATUS" + status);
        return status;
    };
}
