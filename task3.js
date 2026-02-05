alert("Task 3 Running!");
console.log("Task 3 executed");





// --------------------------------------------Part 1 – Logical & Ternary Operator
// Q1: Check whether a number is between 10 and 50
let num1 = 25;

if (num1 >= 10 && num1 <= 50) {
    console.log("Valid Number");
} else {
    console.log("Invalid Number");
}


// Explanation:
// The logical AND (&&) checks both conditions. If the number is greater than or equal to 10 and less than or equal to 50, it is valid.

// Q2: Login check using logical AND
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Allowed");
} else {
    console.log("Access Denied");
}


// Explanation:
// Login is allowed only when both username and password match the given values.

// Q3: Even or Odd using ternary
let number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");


// Explanation:
// The ternary operator checks the condition in one line and returns the result.

// Q4: Find the output
console.log((10 === "10") || (5 > 2) && !(3 < 1));


// Explanation step by step:

// 10 === "10" = false (different data types)

// 5 > 2 = true

// 3 < 1 = false

// !false = true

// true && true = true

// false || true = true

// Final Output: true

// ------------------------------------------Part 2 – Type Conversion
// Q5: Output
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5


// Explanation:
// + joins values when a string is involved.
// Other operators automatically convert the string to a number.

// Q6: Explicit Conversion
let value = "100";

console.log(Number(value));   // 100
console.log(Boolean(value));  // true


// Explanation:

// Number() converts string to number

// Non-empty string becomes true in Boolean

// Q7: Boolean values
console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true


// Explanation:

// Empty string and zero are false

// Space string and array are considered true in JavaScript

// --------------------------------------------Part 3 – Conditional Statements
// Q8: Grade Program
let marks = 78;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Q9: Traffic Signal
let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// Q10: Eligibility Check (Nested if)
let age = 20;
let height = 165;
let weight = 55;

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        } else {
            console.log("Weight condition failed");
        }
    } else {
        console.log("Height condition failed");
    }
} else {
    console.log("Age condition failed");
}

// ------------------------------------------------------Part 4 – Loops
// Q11: Print 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Q12: Print odd numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Q13: While loop (10 to 1)
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Q14: Do-while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Q15: for-of loop
let word = "STACKLY";

for (let ch of word) {
    console.log(ch);
}

// Q16: for-in loop
let student = {
    name: "Arun",
    course: "MERN",
    duration: "6 months"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// Real-Time Questions
// Q1: Login System
let user = "admin";
let pass = "1234";

console.log(
    user === "admin" && pass === "1234"
        ? "Login Success"
        : "Invalid Credentials"
);

// Q2: Salary Bonus
let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
    console.log("Eligible for bonus");
} else {
    console.log("Not eligible");
}

// Q3: Shopping Discount
let amount = 3500;

if (amount >= 5000) {
    console.log("20% Discount");
} else if (amount >= 2000) {
    console.log("10% Discount");
} else {
    console.log("No Discount");
}

// Q4: Even Number Counter
let count = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Even numbers:", count);

// Q5 : Dynamic Greeting
let hour = 18;

if (hour >= 1 && hour <= 6) {
    console.log("Good Morning");
} else if (hour <= 12) {
    console.log("Morning");
} else if (hour <= 16) {
    console.log("Good Afternoon");
} else if (hour <= 19) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}
