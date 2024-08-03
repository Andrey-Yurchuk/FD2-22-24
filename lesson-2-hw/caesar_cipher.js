/*** Создайте скрипт для шифрования и дешифрования текста с использованием
простых алгоритмов, таких как Цезарев шифр или шифр Виженера. ***/
/***********************   Цезарев шифр   *******************************/

function caesarEncrypt(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode((code - 65 + shift) % 26 + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode((code - 97 + shift) % 26 + 97);
        }
        return char;
    }).join('');
}

function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, 26 - shift);
}

/******************************** test **********************************/

const text = "zaratustra";
const shift = 3;

const encrypted = caesarEncrypt(text, shift);
console.log(`Encrypted: ${encrypted}`);

const decrypted = caesarDecrypt(encrypted, shift);
console.log(`Decrypted: ${decrypted}`);