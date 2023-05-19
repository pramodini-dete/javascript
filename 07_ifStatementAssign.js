function score(gradeScore,hscScore,sscScore,candidateName){
    if (gradeScore>=70 || hscScore>=80|| sscScore>90) {
        console.log(`congrats!!!"${candidateName}" you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately "${candidateName}" you are not eligible for TCS interview`);
    }
}
score(80,86,90, "sham");
console.log("=======");
score(70,65,55,"ram");
console.log("========");
score(60,79,88,"sanju");