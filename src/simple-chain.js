const CustomError = require("../extensions/custom-error");

const chainMaker = {
    line: [],
    getLength() {
        return this.line.length;
    },
    addLink(value) {
        value = '( ' + value + ' )';
        this.line.push(value);
        return this;
    },
    removeLink(position) {
        if (this.line[position] === undefined) {
            this.line = [];
            throw new Error();
        }
        this.line.splice(position, 1);
        return this;
    },
    reverseChain() {
        this.line = this.line.reverse();
        return this;
    },
    finishChain() {
        const result = this.line.join('~~');
        this.line = [];
        return result;
    }
};

module.exports = chainMaker;
