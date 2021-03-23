const CustomError = require("../extensions/custom-error");

// Ваша задача — реализовать функцию repeater(str, options). Эта функция возвращает повторяющуюся строку, основываясь на заданных параметрах:
//
//     str это строка, которая будет повторена
// options это объект опций, который содержит следующие свойства:
//     repeatTimes устанавливает число повторений str
// separator это строка, разделяющая повторения str
// addition это дополнительная строка, которая будет добавлена после каждого повторения str
// additionRepeatTimes устанавливает число повторений addition
// additionSeparator это строка, разделяющая повторения addition
// Параметры str и addition по умолчанию являются строками. В случае, если они другого типа, он должны быть преобразованы к строке.
//
//     Параметры separator и additionSeparator являются строками.
//
//     repeatTimes и additionRepeatTimes являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).
//
// Единственный обязательный параметр — это str, остальные могут не быть переданы. Значение separator по умолчанию это '+'. Значение additionSeparator по умолчанию это '|'.

module.exports = function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition = undefined,
    additionRepeatTimes = 0,
    additionSeparator = undefined
}) {
    str = String(str);
    addition = String(addition);
    const newStr = [];
    for (let i = 0; i < repeatTimes; i++) {
        newStr.push(str);
        if (addition !== undefined) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                if (addition !== '') {
                    newStr.push(addition);
                    if (additionSeparator !== undefined) {
                        newStr.push(additionSeparator);
                    }
                }
            }
        }
        if (i + 1 < repeatTimes || (i + 1 === repeatTimes && separator !== '+')) {
            newStr.push(separator);
        }
    }

    return newStr.join('');
};

// function repeater(str, {
//     repeatTimes = 1,
//     separator = '+',
//     addition = '',
//     additionRepeatTimes = 0,
//     additionSeparator = ''
// }) {
//     const newStr = [];
//     for (let i = 0; i < repeatTimes; i++) {
//         newStr.push(str);
//         if (addition !== undefined) {
//             for (let j = 0; j < additionRepeatTimes; j++) {
//                 if (addition !== '') {
//                     newStr.push(addition);
//                     if (additionSeparator !== undefined) {
//                         newStr.push(additionSeparator);
//                     }
//                 }
//             }
//         }
//         if (i + 1 < repeatTimes) {
//             newStr.push(separator);
//         }
//     }
//
//     return newStr.join('');
// };

// console.log(repeater('la', { repeatTimes: 3 }), 'la+la+la');
// console.log(repeater('single', { repeatTimes: 1 }), 'single');
// console.log(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');
