console.log("=========Leap Year===========");

let checkLeapYear= function(leapYear){
    if (isNaN (leapYear)||leapYear==null) {
        console.log(`${leapYear} given input is  invalid `);
    } else {
        if (leapYear%4==0) {
            
             console.log(` ${leapYear} is a leapyear`);
        } else {
             console.log(`${leapYear} is not  a leapYear`);
        }
    }
} 

 checkLeapYear(2020);
 checkLeapYear(1999);
 checkLeapYear(1600);
 checkLeapYear(2022);
 checkLeapYear(1945);
 checkLeapYear(null);
 checkLeapYear("twenty twenty");
 checkLeapYear(undefined);
 checkLeapYear(NaN);
 checkLeapYear(1750);
 


