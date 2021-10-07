function toString(){
    return `${this.firstName} ${this.lastName}`;
}

const animal = {
  go:function(){
    return `${this.firstName} go!`;
  }
};
const man = {
  eat:function(){
    return `${this.firstName} eating`;
  }
};
man.__proto__ = animal;
const student1 = {
  id:1,
  firstName:'Elon',
  lastName:'Musk',
  age:50,
  isMale:true,
  //toString:toString,
  toString,
};
student1.__proto__ = man;

console.log(student1);








const student2 = {
  id:2,
  firstName:'Tim',
  lastName:'Li',
  age:65,
  isMale:true,
  toString,
};
student2.__proto__ = man;

