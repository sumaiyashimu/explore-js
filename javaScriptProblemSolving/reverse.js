
function reverseString (str){
     
    var reverse= ""

    for ( var i= 0; i< str.length; i++){

        var element= str[i]

        reverse= element+reverse
    }
    
   
    return reverse
}
var statement= " Hello sumaiya marzen shimu";
var result= reverseString(statement)

console.log(result);
