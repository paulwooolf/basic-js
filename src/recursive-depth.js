const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    static n = 0;
    calculateDepth(arr) {
        if (Array.isArray(arr) === false) return DepthCalculator.n;
        else DepthCalculator.n++;
        const next = [];
        let isDepth = false;
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                next.push(...item);
                isDepth = true;
            }
        })
        if (isDepth) DepthCalculator.n = this.calculateDepth(next);
        let result = DepthCalculator.n;
        DepthCalculator.n = 0;
        return result;
    }
};
