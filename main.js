//1. identify button then take output from it, append number to internal calculation append number to display.
//
///
///
// take string and convert to actual number
// take string and convert to mathematical function
// recognise when not to add an input e.g. mathematical function twice in a row/ not having a zero before the number
// be able to do maths in the console log 

const numberButtons = document.querySelectorAll('.calculator__number')
const operationButtons = document.querySelectorAll('.calculator__operation')
const clearButton = document.querySelector('.calculator__clear')
const deleteButton = document.querySelector('.calculator__delete')
// const previousOperand = document.querySelector('.previous-operand')
// const currentOperand = document.querySelector('.current-operand')
const display = document.querySelector('.calculator__display')


var op = ""
var firstValue= ""
var secondValue= "" 
var postOp = false 

//display.innerHTML = "0"

numberButtons.forEach(element => {
  element.addEventListener('click', () => {
    if (postOp == false) {
      firstValue+= element.innerHTML  
      display.innerHTML = firstValue
    } else  {
      secondValue+=element.innerHTML
      display.innerHTML = secondValue
    }
    console.log(display)
  })
});

function operations() {
  console.log("Report: we're in operations")
  var result = 0
  var n1 = parseFloat(firstValue)
  console.log(n1)
  var n2 = parseFloat(secondValue)
  console.log(n2)
  console.log(`this is ${op}`)
  switch (op) {
    case "÷":
      result = n1 / n2
      display.innerHTML = result.toString()
      firstValue = result
      break
    case "+":
      console.log("Report: we're in case +")
      result = n1 + n2
      //display.innerHTML = result.toString()
      display.innerHTML = result.toString()
      firstValue = result
      break
    case "-":
      result = n1 - n2
      display.innerHTML = result.toString()
      firstValue = result
      break
    case "*":
      result = n1 * n2
      display.innerHTML = result.toString()
      firstValue = result
      break

    default:
      display.innerHTML = "2"
      console.log("Report: we're in default")

  }
}


operationButtons.forEach(element => {
  element.addEventListener('click', () => {
    //firstValue+= element.innerHTML
    postOp= true
    // op = element.innerHTML
    console.log(op)
    if (element.innerHTML == "=" ){
      operations()
    }
    else {
      op = element.innerHTML
    }
  })
});




// clearButton.forEach(element => {
//   element.addEventListener('click', () => {
//     display = 0
//     console.log(display)
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






