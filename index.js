//alert('I\'m a teacher');

let userInput = prompt('Enter number: ');
//string || null

//пустая строка
//null 
//то, что нельзя привести к числу

let isNotNumber = userInput==='' || userInput===null || isNaN(Number(userInput));

if( isNotNumber ){
  console.log('error');
}else{
  console.log('well done');
}





