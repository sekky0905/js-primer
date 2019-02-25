---
author: azu
description: "for文やwhile文を使った反復処理についてを紹介します。また、同等の反復処理がArrayのメソッドでも実現できることについても紹介します。"
---

# ループと反復処理 {#loop-and-iteration}

プログラミングにおいて、同じ処理を繰り返すために同じコードを繰り返し書く必要はありません。
ループやイテレータなどを使い、反復処理として同じ処理を繰り返し実行できます。
この章では、while文やfor文などの基本的な反復処理と制御文について学んでいきます。

また、for文などのような構文だけではなく、配列のメソッドを利用して反復処理を行う方法もあります。
配列のメソッドを使った反復処理もよく利用されるため、合わせてみていきます。

## while文 {#while-statement}

while文は`条件式`が`true`であるならば、反復処理を行います。

<!-- doctest:disable -->
```js
while (条件式)
    実行する文;
```

while文の実行フローは次のようになります。
最初から`条件式`が`false`である場合は、何も実行せずwhile文は終了します。

<!-- textlint-disable preset-ja-technical-writing/ja-no-redundant-expression -->

1. `条件式` の評価結果が`true`なら処理を続け、`false`なら終了
2. `実行する文`を実行
3. ステップ1へ戻る

<!-- textlint-enable preset-ja-technical-writing/ja-no-redundant-expression -->

次のコードでは`x`の値が10未満であるなら、コンソールへ繰り返しログが出力されます。
また、`実行する文`にて、`x`の値を増やし`条件式`が`false`となるようにしています。

[import, while-add-example.js](./src/while/while-add-example.js)

つまり、`実行する文`の中で`条件式`が`false`となるような処理を書かないと無限ループします。
JavaScriptにはより安全な反復処理の書き方があるため、while文は使う場面が限られています。

安易にwhile文を使うよりも、他の書き方で解決できないかを考えてからでも遅くはないでしょう。

## do-while文 {#do-while-statement}

do-while文はwhile文と殆ど同じですが実行順序が異なります。

<!-- doctest:disable -->
```js
do {
    実行する文;
} while (条件式);
```

do-while文の実行フローは次のようになります。

1. `実行する文`を実行
2. `条件式` の評価結果が`true`なら処理を続け、`false`なら終了
3. ステップ1へ戻る

while文とは異なり、かならず最初に`実行する文`を処理します。

そのため、次のコードのように最初から`条件式`を満たさない場合でも、
初回の`実行する文`が処理され、コンソールへ`1000`と出力されます。

[import, do-while-example.js](./src/do-while/do-while-example.js)

この仕組みを上手く利用し、ループの開始前とループ中の処理をまとめて書くことができます。
しかし、while文と同じく他の書き方で解決できないかを考えてからでも遅くはないでしょう。

## for文 {#for-statement}

for文は繰り返す範囲を指定した反復処理を書くことができます。

<!-- doctest:disable -->
```js
for (初期化式; 条件式; 増分式)
    実行する文;
```

for文の実行フローは次のようになります。

1. `初期化式` で変数の宣言
2. `条件式` の評価結果が`true`なら処理を続け、`false`なら終了
3. `実行する文` を実行
    - 複数行である場合は、`{`と`}`で囲んだブロック文にする必要があります
4. `増分式` で変数を更新
5. ステップ2へ戻る

次のコードでは、for文を使い1から10の合計値を計算しています。

{{book.console}}
```js
let total = 0; // 初期値は0
for (let i = 0; i < 10; i++) {
    total += i + 1; // 1...10
}
console.log(total); // => 55
```

このコードは1から10の合計を電卓で計算すればいいので、普通は必要ありませんね。
実際に扱うなら、数値の入った配列を受け取り、その合計を計算して返すという関数を実装することになります。

次のコードでは、任意の数値が入った配列を受け取り、その合計値を返す `sum` 関数を実装しています。

{{book.console}}
[import, sum-for-example.js](./src/for/sum-for-example.js)

ここまで見てきたように反復処理の多くは、配列に入れた値を処理する方法と言いかえることができます。
JavaScriptの配列である`Array`オブジェクトには、反復処理のためのメソッドが備わっています。
そのため、配列のメソッドを使った反復処理も合わせて見ていきます。

## 配列の`forEach`メソッド {#array-foreach}

配列には`forEach`メソッドというfor文と同じように反復処理を行うメソッドがあります。

`forEach`メソッドでの反復処理は、次のように書くことができます。

{{book.console}}
```js
const array = [1, 2, 3];
array.forEach(currentValue => {
    // ループごとに実行する処理
});
```

JavaScriptでは、関数がファーストクラスであるため、その場で作った匿名関数（名前のない関数）を引数として渡すことができます。

引数として渡される関数のことを**コールバック関数**と呼びます。
また、コールバック関数を引数として受け取る関数やメソッドのことを**高階関数**と呼びます。

<!-- doctest: ReferenceError -->
```js
const array = [1, 2, 3];
// forEachは"コールバック関数"を受け取る高階関数
array.forEach(コールバック関数);
```

`forEach`メソッドのコールバック関数には、配列の要素が先頭から順番に渡されて実行されます。
つまり、コールバック関数の`currentValue`には1から5の値が順番に渡されます。

{{book.console}}
```js
const array = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});
// 1
// 2
// 3
// と順番に出力される
```

先ほどのfor文の例と同じ数値の合計を返す`sum` 関数を`forEach`メソッドで実装してみます。

{{book.console}}
[import, sum-for-each-example.js](./src/for/sum-for-each-example.js)

`forEach`はfor文の`条件式`に相当するものはなく、必ず配列のすべての要素を反復処理します。
変数`i`といった一時的な値を定義する必要がないため、シンプルに反復処理を書けます。

## break文 {#break-statement}

break文は処理中の文から抜けて次の文へ移行する制御文です。
while、do-while、forの中で使い、処理中のループを抜けて次の文へ制御を移します。

```js
while (true) {
    break; // *1 へ
}
// *1 次の文
```

switch文で出てきたものと同様で、処理中のループ文を終了できます。

次のコードでは配列の要素に1つでも偶数を含んでいるかを判定しています。

{{book.console}}
[import, break-find-example.js](./src/break/break-find-example.js)

1つでも偶数があるかが分かればいいため、配列内から最初の偶数を見つけたらfor文での反復処理を終了します。
このような処理はベタ書きせずに、関数として実装するのが一般的です。

同様の処理をする `isEvenIncluded` 関数を実装してみます。
次のコードでは、break文が実行され、ループを抜けた後にreturn文で結果を返しています。

{{book.console}}
[import, find-even-break-example.js](./src/break/find-even-break-example.js)

return文は現在の関数を終了させることができるため、次のように書くこともできます。

{{book.console}}
[import, find-even-return-example.js](./src/break/find-even-return-example.js)

偶数を見つけたらすぐにreturnすることで一時変数が不要となり、より簡潔に書くことができます。

### 配列の`some`メソッド {#array-some}

先ほどの`isEvenIncluded`関数は、偶数を見つけたら `true` を返す関数でした。
配列では`some`メソッドで同様のことが行えます。

`some`メソッドは、配列の各要素をテストする処理をコールバック関数として受け取ります。
コールバック関数が、一度でも`true`を返した時点で反復処理を終了し、`some`メソッドは`true`を返します。

```js
const array = [1, 2, 3, 4, 5];
const isPassed = array.some(currentValue => {
    // テストをパスするtrue、そうでないならfalseを返す
});
```

`some`メソッドを使うことで、配列に偶数が含まれているかは次のように書くことができます。
受け取った値が偶数であるかをテストするコールバック関数として`isEven`関数を渡します。

{{book.console}}
[import, some-even-example.js](./src/break/some-even-example.js)

## continue文 {#continue-statement}

continue文は処理中の文をスキップして、そのループの`条件式`と移行する制御文です。
while、do-while、forの中で使い、実行中のループの`条件式`へ制御を移します。

<!-- doctest:disable -->
```js
while (条件式) {
    continue; // `条件式` へ
}
```

次のコードでは、配列の中から偶数を集め、新しい配列を作り返しています。
偶数ではない場合、処理中のfor文をスキップしています。

{{book.console}}
[import, continue-filter-even-example.js](src/continue/continue-filter-even-example.js)

もちろん次のように、偶数なら`results`へ追加するという書き方も可能です。

<!-- doctest:disable -->
```js
if (isEven(number)) {
    results.push(number);
}
```

この場合、条件が複雑になってきた場合にネストが深くなってコードが読みにくくなります。
そのため、[ネストしたif文](../condition/README.md)のうるう年の例でも紹介したように、
できるだけ早い段階でそれ以上処理を続けない宣言をすることで、複雑なコードになることを避けています。

### 配列の`filter`メソッド {#array-filter}

配列から特定の値だけを集めた新しい配列を作るには`filter`メソッドを利用できます。

`filter`メソッドには、配列の各要素をテストする処理をコールバック関数として渡します。
コールバック関数が`true`を返した要素のみを集めた新しい配列を返します。

```js
const array = [1, 2, 3, 4, 5];
// テストをパスしたものを集めた配列
const filteredArray = array.filter((currentValue, index, array) => {
    // テストをパスするならtrue、そうでないならfalseを返す
});
```

この`filter`メソッドを使うことで、次のように偶数だけに絞り込む処理を書けます。

{{book.console}}
[import, filter-even-example.js](./src/continue/filter-even-example.js)

## for...in文 {#for-in-statement}

for...in文はオブジェクトのプロパティに対して、順不同で反復処理を行います。

<!-- doctest:disable -->
```js
for (variable in object)
    実行する文;
```

次のコードでは`object`のプロパティ名を`key`変数に代入し反復処理をしています。
`object`には、3つのプロパティ名があるため３回繰り返されます。

{{book.console}}
[import, for-in-object-example.js](./src/for-in/for-in-object-example.js)

オブジェクトに対する反復処理のためにfor...in文は有用に見えますが、多くの問題を持っています。

JavaScriptでは、オブジェクトは何らかのオブジェクトを継承しています。
for...in文は、対象となるオブジェクトのプロパティを列挙する場合に、親オブジェクトまで列挙可能なものがあるかを探索して列挙します。
そのため、オブジェクト自身が持っていないプロパティも列挙されてしまい、意図しない結果になる場合があります。

安全にオブジェクトのプロパティを列挙するには、`Object.keys`メソッド、`Object.values`メソッド、`Object.entries`メソッドなどが利用できます。

先ほどの例である、オブジェクトのキーと値を列挙するコードはfor...in文を使わずに書けます。
`Object.keys`メソッドは`object`自身がもつ列挙可能なプロパティ名の配列を返します。
そのためfor...in文とは違い、親オブジェクトのプロパティは列挙されません。

{{book.console}}
[import, object-keys-for-each-example.js](./src/for-in/object-keys-for-each-example.js)

また、for...in文は配列に対しても利用できますが、こちらも期待した結果にはなりません。

次のコードでは、配列の要素が列挙されそうですが、実際には配列のプロパティ名が列挙されます。
for...in文が列挙する配列オブジェクトのプロパティ名は、要素のインデックスを文字列化した"0"、"1"となるため、その文字列が`num`へと順番に代入されます。
そのため、数値と文字列の加算が行われ、意図した結果にはなりません。

{{book.console}}
[import, for-in-array-bug-example.js](./src/for-in/for-in-array-bug-example.js)

配列の内容に対して反復処理を行う場合は、for文や`forEach`メソッド、後述するfor...of文を使うべきでしょう。

このようにfor...in文は正しく扱うのが難しいですが、代わりとなる手段が豊富にあります。
そのため、for...in文の利用は避け、他の方法を考えた方がよいでしょう。

## [ES2015] for...of文 {#for-of-statement}

最後にfor...of文についてです。

JavaScriptでは、`Symbol.iterator`という特別な名前のメソッドを実装したオブジェクトを**iterable**と呼びます。
iterableオブジェクトは、for...of文で反復処理できます。

iterableについてはgeneratorと密接な関係がありますが、ここでは反復処理時の動作が定義されたオブジェクトと認識していれば問題ありません。

iterableオブジェクトは反復処理時に次の返す値を定義しています。
それに対して、for...of文では、`iterable`から値を1つ取り出し、`variable`に代入し反復処理を行います。

<!-- doctest:disable -->
```js
for (variable of iterable)
    実行する文;
```

実はすでにiterableオブジェクトは登場していて、Arrayはiterableオブジェクトです。

次のようにfor...of文で、配列から値を取り出し反復処理を行うことができます。
for...in文とは異なり、インデックス値ではなく配列の値を列挙します。

{{book.console}}
[import, for-of-array-example.js](./src/for-of/for-of-array-example.js)

JavaScriptではStringオブジェクトもiterableです。
そのため、文字列を1文字ずつ列挙できます。

{{book.console}}
[import, for-of-string-example.js](./src/for-of/for-of-string-example.js)

その他にも、`TypedArray`、`Map`、`Set`、DOM NodeListなど、`Symbol.iterator`を実装されているオブジェクトは多いです。
for...of文はそれらのiterableオブジェクトを反復処理できます。

## [コラム] `let`ではなく`const`で反復処理をする {#const-iteration}

先ほどのfor文や`forEach`メソッドでは`let`を`const`に変更できませんでした。
なぜなら、for文は一度定義した変数に値の代入を繰り返し行う処理といえるからです。
`const` は再代入できない変数を宣言するキーワードであるためfor文とは相性がよくありません。

一度定義した変数に値を代入しつつ反復処理すると、変数へ値の上書きが必要となり`const`を使うことができません。
そのため、一時的な変数を定義せずに反復処理した結果だけを受け取る方法が必要になります。

配列には、反復処理をして新しい値を作る`reduce`メソッドがあります。

`reduce`メソッドは2つずつ要素を取り出し（左から右へ）、その値を`コールバック関数`に適用し、
`次の値`として1つの値を返します。
最終的な、`reduce`メソッドの返り値は、コールバック関数が最後に`return`した値となります。

<!-- doctest:disable -->
```js
const result = array.reduce((前回の値, 現在の値) => {
    return 次の値;
}, 初期値);
```

配列から合計値を返すものを`reduce`メソッドを使い実装してみましょう。

先ほどの配列の全要素の合計値を計算するものは`reduce`メソッドでは、次のように書くことができます。
`初期値`に`0`を指定し、`前回の値`と`現在の値`を足していくことで合計を計算できます。
`初期値`を指定していた場合は、最初の`前回の値`に初期値が、配列の先頭の値が`現在の値`となった状態で開始されます。

{{book.console}}
[import, sum-reduce-example.js](./src/for/sum-reduce-example.js)

`reduce`メソッドを使った例では、そもそも変数宣言をしていないことが分かります。
`reduce`メソッドでは常に新しい値を返すことで、1つの変数の値を更新していく必要がなくなります。
これは`const`と同じく、一度作った変数の値を変更しないため、意図しない変数の更新を避けることにつながります。

## まとめ {#conclusion}

この章では、for文などの構文での反復処理と配列のメソッドを使った反復処理について比較しながら見ていきました。
for文などの構文ではcontinue文やbreak文が利用できますが、配列のメソッドではそれらは利用できません。
一方で配列のメソッドは、一時的な変数を管理する必要がないことや、処理をコールバック関数として書くという違いがあります。

どちらの方法も反復処理においてはよく利用されます。
どちらが優れているというわけでもないため、どちらの方法も使いこなせるようになることが重要です。
また、配列のメソッドについては「[配列][]」の章でも詳しく解説します。

[配列]: ../array/README.md
