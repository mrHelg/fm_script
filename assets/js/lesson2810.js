'use strict'

const root = document.getElementById('root');
const btns = document.getElementsByTagName('button');

const changeRootBackground = ({target:{dataset:{color}, parentElement: parent}}) => {
  parent.style.background = color;
}

for (const btn of btns) {
  btn.addEventListener('click', changeRootBackground);
}