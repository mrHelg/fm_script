const sum = function(a,b){
  return a+b;
}
const sub = function(a,b){
  return a-b;
}
const mult = function(a,b){
  return a*b;
}
const div = function(a,b){
  return a/b;
}
const rem = function(a,b){
  return a%b;
}

//console.log(typeof sum);

const calculate = function(num1=10, num2=2, operator='+'){
  if( isNaN(num1-num2) ){
    return false;
  }
  let f = null;
  switch (operator) {
    case '+':
      f = sum;
      break;
    case '-':
      f = sub;
      break;
    case '*':
      f = mult;
      break;
    case '/':
      f = div;
      break;
    case '%':
      f = rem;
      break;      
  }
  return (typeof f==='function')?f(num1,num2):f;
}

console.log(calculate(4,5,'^'));
// const userNumber1 = prompt('Enter first number');
// const userNumber2 = prompt('Enter second number');
// const userOperator = prompt('Enter operator');
// console.log(calculate(userNumber1, userNumber2, userOperator));