import LoginService from "../../services/loginService";

export default class ControllerLogin {
    loginUser = async (email, password) => {
        const sendingData = new LoginService();
        const data = await sendingData.loginUser(email, password);
        if (!!data) {
            console.log(data)
            return data;
        }
    }
}