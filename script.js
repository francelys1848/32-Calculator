// Global variables
let displayValue = "0";
let storedValue = "0";
let operation = null;
let clearOnNextInput =0 ;

// Calculator functions
function add(x, y) {
    console.log(`Adding ${x} + ${y}`);
    return x + y;
}

// 🧮 Update the subtract function to return x-y
// Subtraction should now work in the calculator
function subtract(x, y) {
    console.log(`Subtracting ${x} - ${y}`);
    return x - y;
 
}

// 🧮 Create a function called multiply that returns
// the result of 2 parameters multiplied
// Multiply should now work in the calculator
function multiply(x,y){
    return x * y;
    console.log(`Multiplying ${x} * ${y}`);
}

// 🧮 Create a function called divide that returns
// the result of the first parameter divided by the second paramter
// Divide should now work in the calculator
function divide(x,y){
    return x / y;
    console.log(`Dividing ${x} / ${y}`) ;
}

// 🧮 Update the negateValue function to return the
// negated value of the parameter 
// Examples:
//   -3 becomes 3
//    1 becomes -1
//  5.2 becomes -5.2
// Call an existing function to get the result
// The '+/-' button should now work in the calculator
function negateValue(val) {
   
    console.log(`Negating ${val}`);
}

// 🧮 Update the convertValueToPercentage function to return the
// value as a percentage
// Examples:
//   50 becomes 0.5
//  100 becomes 1
//  0.3 becomes 0.003
// Call an existing function to get the result
// The '%' button should now work in the calculator
function convertValueToPercentage(val) {
    console.log(`Converting ${val} to a percentage`);
}


//--------------------------------------------------
// The rest of the calculator code lives below.
// You shouldn't need to modify anything down here, 
// but read it to see how the calculator works!
function updateDisplay() {
    $("#display").html(displayValue);
}

function clear() {
    storedValue = "0";
    displayValue = "0";
    updateDisplay();
}

function saveFirstValue() {
    storedValue = displayValue;
}

function saveResult(result) {
    if (result !== null) {
        displayValue = result;
        storedValue = "0";
        operation = null;
        updateDisplay();
    }
}

$("#clear").click(function() {
    clear();
});

$("#negate").click(function() {
    let result = negateValue(parseFloat(displayValue));
    saveResult(result);
});

$("#percent").click(function() {
    let result = convertValueToPercentage(parseFloat(displayValue));
    saveResult(result);
});

$(".operator").click(function() {
    saveFirstValue();
    operation = $(this).attr('id');
    console.log(`Clicked ${operation}`);
    clearOnNextInput = true;
});

$("#equals").click(function() {
    let result = null;
    if (operation === "add") {
        result = add(parseFloat(storedValue), parseFloat(displayValue));
    } else if (operation === "subtract") {
        result = subtract(parseFloat(storedValue), parseFloat(displayValue));
    } else if (operation === "multiply") {
        result = multiply(parseFloat(storedValue), parseFloat(displayValue));
    } else if (operation === "divide") {
        result = divide(parseFloat(storedValue), parseFloat(displayValue));
    }
    saveResult(result);
    clearOnNextInput = true;
});

$(".input").click(function(event) {
    let newChar = $(this).html().trim();
    if ((displayValue === "0" && newChar !== ".") || clearOnNextInput) {
        displayValue = "";
    }
    clearOnNextInput = false;
    displayValue = displayValue + newChar;
    updateDisplay();
});