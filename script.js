const add = (numA,numB) => numA+numB;
const substract = (numA,numB) => numA-numB;
const multiply = (numA,numB) => numA*numB;
const divide = (numA,numB) => numA/numB;
const operate = function(numA,operator,numB){
    if(operator=="+") return add(parseFloat(numA),parseFloat(numB));
    else if(operator=="-") return substract(numA,numB);
    else if(operator=="*") return multiply(numA,numB);
    else if(operator=="/") return divide(numA,numB);
}
let numA;
let operator;
let numB;
let displayValue = "";

function addNumberToDisplay(num){
    if(num == "."){
        if(displayValue.indexOf(num) >= 0){
            num = "";
        }
    }
    displayValue+=num;
    display.textContent = displayValue;
    removeErrorMessage();
}
function setOperator(op){
    if(operator != undefined) makeOperation();
    operator = op;
    numA = displayValue;
    displayValue = "";
    display.textContent = displayValue;
}
function clearDisplay(){
    displayValue = "";
    display.textContent = displayValue;
    numA = 0;
    numB = 0;
    operator = undefined;
}
function makeOperation(){
    numB = displayValue;
    displayValue = operate(numA, operator, numB);
    numA = displayValue;
    display.textContent = displayValue;
    if(displayValue == Infinity) appendErrorMessage();
}
function appendErrorMessage(){
    clearDisplay();
    const body = document.querySelector("body");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "vc não pode dividor por 0, bobinho";
    console.log(body.lastChild)
    body.appendChild(errorMessage);
}
function removeErrorMessage(){
    const body = document.querySelector("body");
    if(body.lastChild.tagName == "P") body.removeChild(body.lastChild);
}
const display = document.getElementById("display");
const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click",()=>addNumberToDisplay(num.textContent)));
const ops = document.querySelectorAll(".op");
ops.forEach(op => op.addEventListener("click",()=>setOperator(op.textContent)));
const ce = document.querySelector(".clear");
ce.addEventListener("click",()=>clearDisplay());
const equals = document.querySelector(".equals");
equals.addEventListener("click",()=>makeOperation());