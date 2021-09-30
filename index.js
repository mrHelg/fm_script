const data = +prompt('Enter'); 

//пользователь должен ввести положительноe больше ноля

// if(isNaN(data)){
//   console.log('invalid data');
// }else{
//   if(data>0){
//     if(data%5===0){
//       console.log('кратно 5');
//     }else{
//       if(data%3===0){
//         console.log('кратно 3');
//       }else{
//         if(data%2===0){
//           console.log('кратно 2');
//         }else{
//           console.log('simple number');
//         }
//       }
//     }
//   }else{
//     console.log('invalid data');
//   }
// }


if(isNaN(data)){
  console.log('invalid data, must be number');//not a number
}else if(data>0){//positive number
  if(data%5===0){
    console.log('кратно 5');
  }else if(data%3===0){
    console.log('кратно 3');
  }else if(data%2===0){
    console.log('кратно 2');
  }else{
    console.log('simple number');
  }
}else{//negative number
    console.log('invalid data, must be positive');
}



