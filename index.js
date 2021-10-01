/*
Запрашивать у пользователя пароль до тех пор, 
пока он не введет правильный.
Ограничиваем количество попыток.
*/
debugger;
let count = MAX_COUNT_TRY;
while(true){
  const password = prompt('Enter password');
  count--;
  if(password===GOOD_PASSWORD){
    alert('Thanks');
    break;
  }
  if(count===0){
    alert('try is over');
    break;
  }
  alert('count try = '+ count);
}


