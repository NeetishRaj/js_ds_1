/**
 * 
 * Oddball sum:
 * 
 * Add the items in an array only at the odd postions
 * 
 * [1, 2, 3, 4, 5, 6]
 * 
 * result = 1 + 3 + 5 = 9
 */

const arr = [1, 2, 3, 4, 5, 6];
let result = 0;

//Approach 1
// for (let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0) {
//         result += arr[i]
//     }
// }

// Approach 2
// for (let i = 0; i < arr.length; i += 2) {
//     result += arr[i];
// }

// Approach 3
result = arr
    .filter((item, index) => index %  2 === 0)
    .reduce(
        (acc, item) => acc + item,
        0 
    )


// Approach 4
result = arr.reduce(
        (acc, item, index) => {
            if(index % 2 === 0)
                return acc + item;
            else
                return acc;
        },
        0 
    )


// Approach 5
result = arr.reduce(
    (acc, item, index) => index % 2 === 0 ? acc + item : acc,
    0 
)

console.log(result);  //9