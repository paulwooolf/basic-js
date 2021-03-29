const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();

        while (key.length < message.length) {
            key += key;
        }
        let newKey = key.split('');

        let crypt = [];
        message.split('').forEach((item) => {
            if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
                let k = newKey.shift();
                crypt.push(String.fromCharCode(((item.charCodeAt(0) + k.charCodeAt(0)) % 26) + 65))
            } else {
                crypt.push(item);
            }
        });
        return this.type === true ? crypt.join('') : crypt.reverse().join();
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();

        while (key.length < message.length) {
            key += key;
        }
        let newKey = key.split('');
        let crypt = [];
        message.split('').forEach((item) => {
            if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
                let k = newKey.shift();
                crypt.push(String.fromCharCode(((item.charCodeAt(0) + 26 - k.charCodeAt(0)) % 26) + 65))
            } else {
                crypt.push(item);
            }
        });
        return this.type === true ? crypt.join('') : crypt.reverse().join();
    }
}

module.exports = VigenereCipheringMachine;
