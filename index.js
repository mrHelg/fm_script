'use strict';

function Auto(name, maxSpeed){
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function(value){
    if(value<0){
      return false;
    }
    this.speed += value;
    if(this.speed>this.maxSpeed){
      return (this.speed = this.maxSpeed);
    } 
    return this.speed;
  };
  this.deaccelerate = function(value){
    if(value<0 || this.speed<value){
      return false;
    }
    this.speed -= value;
    if(this.speed<0){
      return (this.speed=0);
    } 
    return this.speed;
  };
  this.stop = function(){
    return (this.speed=0);
  };
};

const car = new Auto('bmw', 250);







