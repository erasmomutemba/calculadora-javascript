
let currentOperation = "";
let firstValue;
let secondValue;


let text = document.querySelector('#screenText');


// Button 1
const button1 = document.querySelector('#button1');
button1.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "1";
})


// Button 2
const button2 = document.querySelector('#button2');
button2.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "2";
})


// Button 3
const button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "3";
})



// Button 4
const button4 = document.querySelector('#button4');
button4.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "4";
})




// Button 5
const button5 = document.querySelector('#button5');
button5.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "5";
})


// Button 6
const button6 = document.querySelector('#button6');
button6.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "6";
})



// Button 7
const button7 = document.querySelector('#button7');
button7.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "7";
})



// Button 8
const button8 = document.querySelector('#button8');
button8.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "8";
})



// Button 9
const button9 = document.querySelector('#button9');
button9.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "9";
})


// Button 0
const button0 = document.querySelector('#button0');
button0.addEventListener('click', function(){
    if(currentOperation == "result"){
        text.textContent = "";
    }
    text.textContent = text.textContent + "0";
})


// Button Plus
const buttonPlus = document.querySelector('#buttonPlus');
buttonPlus.addEventListener('click', function(){
    if(currentOperation == "" || currentOperation == "result"){
        text.textContent = text.textContent + "+";
        currentOperation = "plus";
    }
})


// Button Minus
const buttonMinus = document.querySelector('#buttonMinus');
buttonMinus.addEventListener('click', function(){
    if(currentOperation == "" || currentOperation == "result"){
        text.textContent = text.textContent + "-";
        currentOperation = "minus";
    }
})


// Button Multiple
const buttonMultiple = document.querySelector('#buttonMultiple');
buttonMultiple.addEventListener('click', function(){
    if(currentOperation == "" || currentOperation == "result"){
        text.textContent = text.textContent + "*";
        currentOperation = "multiple";
    }
})



// Button Multiple
const buttonDiv = document.querySelector('#buttonDiv');
buttonDiv.addEventListener('click', function(){
    if(currentOperation == "" || currentOperation == "result"){
        text.textContent = text.textContent + "/";
        currentOperation = "div";
    }
})



// Button Equals
const buttonEquals = document.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', function(){
    
    if(currentOperation != ""){
        const operationString = text.textContent;

        switch (currentOperation) {
            case "plus":
                arrayString = operationString.split('+');
                break;

            case "minus":
                arrayString = operationString.split('-');
                break;

            case "multiple":
                arrayString = operationString.split('*');
                break;

            case "div":
                arrayString = operationString.split('/');
                break;
        
            default:
                break;
        }

        firstValue = arrayString[0];
        secondValue = arrayString[1];


        switch (currentOperation) {
            case "plus":
                text.textContent = (parseFloat(firstValue) + parseFloat(secondValue)).toString();
                break;

            case "minus":
                text.textContent = (parseFloat(firstValue) - parseFloat(secondValue)).toString();
                break;

            case "multiple":
                text.textContent = (parseFloat(firstValue) * parseFloat(secondValue)).toString();
                break;

            case "div":
                text.textContent = (parseFloat(firstValue) / parseFloat(secondValue)).toString();
                break;
        
            default:
                break;
        }   
        
        currentOperation = "result";
    }
})



// Button Clean
const buttonClean = document.querySelector('#buttonClean');
buttonClean.addEventListener('click', function(){
    text.textContent = "";
    currentOperation = "";
})