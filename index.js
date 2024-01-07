const charecters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let userChar = 15;
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let newPassword = []

function randomPassword() {
    newPassword = []
    for (let i = 1; i <= userChar; i++) {
        let randomNumber = Math.floor(Math.random() * charecters.length);
        newPassword += charecters[randomNumber];
    }
    return newPassword;
}

function generatePassword() {
    password1.textContent = randomPassword();
    password2.textContent = randomPassword();
}