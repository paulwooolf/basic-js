const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }

    modifyKey(message, key) {
        if (key.length >= message.length) {
            return key;
        }
        const k = Math.ceil(message.length / key.length);
        let newKey = '';
        for (let i = 0; i < k; i++) {
            newKey += key;
        }
        const newArr = newKey.split('');
        const result = [];
        message.split('').forEach(item => {
            if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 92) {
                result.push(newArr.shift());
            } else {
                result.push(' ');
            }
        })
        return result;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();

        let newKey = this.modifyKey(message, key);
        let crypt = [];
        message.split('').forEach((item, index) => {
            if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
                crypt.push(String.fromCharCode(((item.charCodeAt(0) + newKey[index].charCodeAt(0)) % 26) + 65))
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

        let newKey = this.modifyKey(message, key);
        let crypt = [];
        message.split('').forEach((item, index) => {
            if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
                crypt.push(String.fromCharCode(((item.charCodeAt(0) + 26 - newKey[index].charCodeAt(0)) % 26) + 65))
            } else {
                crypt.push(item);
            }
        });
        return this.type === true ? crypt.join('') : crypt.reverse().join();
    }
}

module.exports = VigenereCipheringMachine;
