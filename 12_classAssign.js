class Vehicle  {
    constructor(name, color1, model,price,fuelType){
        this.name = name;
        this.color = color1
        this.model = model;
        this.price = price;
        this.fuelType = fuelType;
    }
    
}
const car = new Vehicle("toyota", "Black", "fortuner", "50Lakh","diesel");
console.log('');
const BMW = new Vehicle("BMW", "White", "BMW Z4", "90 Lakh","gasoline");
console.log('');
const Mercedes = new Vehicle("Mercedes", " Grey", "Mercedes-Benz EQC", "99Lakh","diesel");
console.log('');
const MG = new Vehicle("MG", "Black", "MG Comet EV", "9 Lakh","petrol&diesel");
console.log('');
const Tata=new Vehicle("tata","white","tata tiago","6lakh","petrol")



  
 let allVechical=[car,BMW,Mercedes,MG,Tata]
 
 for (const Vehicle of allVechical) {
     console.log(` Details Of the Vechicle ${Vehicle.name}, ${Vehicle.color}, ${Vehicle.model} , ${Vehicle.price} ,${Vehicle.fuelType}`);
     
 }

 
 
 class college  {
    constructor(name, city,Departments, telephone){
        this.name = name;
        this.city = city
        this.Departments = Departments;
        this.telephone= telephone;
        
    }
}
const BCD  = new college("Billgates College,", "Dhrashiv", "Engineering","022345342");
const FC = new college("Fergusson College", "Pune", "Arts, Science & Commerce","03456733" );
const jSPM = new college("JSPM College", "pune", "Engineering", "042345876");
const Sp = new college("Sir Parashurambhau College", "pune", "Engineering","022209765");
 console.log(`============All College Details==========`);
 
 console.log(``);
 traverseObject(BCD);
 console.log(`==================`);
 traverseObject(FC);
 console.log(`=============================`);
 traverseObject(jSPM);
 console.log(`======================================`);
 traverseObject(Sp);
 console.log(`==========================================`);


 function traverseObject(college){
  
    for (const key in college) {
        if (Object.hasOwnProperty.call(college, key)) {
            const element = college[key];
            console.log(`${key}, ${element}`);
            
        
            
        }
    }

 } 





