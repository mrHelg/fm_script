let count = 0;
//debugger;
while(true){
  count++;
  if(count%2===1){
    continue;
  }
  if(count > 10){
    break;
  }
  console.log(count);
}
console.log('End loop');