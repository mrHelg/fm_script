'use strict';

const t1 = function(...qq){
  console.log(arguments)
  console.log(qq)
}

const t2 = (num, ...rest)=>{
  console.log('num = ',num)
  console.log('rest = ',rest)
}

t1(1,2,3,4);
t2(22,4,8,5);

//sum, которая принимает неограниченное кол-во пареметров
