const add = (numA,numB) => numA+numB;
const substract = (numA,numB) => numA-numB;
const multiply = (numA,numB) => numA*numB;
const divide = (numA,numB) => numA/numB;
const operate = function(numA,operator,numB){
    if(operator=="+") return add(numA,numB);
    else if(operator=="-") return substract(numA,numB);
    else if(operator=="*") return multiply(numA,numB);
    else if(operator=="/") return divide(numA,numB);
}
let numA;
let operator;
let numB;
let displayValue = "";

function addNumberToDisplay(num){
    displayValue+=num;
    display.textContent = displayValue;
}
function setOperator(op){
    operator = op;
    numA = displayValue;
    clearDisplay();
}
function clearDisplay(){
    displayValue = "";
    display.textContent = displayValue;
}
const display = document.getElementById("display");
const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click",()=>addNumberToDisplay(num.textContent)));
const ops = document.querySelectorAll(".op");
ops.forEach(op => op.addEventListener("click",()=>setOperator(op.textContent)));
const ce = document.querySelector(".clear");
ce.addEventListener("click",()=>clearDisplay());
