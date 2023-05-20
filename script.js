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
let displayValue;