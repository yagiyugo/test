/*
 * 【注意点など】
 * このソースコードは，一字一句たりとも変更してはいけません．
 * 指示に従っていない場合には未提出として扱いますので，十分に注意してください．
 * 【使用方法】
 * /home/re00133/wp/node fizzbuzz-runner.js fizzNum buzzNum loopCount
 * 【使用例】
 * /home/re00133/wp/node fizzbuzz-runner.js 3 5 15
 */
(function() {     // IIFE
    "use strict"; // 当然strictモード

    const argv = process.argv; // コマンドライン引数の配列
    if (5 !== argv.length) {
        console.log("usage: /home/re00133/wp/node fizzbuzz-runner.js fizzNum buzzNum loopCount");
        console.log("example: /home/re00133/wp/node fizzbuzz-runner.js 3 5 15");
        process.exit(1);
    }

    const RADIX = 10; // 基数（10進数）
    const fizzNum = parseInt(argv[2], RADIX);
    const buzzNum = parseInt(argv[3], RADIX);
    const loopCount = parseInt(argv[4], RADIX);

    const makeFizzBuzzFunction = require("./report4.js"); // 同じディレクトリにあるreport4.jsを読み込む．
    const fizzBuzzFunction = makeFizzBuzzFunction(fizzNum, buzzNum);
    for (let i = 1; i <= loopCount; ++i) {
        const result = fizzBuzzFunction(i);
        if ("string" !== typeof result || 0 === result.length) {
            throw new Error("fizzBuzzFunctionの戻り値が文字列（string）でないか空文字列です");
        }
        console.log(result);
    }
})();
