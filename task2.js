alert("Task 1 Running!");
console.log("Task 1 executed");



// ===============================
// 1. Welcome Program
// ===============================

let userName = prompt("Enter your name:");
let welcomeMessage = "Hi " + userName + ", Welcome to JavaScript Training.";

alert(welcomeMessage);
console.log(welcomeMessage);

// ===============================
// 2. Console Methods Practice
// ===============================

console.log(500);
console.warn(500);
console.error(500);

console.clear(); // clears console

// ===============================
// 3. Data Type Identification
// ===============================

let str = "JavaScript";
let num = 100;
let bool = true;
let undef;
let nul = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(nul, typeof nul);

// ===============================
// 4. Arithmetic Operations
// ===============================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// ===============================
// 5. Increment & Decrement
// ===============================

let x = 10;

console.log("Pre-Increment:", ++x);
console.log("Post-Increment:", x++);
console.log("After Post-Increment:", x);

console.log("Pre-Decrement:", --x);
console.log("Post-Decrement:", x--);
console.log("After Post-Decrement:", x);

// ===============================
// 6. Assignment Operators
// ===============================

let num2 = 10;

num2 += 5;
console.log("After += :", num2);

num2 -= 3;
console.log("After -= :", num2);

num2 *= 2;
console.log("After *= :", num2);

num2 /= 4;
console.log("After /= :", num2);

num2 %= 3;
console.log("After %= :", num2);

// ===============================
// 7. Array Access
// ===============================

let tech = ['HTML', 'CSS', 'JavaScript', 'React'];

console.log("First Element:", tech[0]);
console.log("Second Element:", tech[1]);
console.log("Last Element:", tech[tech.length - 1]);
console.log("Total Elements:", tech.length);

// ===============================
// 8. Modify Array
// ===============================

tech.push("NodeJS"); // add element at end
tech.pop(); // remove last element

console.log("Updated Array:", tech);

// ===============================
// 9. Student Object
// ===============================

let student = {
  name: "Prakash",
  age: 21,
  course: "JavaScript",
  city: "Coimbatore"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("City:", student.city);

// ===============================
// 10. Nested Object Practice
// ===============================

let company = {
  name: "Tech Academy",
  trainer: {
    name: "naveenkumar",
    subject: "JavaScript"
  }
};

console.log("Company Name:", company.name);
console.log("Trainer Name:", company.trainer.name);
console.log("Trainer Subject:", company.trainer.subject);
