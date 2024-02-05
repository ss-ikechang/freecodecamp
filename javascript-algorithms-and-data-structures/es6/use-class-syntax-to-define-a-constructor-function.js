// この行の下にあるコードのみを変更
class Vegetable {
  name = "";

  constructor(name) {
    this.name = name;
  }
}
// この行の上にあるコードのみを変更

const carrot = new Vegetable('carrot');
console.log(carrot.name); // 'carrot' と表示する必要がある