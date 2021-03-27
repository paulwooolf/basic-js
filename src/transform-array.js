const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();

    function isAccess(item) {
        return item !== undefined && item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev';
    }

    const newArr = [...arr];
    arr.forEach((item, index) => {
        if (item === '--discard-next') {
            newArr[index] = undefined;
            if (isAccess(newArr[index+1])) {
                newArr[index+1] = undefined;
            }
        } else if (item === '--discard-prev') {
            newArr[index] = undefined;
            if (isAccess(newArr[index-1])) {
                newArr[index-1] = undefined;
            }
        } else if (item === '--double-next') {
            if (isAccess(newArr[index+1])) {
                newArr[index] = newArr[index+1];
            } else {
                newArr[index] = undefined;
            }
        } else if (item === '--double-prev') {
            if (isAccess(newArr[index-1])) {
                newArr[index] = newArr[index-1];
            } else {
                newArr[index] = undefined;
            }
        }
    });
    return newArr.filter(item => item !== undefined);
};
