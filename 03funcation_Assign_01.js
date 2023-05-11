console.log("**********step1**********");
function showName(){
    console.log("my name is pramodini");
}
showName();
console.log("-----------------");
function showAge(){
    console.log("my age is 24");
}
showAge();
console.log("**********step2**********");

function personalDetails(firstName,lastName,collegeName){

    console.log("my personal details is....>");
    console.log("firstName &LastName:",firstName,lastName,);
    console.log("collegeName:",collegeName);
}
personalDetails("pramodini","dete","JSPM narhe technical campus pune");

console.log("**********step3**********");
 var virat="virat";
 var anushka="anushka";

function swapValuesDude(value1,value2){
    console.log("before swap>>>",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("after swap>>>",value1,value2);
}
swapValuesDude("virat","anushka");
swapValuesDude(1000,2000);

console.log("**********step4**********")

function addThreevalues(a,b,c){
    var result = a + b + c;
    console.log("addition is:",result);
}
addThreevalues(10.23,600,40);
addThreevalues("hello,", "Good", "morning.");








