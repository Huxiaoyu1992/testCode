/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-09-29 15:03:22
 * @LastEditTime: 2020-09-29 17:11:15
 * @Description: 
 */
var a = 10
function b() {
  a = 100
}
b()
console.log(a) // 100


var a = 10
function b() {
  a = 100
  return
  function a() {}
}
b()
console.log(a) //10

var a = 10
if (true) {
  a = 100
}
console.group(a) // 100

setTimeout(function() {
  console.log('settimeout1')
  new Promise((resolve, reject) => {}).then(
    console.log('promise1')
  )
})

setTimeout(function() {
  console.log('settimeout2')
  new Promise((resolve, reject) => {}).then(
    console.log('promise2')
  )
})

// ---------------------------------------------------------------------

console.log('打印'+1)
setTimeout(function(){
    console.log('打印'+2)
})
new Promise(function(resolve,reject){
  console.log('打印'+3)
}).then(
  console.log('打印'+4))
  console.log('打印'+10)
  new Promise(function(resolve,reject){
    setTimeout(function () {
      console.log('打印'+5)
    })
}).then(
  console.log('打印'+6))
  setTimeout(function(){
    new Promise(function(resolve,reject){
      console.log('打印'+7)
    })
})

// ---------------------------------------------------------------------
var obj = {
  name: 'aaa',
  getName: function() {
    return this.name
  }
}

// console.log(obj.getName()) // aaa
// console.log(getName()) // 报错:getName is undefined
// 怎么把this指向改为obj
var getName = function() {
  return this.name
}
console.log(getName.call(obj), '111')
console.log(getName(), 'ddd')

var a = 1
var b = 2

const c = a = b
console.log(a, b, c) // 2 2 2