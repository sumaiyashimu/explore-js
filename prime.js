
var n=79

for(var i=2; i<n; i++){

    //console.log( i, n%i);
    if(n%i==0){
        //console.log("not  prime number");
        break;
    }


}
//console.log('prime number');

function prime(n){

    for(var i=2; i<n; i++){

        //console.log( i, n%i);
        if(n%i==0){
           return console.log("not  prime number");
           
        }
    
    
    }
     return console.log('prime number');

}

var result=prime(139)
console.log(result);