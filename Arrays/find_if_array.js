/**
 * How to find if the variable is a valid array or not.
 */


function is_it_an_array(arr) {
    // Approach 1
    return arr instanceof Array;

    // Approach 2
    // return Array.isArray(arr);
}

console.log(is_it_an_array([]))         // true
console.log(is_it_an_array([1, 2, 3]))  // true
console.log(is_it_an_array(['a', 'b'])) // true
console.log(is_it_an_array([[]]))       // true
console.log(is_it_an_array({}))         // false
console.log(is_it_an_array('a'))        // false