/*
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 */

const findLongestSubstring = (str) => {
    const string = str.toLowerCase();
    let start = 0;
    let end = 0;
    const frequencyCounter = {};
    const maxLen = [];

    if (string === '') {
        return 0;
    }

    while (start < string.length) {
        if (!frequencyCounter[string[end]] && end < string.length) {
            frequencyCounter[string[end]] = 1;
            if (end + 1 === string.length) {
                end++;
                maxLen.push(end - start);
            }
            end++;
        } else if (frequencyCounter[string[end]]) {
            maxLen.push(end - start);
            delete frequencyCounter[string[start]];
            start++;
        } else {
            break;
        }
    }

    if (Math.max(...maxLen) === -Infinity) {
        return string.length;
    }
    return Math.max(...maxLen);
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
