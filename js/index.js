'use strict';

const userName = 'Elon';
const str = 'tO    BE    NoT    TO     Be';

/*
функция, которая приводит строку к такому кейсу
'To Be Or Not To Be'

*/


function toCapitalizeCase(str){
  const arrWords = str.split(' ');
  const arrWordsUp = arrWords.map((word)=>{
    if(word){
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
  });
  const newStr = arrWordsUp.join(' ')
  return newStr;
}

console.log(toCapitalizeCase(str))

function toCapitalizeCase2(str){
  return  str.split(' ')
              .map((word)=>{
                if(word){
                  return word[0].toUpperCase() + word.substring(1).toLowerCase();
                }
              })
              .join(' ');
}
