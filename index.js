const user = {
  firstName: 'Elon',
  lastName: 'Musk',
  age: 50, 
  isMale: true,
}

const sayHello = function(obj){
  return `Hello, ${obj.firstName} ${obj.lastName}!`;
}

console.log(sayHello(user));//Hello, Elon Musk!

const user2 = {
  firstName: 'Tim',
  lastName: 'Li',
  age: 15, 
  isMale: true,
}
console.log(sayHello(user2));//Hello, Elon Musk!