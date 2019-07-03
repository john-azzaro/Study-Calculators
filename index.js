'use strict';

const numberButtons = document.querySelectorAll('[data-number]')                            // First, select all elements that match a specfic string, use "[]"(bc data attribute) and selector.
const operationButtons = document.querySelectorAll('[data-operation]')                           
const equalsButtons = document.querySelectorAll('[data-equals]')                           
const deleteButtons = document.querySelectorAll('[data-delete]')                           
const allClearButton = document.querySelectorAll('[data-all-clear]')                           
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')                           
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')                           