// @ts-check

const numberButtons = document.querySelectorAll('.calculator__number')
const operationButtons = document.querySelectorAll('.calculator__operation')
const clearButton = document.querySelector('.calculator__clear')
const deleteButton = document.querySelector('.calculator__delete')
const decimalButton = document.querySelector('.calculator__decimal')
const plusminusButton = document.querySelector('.calculator__plusminus')
const percentButton = document.querySelector('.calculator__percent')
const display = document.querySelector('.calculator__display')


var op = "" // empty variable initially to take into op key inputs
var firstValue= "" // holder for n1 of the calculation
var secondValue= "" // holder for n2 of the calculation
var postOp = false // initial declaration that the operator hasn't been used, as an operator makes it go to n2


//adds an event listener for each button, during the event listener it divides into n1 and n2, while also displaying on calculator
numberButtons.forEach(element => {
  element.addEventListener('click', () => {
    if (postOp == false) {
      firstValue+= element.innerHTML  
      display.innerHTML = firstValue
    } else  {
      secondValue+=element.innerHTML
      display.innerHTML = firstValue + op + secondValue 
    }
    console.log(display)
  })
});

// adds an event listener for each operator, and changes the postOp to = true. When = is pressed, operations function is ran.
// If it isn't =, it is logged on the display
operationButtons.forEach(element => {
  element.addEventListener('click', () => {
    postOp= true
    console.log(op)
    if (element.innerHTML == "=" ){
      operations()
    } 
    // else if (element.innerHTML == "+/-") {
    // }
    else {
      op = element.innerHTML
    }
  })
});


// function that resets all the values
function clear() {
  op = ""
  firstValue= ""
  secondValue= "" 
  postOp = false
}


// differentiates between first and second value to add a decimal 
decimalButton.addEventListener('click', ()=> {
  if (postOp == false) {
    firstValue+= decimalButton.innerHTML  
    display.innerHTML = firstValue
  } else  {
    secondValue+= decimalButton.innerHTML
    display.innerHTML = secondValue
  }
})

// multiplies by the percent value then converts it back to string
percentButton.addEventListener('click', ()=> {
  if (postOp == false) {
    var firstValueDisplay =  firstValue + "%" 
    display.innerHTML = firstValueDisplay
    firstValue = (parseFloat(firstValue) * .01).toString()
  } else  {
    secondValue = secondValue + "%"
    display.innerHTML = secondValue
    secondValue = (parseFloat(secondValue) * .01).toString()
  }
})

// adds a minus symbol prior to the value and removes the symbol if tapped again
plusminusButton.addEventListener('click', ()=> {
  if (postOp == false) {
    var negative = firstValue.slice(0, 1)
    if (negative == "-") {
      firstValue = firstValue.slice(1)
      display.innerHTML = firstValue
    } else {
      firstValue = "-" + firstValue 
      display.innerHTML = firstValue
    }
    
  } else  {
    var negative = secondValue.slice(0, 1)
    if (negative == "-") {
      secondValue = secondValue.slice(1)
      display.innerHTML = secondValue
    } else {
      secondValue = "-" + secondValue 
      display.innerHTML = secondValue
    }
  }    
})

//calls back the clear function
clearButton.addEventListener('click', () => {
  display.innerHTML = ""
  clear()
})

// sets the result to 0 initially, converts the first and second values to a real number, then carries out op. Then converts back to string
function operations() {
  var result = 0
  var n1 = parseFloat(firstValue)
  console.log(n1)
  var n2 = parseFloat(secondValue)
  console.log(n2)
  console.log(`this is ${op}`)
  switch (op) {
    case "÷":
      result = n1 / n2
      break
    case "+":
      result = n1 + n2
      break
    case "-":
      result = n1 - n2
      break
    case "*":
      result = n1 * n2
      break
    default:
      console.log("No case called")
  }
  display.innerHTML = result.toString()
  firstValue = result.toString();
  secondValue = ""
  result = 0;
  op = ""
}


//-----------------------
// Code for potential delete function
// function backspace() {
//   if (postOp == false) {
//     firstValue.slice(0, -1)
//   } else {
//     secondValue.slice(0, -1)
//   }
// }

// deleteButton.addEventListener('click', button => {
//   calculator.delete()
//   calculator.updateDisplay()
//   })

// deleteButton.addEventListener('click', button => {
//   calculator.delete()
//   calculator.updateDisplay()
// })





