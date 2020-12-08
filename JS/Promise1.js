/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-11 17:04:30
 * @LastEditTime: 2020-11-11 17:35:52
 * @Description: Promise.all和Promise.race的应用场景：发博客里图片，顺序不用管，用Promise.all， 一个请求的超时时间用race
 */
setTimeout(function() {
  console.log(1)
  new Promise((resolve, reject) => {
    console.log(2)
    resolve(2)
  }).then(val => {
    console.log(3)
  })
})
// 输出1 2 3


// ---------------------一秒后输出1 再等2秒输出2-----------------------------------
console.time()
setTimeout(() => {
  console.log(1)
  // console.timeEnd()
  setTimeout(() => {
    console.log(2)
    console.timeEnd()
  }, 2000)
}, 1000)

// ------------------------Promise.all------------------------------------

var p1 = new Promise((resolve, reject) => {
  console.log('p1')
  resolve(1)
})

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2')
    resolve(2)
  }, 2000)
})
var p3 = new Promise((resolve, reject) => {
  console.log('p3')
  resolve(3)
})

Promise.all([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// 输出结果：
// p1
// p3
// p2
// [ 1, 2, 3 ]


// ---------------------promise.all的error----------------------------------
var p1 = new Promise((resolve, reject) => {
  console.log('p1')
  resolve(1)
})

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2')
    reject('error2')
  }, 2000)
})
var p3 = new Promise((resolve, reject) => {
  console.log('p3')
  reject('error3')
})

Promise.all([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// p1
// p3
// error3
// p2

// Promise.all只要有一个reject失败的 就会失败，但是不会阻止任务之心

// -------------------------------Promise.race--------------------------------------
var p1 = new Promise((resolve, reject) => {
  console.log('p1')
  resolve(1)
})

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2')
    resolve(2)
  }, 2000)
})
var p3 = new Promise((resolve, reject) => {
  console.log('p3')
  resolve(3)
})

Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// 输出结果
// p1
// p3
// 1
// p2
// 只要有一个任务完成了，就算完成。