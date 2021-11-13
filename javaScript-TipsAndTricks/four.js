let smilyes= [1, [2, 3], 5, [7, 8], 10]
console.log(smilyes.flat());

//replace all occurence of string

const quate= ' react is a populer js framework and this framework is the most populer framework right now'

console.log(quate.replace(/framework/g, 'library'));


//long values with variable names smartly

let library1= 'react';
let library2= 'anguler'

console.log({library1});
console.log({library2});



//know performance of a task

const startTime= performance.now()

for( let i= 0; i< 50; i++){
    console.log(i);
}

const endTime= performance.now()

console.log(`loop took ${endTime - startTime} milliseconds to finish` );
