// この行の下にあるコードのみを変更
class Thermostat {
  // 絶対温度
  // プライベートプロパティ
  // プライベートプロパティ - JavaScript | MDN
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/Private_properties
  #_kelvin = 0;

  constructor(fahrenheit) {
    // 華氏から絶対温度への変換
    this._kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
  }
  
  get temperature() {
    // 摂氏で返却
    return this._kelvin - 273.15;
  }
  
  set temperature(celsius) {
    // 摂氏で設定
    return this._kelvin = celsius + 273.15;
  }
}
// この行の上にあるコードのみを変更

const thermos = new Thermostat(76); // 華氏スケールで設定
let temp = thermos.temperature; // 24.44℃
thermos.temperature = 26;
temp = thermos.temperature; // 26℃