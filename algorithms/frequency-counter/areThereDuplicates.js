/*
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

const areThereDuplicates = (...params) => {
    const lookup = {};
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        lookup[param] ? (lookup[param] += 1) : (lookup[param] = 1);
    }

    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        if (lookup[element] > 1) {
            return true;
        }
    }
    return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
