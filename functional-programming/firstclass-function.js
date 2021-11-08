function add( a, b){
    return a+b;
}

var sum=add
console.log(sum(4, 5));

setTimeout(function(){
 
    console.log('i have created');
},100)