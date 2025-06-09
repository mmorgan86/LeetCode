/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ramon = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let current, next = 0;
    for (let i = 0, j = 1; i < s.length; i++, j++) {
        current = ramon[s[i]];
        next = ramon[s[j]];
        
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};