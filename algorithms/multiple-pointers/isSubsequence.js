/*
 * Write a function called isSubsequence which takes in two strings and checks whether the
 * characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear
 * somewhere in the second string, without their order changing.
 */

const isSubsequence = (str1, str2) => {
    const str1Length = str1.length;
    const str3 = str1 + str2;
    if (str1.length > str2.length) {
        return false;
    }
    let j = 0;
    for (let index = str1Length; index < str3.length; index++) {
        const letter2 = str3[index];
        if (str1[j] === letter2) {
            j++;
        }
    }
    if (j >= str1Length) {
        return true;
    }
    return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
