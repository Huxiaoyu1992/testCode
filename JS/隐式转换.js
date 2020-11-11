/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-10-10 14:09:16
 * @LastEditTime: 2020-10-10 16:11:36
 * @Description: 隐式转换
 */
console.log([] == []) // false


var a = { name: 'zhangsan' }
console.log(a)
a.x = '你好'
var b = a 
console.log(b, a)
