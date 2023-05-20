console.log("=====step1=====");
var word ="I am very good IT Developer";
var count = 0;
 var reserve="";
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        //  console.log(char);
        count++;
        
    }
     
}
 console.log(`given string is:${word}`);
console.log(`Count total vowels: ${count}`);
console.log("======step2=======");

function sumOfCube(){
    var sum=0;
    for (let index = 1; index <=5; index++) {
         var count=index**3;
         var sum=sum+count;
        console.log("cube is:",count);
        // var sum=sum+count;

         
    }
    console.log("sum of all cube 1 to 5 is:",sum);
}
sumOfCube()
// console.log("cube 1 t0 5  total=",count);

console.log("====step3=====");
var str1="hard work always pays back";
var str2="Soon I will be Angular IT champ";

function oddPositionedChars(str){
    var count="";
    for (let index = 0; index < str.length; index++) {
        // var char= str.charAt(index);
        if (index%2==1 && str.charAt(index) !==" " ){
            var char = (str.charAt(index));
            count=count.concat(char);
        }
        
    }
    console.log(`string is:${str}`);
    console.log(`odd position:${count}`);
}
oddPositionedChars(str1)
console.log("=========");
oddPositionedChars(str2);

