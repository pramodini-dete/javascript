 console.log("*****step1*****");

var greaterNumber= function(num1,num2){
    var result=num1>=num2 ? `${num1} is greater `: `${num2} is greater`;

    console.log(result);
}
    console.log("Given number are 10,-10");
    greaterNumber(10,-10);
    console.log("Given number are 800,899");
    greaterNumber(800,899);
console.log("*****even or Odd nuumber");
var isEvenOrOddNum=function(num){
    var result = num%2==0 ? true:false;
    return result;
}
 var result = isEvenOrOddNum(29)
 var res= (result==true) ? "29 number is even":"29 number is odd";
 console.log(`${res}`);
 console.log("*****");
 var result1=isEvenOrOddNum(44);
 var res1= (result1==true) ? "44 number is even":"44 number is odd";
 console.log(`${res1}`);
console.log("*****");
var result2=isEvenOrOddNum(0);
 var res2= (result2==true) ? "0 number is even":"0 number is odd";
 console.log(`${res2}`);
console.log("*****");

var result3=isEvenOrOddNum(101);
 var res3= (result3==true) ? "101 number is even":"101 number is odd";
 console.log(`${res3}`);
console.log("****step3****");
var wordLength= function(word){
    var len=word.length;
   var result= len%2==0 ? "is even wordLength":" is odd wordLength"
   return result;
}
 var returnValue1=wordLength("Javascript");
 console.log(`Javascript ${returnValue1}`);
 console.log("******");
 var returnValue1=wordLength("developer");
 console.log(`developer${returnValue1}`);
 console.log("******");
 var returnValue1=wordLength("Google");
 console.log(`Google ${returnValue1}`);


