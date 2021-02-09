# nitech-moodle-chrome
NITechのmoodleを使いやすくするChrome拡張機能です。<br>
Chrome Extension for NITech moodle(38a).

## 対象
NITech在校生。

## 注意点
- 開発途中です！
- タブ(ページ)をreloadしないと設定が反映されない仕様です！
- 動作確認ブラウザ: Chrome, Kinza
- moodleサイトの表示に改変を加えてるのみで、不正なことは行いません。

## 利用方法(開発版)
1. GitHubコードページの「Code」ボタンから「Download ZIP」よりzipファイルをダウンロード後、展開する。<br>または```git clone```を行う。(※開発版のため)
1. Chromium系ブラウザ(Chrome, ~~Edge~~, Kinza, ~~Vivaldi~~)にて```chrome://extensions/```(拡張機能のページ)を開く。(打ち消し線は動作未確認)
1. 「デベロッパーモード」を有効にする。
1. 先程入手したフォルダをドラッグ&ドロップする。<br>(または「パッケージ化されていない拡張機能を読み込む」から該当フォルダを選択)
1. NITech moodleサイトへログインし、拡張機能が動作しているか確認する。

## 機能
### 全体
- ナビゲーションのマイコースの項目を授業番号(コース名)から授業名へ変更

### トップページ
- 全体的に配置を大きく変更
- 時間割
- 今日やるべきこと一覧(ToDoリスト)

### 動画視聴ページ
- 動画の表示サイズを大きくする
- 動画視聴時にナビゲーションを隠す

## 開発環境
- jQuery v3.5.1
- VSCode or Atom
- ESLint + Prettier: JavaScript整形ソフト

## ライセンス
未定

## 連絡先
### バグ報告
GitHubのissue、またはDiscordの専用チャンネルへ。

### 質問
未定(Twitterで開発者に聞く…？)

### その他
開発者: 未定

