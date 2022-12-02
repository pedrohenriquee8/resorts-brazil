import URL from './config';

export default class LoginService {
    loginUser = async (email, password) => {
        let formBody = [];
        formBody.push(`email=${encodeURIComponent(email)}`);
        formBody.push(`password=${encodeURIComponent(password)}`);
        formBody = formBody.join("&");

        try {
            const data = await fetch(`${URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', },
                body: formBody,
            })
            const response = data.json();
            return response;
        } catch (error) {
            throw error;
        }
    }
}