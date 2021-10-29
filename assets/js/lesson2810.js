'use strict';

const root = document.getElementById('root');
const btns = document.getElementsByTagName('button');

const changeRootBackground = ({
  target: {
    dataset: { color },
    parentElement: parent,
  },
}) => {
  parent.setAttribute('style', `background-color: ${color}`);
  // parent.style.background = color;
  console.log(color);
};

for (const btn of btns) {
  btn.addEventListener('click', changeRootBackground);
}

// const handler = ({currentTarget}) =>{
//   console.dir(currentTarget, ' is dipping');
// }

// document.getElementById('root').addEventListener('click', handler, {once: true, capture: true});
// document.addEventListener('click', handler, true);
// document.body.addEventListener('click', handler, true);
// window.addEventListener('click', handler, true);
