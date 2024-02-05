// この行の下にあるコードのみを変更
const bicycle = {
  gear: 2,
//   setGear: function(newGear) {
//     this.gear = newGear;
//   }
  setGear(newGear) {
    this.gear = newGear;
  }
};
// この行の上にあるコードのみを変更
bicycle.setGear(3);
console.log(bicycle.gear);