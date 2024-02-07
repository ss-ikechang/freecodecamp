// タブはウィンドウ内で開かれている各サイトのタイトルの配列
const Window = function(tabs) {
    this.tabs = tabs; // オブジェクト内に配列のレコードを保持
  };
  
  // 2 つのウィンドウを 1 つのウィンドウに結合するとき
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // 最後に新しいタブを開くとき
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // まず新しいタブを開いてみましょう
    return this;
  };
  
  // タブを閉じるとき
  Window.prototype.tabClose = function(index) {
  
    // この行の下にあるコードのみを変更
  
    //const tabsBeforeIndex = this.tabs.splice(0, index); // タブの前にタブを取得
    //const tabsAfterIndex = this.tabs.splice(index + 1); // タブの後ろにタブを取得
    //    splice()には副作用がある。
    //    splice() は Array インスタンスのメソッドは、その場 (in-place) で既存の要素を
    //    取り除いたり、置き換えたり、新しい要素を追加したりすることで、配列の内容を変更します。
    //this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // 一緒に参加しましょう
    // toSpliced(start, deleteCount)
    this.tabs = this.tabs.toSpliced(index, 1);
    // この行の上にあるコードのみを変更
  
    return this;
   };
  
  // ブラウザーウィンドウを 3 つ作成しましょう
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // メールボックス、ドライブ、その他の仕事用サイト
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // ソーシャルサイト
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // エンターテインメントサイト
  
  // ここでタブの開閉やその他の操作を実行
  const finalTabs = socialWindow
    .tabOpen() // ネコのミーム用の新しいタブを開く
    .join(videoWindow.tabClose(2)) // 動画ウィンドウの 3 番目のタブを閉じて参加する
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);