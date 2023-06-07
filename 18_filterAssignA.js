const arrayNum=[20,11,40,25,37,49,9,90,60,2,19];

console.log("1.find out all the numbers which are greater>50 ");
const result=arrayNum.filter((element)=>{
    return element>50
})
console.log(`number>50 is : [${result}]`);
console.log("*************************************");

console.log("2.find out all even number ");
const result1=arrayNum.filter((element)=>{
    return element%2==0
})
console.log(`even numbers are : [${result1}]`);
console.log("****************************************");
console.log("3.find out all odd numbers");
const result3=arrayNum.filter((element)=>{
    return element%2!==0
})
console.log(`odd numbers are : [${result3}]`);
console.log("***********************************");
console.log("4.find out all the numbers which are multipal of 5");
const result4=arrayNum.filter((element)=>{
    return element%5==0
})
console.log(`multipal of 5 : [${result4}]`);
console.log("************************************");
console.log("5.find out all numbers wich are between 20 and 50");
const result5=arrayNum.filter((element)=>{
    return (element>=20)&&(element<=50)
})
console.log(result5);


