class Stack {
  constructor(maxSize, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }

  get size() {
    return this._size;
  }

  get isEmpty() {
    return this._size === 0;
  }

  push(argument) {}
  pick() {}
  pop() {}
}
