import LoginService from "../../services/loginService";

export default class ControllerLogin {
    loginUser = async (email, password) => {
        const loginService = new LoginService();
        const response = await loginService.loginUser(email, password);
        if (!!response) {
            return response;
        }
    }
}