// グローバル変数
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// この行の下にあるコードを変更
function add(arr, bookName) {
    let newList = [...arr]; // Copy the bookList array to a new array.           

    newList.push(bookName);
    return newList;

  // この行の上にあるコードを変更
}

// この行の下にあるコードを変更
function remove(arr, bookName) {
  let newList = [...arr]; // Copy the bookList array to a new array.           

  const book_index = newList.indexOf(bookName);
  if (book_index >= 0) {

    newList.splice(book_index, 1);
    return newList;

    // この行の上にあるコードを変更
    }
}