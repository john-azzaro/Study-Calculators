'use strict';
 
class Calculator {                                                                     // Second, create a class and constructors that will take all the inputs and function for the calculator
   constructor(previousOperandTextElement, currentOperandTextElement) {                // so that we can set the text elements inside the calculator
       this.previousOperandTextElement = previousOperandTextElement
       this.currentOperandTextElement = currentOperandTextElement
   }                                                                                   // Third, thinking of all the function the calculator can do and add each function below.
   clear() {                                                                           // clear numbers
 
   }
   delete() {                                                                           // delete a number

   }
   appendNumber(number) {                                                               // every time a use clicks on a number, add to the screen. Also, pass the number the user selects.

   }
   chooseOperation(operation) {                                                         // when the user clicks on an operation (i.e. +,-,*,%) and take the specific operation the user selected.

   }
   compute() {                                                                           // take the values int he calculator and compute a single value.

   }
   updateDisplay() {                                                                     // updates display inside the output.

   }
}

                                                                                         





const numberButtons = document.querySelectorAll('[data-number]')                            // First, select all elements that match a specfic string, use "[]"(bc data attribute) and selector.
const operationButtons = document.querySelectorAll('[data-operation]')                           
const equalsButtons = document.querySelectorAll('[data-equals]')                           
const deleteButtons = document.querySelectorAll('[data-delete]')                           
const allClearButton = document.querySelectorAll('[data-all-clear]')                           
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')                           
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')                           