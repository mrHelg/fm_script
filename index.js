  
function Cat(name='test', isMale=true, color='grey', breed='pers', age=0){
  this.name = name;
  this.isMale = isMale;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.say = function(){
    return 'meow';
  };
}

const catTest = new Cat();
const catMuha = new Cat('Muha',false,'grey','yard',2);
const kitty = new Cat('Kitty',false,'white','yard',1);
const catPushok = new Cat('Pushok',true,'black','pers',4);
console.log(catPushok.name+' says '+catPushok.say());




