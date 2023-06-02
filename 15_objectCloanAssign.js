console.log("1.perfrom shallow clone given array and update cloned array with 55,56 using push()");
const arrayNum=[20,3,4,56,90,400,49];
const cloneArray=arrayNum;//shallow clone
console.log(`clone array ${cloneArray}`);
arrayNum.push(55,56);
console.log("updated array:",arrayNum);
console.log("==================================");
console.log("2.perfrom deep clone using spread operator and update original aaray 10,25 last position");
const arrayNum1=[20,3,4,56,90,400,49];
const cloneArray1=[...arrayNum1]//clone array using deep clone with spread operator
console.log("original array",arrayNum1);
arrayNum1.push(10,25);
console.log(`original array update with 10 &25: ${[arrayNum1]}`);
console.log("clone array:",cloneArray1);
console.log("==========================================");
console.log("3. merge or concat two array using spread operator");

const arrayEven=[20,30,14,8];
const concatArray=[...arrayNum,...arrayEven]; //mergeor concat array using spread oprator 
console.log(`concat array using spread operator ${concatArray}`);
console.log("============================================");
console.log("4. create employee details");
const employee_info = {
    emp_id: 27,
    emp_name: 'John Doe',
    salary: {
      july_month: '40,0000 INR',
      aug_month: '50,0000 INR',
      jun_month: '65,0000 INR',
    },
    address: {
      locality: {
        colony: 'OM Vrindavan Society',
        street: 'Kanch Pokli, 431202',
      },
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
    },
    mobiles: ['+91 8600 3456 88', '1800- 4567 32', '+91- 9096 5678 77'],
  }

  console.log("5.log the employee details");

//   employee_info.address;
  const info=employee_info.address.locality.colony;
  const info1=employee_info.address.locality.street;
  const info2=employee_info.address.city;
  const info3=employee_info.address.state;
  const info4=employee_info.address.country;
  const mobileNo=employee_info.mobiles;
  console.log(`empolyee details is: ${info},${info1},${info2},${info3},${info4}`);
  console.log(`mobile no : ${mobileNo}`);
console.log("======================================================");

console.log("6. perfrom deep clone using JSON.stringfy()");
const deepClonedEmployee_info=JSON.parse(JSON.stringify(employee_info));

console.log("6.a :update property to july_month salary to 80k on cloned object");
employee_info.salary.july_month;
console.log("***********original salary",employee_info.salary.july_month);
const update=deepClonedEmployee_info.salary.july_month="80,0000 INR";
console.log(`*********clone object updated salary :${update}***********`);


console.log("update property country to united kingdom");
employee_info.address.country;
console.log("***********original object country:",employee_info.address.country);
const updateC=employee_info.address.country="United Kingdom";
console.log(`****************updated country: ${updateC}`);