//const array = [10, 5, 'a', 'b', 'h', 11];
//Sort this array and print output with NUMBER and ALPHABET  seperately 


// const array=[10,5,"a","b","h",11];
// console.log(`given array ${array}`);
// console.log("===========================");
// let numArray=[];
// let alphabetArray=[];

// array.forEach((element)=>{
//     if (typeof(element)=="string") {
//         alphabetArray.push(element)
//     }
//     if (typeof(element)=="number") {
//         numArray.push(element)
//     }
// })
// console.log(`alphabet array is [${alphabetArray}]`);
// console.log("==============================");
// console.log(`number array is [${numArray}]`);




const array =[10, 5, 'a', 'b', 'h', 11];
console.log(`Given array`);
console.log(array);
array.sort();
array.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});

console.log(`Sorting of given array`);
console.log(array);
const number = array.slice(3);
const alphabate = array.slice(0, 3);
console.log(`Sorting of array by  alphabates`);
console.log(alphabate);
console.log(`Sorting of array by  numbers`); 
console.log(number);

