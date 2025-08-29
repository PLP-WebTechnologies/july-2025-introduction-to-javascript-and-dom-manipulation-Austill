// ========================
// Part 1: Basics
// ========================
let userName = "Alice";
let age = 17;

// Conditional
if (age >= 18) {
  document.getElementById("greeting").textContent = "Hello " + userName + ", you're an adult.";
} else {
  document.getElementById("greeting").textContent = "Hello " + userName + ", you're a minor.";
}

// ========================
// Part 2: Functions
// ========================
// Function 1: Add numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum:", addNumbers(5, 7));

// Function 2: Format text
function formatText(text) {
  return text.toUpperCase();
}
console.log("Formatted:", formatText("hello"));

// ========================
// Part 3: Loops
// ========================
// Loop 1: for loop
let numbers = [1, 2, 3, 4, 5];
let output = "Numbers: ";
for (let i = 0; i < numbers.length; i++) {
  output += numbers[i] + " ";
}
document.getElementById("loop-output").textContent = output;

// Loop 2: while loop (countdown)
let countdownText = "Countdown: ";
let count = 5;
while (count > 0) {
  countdownText += count + " ";
  count--;
}
document.getElementById("countdown").textContent = countdownText;

// ========================
// Part 4: DOM Manipulation
// ========================
// Interaction 1: Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = "Text changed by button click!";
});

// Interaction 2: Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("itemList").appendChild(li);
});

// Interaction 3: Toggle background color
document.body.addEventListener("dblclick", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
});
