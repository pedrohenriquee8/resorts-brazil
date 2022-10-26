export function Auth() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "123456789",
                user: {
                    name: "",
                    email: "",
                    password: "",
                }
            })
        }, 1000)
    });
}