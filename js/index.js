function StudentPrototype(){
  this.toString = function (){//50
    return `${this.firstName} ${this.lastName}`;
  }
  this.eat = function(){//50
    return `${this.firstName} eating`;
  }
  this.go = function(){//50
    return `${this.firstName} go!`;
  }
}
/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {boolean} isMale 
 * @returns instance Student
 */
function Student(firstName,lastName, age,isMale){
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  if(!new.target){
    return new Student(firstName,lastName, age, isMale);
  }
};

Student.prototype = new StudentPrototype();

const student1 = new Student('Elon', 'Musk', 50, true);
console.log(student1.toString());




