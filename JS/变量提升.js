/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-10-10 10:40:16
 * @LastEditTime: 2020-10-10 14:09:03
 * @Description: 变量提升
 */
// ------------------------------------------------------------------------------------
console.log(a) // a is not undefined
var a = 1;
console.log(b); // undefined
var b = function(){};

// ------------------------------------------------------------------------------------
console.log(c) // function c
function c() {}

// -------------------------------------------------------------------------------------
var a = 1
function a(){
    console.log(a, 'func')
}
console.log(a, 'outer') // 1 outer

// ------------------------------------------------------------------------------------
var a = { name: 'zhangsan' }
function b(a){
  a.age = 22
  a = { id: 2222 }
  return a
}
var c = b(a)
console.log(a, c) // { name: 'zhangsan', age: 22 } { id: 2222 }

// ------------------------------------------------------------------------------------
var a = { n : 1 }
var b = a
a.x = a = { n: 2 }
console.log(b.x) // {n: 2}
console.log(a.x) // undefined

// ---------------------------------------------------------------------------------
