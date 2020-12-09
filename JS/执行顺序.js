/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-09 10:29:39
 * @LastEditTime: 2020-12-09 10:32:04
 * @Description: 函数执行顺序
 */
function first() {
  console.log('in first 1')
  second()
  console.log('in first 2')
}

function second() {
  console.log('in second')
}

first()
console.log('global context')

// in first 1
// in second
// in first 2
// global context
