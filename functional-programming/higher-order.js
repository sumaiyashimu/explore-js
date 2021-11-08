function add( a, b){
    return a+b;
}

function manipulate( a, b, fun){

    var c= a+b;
    var d= a-b;

    function multiplay( ){
        var m= fun(a , b)

        return c*d*m

    }

    return multiplay;

}

var multiplay= manipulate( 6, 8, add)

console.log(multiplay());
