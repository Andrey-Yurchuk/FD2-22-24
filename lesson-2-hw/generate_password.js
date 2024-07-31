/*** Напишите скрипт для генерации случайных паролей с заданной длиной и набором символов
 (буквы, цифры, специальные символы). Добавьте возможность выбора параметров (например,
 включение/исключение определенных типов символов). ***/

function generatePassword(length, options) {

    const [useUppercase, useLowercase, useNumbers, useSpecialChars] = options;

    let characters = '';

    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSpecialChars) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (characters.length === 0) {
        throw new Error('There are no characters available to generate a password');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

/*********************************** test ************************************************/

const options = [true, true, true, true];
const length = 12;
const password = generatePassword(length, options);
console.log('Generated password:', password);
