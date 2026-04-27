export const checkValidData = (name,number) =>{
    const isPhoneNumberValid = !number || /^[6-9]\d{9}$/.test(number)
    const isNameValid = !name || /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(name)

    if(!isNameValid) return "Full Name is not valid."
    if(!isPhoneNumberValid) return "Phone Number is not valid"
    return null
}