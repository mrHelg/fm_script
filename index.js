const calcFactorial = function(number=2){
  if(number<0){
    return null;
  }
  if(number===0 || number===1){
    return 1;
  }
  if(number>MAX_FACTORIAL){
    return false;
  }
  let result = 1n;
  for(let i=1; i<=number; i++){
    result *= BigInt(i);
  }
  return result;
}

console.log(calcFactorial(77));//6

