var square  = function (one) {  //funcation expression
    var result = one*one;
    return ` square of 5 is: ${result}`;

}
var result = square(5);
console.log(result);

var square  = function (one) {
    var result = one*one;
    return ` square of 6 is: ${result}`;

}
var result = square(6);
console.log(result);

var square  = function (one) {
    var result = one*one;
    return ` square of 25 is: ${result}`;

}
var result = square(25);
console.log(result);

var square  = function (one) {
    var result = one*one;
    return ` square of 100 is: ${result}`;

}
var result = square(100);
console.log(result);
console.log("****step2****");

console.log("typeof square is:",typeof square);

console.log("*****step3*****");
 var rectanglePlot= function(length,width){
     var result1 = length*width;
     return `Area of rectangle plot is ${result1}`
 }
 var result1 =rectanglePlot(499,917)
 console.log(result1);
console.log("****step4****");

 var swapValue=function(value1,value2){
     console.log("before swap:",value1,value2);
    var temp=value1;
     value1=value2;
     value2=temp;
 console.log("after swap:",value1,value2);
 }
 swapValue("virat","Anushka")
swapValue(1000,2000);

 console.log("****step5****");

var stringMethods = function(){
    var result ="JS the most popular language of internet";
    console.log("given string is",result);
    var totalChar=result.length;
    console.log("total string length:",totalChar);
    var charTotal=result.charAt(6);
    console.log("char of index  is 6 :",charTotal);
    
    var charTotal=result.charAt(11);
    console.log("char of index  is 11:",charTotal);
    
    var charLength= result.charAt(result.length-1);
    console.log(`last char using length property :${charLength}`);
    
    var charLength1=result.charAt(0);
    console.log(`very first char from the given string: ${charLength1}`);
    
     var result5=result.split(" ");
     console.log("total word in string:",result5.length);
     var no =result5.length;
     console.log("square of total number words",no*no);
}
stringMethods();