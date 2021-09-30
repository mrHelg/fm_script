// const isAdult = function(age){
//   return age>=18 ? 'adult' : 'not adult';
// }

// console.log(isAdult(150))


// const logIsAdult = function(age){
//   const adult = age>=18 ? 'adult' : 'not adult';
//   console.log(adult)
// }

// logIsAdult(15);


/*
Функция запрашивает ввод у пользователя и говорит спасибо, если что-то ввели, или пишет сообщение о том, что ничего не введено.

1) придумать имя для функции
2) принимает ф-ция аргументы?
3) запросить данные
4) проверить данные на существование и вывести сообщение

*/

// const data = prompt('Enter');  //string  ||  ''  null

// const logDataInfo = function(info){
//   console.log(info);
//   // if(data){
//   //   console.log('спасибо')
//   // }else{ //false '' null undefined NaN  number:0 -0  
//   //   console.log('вы ничего не ввели')
//   // }
//   console.log(info ? 'спасибо, вы ввели: '+ info :'вы ничего не ввели');
// }

// logDataInfo(data);





const summa = 123574;
const sale = summa>10000 ? 20 : 
              summa>5000 ? 10 : 5;
