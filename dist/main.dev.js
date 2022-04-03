"use strict";

//1. identify button then take output from it, append number to internal calculation append number to display.
//
///
///
// take string and convert to actual number
// take string and convert to mathematical function
// recognise when not to add an input e.g. mathematical function twice in a row/ not having a zero before the number
// be able to do maths in the console log 
// @ts-check
var numberButtons = document.querySelectorAll('.calculator__number');
var operationButtons = document.querySelectorAll('.calculator__operation');
var clearButton = document.querySelector('.calculator__clear');
var deleteButton = document.querySelector('.calculator__delete');
var decimalButton = document.querySelector('.calculator__decimal');
var plusminusButton = document.querySelector('.calculator__plusminus');
var percentButton = document.querySelector('.calculator__percent');
var display = document.querySelector('.calculator__display');
var op = ""; // empty variable initially to take into op key inputs

var firstValue = ""; // holder for n1 of the calculation

var secondValue = ""; // holder for n2 of the calculation

var postOp = false; // initial declaration that the operator hasn't been used, as an operator makes it go to n2
//adds an event listener for each button, during the event listener it divides into n1 and n2, while also displaying on calculator

numberButtons.forEach(function (element) {
  element.addEventListener('click', function () {
    if (postOp == false) {
      firstValue += element.innerHTML;
      display.innerHTML = firstValue;
    } else {
      secondValue += element.innerHTML;
      display.innerHTML = firstValue + op + secondValue;
    }

    console.log(display);
  });
});
operationButtons.forEach(function (element) {
  element.addEventListener('click', function () {
    postOp = true;
    console.log(op);

    if (element.innerHTML == "=") {
      operations();
    } else if (element.innerHTML == "+/-") {} else {
      op = element.innerHTML;
    }
  });
});

function clear() {
  op = "";
  firstValue = "";
  secondValue = "";
  postOp = false;
}

decimalButton.addEventListener('click', function () {
  if (postOp == false) {
    firstValue += decimalButton.innerHTML;
    display.innerHTML = firstValue;
  } else {
    secondValue += decimalButton.innerHTML;
    display.innerHTML = secondValue;
  }
});
percentButton.addEventListener('click', function () {
  if (postOp == false) {
    var firstValueDisplay = firstValue + "%";
    display.innerHTML = firstValueDisplay;
    firstValue = (parseFloat(firstValue) * .01).toString();
  } else {
    secondValue = secondValue + "%";
    display.innerHTML = secondValue;
    secondValue = (parseFloat(secondValue) * .01).toString();
  }
});
plusminusButton.addEventListener('click', function () {
  if (postOp == false) {
    var negative = firstValue.slice(0, 1);

    if (negative == "-") {
      firstValue = firstValue.slice(1);
      display.innerHTML = firstValue;
    } else {
      firstValue = "-" + firstValue;
      display.innerHTML = firstValue;
    }
  } else {
    var negative = secondValue.slice(0, 1);

    if (negative == "-") {
      secondValue = secondValue.slice(1);
      display.innerHTML = secondValue;
    } else {
      secondValue = "-" + secondValue;
      display.innerHTML = secondValue;
    }
  }
});
clearButton.addEventListener('click', function () {
  display.innerHTML = "";
  clear();
});

function operations() {
  var result = 0;
  var n1 = parseFloat(firstValue);
  console.log(n1);
  var n2 = parseFloat(secondValue);
  console.log(n2);
  console.log("this is ".concat(op));

  switch (op) {
    case "÷":
      result = n1 / n2;
      break;

    case "+":
      result = n1 + n2;
      break;

    case "-":
      result = n1 - n2;
      break;

    case "*":
      result = n1 * n2;
      break;

    default:
      console.log("No case called");
  }

  display.innerHTML = result.toString();
  firstValue = result.toString();
  secondValue = "";
  result = 0;
  op = "";
} // for equals if current value and previous value are filled, carry out action
// function backspace() {
//   if (postOp == false) {
//     firstValue.slice(0, -1)
//   } else {
//     secondValue.slice(0, -1)
//   }
// }
// clearButton.forEach(element => {
//   element.addEventListener('click', () => {
//     display.innerHTML = "0"
//     clear()
//   })
// });
// deleteButton.addEventListener('click', button => {
//   calculator.delete()
//   calculator.updateDisplay()
//   })
// deleteButton.addEventListener('click', button => {
//   calculator.delete()
//   calculator.updateDisplay()
// })
//   element.onclick = function() {
//     console.log(element)
//   }
// });