const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log("======length=====");
console.log(arrayNumber);
let arrayLength=arrayNumber.length
console.log(`array length is ${arrayLength}`);

console.log("=====step2=====");
console.log(`first element in  array: ${arrayNumber[0]}`);
console.log(`last element in array: ${arrayNumber[arrayNumber.length-1]}`);

console.log("=====log the 3rd last element=====");
console.log(`last 3rd element in array is: ${arrayNumber[arrayNumber.length-3]}`);

console.log("=====log even number=====");
const arrayNumber1=[20,31,40,25,23,11,29,9,60,2,11];
for (const index  of arrayNumber1) {
    if (index%2==0) {
        console.log(` given number is even :${index}`);
    }
}

console.log("=====log odd number=====");
for (const index  of arrayNumber1) {
    if (index%2!==0) {
        console.log(` given number is odd :${index}`);
    }
}

console.log(`=====find even positionNumber in array & sum it=====`);
var count = 0
for (let index = 0; index < arrayNumber1.length; index++) {
//   var char = arrayNumber1[index] //
  if (index % 2 == 0) {
    var char = arrayNumber1[index]
    //  console.log(arrayNumbers[index]);
    count = count + char
  }
}
console.log(`total count of even position element:${count}`);

console.log(`=====find odd positionNumber in array & sum it=====`);
var count = 0
for (let index = 0; index < arrayNumber1.length; index++) {
//   var char = arrayNumber1[index] //
  if (index % 2 !== 0) {
    var char = arrayNumber1[index]
    //  console.log(arrayNumbers[index]);
    count = count + char
  }
}
console.log(`total count of odd position element:${count}`);

console.log(`=====sum of all element=====`);
var result=0;
for (let index = 0; index < arrayNumber1.length; index++) {
    
    result=result+arrayNumber1[index];
}
console.log(`sum of all elements: ${result}`);

console.log("=====which number are multipal of 5");

for (let index = 0; index < arrayNumber1.length; index++) {
  var char = arrayNumber1[index] 
  if (char % 5 == 0) {
    console.log(`multiple of 5 number is : ${arrayNumber1[index]}`)
  }
}
console.log("=====115 available in arrayNumber=====");
let result1=arrayNumber1.includes(115)
console.log(`115 available in given arrayNumber:${result1}`);

console.log("=====23 available in arrayNumber=====");
let result2=arrayNumber1.includes(23)
console.log(`115 available in given arrayNumber:${result2}`);

console.log("=====insert number 55,66 before index 3=====");
console.log(` given array : ${arrayNumber1}`);
 arrayNumber1.splice(3,0,55,66)//insert element after 3rd index
 console.log(` insert element :${arrayNumber1}`);

 console.log("=====delete  3 element starting from index4=====");
 console.log(` given array : ${arrayNumber1}`);
 arrayNumber1.splice(4,3);//delete start index 4 and 3 number is deleted
 console.log(` delete element :${arrayNumber1}`);