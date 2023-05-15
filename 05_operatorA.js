console.log(`.......1.......`)
function squareOfWordLength(str){
 var a1=str.length;
 console.log(` string length is "${str}" : ${a1} `);
 var sq=a1 *a1;
 console.log(` string length square is "${str}" : ${sq} `);
 

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log(`........2........`)
function str1() {
    var str ="I am Angular Developer";
    console.log(`Given string is : "${str}" `);
    console.log(`................`)
    var len=str.length;
    console.log(`The string length:  ${len} `);
    console.log(`.................`)

    var wor=str.split(" ");
     var totalWord=wor.length;
     console.log(`number words in string: ${totalWord} `);

     console.log(`...............`)
     var result1=len / totalWord;
     console.log(`string length /  total words:  ${result1} `);

     console.log(`..............`)
     var Result= len * totalWord;
     console.log(` string length *  total words: ${Result} `);
     
     



}
str1();