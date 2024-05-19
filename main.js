//Assigment No1:
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
//Object:
var EmployeeData = {
    name: "Maha",
    department: "Software Engineering",
    role: "Engineer",
    skills: ["Coding", "Python"]
};
//Object1:
var employeeData1 = {
    name: "Niba",
    department: "Generative AI",
    role: "Engineer",
    contact: {
        phoneNumber: 92345768782,
        Email: "khan@gmail.com"
    },
    skills: ["Ms_Office", "CIT", "Typescript",]
};
//Print output:
console.log(EmployeeData);
console.log(employeeData1.contact);
var carDetail = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    engine: {
        horsepower: 139,
    },
    getHorsePower: function () {
        return carDetail.engine.horsepower;
    }
};
console.log(carDetail);
console.log("Car Brand: ".concat(carDetail.brand, ", Car Model: ").concat(carDetail.model, ", Car Year: ").concat(carDetail.year, " "));
console.log("HorsePower", carDetail.getHorsePower());
var T_shirt = {
    name: "Nike",
    price: 3000,
    color: "Red",
    Inventory: {
        stock: 100,
        colourOptions: ["red", "blue", "yellow", "White"],
        changeColour: function (newColor) {
            T_shirt.color = newColor;
            if (newColor == "red") {
                T_shirt.price += T_shirt.price / 100 * 25;
            }
            else if (newColor == "blue") {
                T_shirt.price += T_shirt.price / 100 * 20;
            }
            else if (newColor == "yellow") {
                T_shirt.price += T_shirt.price / 100 * 10;
            }
            else if (newColor == "White") {
                T_shirt.price += T_shirt.price / 100 * 5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(T_shirt);
console.log(T_shirt.Inventory.colourOptions);
T_shirt.Inventory.changeColour("red");
