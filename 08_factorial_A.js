

var factorialOfNum =function(num){
   
    if(num == null || num == undefined  ){
        console.log(`invalid input'${num}`);
    }
    else
    {
        let factorial = 1; // 120
        for (let index = num; index >= 1; index--) {  // index = 5  4  3  2  1  0
            factorial = factorial * index;  
            //  console.log(`factorial of ${num} is `);
            
        }
        return factorial
    }

}
 var result =factorialOfNum(5);
 console.log(`factorial of 5 : ${result}  ` );


 console.log(`========`);
 var result =factorialOfNum(3);
 console.log(`factorial of  3 :  ${result}` );

 console.log(`========`);
 var result =factorialOfNum(null);
//  console.log(`factorial of  null is:-  ${fat}` );
 console.log(`=========`);
 var result =factorialOfNum(8);
 console.log(`factorial of  8 :  ${result}` );
 console.log(`==========`);
 var fat =factorialOfNum(undefined);
//  console.log(`factorial of  undefined  is:-  ${fat}` );
 console.log(`==========`);
 var result =factorialOfNum(9);
 console.log(`factorial of  9 :  ${result}` );
 console.log(`==========`);
 var result =factorialOfNum(0);
 console.log(`factorial of  0 :  ${result}` );