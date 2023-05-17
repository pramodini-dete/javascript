console.log("=======TCS interview Eligibility======");
var show = function(gradScore,hscScore,sscScore,candidateName){

    var result=(gradScore>=70)||(hscScore>=80)||(sscScore>90)?`Congrates "${candidateName}" you are eligible for TCS interview`:`Unfortunately "${candidateName}"you are not eligible for TCS inteview`;
    console.log(`${result}`);
}
show(80,86,90,"minal");
console.log("..........");
show(70,65,55,"sonal");
console.log(".........");
show(60,79,88,"kartiki");