alert("Task 5 Running!");
console.log("Task 5 executed");


// TASK 1 – Employee Merge System
let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };

let employee = { ...empBasic, ...empPromotion };

employee.salary = 40000;
employee.experience = "2 years";

console.log(employee);

// TASK 2 – Shopping Cart
let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];

let cart = [...cart1, ...cart2];

cart.push("Bag");
cart.unshift("Socks");

console.log(cart);

// TASK 3 – Rest Operator Salary Calculator
function calculateTotalSalary(baseSalary, ...bonuses) {
  let totalBonus = 0;

  for (let b of bonuses) {
    totalBonus += b;
  }

  let totalSalary = baseSalary + totalBonus;
  console.log("Total Salary:", totalSalary);
  return totalSalary;
}

calculateTotalSalary(30000, 2000, 3000, 5000);

// TASK 4 – Advanced Destructuring
let student = {
  name: "Rahul",
  marks: {
    maths: 90,
    science: 85,
    english: 88
  }
};

let { name } = student;
let { maths, science } = student.marks;

console.log(name + " scored " + maths + " in maths and " + science + " in science");

// TASK 5 – Array Manipulation
let numbers = [10, 20, 30, 40, 50];

numbers.splice(2, 1, 25);

numbers.reverse();

let exists = numbers.includes(50);

console.log("50 exists:", exists);
console.log(numbers);

// TASK 6 – Flatten Data
let apiData = [1, 2, [3, 4, [5, 6, [7, 8]]]];

let flatData = apiData.flat(3);

console.log(flatData);
console.log("Index of 6:", flatData.indexOf(6));

// TASK 7 – Sorting Problem
let prices = [100, 5, 25, 300, 45];

let asc = [...prices].sort((a, b) => a - b);
let desc = [...prices].sort((a, b) => b - a);

console.log("Ascending:", asc);
console.log("Descending:", desc);



console.log("----------task 5 completed--------------");
