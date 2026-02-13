alert("Task 7 Running!");
console.log("Task 7 executed");

//  SECTION 1 – Date Object ----------------
// TASK 1 – Digital Clock
function digitalClock() {
  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  console.log("Current Time:", h + " : " + m + " : " + s);
}

setInterval(digitalClock, 1000);

// TASK 2 – Current Day Name
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let today = new Date();
let dayName = days[today.getDay()];

console.log("Today is", dayName);

// TASK 3 – Age Calculator
let birthYear = 2003;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Your age is", age);

// TASK 4 – Create Specific Date
let customDate = new Date();

customDate.setFullYear(2020);
customDate.setMonth(7); // August (0 based)
customDate.setDate(15);
customDate.setHours(10);
customDate.setMinutes(30);
customDate.setSeconds(45);

console.log(customDate.toLocaleString());

// SECTION 2 – setTimeout & setInterval --------------
// TASK 5 – Delayed Message
setTimeout(function(){
  console.log("Welcome Naveen");
}, 3000);

// TASK 6 – Stop Interval After 5 Seconds
let count = 1;

let timer = setInterval(function(){
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(timer);
    console.log("Stopped");
  }

}, 1000);

//  SECTION 3 – Promise Practice -------------
// TASK 7 – Simple Promise
let number = 15;

let checkNumber = new Promise(function(resolve, reject){
  if (number > 10) {
    resolve("Valid number");
  } else {
    reject("Invalid number");
  }
});

checkNumber
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));

// SECTION 4 – Fetch API ------------
// TASK 8 – Fetch Product Prices
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price:", p.price);
      console.log("----------------");
    });
  })
  .catch(err => console.log(err));

// SECTION 5 – Execution Order ------------------
function one(){
  console.log("one");
}

function two(){
  console.log("two");
}

function three(){
  console.log("three");
}

one();
setTimeout(two,0);
three();

// Output:
// one
// three
// two

// Why?

// Because setTimeout goes to callback queue, so it runs after main code finishes.


console.log("----------task 7 completed--------------");
