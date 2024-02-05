const s = [5, 7, 2];
function editInPlace() {
  // この行の下にあるコードのみを変更

  // s = [2, 5, 7] の使用は無効です
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // この行の上にあるコードのみを変更
}
editInPlace();