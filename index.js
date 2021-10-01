const sum =  function(a,b){
  return a+b;
}
const sub = function(a,b){
  return a-b;
}
const mult = function(a,b){
  return a*b;
}
const div = function(a,b){
  return a/b;
}
const rem = function(a,b){
  return a%b;
}

const hightOrderFunction = function(num1, num2, func){
  return func(num1, num2);
}



const res = hightOrderFunction( -2, 6, rem);
console.log(res);