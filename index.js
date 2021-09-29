
let sideSquare = 10;//prompt('Enter side square', '10');
//debugger;
/**
 * 
 * @param {number} side 
 * @returns {number | null}
 */
const getPerimetrSquare = function(side){
  if(isNaN(side)){
    return null;
  }
  return 4*side;
}

const convertNumber = function(value){//'123'
  if(value==='' || value===null || isNaN(Number(value))){
    return NaN;
  }
  return Number(value);//123
}

console.log(getPerimetrSquare(553));
let changeSideSquare = convertNumber(sideSquare);
console.log(getPerimetrSquare(changeSideSquare));


/*
Написать функцию, которая проверяет возраст пользователя на совершеннолетие
*/



const isAdult = function(age, AGE_ADULT=18){
  return age>=AGE_ADULT;
}

const AGE_ADULT = 21;

console.log(isAdult(20, AGE_ADULT));//true
console.log(isAdult(2));//false
console.log(isAdult(18));//true
console.log(isAdult(17));//false