
var array= [ 1, 22, 22, 5 ,6, 8, 9 ,9, 8 ];

var uniqueElement=[];

for ( var i =0; i< array.length; i ++){

    var element=array[i]
    var index= uniqueElement.indexOf(element);
    if( index == -1){
        uniqueElement.push(element)
    }


}

console.log(uniqueElement);
