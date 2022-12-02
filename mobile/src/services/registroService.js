import URL from './config';

export default class RegistroService {
    registerUser = async (name, email, password) => {
        let formBody = [];
        formBody.push(`name=${encodeURIComponent(name)}`);
        formBody.push(`email=${encodeURIComponent(email)}`);
        formBody.push(`password=${encodeURIComponent(password)}`);
        formBody = formBody.join("&");

        try {
            const data = await fetch(`${URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', },
                body: formBody,
            });
            const response = data.json();
            return response;
        } catch (error) {
            throw error;
        }
    };
}