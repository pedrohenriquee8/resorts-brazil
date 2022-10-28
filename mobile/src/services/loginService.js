import URL from './config';

export default class LoginService {
    loginUser = async (email, password) => {
        let formBody = [];
        const user = {
            email: email,
            password: password,
        }

        for (const property in user) {
            const encodedKey = encodeURIComponent(property);
            const encondedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + '=' + encondedValue);
        }

        formBody = formBody.join('&');

        try {
            const data = await fetch(`${URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: formBody,
            })
            const resultData = data.json();
            return resultData;
        } catch (error) {
            console.log(error);
        }
    }
}