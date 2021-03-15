module.exports = function getSeason(date) {
    const monthAssoc = {
        '0': 'winter',
        '1': 'winter',
        '2': 'spring',
        '3': 'spring',
        '4': 'spring',
        '5': 'summer',
        '6': 'summer',
        '7': 'summer',
        '8': 'autumn',
        '9': 'autumn',
        '10': 'autumn',
        '11': 'winter'
    };

    if (!date) return 'Unable to determine the time of year!';
    date.toLocaleString();
    if (date instanceof Date) return monthAssoc[date.getMonth()];
    throw new Error();
};
