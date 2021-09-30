// const age = +prompt('enter age');

// if(isNaN(age)){
//   console.log('invalid age')
// }else if(age <6 ){
//   console.log('child')
// }else if(age <18 ){
//   console.log('puple')
// }else if(age <75 ){
//   console.log('adult')
// }else {
//   console.log('oldmen')
// }

/*
человек вводит номер месяца, 
а мы выводим время года
1,2,12 - winter
3,4,5 - spring
6,7,8 - summer
9,10,11 - fall
invalid data
*/

const foo = prompt('enter age');
switch (foo) {
  case '0':
  case '1':
  case '2':
  case '3':
      alert('yes');
      break;
  default:
      alert('not');
}
