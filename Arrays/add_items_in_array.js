/*"
You will be given an array of several arrays that each contain integers and your goal is to write a function that
 will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your
 program should output 22 because 3 + 2 + 1 + 4 + 12 = 22"
 
 */

const arr = [[3, 2], [1], [4, 12]];

let result = 0;

// write some logic here to add all the integers in arr.

// Approach 1
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);

//     let inner_array = arr[i];
//     for (let j = 0; j < inner_array.length; j++) {
//         // console.log(inner_array[j]);
//         result = result + inner_array[j];
//     }
// }

// Approach 2
// for (const item of arr) {
//     console.log(item);

//     for (const num of item) {
//         result += num;
//     }
// }


// Approach 3: using reduce()
result = arr.reduce(
            (combined_array, arr) => combined_array.concat(arr),
            []
        ).reduce(
            (sum, item) => sum + item,
            0
        );




console.log(result); // 22



 