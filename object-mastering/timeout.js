function doSomething(){
    console.log(1111);
}

console.log(2222);
setTimeout(doSomething, 10000)
setTimeout( function(){
    console.log('see you letter');
},4000);

setInterval(() => {
   console.log('doing it'); 
}, 5000);
console.log(3333);