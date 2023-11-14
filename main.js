
let currentInput="";
let currentOperator="";

function clearInput(){
    currentInput="";
    currentOperator="";
    document.getElementById('mainText').textContent='';
}

function appendNumber (number){
    currentInput+=number;
    document.getElementById('result').value = currentInput;
}

function add() {
    currentOperator = "+";
    currentInput +=currentOperator;
    document.getElementById ('result').value = currentInput;
}

function subtract (){
    currentOperator = "-";
    currentInput +=currentOperator;
    document.getElementById ('result').value = currentInput;
}

function multiply (){
    currentOperator = "*";
    currentInput +=currentOperator;
    document.getElementById ('result').value = currentInput;
}


function multiply (){
    currentOperator = "*";
    currentInput +=currentOperator;
    document.getElementById ('result').value = currentInput;
}

  
function divide (){
    currentOperator = "/";
    currentInput +=currentOperator;
    document.getElementById ('result').value = currentInput;
}

function calculate () {
    const result = eval(currentOperator);
    document.getElementById('result').value= result;
    currentInput.toString();
    currentOperator="";
}