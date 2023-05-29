


let professor = {
   
  sub: "Java",
  name: "xyz",
  city: "Pune",
  age: 35,
  isMarried: true,
  degrees: {
       engineering: 'CSC',
       PHD: 'Adv Computing',
       M_Tech: ` Advance Electronic`,
  },
  certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
   degree: function()  {
      let details = `Teacher total degrees are :-${professor.degrees.engineering},${professor.degrees.PHD}`;
      return details;
  

   }
}


console.log(`**********  `)
console.log(professor);


console.log(`*****nested object 'degrees added*****  `)
console.log(professor.degrees);


console.log(`***** Add array***** `)
console.log(professor.certificates);

console.log(`***** Add function as a value which should concat all degrees*****`);
const  result =professor.degree();
console.log(result);
console.log("*****add object property*****");
professor.totalExperience = "14Year";
console.log(`  Expernice :-${professor.totalExperience}`);


console.log("***** Modify any existing property and log complete object on console*****");
professor.degrees.engineering= "Entc"
console.log(`  update degree : ${professor.degrees.engineering}`);

console.log(`***** Add  "Oracle Certified" at the end of array*****`);
 professor.certificates[3]= "Oracle Certified"; // push in array using index
console.log(professor.certificates);

console.log("*****Log the last element of the array certificates.*****");
console.log(professor.certificates[3]);
