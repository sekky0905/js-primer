# 文字列とユニコード

## 目的

- JavaScriptにおいてUnicodeのUTF-16を意識しないと行けない場面を学ぶ
- 文字列がCode Unitが並んでいるという事実を知る
- i18n
    - 文字列のID sortについて自然な文字列についてを知る
    - 文字列の自然な区切り

## 目的ではない

- Unicodeの歴史や用語を正確に学ぶこと

## アウトライン

- JavaScriptはUTF-16でエンコードするという話をしていました
- UTF-16は2バイトで各Code Unitを表現する
- 最初は2バイトですべての文字にIDを振れると思っていたが、これは現実的に足りないことがわかった
    - 2バイトのbit列で表現できる範囲は65536種類
    - 実際に現在のUnicodeが収録している文字は10万種類以上あります
- 複数のCode Unitの組み合わせで表現することになった(これがUSC-2を拡張してUTF-16となった話)
- 複数のCode Unitの組み合わせて1つの文字(厳密にはCode Point)を表現することがある
- この辺で実際にそういう例を紹介する
    - 例: 
- これがサロゲートペア
- Unicodeはすべての文字にIDを降る目的でスタート
- このIDはCode Pointと呼ばれる整数の番号です
- 符号位置(Code Point) !== 符号単位(Code Unit)
    - サロゲートペア - これはUTF-16
    - Adbanced
        - ZWJによる装飾文字(絵文字のスタイル) - これはUnicode
        - 異体字セレクタ(variation selector) - これはUnicode
- サロゲートペアの例を中心に紹介
    - length
        - non-サロゲートペア
        - サロゲートペア
    - split("")
        - Code Unitがデフォルト
    - Code UnitとCode Point
- 文字列と自然なソート