let bankSbi={
bankName:"SBI",
location:"pune",
accountNo:41000005622,
ifscCode:"SBIN0002343",
interestRate:"2%"
}

let bankLocation ={
    street:"fc road",
    city:"pune",
    pin:411057
}

Object.assign(bankSbi,bankLocation);
console.log("..............clone bankLocation properties.................");
console.table(bankSbi);

let rateOfInterest={
    homeLoannterest:"5%",
    personalLoanInterest:"8%",
    dueInterest:"10%"
}

let sbiDetails={

}

Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest);
console.log("..........merge source bankSbi,bankLocation,rateOfInterest into target sbiDetails.........");
console.table(sbiDetails);


console.log("............traverse the object sbiDetails.................");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key},${value}`);
        
    }
}

