const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members = []) {
    if (Array.isArray(members) === false) return false;
    const result = members.filter(name => typeof name === 'string');
    return result.map(name => name.trim().charAt(0).toUpperCase()).sort().join('');
};
