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


const getSumTwoNums = function (){
  let userInput1 = prompt('enter first number');
  let userInput2 = prompt('enter second number');

  let checkEmpty = userInput1==='' || userInput1===null || userInput2==='' || userInput2===null;

  let sum = Number(userInput1) + Number(userInput2);

  if(checkEmpty || isNaN(sum)){
    console.log('error');
  }else{
    console.log(userInput1,'+',userInput2,'=',sum);
  }
}

getSumTwoNums();






