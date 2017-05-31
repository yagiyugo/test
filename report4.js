/*
 * 【注意点など】
 * makeFizzBuzzFunction関数の「中身」以外は，一字一句たりとも変更してはいけません．
 * 指示に従っていない場合には未提出として扱いますので，十分に注意してください．
 */
module.exports = (function() { // IIFE（module.exportsへの代入はおまじない）
    "use strict"; // 当然strictモード

    /**
     * 引数に対応するFizzBuzz問題を解く関数を作ります（この関数の中身のみ変更可）．
     * @param {number} fizzNum この数で割り切れた場合に「Fizz」と判断する（デフォルト値は3）
     * @param {number} buzzNum この数で割り切れた場合に「Buzz」と判断する（デフォルト値は5）
     * @return {function} 引数に対応するFizzBuzz問題を解く関数（クロージャ？）
     */
    function makeFizzBuzzFunction(fizzNum = 3, buzzNum = 5) {
        if ("number" !== typeof fizzNum || 1 >= fizzNum || "number" !== typeof buzzNum || 1 >= buzzNum) {
            throw new Error("IllegalArgumentException");
        }
        /*
         * 関数オブジェクトを返す.
         * 関数の仕様としては以下の通りである.
         * 1)引数iがfizzNumで割り切れ,かつbuzzNumで割り切れた場合,
         *   `FizzBuzz`と出力する.
         * 2)引数iがfizzNumで割り切れるが,buzzNumで割り切れない場合,
         *   `Fizz`と出力する.
         * 3)引数iがfizzNumで割り切れないが,buzzNumで割り切れる場合,
         *   `Buzz`と出力する.
         * 4)引数iがfizzNumで割り切れず,かつbuzzNumで割り切れない場合,
         *   引数iの値を出力する.
         *
         * 上記の仕様を満たす関数を返す.
         * fizzbuzz-runner.js において,
         * makeFizzBuzzFunction関数の呼び出しは fizzBuzzFunction(i);
         * となっているが, fizzBuzzFunction は
         * fizzBuzzFunction = makeFizzBuzzFunction(fizzNum, buzzNum);
         * の代入がされているため,実質的に fizzBuzzFunction(i); は
         * makeFizzBuzzFunction(fizzNum, buzzNum)(i);
         * となる.
         * よって, makeFizzBuzzFunction(fizzNum, buzzNum)の際に
         * 関数オブジェクトを返せば, 関数functionとすると,
         * function(i);
         * となるため, 関数を返すことで引数を i とした関数の実行ができる.
         */
         return function(i) {
           if(i % fizzNum === 0 && i % buzzNum === 0){
             return `FizzBuzz`;
           }
           else if(i % fizzNum === 0){
             return `Fizz`;
           }
           else if(i % buzzNum === 0){
             return `Buzz`;
           }
           else{
             return `${i}`;
           }
         }
    }
    
    return makeFizzBuzzFunction; // 関数自体を返す（関数呼び出しではない）
})();
