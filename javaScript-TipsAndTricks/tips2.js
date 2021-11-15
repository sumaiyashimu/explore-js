var array= [1, 2, 3, 4, 5];
// swapping value
var temp =array[0];
array[0]= array[4];
array[4]=temp

// console.log(arr);

// array destructing
[array[0], array[4]] = [array[4], array[0]]
console.log(array);

let a= 1;
let b = 2;

[a, b]= [b, a]

// console.log(a, b);
