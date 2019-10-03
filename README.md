# Calculator Study
See it Live: https://john-azzaro.github.io/study-calculators/

<br>

## What is the Calculator Study?
"Calculator Study" is an examination of basic calculator programming and functionality.  Doing some research on calculators, there are a *lot* of ways of making a calculator, and after a bit of trial and error this seems to be a personal fit that you might find interesting as well.  This study includes a variety of HTML and CSS layout and styling designs, as well as a variety of JavaScript code using different tools and coding paradigms such as classes, constrcutors, and some basic OOP!

Here are a few questions from the study to explore:

* [](#)
* [](#)
* [](#)

<br>

## What are some interesting takeaways from the calculator study?

<br>

### Using data attributes for selectors helps keeps code manageable
For this study, I used data attributes to try something different, but also to see how it could make my code a little "prettier".  Although I do like it since it keeps the id and class attributes a little cleaner, simply having an additional class works just as well.
```HTML
    <button data-number class="numerical-button">1</button>   <== "data-number"
    <button data-number class="numerical-button">2</button>
    <button data-number class="numerical-button">3</button>
```
Additionally, remember to add square brackets when you do your selectors.
```JavaScript
    const numberButtons = document.querySelectorAll('[data-number]');
```

<br>

### Use of class and constructors is WORTH IT
After doing a bit of research and tutorial hopping, classes and constructors have proven to be extremely useful and easy to use once you get the hang of it. 
```JavaScript
    class Calculator {    
        constructor(previousOperandTextElement, currentOperandTextElement) {  
            this.previousOperandTextElement = previousOperandTextElement; calculator)
            this.currentOperandTextElement = currentOperandTextElement; 
            this.clear(); 
        } 
        clear() { ... }
        delete() { ... }
        appendNumber(number) { ... }
        chooseOperation(operation) { ... } 
        compute() { ... } 
        updateDisplay() { ... }
    }

    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

    allClearButton.addEventListener('click', function(event) {  
        calculator.clear();  
        calculator.updateDisplay(); 
    })
```





<br>

## Does Calculator Study feature commentary?
Yes!  I try to make use of EXTENSIVE commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of code, . 

<br>

## What are the key features of Calculator Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  For a complete list of current and future changes, see below:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| Current Operand Display                  |   |
| Previous Operand Display                 |  Basic operation TBA |
| Basic Operations                         |  Basic operations include: mult, div, add, sub |  
| Clear                                    |   | 
| Delete                                   |  Delete increment of 1  |    
| Equals                                   |   | 

<br>

## Screenshots

![calcScreenShot](https://user-images.githubusercontent.com/37447586/60772122-89e4cf80-a0a6-11e9-92e0-432788b4a50f.png)
