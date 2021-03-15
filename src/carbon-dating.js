const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') return false;
    const num = parseFloat(sampleActivity);
    if (typeof num !== 'number' || isNaN(num)) return false;
    if (num === 0) return false;
    const res = Math.ceil(Math.log(MODERN_ACTIVITY/num) / (0.693 / HALF_LIFE_PERIOD));
    return res >= 0 ? res : false;
};
