function vigenereEncrypt(plainText, key) {
    let encryptedText = ''; //string kosong unutk tampung plaintext
    let keyIndex = 0; //

    for (let i = 0; i < plainText.length; i++) {
        const char = plainText[i].toUpperCase();

        if (char.match(/[A-Z]/)) {
            const shift = key[keyIndex].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            const encryptedChar = String.fromCharCode((char.charCodeAt(0) + shift - 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0));

            encryptedText += (plainText[i] === char) ? encryptedChar : encryptedChar.toUpperCase();
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function encrypt() {
    const plaintext = document.getElementById('plaintext').value;
    const key = document.getElementById('key').value;
    const result = vigenereEncrypt(plaintext, key);

    document.getElementById('result').value = result;
}
//deskripsi

function vigenereDecrypt(encryptedText, key) {
    let decryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i].toUpperCase();

        if (char.match(/[A-Z]/)) {
            const shift = key[keyIndex].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            const decryptedChar = String.fromCharCode((char.charCodeAt(0) - shift - 'A'.charCodeAt(0) + 26) % 26 + 'A'.charCodeAt(0));

            decryptedText += (encryptedText[i] === char) ? decryptedChar : decryptedChar.toUpperCase();
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            decryptedText += char;
        }
    }

    return decryptedText;
}

function decrypt() {
    const encryptedText = document.getElementById('result').value;
    const key = document.getElementById('key').value;
    const result = vigenereDecrypt(encryptedText, key);

    document.getElementById('result').value = result;
}

