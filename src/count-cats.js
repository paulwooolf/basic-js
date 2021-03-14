const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix = []) {
    const arr = [];
    matrix.forEach(item => {
        arr.push(...item);
    })
    const cats = arr.filter(item => item === '^^');
    return cats.length;
};
