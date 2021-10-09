var a=5;
var b=7;
console.log("before swap:a=",a,"b=",b);
 var temp=a;
 a=b;
 b=temp;
 console.log("before swap:a=",a,"b=",b);

 var x=10;
 y=20;
 x=x+y;
 y=x-y;
 x=x-y;
 

 [x,y]=[y,x]
 console.log("After swap: x=",x, "y=",y);