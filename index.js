
const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

console.log(obj1);
console.log(obj2);
console.log(obj3);

function MyObj(){
  //new - создает пустой объект для функции конструктора
  //новый объект - this
  if(!new.target){
    return new MyObj();
  }
}

const myObj = MyObj();
console.log(myObj);

const myObj2 = new MyObj();
console.log(myObj2);