debugger;
for(let i=0; i<MAX_COUNT_TRY; i++){
  console.log(i);
  const password = prompt('enter');
  if(password===GOOD_PASSWORD){
    alert('Thanks');
    break;
  }
  if(i+1===MAX_COUNT_TRY){
    alert('try over');
  }
}