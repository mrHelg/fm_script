'use strict';

const boolean = new Boolean(null);
console.log(boolean)//object

if(boolean.valueOf()){
  console.log('true')
}else{
  console.log('false')
}

const str = '';
if(Boolean(str)){
  console.log(Boolean(str))
}else{
  console.log('false')
}

