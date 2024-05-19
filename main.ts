//=========OBJECT ASSIGMENT===========

//~~~~~~~~~~~~Assigment No~~~~~~~~~~~~~~
/*Part 1: Employee Data
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like 
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if 
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if 
any)*/

//Type Alias:
type Employee = {
    name: string, 
    department: string,
    role: "Manager" | "Engineer" | "Intern"
    contact?: {
        phoneNumber?: number,
        Email?: string
    },
    skills? : string[];
}

//Object:
let EmployeeData: Employee = {
    name: "Maha",
    department: "Software Engineering",
    role: "Engineer",
    skills: ["Coding", "Python"]
}

//Object1:
let employeeData1: Employee = {
    name: "Niba",
    department: "Generative AI",
    role: "Engineer",
    contact: {
        phoneNumber: 92345768782,
        Email: "khan@gmail.com"
    },
    skills: ["Ms_Office","CIT", "Typescript",]
}

//Print output:
console.log(EmployeeData);
console.log(employeeData1.contact);

//~~~~~~~~~~~~~~~Assigments2~~~~~~~~~~~~~~~~~~
/*Part 2: Car Details
Challenge:
1. Design a type alias named Car to represent a car object.
2. Include a nested object named engine within Car, containing a property named 
horsepower (number).
3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
engine's horsepower.*/

//Type Aliase
type car = {
    brand: string,
    model: string,
    year: number,
    engine:{
        horsepower: number
    },
    getHorsePower: ()=>{}
}

//Objects:
let carDetail:car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    engine:{
        horsepower: 139,
    },
    getHorsePower: ()=>{
        return carDetail.engine.horsepower;
    }
}

//Print Output
console.log(carDetail)
console.log(`Car Brand: ${carDetail.brand}, Car Model: ${carDetail.model}, Car Year: ${carDetail.year} `)
console.log("HorsePower",carDetail.getHorsePower());

//~~~~~~~~~~~~~~~~~~Assigment No3~~~~~~~~~~~~~~~~~~
/*Part 3: Colorful T-Shirts
Challenge:
1. Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object 
should have two properties: 
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function 
accepts a new color string as an argument. When called, it should: 
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g., 
increase by 10% for red, decrease by 5% for blue).*/

type product = {
    name: string,
    price: number,
    color: string,
    Inventory: {
     stock: number,
     colourOptions?: string[],
     changeColour: (newColour:string)=>any
    }
}

let T_shirt:product = {
    name: "Monark",
    price: 3000,
    color: "Red",
    Inventory: {
        stock: 100,
        colourOptions: ["red", "blue", "yellow", "White"],
        changeColour:(newColor)=>{
           T_shirt.color = newColor

           if(newColor == "red"){
            T_shirt.price += T_shirt.price / 100 * 25
           }

           else if(newColor == "blue"){
            T_shirt.price += T_shirt.price / 100 * 20
           }

           else if(newColor == "yellow"){
            T_shirt.price += T_shirt.price / 100 * 10
           }

           else if(newColor == "White"){
            T_shirt.price += T_shirt.price / 100 * 5
           }

           else{
            return null;
           }
        }   
    }
}

//Print Output
console.log(T_shirt);
console.log(T_shirt.Inventory.colourOptions)
T_shirt.Inventory.changeColour("red")