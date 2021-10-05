'use strict';
const showRange = function(max=50, min=20, num=3){
  for (let i = max; i >=min; i--) {
    if(i%num===0){
      console.log(i);
    }
  }
}
showRange();





const checkMath = function(num1=5, num2=4, operator='*'){
  let result=null;
  switch(operator){
    case '*':
      result=num1*num2;
      break;
    case '/':
      result=num1/num2;
      break;
    case '+':
      result=num1+num2;
      break;
    case '-':
      result=num1-num2;
      break;
    default:
      result=null;
      break;
  }
  if(result===null || isNaN(result)){
    return 'error'
  }
  while(true){
    const quetion = prompt(num1+operator+num2);//string
    if(Number(quetion)===result){
      return 'WIN!'
    }
  }
}
console.log(checkMath(20,10,'/'));