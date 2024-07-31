/*** Реализуйте функцию для шифрования и дешифрования текста с использованием более сложных алгоритмов, таких как AES. ***/
/****************** Шифр RC4 (Rivest Cipher 4) ****************/

// Initializing the key for RC4
const rc4Init = (key) => {
    let state = [];
    let indexJ = 0;
    for (let indexI = 0; indexI < 256; indexI++) {
        state[indexI] = indexI;
    }
    for (let indexI = 0; indexI < 256; indexI++) {
        indexJ = (indexJ + state[indexI] + key.charCodeAt(indexI % key.length)) % 256;
        [state[indexI], state[indexJ]] = [state[indexJ], state[indexI]];
    }
    return state;
};

// Generating a pseudorandom sequence
const rc4Generate = (state, length) => {
    let indexI = 0;
    let indexJ = 0;
    let keystream = '';
    for (let n = 0; n < length; n++) {
        indexI = (indexI + 1) % 256;
        indexJ = (indexJ + state[indexI]) % 256;
        [state[indexI], state[indexJ]] = [state[indexJ], state[indexI]];
        keystream += String.fromCharCode(state[(state[indexI] + state[indexJ]) % 256]);
    }
    return keystream;
};

// Encryption and decryption using RC4
const rc4EncryptDecrypt = (text, key) => {
    const state = rc4Init(key);
    const keystream = rc4Generate(state, text.length);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ keystream.charCodeAt(i));
    }
    return result;
};

/************************************ test *****************************************/

const text = 'zorro';
const key = 'secretkey';

console.log('Key:', key);

const encryptedText = rc4EncryptDecrypt(text, key);
console.log('Encrypted:', encryptedText);

const decryptedText = rc4EncryptDecrypt(encryptedText, key);
console.log('Decrypted:', decryptedText);

