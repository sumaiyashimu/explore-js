 var numbers= [45, 55, 65 , 25, 98 , 88, 65];


 function getArraySum (numbers){

    
    var sum=0;

    for( var i= 0; i< numbers.length; i++){

        var element= numbers[i];
        sum=sum+element;
    }

    return sum;
 }

 var result= getArraySum(numbers);

 console.log(result);

 var total=getArraySum([1,2,3]);
 console.log(total);
