  const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);

console.log(`First element : "${arrayFruits[0]} "`);

console.log(`Last element: "${arrayFruits[arrayFruits.length-1]} "`);

console.log(`***** Add "Papaya" before "Banana"*****`);
 var addfirst =arrayFruits.unshift("Papaya")
console.log(arrayFruits);

// var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`*****Remove 'Mango' from given array*****`);

 var magremove =arrayFruits.splice(4);
 console.log(arrayFruits);
 
 console.log(`*****insert  'Pineapple' at the last position*****`);
 var addfirst =arrayFruits.push("Pineapple")
console.log(arrayFruits);

console.log(`***** Insert 'Dragon Fruit' before "Water Melon"*****`);
arrayFruits.splice(4, 0, "Dragon Fruit")
console.log(arrayFruits);

console.log(`*****Replace element 'Orange' with 'Kiwi'*****`);
arrayFruits[2] = "Kiwi";
console.log(arrayFruits);

console.log(`***** starting from index 1 to 4'*****`);
 var first4element =arrayFruits.slice(1,4)
console.log(first4element);

//  console.log(`select last 3 element :`);
  
 console.log(arrayFruits);

   var first4element =arrayFruits.slice(arrayFruits.length-3,arrayFruits.length)
   console.log(`***** Last 3 element  : ${first4element} *****`);
   