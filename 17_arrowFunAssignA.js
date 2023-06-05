console.log("==================1==================");

let greet = ()=>{
console.log(" given string is :Good Morning","Today is Monday.");
}
greet()
console.log("================");
console.log(" 2.with 3 args and no return value,for received 3 parametars perfrom multiplication");

let mul=(n1,n2,n3=1)=>{
    console.log(`multiplication of 3 number: ${n1*n2*n3}`);
}
mul(5,5,2)
console.log("=================================");
console.log("default value to 3rd args as 1");
mul(10,4)
console.log("================================");

console.log("3.with 5 args and return value");

let add=(n1,n2,n3,n4,n5)=>{
let result=n1+n2+n3+n4+n5
return result;
}
let result=add(100,100,200,349,756);
console.log(`3.a addition is : ${result}`);
console.log("===============================");
console.log("3.a values are : 'I am','learning','ES6','features','in depth'");
let result1=add("I am ","learning ","ES6 ","features ","in depth ");
console.log(`addition is : ${result1}`);