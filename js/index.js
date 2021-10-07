function Ladder(){
  this.value = 0;
}

function LadderPrototype(){
  this.up = function(){
    this.value++;
    return this;
  }
  this.down = function(){
    this.value--;
    return this;
  }
  this.showStep = function(){
    return this.value;
  }
}

Ladder.prototype = new LadderPrototype();

const ladder1 = new Ladder();


const step = ladder1.up().down().up().up().down().showStep();

console.log(step);



