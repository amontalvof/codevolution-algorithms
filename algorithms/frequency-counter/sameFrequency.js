/*
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 */

const sameFrequency = (number1, number2) => {
    const str1 = String(number1);
    const str2 = String(number2);

    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i];
        lookup[digit] ? (lookup[digit] += 1) : (lookup[digit] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let digit = str2[i];
        if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit] -= 1;
        }
    }

    return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
