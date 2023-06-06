
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

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("1.find out the TCS employees details and log only name& company name  ");

array_employees.forEach((employee)=>{
    if (employee.emp_company=="TCS") {
        console.log(`employee name : ${employee.emp_name} employee company name: ${employee.emp_company} `);
    }
})

console.log("*******************************************");
console.log("2. find the employees salary>=50000 log details");
array_employees.forEach((employee)=>{
if (employee.emp_salary>=50000) {
    console.log(employee);
}
});
console.log("********************************************");
console.log("3. find the sum of all employees salary and log on console");
var sum=0;
array_employees.forEach((employee)=>{
    sum=sum+employee.emp_salary;
})
console.log(`total salary : ${sum}`);
console.log("******************************************");
console.log("4.find the aveage salary and log on console");
let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);
console.log("************************************************");
console.log("5.find the 'IT' OR 'HR' department employees whose salary >=75000 log details");
array_employees.forEach((employee)=>{
    if ((employee.emp_dept=="IT"||"HR")&& employee.emp_salary>=75000) {
        console.log(employee);
    }
})

