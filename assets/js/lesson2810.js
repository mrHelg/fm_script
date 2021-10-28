'use strict'

const [openBtn, closeBtn] = document.getElementsByTagName('button');

const switchInnerText = ()=>{


  const text = closeBtn.textContent;
  closeBtn.textContent = openBtn.textContent;
  openBtn.textContent = text;
}

const clickHandler = ({target})=>{
  console.dir(target);
}

openBtn.addEventListener('mouseenter', switchInnerText);
closeBtn.addEventListener('mouseenter', switchInnerText);

openBtn.addEventListener('click', clickHandler)
closeBtn.addEventListener('click', clickHandler)