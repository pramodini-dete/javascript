console.log("*****assgin1*****");
console.log(".....................");
function stringBasic(){
    var company="TCS";
    console.log("my dream company name is:",company);
    var hobby1="Learning new Things,";
    var hobby2="Playing games like kho-kho,";
    var hobby3="traveling..";
    console.log("my hobbies are:",hobby1,hobby2, "and",hobby3);
    var result1 = hobby1.length+hobby2.length+hobby3.length;
    console.log(" total length of char is:",result1);
}
stringBasic();
console.log(">>>>>>>>>>>>");
console.log("*********assgin2**********");
console.log(">>>>>>>>>>>");
function stringHandsOn(){  //creat a funcation
    var givanString="  Hey you are doing good, keep it up   ";

    console.log("Given String is:",givanString);

    var result=givanString.length //length of given string
    console.log("string length is:",result);

    var trimmedLength = givanString.trim();//remove extra space
    var afterLengthTrim =trimmedLength.length;

    console.log("after trim given string:",trimmedLength, "length:",trimmedLength.length);
    console.log("trimmed space:",result-afterLengthTrim );//count extra space
    var charAtZero =trimmedLength.charAt(0);//first char in string
    
    var charAtLast=trimmedLength.charAt(trimmedLength.length-1); //last char in string
    console.log("first and last char:",charAtZero,charAtLast);
    console.log("*****step6*****");

    var resultSplit = trimmedLength.split(" ");
    console.log("Total number of words: ",resultSplit.length);

    console.log("****step7****");
    var totalWord=trimmedLength.indexOf("good");
    console.log(`index of word"good"is ${totalWord}`);//string tamplate

    console.log("****step8****");
    var resultSlice=trimmedLength.slice(22);
    console.log(`inedx 22 slice result is ${resultSlice}`);
    console.log("............");
    var subStringResult=trimmedLength.substring(22);
    console.log(`index 22 substring result is ${subStringResult}`);

    console.log("****step9****");
    var endWithSting=trimmedLength.includes("up")
    console.log(`string ends with word "up" ${endWithSting}`);

    console.log("****step10****");
    var startWith=trimmedLength.includes("Hey");
    console.log(`a string starts with word "Hey"${startWith}`);

    
}
stringHandsOn();
