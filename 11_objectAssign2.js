
let sbiBank={
bankName:"SBI",
location:"pune",
accountNo:41000005622,
ifscCode:"SBIN0002343",
interestRate:"2%",
showDetails:function(){
 let result=   `***SBI details*** bankName:${this.bankName},location:${this.location},acoountNo:${this.accountNo}, ifscCode:${this.ifscCode},interstRate:${this.interestRate}`
 console.log(`${result}`);
}
}
sbiBank.showDetails()
console.log("=================================");
let axisBank={
    bankName:"axis",
    location:"latur",
    accountNo:41000002345,
    ifscCode:"AXISN0002245",
    interestRate:"9%",
    showDetails:function(){
     let result=   `***AXIS details*** bankName:${this.bankName},location:${this.location},acoountNo:${this.accountNo}, ifscCode:${this.ifscCode},interstRate:${this.interestRate}`
     console.log(`${result}`);
    }
    }
    axisBank.showDetails()
console.log("==========================================");
let hdfcBank={
    bankName:"hdfc",
    location:"Dharashiv",
    accountNo:41000002312,
    ifscCode:"HDFCN0003987",
    interestRate:"5%",
    showDetails:function(){
     let result=   `***HDFC details*** bankName:${this.bankName},location:${this.location},acoountNo:${this.accountNo}, ifscCode:${this.ifscCode},interstRate:${this.interestRate}`
     console.log(`${result}`);
    }
    }
    hdfcBank.showDetails()
    console.log("====================================================");


    let yesBank={
        bankName:"yes",
        location:"beed",
        accountNo:410007868,
        ifscCode:"YESN0002343",
        interestRate:"8%",
        showDetails:function(){
         let result=   `***YES details*** bankName:${this.bankName},location:${this.location},acoountNo:${this.accountNo}, ifscCode:${this.ifscCode},interstRate:${this.interestRate}`
         console.log(`${result}`);
        }
        }
        yesBank.showDetails()