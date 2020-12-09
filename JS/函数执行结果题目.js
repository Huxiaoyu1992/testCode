/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-09 16:01:55
 * @LastEditTime: 2020-12-09 16:08:13
 * @Description: 判断函数的执行结果
 */
let a = 1
let b = function () {
  console.log(a)
  a++
}
b() // 1


let c = 1
let d = function () {
  console.log(c)
  let d = 5
  d++
}
d() // Uncaught SyntaxError: Identifier 'c' has already been declared: 
// 原因：其原因是在同一个 block 中，let 在后面重新定义的，那么就不能在之前引用该变量。同时，也不能取嵌套外层的值。
