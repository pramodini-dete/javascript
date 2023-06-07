class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("1.find all the employees from 'Wipro' company");
const result=array_employees.filter((employee)=>{
    return employee.emp_company== "Wipro"
})
//  console.log(result);
 const arrayIds =result.map( (employee)=> {
     return employee.emp_name;
 });
    console.log(arrayIds);

// for (const emp of result) {
//     console.log(emp);
// }
console.log("************************************");
console.log("2.find all the employee 'IT'or'HR' dept");
const result1=array_employees.filter((employee)=>{
    return (employee.emp_dept== "IT")||(employee.emp_dept=="HR")
})
const result2=result1.map((employee)=>{
    return employee.emp_name
})
console.log(result2);
// for (const emp of result1) {
//     console.log(emp);
// }
console.log("*************************************");
console.log("3.find all the employee whose emp id's are greater than 50");
const result3=array_employees.filter((employee)=>{
    return employee.emp_id>50;
})
const result4=result3.map((employee)=>{
    return employee.emp_id
})
console.log(`id > 50: ${result4}`);
console.log("**************************************************");
console.log("4.find employee whose names start with'A'or'V'or 'M'");
array_employees.filter((employee)=>{
    if (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||
    employee.emp_name.startsWith("M")) {
        console.log(`${employee.emp_name}`);
    }
})
console.log("******************************************************");
console.log("5.find the avg salary of the employee for all the deapartment");
const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sulSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(`avg salary: ${sulSalary}`);
console.log("*******************************************************");
console.log("6.find out avg salary for  IT departments");
const empSalaries1 = array_employees.filter( (employee) => {
    return employee.emp_dept=="IT"
});
const emp = empSalaries1.map( (employee) => {
    return employee.emp_salary;
});


const sulSalary1 =emp.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(`total salary of  the IT department employee : ${sulSalary1}`);
 const avg=sulSalary1/emp.length
console.log(`average salary of the IT department empolyee : ${avg}`);
