'use strict';
//2**5 = 2* (2**4) = 2*2*  2**3
const power = (num, exp)=>{
  if(exp===1){
    return num;
  }
  return num * power(num, exp-1);
}

power(2,3);


const factorial = (num)=>{
  if(num===0){
    return 1;
  }
  return  num * factorial(num-1);
}

factorial(4);



