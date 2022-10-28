export function Auth(name, email, password) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "123456789",
                user: {
                    name: name,
                    email: email,
                    password: password
                }
            })
        }, 1000)
    });
}