function User(firstName, lastName, age, isMale, email, isSubscribed = false){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
function UserPrototype(){
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
}
User.prototype = new UserPrototype();

function createRandomUsers(amount = 1){
  const db = [];
  for(let i=0; i<amount; i++){
    const user = new User(
      `Name${i}`,
      `Lname${i}`,
      Math.ceil(Math.random()*60+20),//20-80
      Math.random() > 0.5, //true||false
      `email${i}@gmail.com`
    );
    db.push(user);
  }
  return db;
}

const users = createRandomUsers(100);
users.forEach(function(user){
  user.isSubscribed = (Math.random()>0.5);
});
console.table(users);

/* получить массив полных имен пользователей, используя map */
const fullNameUsers = users.map(function(user){
  return user.fullName();
});
//console.table(fullNameUsers);

/* получить массив пользователей, которые старше 65, используя filter*/
function isOldPeople(user){
  return user.age>=OLD_AGE;
}
const oldUsers = users.filter(isOldPeople);
//console.table(oldUsers);


/*
получить массив пользователей до 40 лет женского пола у которых есть подписка
*/