const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
}) {
    str = String(str);
    const newStr = [];
    for (let i = 0; i < repeatTimes; i++) {
        newStr.push(str);
        if (addition !== undefined) {
            addition = String(addition);
            for (let j = 0; j < additionRepeatTimes; j++) {
                if (addition !== '') {
                    newStr.push(addition);
                    if (j + 1 < additionRepeatTimes) {
                        newStr.push(additionSeparator);
                    }
                }
            }
        }
        if (i + 1 < repeatTimes) {
            newStr.push(separator);
        }
    }

    return newStr.join('');
};
