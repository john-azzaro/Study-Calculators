'use strict';
 
class Calculator {                                                               // Second, create a class and constructors that will take all the inputs and function for the calculator
   constructor(previousOperandTextElement, currentOperandTextElement) {          // so that we can set the text elements inside the calculator
       this.previousOperandTextElement = previousOperandTextElement;
       this.currentOperandTextElement = currentOperandTextElement;
       this.clear();                                                               // clear values when we create a new calculator.
   }                                                                                   
                                                                                // Third, thinking of all the function the calculator can do and define them as a function below.
   clear() {                                                                           // clear numbers (and note that these are all the variables that the calculator can hold)
        this.currentOperand = '';                                                      // for the current operand, when cleared, it will default to an empty string.
        this.previousOperand = '';                                                     // The previous operand will also be cleared.
        this.operation = undefined;                                                    // the operation will be undefined.
   }

   delete() {                                                                           // delete a number

   }

   appendNumber(number) {                                                           // every time a use clicks on a number, add to the screen. Also, pass the number the user selects.
        if (number === '.' && this.currentOperand.includes('.')) {                         // resolves multiple decimal point issue... if the number is "." and already include it, 
        return;                                                                           //  return so the function will not execute any further.
        }                        
        this.currentOperand = this.currentOperand.toString() + number.toString();           // update the currentOperand and append the current number by converting it to a string and append                                                                                         
   }                                                                                        // with another number.  Note that you need to need to convert to strings is because javascript will
                                                                                            // try to add as acutal numbers (i.e. 2 + 2 = 4 instead of 2 + 2 =) 

   chooseOperation(operation) {                                                         // when the user clicks on an operation (i.e. +,-,*,%) and take the specific operation the user selected.
        if (this.currentOperand === '') {                                                 // if the current operand is empty (i.e. ''), 
            return;                                                                       //  return so the function will not execute any further.
        }
        if (this.previousOperand !== '') {                                                // if previous operand is not an empty string, then continue computation by...
            this.compute();                                                               // .. call the compute function.
        }                  
        this.operation = operation;                                                     // set the operation to be equal to the operation passed in...
        this.previousOperand = this.currentOperand;                                      // when the current number is done, push this into previousOperand...
        this.currentOperand = '';                                                       // make currentOperand an empty string (clearing out the value).
   }

   compute() {                                                                           // take the values in the calculator and compute a single value.
        let computation;                                                                   // this variable is the result of the compute function.
        const prev = parseFloat(this.previousOperand);                                     // the prev variable (converts the previousOperand string to a number.)
        const current = parseFloat(this.currentOperand);                                     // the current variable (converts the previousOperand string to a number).
        if (isNan(prev) || isNaN(current))  {                                            // then check to see that if the user doesnt put anything in and then pushes equal, nothing will happen with isNaN
            return;                                                                          // the function will not run.
        }       
    
   }

   updateDisplay() {                                                                     // updates display inside the output.
        this.currentOperandTextElement.innerText = this.currentOperand;                     // this shows the current operand from input.
        this.previousOperandTextElement.innerText = this.previousOperand;                    // this shows the previous operand from input
   }
}

                                       
                                                                                    


  // First, select all elements that match a specfic string, use "[]"(bc data attribute) and selector.
  const numberButtons = document.querySelectorAll('[data-number]');
  const operationButtons = document.querySelectorAll('[data-operation]');
  const equalsButton = document.querySelector('[data-equals]');
  const deleteButton = document.querySelector('[data-delete]');
  const allClearButton = document.querySelector('[data-all-clear]');
  const previousOperandTextElement = document.querySelector('[data-previous-operand]');
  const currentOperandTextElement = document.querySelector('[data-current-operand]');

                       

                                                                                             // Fourth, hook up all the variables so that they operate on the calculator.

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)     // Fifth, create a calculator object and pass everything from the constructor into it.

// Sixth, to use the calculator object, select the specific buttons



numberButtons.forEach(function (button) {                                                        // so select number button and for each (loop over all the buttons),
    button.addEventListener('click', function(event) {                                                 // and add an event listener so that when the user clicks, the calc will...
        calculator.appendNumber(button.innerText);                                                // calculator.appendNumber with the inner text (i.e. 1, 2, 3, etc.)...
        calculator.updateDisplay();                                                               // and lastly update the display so every time the user clicks a button, it shows in display.
    });
});
 
operationButtons.forEach(function (button) {                                                  // for the operation button event listener....                                       
    button.addEventListener('click', function(event) {                                                 
        calculator.chooseOperation(button.innerText)                                          // choose an operation (via the calculator class) and pass the text of that operation 
        calculator.updateDisplay();                                                             // ... and update the display.   
    });
});

equalsButton.addEventListener('click', (button) => {                                             // add event listener to equalsbutton
    calculator.compute();                                                                        // call compute button (in calculator class)
    calculator.updateDisplay();                                                                  // and update the display.
})



