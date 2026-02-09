alert("Task 4 Running!");
console.log("Task 4 executed");

// * SECTION 1 – Real-Time Function Logic


// 1. Payroll System

function calculateSalary(basicSalary, bonusPercentage) {
  let bonus = (basicSalary * bonusPercentage) / 100;
  let tax = (basicSalary * 5) / 100;
  let finalSalary = basicSalary + bonus - tax;

  console.log("Basic:", basicSalary);
  console.log("Bonus:", bonus);
  console.log("Tax:", tax);
  console.log("Final Salary:", finalSalary);

  return finalSalary;
}

calculateSalary(20000, 10);

// 2. Student Result System

function generateResult(name, marksArray) {
  let total = 0;

  for (let m of marksArray) {
    total += m;
  }

  let avg = total / marksArray.length;
  let grade;

  if (avg >= 90) grade = "A";
  else if (avg >= 70) grade = "B";
  else if (avg >= 50) grade = "C";
  else grade = "Fail";

  return { name, total, avg, grade };
}

console.log(generateResult("Arun", [80, 75, 60, 90]));

// * SECTION 2 – Scope & Hoisting

// 3. Debug Code

function demo() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a);
  console.log(b);
}
demo();

// What happens?

// a prints 10

// b gives error

// Fixed Version

function demo() {
  let a, b;
  if (true) {
    a = 10;
    b = 20;
  }
  console.log(a);
  console.log(b);
}
demo();

// 4. Hoisting

try {
  console.log(x);
  var x = 100;
} catch (e) {
  console.log("Error with x:", e.message);
}

try {
  console.log(y);
  let y = 200;
} catch (e) {
  console.log("Error with y:", e.message);
}

// Output:

// - undefined
// - Error (Cannot access 'y' before initialization)

// Explanation:

// var is hoisted with undefined.

// let is hoisted but in Temporal Dead Zone.


// * SECTION 3 – Callback & Higher Order -----------------
// 5. Order Processing

function generateInvoice(id) {
  console.log("Invoice created for:", id);
}

function processOrder(orderId, callback) {
  console.log("Order Processed:", orderId);
  callback(orderId);
}

processOrder(101, generateInvoice);

// 6. Bank Transaction

let balance = 5000;

function sendSMS(msg) {
  console.log("SMS:", msg);
}

function transaction(amount, type, callback) {
  if (type === "deposit") {
    balance += amount;
  } else {
    balance -= amount;
  }
  callback("Balance: " + balance);
}

transaction(1000, "deposit", sendSMS);

// * SECTION 4 – Currying ----------------
// 7. Price Builder

function priceBuilder(basePrice) {
  return function (discount) {
    return function (tax) {
      let price = basePrice - (basePrice * discount) / 100;
      price = price + (price * tax) / 100;
      return price;
    };
  };
}

console.log(priceBuilder(2000)(15)(18));

// * SECTION 5 – IIFE ---------------------

// 8. Company Module
const company = (function () {
  let companyCode = "ABC123";

  function getCompanyStatus() {
    return "Company is running";
  }

  return { getCompanyStatus };
})();

console.log(company.getCompanyStatus());

// * SECTION 6 – Generator ---------------
// 9. Order ID Generator

function* orderGen() {
  let id = 1001;
  while (true) {
    yield "ORD" + id++;
  }
}

let g = orderGen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// 10. Coupon System
function* couponGen() {
  yield "10% OFF";
  yield "20% OFF";
  yield "50% OFF";
  yield "No Luck";
  yield "Jackpot";
}

let c = couponGen();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

// * SECTION 7 – Mini Project (Simple Style) ---------------

const shop = (function () {
  let cart = [];

  function addToCart(name, price) {
    cart.push({ name, price });
  }

  function calculateTotal() {
    let sum = 0;
    for (let item of cart) sum += item.price;
    return sum;
  }

  function applyDiscount(total) {
    return function (discount) {
      return total - (total * discount) / 100;
    };
  }

  function* generateCoupon() {
    yield "SAVE10";
    yield "SAVE20";
  }

  function processPayment(amount, cb) {
    console.log("Paying:", amount);
    cb("Payment done");
  }

  return { addToCart, calculateTotal, applyDiscount, generateCoupon, processPayment };
})();

shop.addToCart("Phone", 15000);
let total = shop.calculateTotal();
let finalAmount = shop.applyDiscount(total)(10);

shop.processPayment(finalAmount, console.log);


// Concept Answers -------------

// 1) Function declaration is normal function, expression is stored in variable.

// 2) Higher order function means function inside another function.

// 3) Generator is used for order id, OTP, coupons.

// 4) IIFE is used to hide variables.

// 5) - var → function scope, re-declared

//    - let → block scope, cannot redeclare

//    - const → constant value, cannot change




console.log("----------task 4 completed--------------");
