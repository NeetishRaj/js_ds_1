const arr = [1, 2, 3, 4, 5];

function reduce_callback(acc, item, index, arr) {
    return acc + item;
}
const result = arr.reduce(reduce_callback, 0);

console.log(result); //15