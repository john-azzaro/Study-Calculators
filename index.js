'use strict';
 
class Calculator {                                                               // Second, create a class and constructors that will take all the inputs and function for the calculator
   constructor(previousOperandTextElement, currentOperandTextElement) {          // so that we can set the text elements inside the calculator
       this.previousOperandTextElement = previousOperandTextElement
       this.currentOperandTextElement = currentOperandTextElement
       this.clear;                                                                      // clear values when we create a new calculator.
   }                                                                                   
                                                                                // Third, thinking of all the function the calculator can do and define them as a function below.
   clear() {                                                                           // clear numbers (and note that these are all the variables that the calculator can hold)
        this.currentOperand = '';                                                      // for the current operand, when cleared, it will default to an empty string.
        this.previousOperand = '';                                                     // The previous operand will also be cleared.
        this.operation = undefined;                                                    // the operation will be undefined.
   }

   delete() {                                                                           // delete a number

   }

   appendNumber(number) {                                                               // every time a use clicks on a number, add to the screen. Also, pass the number the user selects.
        this.currentOperand = number
   }

   chooseOperation(operation) {                                                         // when the user clicks on an operation (i.e. +,-,*,%) and take the specific operation the user selected.

   }

   compute() {                                                                           // take the values int he calculator and compute a single value.

   }

   updateDisplay() {                                                                     // updates display inside the output.
        this.currentOperandTextElement.innerText = this.currentOperand
   }
}

                                       
                                                                                    


  // First, select all elements that match a specfic string, use "[]"(bc data attribute) and selector.
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')

                       

                                                                                             // Fourth, hook up all the variables so that they operate on the calculator.

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)     // Fifth, create a calculator object and pass everything from the constructor into it.

// Sixth, to use the calculator object, select the specific buttons

numberButtons.forEach(function (button) {                                                        // so select number button and for each (loop over all the buttons),
    button.addEventListener('click', function() {                                                 // and add an event listener so that when the user clicks, the calc will...
        calculator.appendNumber(button.innerText)                                                // calculator.appendNumber with the inner text (i.e. 1, 2, 3, etc.)...
        calculator.updateDisplay()                                                               // and lastly update the display so every time the user clicks a button, it shows in display.
    });
});