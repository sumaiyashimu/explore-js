const numbers= [ 3, 4, 5, 6, 7, 8 ];

 const output= []
for ( let i = 0; i < numbers.length; i++){
    let element= numbers[i];

    const result= element * element;
    output.push(result)

}

console.log(output);


const result=numbers.map(function(element){
    return element*element
});

const result= numbers.map(x=> x*x)

const bigger= numbers.filter (x => x> 5 )
console.log(bigger);
