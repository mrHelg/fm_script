'use strict';


//sum, которая принимает неограниченное кол-во пареметров

const sum = (...args)=>{
  let result = null;
  args.forEach((n)=>{
    result += n;
  });
  return result;
}

const sum2 = (...args)=> args.reduce((result, n)=>result+n);
