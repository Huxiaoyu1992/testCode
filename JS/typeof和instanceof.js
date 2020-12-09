/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-08 15:37:50
 * @LastEditTime: 2020-12-08 16:01:10
 * @Description: typeof和instanceof
 */

 // typeof
console.log(typeof 1) // number
console.log(typeof true) // boolean
console.log(typeof '1') // string
console.log(typeof Symbol(1)) // symbol
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof function() {}) // function
console.log(typeof null) // object
console.log(typeof undefined) // undefined

// typeof 的结果： 除了null和function，其他检测出的都是它对应的数据类型
// typeof 会对 null 显示错误是个历史 Bug，typeof null 输出的是 object，因为 JavaScript 早起版本是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以它错误判断为 object。

// instanceof: 主要用于检测某个构造函数的原型对象在不在某个对象的原型链上
console.log(1 instanceof Number) // false
console.log(new Number(1) instanceof Number) // true

console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(123)) // [object Number]
console.log(Object.prototype.toString.call('123')) // [object String]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call(Symbol('ddd'))) // [object Symbol]
console.log(Object.prototype.toString.call(function a() {})) // [object Function]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
