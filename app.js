// Función para encriptar el texto
function encryptText(input) {
    let encrypted = input;
    encrypted = encrypted.replace(/e/g, 'enter');
    encrypted = encrypted.replace(/i/g, 'imes');
    encrypted = encrypted.replace(/a/g, 'ai');
    encrypted = encrypted.replace(/o/g, 'ober');
    encrypted = encrypted.replace(/u/g, 'ufat');
    return encrypted;
}

// Función para desencriptar el texto
function decryptText(input) {
    let decrypted = input;
    decrypted = decrypted.replace(/enter/g, 'e');
    decrypted = decrypted.replace(/imes/g, 'i');
    decrypted = decrypted.replace(/ai/g, 'a');
    decrypted = decrypted.replace(/ober/g, 'o');
    decrypted = decrypted.replace(/ufat/g, 'u');
    return decrypted;
}

// Función para detectar si el texto está encriptado
function isEncrypted(input) {
    return /enter|imes|ai|ober|ufat/.test(input);
}

// Event listener para el botón de encriptar
document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);

    document.getElementById('outputText').value = encryptedText;
    document.getElementById('placeholder').classList.add('hidden');
    document.getElementById('outputText').classList.remove('hidden');
    document.getElementById('copyButton').classList.remove('hidden');
});

// Event listener para el botón de desencriptar
document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    let resultText;

    if (isEncrypted(inputText)) {
        resultText = decryptText(inputText);
    } else {
        resultText = encryptText(inputText);
    }

    document.getElementById('outputText').value = resultText;
    document.getElementById('placeholder').classList.add('hidden');
    document.getElementById('outputText').classList.remove('hidden');
    document.getElementById('copyButton').classList.remove('hidden');
});

// Event listener para el botón de copiar
document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});







