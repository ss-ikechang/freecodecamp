function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // この行の下にあるコードのみを変更
  Object.freeze(MATH_CONSTANTS);

  // この行の上にあるコードのみを変更
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();