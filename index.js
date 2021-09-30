const lang = prompt('Choose language:\n1 - ua\n2 - ru\n3 - it\n4 - en');

// if(lang==='1'){
//   console.log('Добрий день')
// }else if(lang==='2'){
//   console.log('Добрый день')
// }else if(lang==='3'){
//   console.log('Buon')
// }else if(lang==='4'){
//   console.log('Good day')
// }else {
//   console.log('invalid input')
// }

switch (lang) {
  case '1':
  case 'ua':
    console.log('Добрий день');
    break;
  case '2':
  case 'ru': 
  case 'RU': 
  case 'русский':
    console.log('Добрый день');
    break;
  case '3':
  case 'it':
    console.log('Buon');
    break;
  case '4':
  case 'en':
    console.log('Good day');
    break;
  default:
    console.log('invalid input');
    break;
}

//console.log('Thanks');