/*
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */

const minSubArrayLen = (array, num) => {
    let start = 0;
    let end = 0;
    let total = 0;
    const minLen = [];

    while (start < array.length) {
        if (total < num && end < array.length) {
            total += array[end];
            end++;
        } else if (total >= num) {
            minLen.push(end - start);
            total = total - array[start];
            start++;
        } else {
            break;
        }
    }
    if (Math.min(...minLen) === Infinity) {
        return 0;
    }
    return Math.min(...minLen);
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
