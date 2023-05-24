console.log(`count  Total character 'a' or 'A' in string `);
console.log(`=========`);
var countCharA =function(str){
    console.log(`Given String is- "${str}""`);
   var a = str.split("");
   var a1 =a.length

   var count = 0;
   for (let index = 0; index < a.length; index++) {
       var char = a[index]; 
       if (char == 'a'|| char == 'A' ) {
           count++;
          
       }
         
 }
 return count

}
 var totalcount =countCharA("I AM Learning JavaScript, The Language of internet");
 console.log(`Total Count of "a" is : ${totalcount}`);
console.log(`=====`);
 var totalcount =countCharA("My favourite movie is LAggAn");
 console.log(`Total Count of "a" is : ${totalcount}`);


 ///////////////////////////// another way to find ///////////////////////////////
//  var countCharA =function(str){
    
//     //   var a = str.split("");
//        var a =str.length
//        console.log(`1.square of words in string "${str}" :-  ${a} `);
     
//        var count = 0;
//        for (let index = 0; index < str.length; index++) {
//            var char = str.charAt(index); // 
//            if (char == 'a') {
//                console.log(char);
//                count++;
//            }  
//      }
//      console.log(`Count total "a": ${count}`);
//     }
//     countCharA("I AM Learning JavaScript, The Language of internet");