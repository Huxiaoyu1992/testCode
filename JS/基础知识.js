/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-06-15 16:39:10
 * @LastEditTime: 2020-06-15 17:53:19
 * @Description: 前端基础知识
 */
// ---------------------------------------------------------------------
// var a = 1;
// if(true) {
//   console.log(a) // VM61:3 Uncaught ReferenceError: Cannot access 'a' before initialization 
//   let a = 2
// }
// 结果原因: let 声明不会提升，并且会产生暂存死区。在let声明变量之前访问变量会抛出错误

//-----------------------------------------------------------------------
// var a = { n: 1 }
// var b = a
// a.x = a = { n: 2 }
// console.log(a.n, b.n) // 2 1
// console.log(a.x, b.x) // undefined {n: 2}
// // 结果原因： .运算符比 = 运算符高,先计算`a.x`

// -----------------------------------------------------
// console.log(c);
// var c;
// function c(a) {
//   console.log(a);
//   var a = 3;
//   function a() {}
// }
// c(2);// functionc functiona

// ---------------------------------------------------------
// var c = 1
// function c(c) {
//   console.log(c)
//   var c = 3
// }
// console.log(c)
// c(2) // 1 c is not a function
// 结果： 因为函数声明会变量提升到最顶端，当console.log(c)的时候 c 已经是1 了，当c(2)执行的时候，c已经不是一个function了，

// ----------------------------------------------------------
var name = 'eretgf';
(function() {
  if(typeof name === 'undefined') {
    var name = 'zhangsan'
    console.log(name)
  } else {
    console.log(name)
  }
})(); // zhangsan
