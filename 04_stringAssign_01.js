console.log("*****assgin1*****");
console.log(".....................");
function stringBasic(){
    var company="TCS";
    console.log("my dream company name is:",company);
    var hobby1="Learning new Things,";
    var hobby2="Playing games like kho-kho,";
    var hobby3="traveling..";
    console.log("my hobbies are:",hobby1,hobby2, "and",hobby3);
    var result1 = hobby1.length;
    var result2 = hobby2.length;
    var result3 = hobby3.length;
    console.log("hobby1 length is:",result1,"hobby2 length is:",result2,"hobby3 length is:",result3);
}
stringBasic();
console.log(">>>>>>>>>>>>");
console.log("*********assgin2**********");
console.log(">>>>>>>>>>>");
function stringHandsOn(){  //creat a funcation
    var givanString="  Hey you are doing good, keep it up   ";
    console.log("Givan String is:",givanString);
    var result=givanString.length //length of given string
    console.log("string length is:",result);
    var trimmedLength = givanString.trim();//remove extra space
    var afterLengthTrim =trimmedLength.length;
    console.log("after trim given string:",trimmedLength, "length:",trimmedLength.length);
    console.log("trimmed space:",result-afterLengthTrim );//count extra space
    var charAtZero =trimmedLength.charAt(0);//first char in string
    var charAtLast=trimmedLength.charAt(trimmedLength.length-1); //last char in string
    console.log("first and last char:",charAtZero,charAtLast);
}
stringHandsOn();
