console.log("***eligible for Marriage(male)***");
var maleMarriageEligibility= function(gender,age,name){
    //  console.log(`Given No are ${gender}, ${age} `)
  var result= (gender == "Male") &&(age >=21 ) ? `Hey "${name}" you are eligible for Marriage `: `Hey "${name}" you are  not eligible for Marriage`;
    console.log(result)
//    return result;

}
console.log("..........");
 maleMarriageEligibility("Male", 24, "shiv")
 maleMarriageEligibility("Male", 20, "Ram")
 console.log("..........");

 console.log("***eligible for Marriage(Female)***");

 var maleMarriageEligibility= function(gender,age,name){
  var result= (gender == "Female") &&(age >=18 ) ? `Hey "${name}" you are eligible for Marriage `: `Hey "${name}" you are  not eligible for Marriage`;
    console.log(result)
//    return result;

}
 maleMarriageEligibility("Female", 14, "Geeta")
 maleMarriageEligibility("Female", 20, "Seeta")
 console.log("..........");
 


