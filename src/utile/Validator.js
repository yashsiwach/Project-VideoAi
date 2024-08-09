export const validate = (email, password,fullName) => {
    const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullName = /^[a-zA-Z\s]*$/.test(fullName);
    if (!isEmail) {
        return "Invalid Email";
    }
    if (!isPassword) {
        return "Invalid Password";
    }
   
    return null;
};