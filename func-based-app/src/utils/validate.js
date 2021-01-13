export const validateSignin = (values) => {
    const {username, password} = values; // val.userName
    if(username === '' || password === '') {
        return "Username and Password fields can't be empty"
    } else if(password.length < 8) {
        return "Password can't contain less then 8 characters"
    } else {
        return "You have successfully signed in!";
    }
}

export const validateSignup = (values) => {
    const {username, password, email} = values; // val.userName
    if(username === '' || password === '' || email === '') {
        return "Username, Password and Email fields can't be empty"
    } else if(password.length < 8) {
        return "Password can't contain less then 8 characters"
    } else {
        return "You have successfully registered!";
    }
}