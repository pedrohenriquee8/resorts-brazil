import URL from './config';

export default class SendingData {
    registerUser = async (name, email, password) => {
        let formBody = [];
        const user = {
            name: name,
            email: email,
            password: password,
        }

        for (const property in user) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }

        formBody = formBody.join('&');

        try {
            const sendDataToServer = await fetch(`${URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: formBody,
            });

            if (sendDataToServer.status === 200) {
                return { status: 200 };
            } else {
                return { status: 409 };
            }
        } catch (error) {
            throw error;
        }

    };
}