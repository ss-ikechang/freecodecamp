Array.prototype.myMap = function(callback) {
  const newArray = [];
  // この行の下にあるコードのみを変更
  for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
  }
  // この行の上にあるコードのみを変更
  return newArray;
};
