/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-10-10 10:24:46
 * @LastEditTime: 2020-10-10 10:40:06
 * @Description: 静态方法和实例方法
 */
// 静态方法
function A() {}
A.say = function() {
  console.log('你好')
}
A.say()

//实例方法
function B() {}
B.prototype.say = function() {
  console.log('我是实例方法')
}
b = new B()
b.say()