/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-09 13:55:20
 * @LastEditTime: 2020-12-09 13:59:00
 * @Description: slice和splice
 */

 // slice不会变更原数组，返回的是被截取的数组
var a = [0, 1, 2, 3, 4]
console.log(a.slice(0, 1)) // [0]
console.log(a) // [ 0, 1, 2, 3, 4 ]

// splice返回的也是被截取的数组，而且她永久的改变了原数组
console.log(a.splice(0, 1)) // [0]
console.log(a.splice(0, 1)) // [1]
console.log(a) // [2, 3, 4]