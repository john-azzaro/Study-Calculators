'use strict';

class Calculator {                                              /* Calculator class to store our data input...*/
                                                                 /* takes all inputs and */
}




function handleNumberButtons() {
    $('body').on('click', '.js-data-number', function(event) {

    });
}


function setUpEventHandlers() {
    handleNumberButtons();
    handleOperationButtons();
    handleEqualsButton();
    handleDeleteButton();
    handleAllClearButton();
    handlePerviousOperandTextElement();
    handleCurrentOperandTextElement();
}

function initialize() {
    setUpEventHandlers();

}

initialize()