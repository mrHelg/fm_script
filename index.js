
const obj = {
  name:'pen',
  'is writen': true,
  11:78,
};

const nameProperty = 'is writen';
console.log(obj[11]);
console.log(obj['11'], obj['11']);
console.log(obj['is writen']);
console.log(obj['name']);
console.log(obj[nameProperty]);



