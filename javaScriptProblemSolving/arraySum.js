

var numbers =[45, 65,77,98,66,56,23];

function getArraySum(numbers){
       
    var sum=0;

for (var i= 0; i< numbers.length; i++) { 
      var element=numbers[i];
      var sum=sum+element
}
}


var result=getArraySum(numbers)

console.log(result);

var total=getArraySum([45,67,55])
console.log(total);