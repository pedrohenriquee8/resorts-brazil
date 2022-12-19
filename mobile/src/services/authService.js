export function Auth(name, email, password) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: Math.random().toString(36).substring(7),
                user: {
                    name: name,
                    email: email,
                    password: password
                }
            })
        }, 1000)
    });
}