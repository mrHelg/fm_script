// myFirstFunction();
// function myFirstFunction(){
//   console.log('text in function')
// }
// myFirstFunction();

// //mySecondFunction(); //error!
// const mySecondFunction = function (){ //function expression
//   console.log('text in function 2')
// }

// //mySecondFunction = 5;//error

// mySecondFunction();

// console.log(mySecondFunction);
// console.log(myFirstFunction);

// let userInput1 = prompt('enter first number');
// let userInput2 = prompt('enter second number');

// let checkEmpty = userInput1==='' || userInput1===null || userInput2==='' || userInput2===null;
// sum;

// /**
//  * 
//  * @param {string} value 
//  * @returns {boolean}
//  */
// const isNotNumber = function(value){
//   return value==='' || value===null || isNaN(Number(value));
// }
// /**
//  * 
//  * @param {any} num1 
//  * @param {any} num2 
//  * @returns { boolean | number }
//  */
// const getSumTwoNums = function (num1, num2){
//   if(isNotNumber(num1) || isNotNumber(num2)){
//     return false;
//   }
//   return Number(num1)+Number(num2);
// }

// let userInput1 = prompt('enter first number');
// let userInput2 = prompt('enter second number');

// let result = getSumTwoNums(userInput1, userInput2);
// if(result===false){
//   console.log('error');
// }else{
//   console.log(result);
// }







// /**
//  * returns the maximum value of two if they are of the same type
//  * @param {any} val1 
//  * @param {any} val2 
//  * @returns {any | null}
//  */
// const retMaxValOfTwo = function(val1, val2){
//   if(typeof val1 === typeof val2){
//     if(val1>val2){
//       return val1;
//     }else{
//       return val2;
//     }
//   }
//   return null;
// }

// console.log(retMaxValOfTwo('102', '12')); //'12'
// console.log(retMaxValOfTwo(12, undefined)); //null
// console.log(retMaxValOfTwo(12, 102)); //45
// console.log(retMaxValOfTwo(12, 12)); //12
// console.log(retMaxValOfTwo('q', 'a')); //'q'
// console.log(retMaxValOfTwo(true, false));

const convertNum = function(val){
  if(isNaN(Number(val)) ||val===''||val==null ){
    return null;
  }
  return Number(val);
}
const isEven = function(val){
  if(typeof val === 'number'){
      return val%2 === 0; 
  }
  return null;
}

console.log(isEven(convertNum(prompt())));
console.log(isEven(13));
console.log(isEven('qwe'));

