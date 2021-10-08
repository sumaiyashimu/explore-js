
var arr=[0,1]
function fibonacci(n){
    

for(var i=2; i<=n;i++){
    arr[i]=arr[i-1]+[i-2]
}
 return arr;
}

var result=fibonacci(10)

console.log(result);