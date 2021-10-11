'use strict';


//sum, которая принимает неограниченное кол-во пареметров

const sum = (...args)=>{//rest
  let result = null;
  args.forEach((n)=>{
    result += n;
  });
  return result;
}

const sum2 = (...args)=> args.reduce((result, n)=>result+n);


const arrNums1 = [4,1,3,6];
console.log(sum(...arrNums1));//spred
console.log(sum2(...arrNums1));