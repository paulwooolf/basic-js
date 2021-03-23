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

module.exports = function repeater(str, options = {
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
}) {

};
