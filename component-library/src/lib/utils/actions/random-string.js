// generate random string of lowercase letters of (length)
export const randomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor((Math.random() * 26)))
    }
    return result;
}