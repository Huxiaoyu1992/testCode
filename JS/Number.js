/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-10-10 09:46:52
 * @LastEditTime: 2020-10-10 10:10:44
 * @Description: 包装对象和原始数据
 */
var a = 1
console.log(a.constructor) // [Function: Number]

var a1 = new Number(2)
var a2 = new Number(2)
console.log(a1 === a2) // false
console.log(a1 == a2) // false

console.log(0.1 + 0.2 === 0.3) // false
console.log(0.1 + 0.2 == 0.3) // false


function numbersequal(a,b) {
  return Math.abs(a-b)<Number.EPSILON;
}
var a=0.1+0.2, b=0.3;
console.log(numbersequal(a,b)); //true

var a4 = [1]
a4['x'] = 2
console.log(a4) //[1, x: 2]