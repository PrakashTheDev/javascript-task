alert("Task 6 Running!");
console.log("Task 6 executed");


// Task 1 – forEach()
let subjects = ["Maths", "Science", "English", "History"];

let result = subjects.forEach((sub, index) => {
  console.log("Subject " + (index + 1) + ": " + sub);
});

console.log("Result:", result);


// Why forEach returns undefined?
// - because it only loops, it doesn’t return a new array.

// Task 2 – map()
let prices = [100, 200, 300, 400];

let gstPrices = prices.map(p => p + (p * 10) / 100);

console.log(gstPrices);

// Task 3 – filter()
let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];

let passed = students.filter(s => s.marks > 50);

console.log(passed);

// Task 4 – find()
let firstPassed = students.find(s => s.marks > 50);

console.log(firstPassed);


// Difference between filter and find?
//  -filter returns all matching values, find returns only first match.

// Task 5 – reduce()
let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
];

let total = cart.reduce((sum, c) => {
  let priceWithTax = c.price + (c.price * 5) / 100;
  return sum + priceWithTax;
}, 0);

console.log("Total:", total);

// Task 6 – some()
let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(n => n % 2 === 0);

console.log(hasEven);

// Task 7 – every()
let ages = [22, 25, 19, 30];

let allAbove18 = ages.every(a => a > 18);

console.log(allAbove18);

// Task 8 – sort()
let salaries = [50000, 10000, 70000, 30000];

let asc = [...salaries].sort((a, b) => a - b);
let desc = [...salaries].sort((a, b) => b - a);

console.log("Asc:", asc);
console.log("Desc:", desc);


// Why normal sort fails?
// - because it sorts numbers like strings.

// Task 9 – Array Conversion
let arr = [10, 20, 30, 40];

console.log(arr.toString());
console.log(arr.join("-"));

// *SECTION 2 – String Methods -----------------------------
// Task 10 – charAt & charCodeAt
let word = "Developer";

console.log(word.charAt(4));
console.log(word.charCodeAt(4));

// Task 11 – slice()
let company = "StacklyCompany";

console.log(company.slice(7));

// Task 12 – Case Conversion
let userInput = "javaScript";

console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());

// Task 13 – trim()
let email = "   naveen@gmail.com   ";

console.log(email.trim());

// Task 14 – includes()
let message = "Welcome to JavaScript Training";

console.log(message.includes("JavaScript"));

// Task 15 – split()
let movie = "spider-man-no-way-home";

console.log(movie.split("-"));

// Task 16 – indexOf & lastIndexOf
let text = "programming";

console.log(text.indexOf("m"));
console.log(text.lastIndexOf("m"));

// Task 17 – replace()
let tech = "I love python";

console.log(tech.replace("python", "javascript"));

// Task 18 – startsWith & endsWith
let filename = "report.pdf";

console.log(filename.startsWith("report"));
console.log(filename.endsWith(".pdf"));

// Task 19 – repeat()
let star = "*";

console.log(star.repeat(10));

// -FINAL TEAM CHALLENGE – Employee Report System --------------
let employees = [
  { name: "Naveen", salary: 50000 },
  { name: "Arun", salary: 30000 },
  { name: "Kiran", salary: 70000 }
];

let upperNames = employees.map(e => ({
  ...e,
  name: e.name.toUpperCase()
}));

let highSalary = upperNames.filter(e => e.salary > 40000);

let firstHigh = upperNames.find(e => e.salary > 60000);

let totalSalary = upperNames.reduce((sum, e) => sum + e.salary, 0);

let sorted = [...upperNames].sort((a, b) => b.salary - a.salary);

console.log(upperNames);
console.log(highSalary);
console.log(firstHigh);
console.log("Total:", totalSalary);


console.log("----------task 6 completed--------------");
