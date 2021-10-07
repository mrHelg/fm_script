function toString(){
    return `${this.firstName} ${this.lastName}`;
}


const student1 = {
  id:1,
  firstName:'Elon',
  lastName:'Musk',
  age:50,
  isMale:true,
  //toString:toString,
  toString,
};
console.log(student1.toString())

const student2 = {
  id:2,
  firstName:'Tim',
  lastName:'Li',
  age:65,
  isMale:true,
  toString,
};
console.log(student2.toString())
