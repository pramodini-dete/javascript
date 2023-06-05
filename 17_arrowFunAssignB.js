class employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId=empId;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;
    }
}
const empAnil=new employee(22,"Anil","IT",50000,"TCS");
const empRadha=new employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new employee(55,"Rishi","finance",47000,"TCS");
const empSonali=new employee(66,"Sonali","finance",45000,"Infy");
const empMonika=new employee(77,"Monika","IT",40000,"wipro");
const empViny=new employee(88,"Vinayak","IT",75000,"TCS");
const empMahi=new employee(99,"Mahesh","HR",85000,"Infy");

const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log("**1.find all the employees working in TCS and log only empName and empCompany**");

for (const employee of array) {
    if (employee.empCompany=="TCS") {
        console.log(`employee name is: ${employee.empName}`,`& company name is : ${employee.empCompany}`);

    }   
     
}
console.log("================================");
console.log("2.find the finance department employees log department and employee name");

for (const employee of array) {
    if (employee.empDept=="finance") {
     
        console.log(`employee department is : ${employee.empDept}`,`& employee name is : ${employee.empName}`);

    }
}
console.log("============================");
console.log("3.find the employee whose name start with 'R' & log details");
for (const employee of array) {
    if (employee.empName.startsWith("R")) {
        console.log(`employee details is : empId :${employee.empId} empName: ${employee.empName} empDept: ${employee.empDept} empSalary: ${employee.empSalary} empCompany:${employee.empCompany}`);

    }
}
console.log("==================================");
console.log("4.find the employee salary is > 75000 and log empName ,empCompany& salary");
for (const employee of array) {
    if (employee.empSalary>75000) {
     console.log(`salary > 75000 => empName  : ${employee.empName} empCompany : ${employee.empCompany} empSalary : ${employee.empSalary}`);

    }
}
console.log("==========================================");
console.log("5.find the emp's whose salary greater than or equal 50000 from 'IT' department log complete details");

for (const employee of array) {
    if (employee.empSalary>=50000&& employee.empDept=="IT") {
        console.log(`salary>=50000 & department 'IT' : empId :${employee.empId} empName: ${employee.empName} empDept: ${employee.empDept} empSalary: ${employee.empSalary} empCompany: ${employee.empCompany}`);

    }
    
}
console.log("=========================================");
console.log("6.find out all the employees from company 'Infy' and log complete details");

for (const employee of array) {
    if (employee.empCompany=="Infy") {
        console.log(`employee details is  : empId :${employee.empId} empName: ${employee.empName} empDept: ${employee.empDept} empSalary: ${employee.empSalary} empCompany: ${employee.empCompany}`);

    }
    
}