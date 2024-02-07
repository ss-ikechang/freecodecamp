// 緑茶のカップを表す文字列を返す関数
const prepareTea = () => 'greenTea';

/*
関数 (お茶の種類を表す) と必要なカップ数が与えられたときに、次の関数は文字列の配列を返します (それぞれが特定の種類のお茶のカップを表します)。
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// この行の下にあるコードのみを変更
const tea4TeamFCC = getTea(40);
// この行の上にあるコードのみを変更