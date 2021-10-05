/*
const table = {
  '12 * 2 = ':24,
}
*/

const obj ={};
obj.prop1 = 12;
obj['prop 2'] = 22;

const createMultiplicationTable = function(min=1, max=10){
  const table = {};
  for(let i=min; i<=max; i++){
    for(let j=1; j<=max; j++){
      //Доступ к свойствам с возможностью вычисления
      table[`${i} * ${j} = `] = i*j;
    }
  }
  return table;
}
console.log(createMultiplicationTable())

const f = function(str, obj){
  return obj[str];
}

const str = '2 * 3 = ';
const table = createMultiplicationTable();
console.log(f(str, table)); //6