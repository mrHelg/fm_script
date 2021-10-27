'use strict';

function createAdder(n = 0) {
  let sum = n;
  return function adder(m) {
    return (sum += m);
  };
}

const adder1 = createAdder(10);
console.log(adder1(4));
console.log(adder1(3));
console.log(adder1(10));
