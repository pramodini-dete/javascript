console.log("1.add 10 into each element and log new array");
const arrayNum=[20,11,40,25,23,11,9,31,60,2,19];
let array1=[];
arrayNum.forEach((employee)=>{
array1.push(employee+10)
});
console.log(`add 10 : [${array1}]`);
console.log("***********************************");
console.log("2.square the each array element");
let array2=[];
arrayNum.forEach((employee)=>{
    array2.push(employee*employee);
})
console.log(`square : [${array2}]`);
console.log("**************************************");

console.log("3.add the index value into each array element");

let array3=[];
arrayNum.forEach((index,employee)=>{
    array3.push(index+employee)
});
console.log(`add index in array element: [${array3}]`);