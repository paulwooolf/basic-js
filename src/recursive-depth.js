const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr) === false) {
            return 0;
        }
        function rec(arr, n) {
            const next = [];
            let isDepth = false;
            arr.forEach((item) => {
                if (Array.isArray(item)) {
                    next.push(...item);
                    isDepth = true;
                }
            })
            if (isDepth) {
                n = rec(next, ++n);
            }
            return n;
        }
        return rec(arr, 1);
    }
};

class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr) === false) {
            return 0;
        }
        function rec(arr, n) {
            const next = [];
            let isDepth = false;
            arr.forEach((item) => {
                if (Array.isArray(item)) {
                    next.push(...item);
                    isDepth = true;
                }
            })
            if (isDepth) {
                n = rec(next, ++n);
            }
            return n;
        }
        return rec(arr, 1);
    }
};

const depth = new DepthCalculator();
console.log(depth.calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
console.log(depth.calculateDepth([[[[[]]]]]), 5);
console.log(depth.calculateDepth(1), 0);
// console.log(depth.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
// console.log(depth.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
// console.log(depth.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15);
// console.log(depth.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 25);
// console.log(depth.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 31);

