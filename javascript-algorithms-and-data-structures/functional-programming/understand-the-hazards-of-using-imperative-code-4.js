// タブはウィンドウ内で開かれている各サイトのタイトルの配列
class Window {
    tabs = "";
    // コンストラクタ
    constructor(tabs) {
        this.tabs = tabs;
    }
    // 2 つのウィンドウを 1 つのウィンドウに結合するとき
    join(otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    }
    // 最後に新しいタブを開くとき
    tabOpen() {
        this.tabs.push('new tab'); // まず新しいタブを開いてみましょう
        return this;
    }
    // タブを閉じるとき
    tabClose(index) {
        const tabsBeforeIndex = this.tabs.slice(0, index); // タブの前にタブを取得
        const tabsAfterIndex = this.tabs.slice(index + 1); // タブの後ろにタブを取得
        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // 一緒に参加しましょう
        return this;
    }
}

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
