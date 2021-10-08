/* data */
function MyArray(){
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
/* logic */
function MyArrayProto(){
  this.push = function(){ //1,2,3,4,5,8
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop = function(){
    if(this.length===0){
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;
  }
  this.forEach = function(func){
    for(let i=0; i<this.length;i++){
      func(this[i]);
    }
  }
  this.some = function(func){
    for(let i=0; i<this.length; i++){
      if(func(this[i])){
        return true;
      }
    }
    return false;
  }
  this.every = function(func){
    for(let i=0; i<this.length; i++){
      if(func(this[i])===false){
        return false;
      }
    }
    return true;
  }
}


function isEven(n){
  return n%2===0;
}
function isOdd(n){
  return n%2===1; 
}

/* Prototype */
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1,1,7,15,5);
console.log(myArray.every(isOdd));
