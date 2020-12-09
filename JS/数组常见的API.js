/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-09 14:47:58
 * @LastEditTime: 2020-12-09 15:58:04
 * @Description: 数组常见的操作
 */
let list = []
// Push : 数组尾部添加元素，返回数组的长度
console.log(list.push('push'), list) // 1 [ 'push' ] 
// unshift: 在数组的头部添加元素，返回数组的长度
console.log(list.unshift('unshift'), list) // 2 [ 'unshift', 'push' ]
// pop: 在数组的尾部删除元素，返回删除的元素
console.log(list.pop(), list) // push [ 'unshift' ]
// shift: 在数组的头部删除元素，返回删除的元素
console.log(list.shift(), list) // unshift []
// splice: 分割数组，第一位是索引，第二位是长度，返回的是删除的数组。改变数组本身
list = [0, 1, 2, 3]
console.log(list.splice(1, 2), list) // [ 1, 2 ] [ 0, 3 ]
// slice: 分割数组，返回删除的数组，不会改变数组本身
list = [3, 4, 5]
console.log(list.slice(0, 1), list) // [ 3 ] [ 3, 4, 5 ]
// indexOf:查找某元素第一次出现的位置
list = [1, 3, 'a', 'A', 'a']
console.log(list.indexOf('a'), list.indexOf('b')) // 2 -1
// lastIndexOf: 查找某元素最后一次出现的位置
list = [1, 3, 'a', 'A', 'a']
console.log(list.lastIndexOf('a')) // 4
// 查找元素第一次出现的位置
console.log(list.findIndex((currentValue, index, arr) => typeof currentValue === 'string')) // 2
// forEach
list.forEach((val, idx) => {
  console.log(val)
})
// map返回一个经过处理后的新数组，但不改变原数组的值。
list = ['a', 'b']
const list1 = list.map((val, index, arr) => {
  return val
})
console.log(list === list1) // false
// filter
list = [1, 33, 789]
const list2 = list.filter((val, idx, arr) => val > 100)
console.log(list2) // [7, 8, 9]
// some: 是否包含某元素， 为true就不往下执行了
list = [1, 4 ,5, 4, 77]
console.log(list.some((val, index, arr)=> {
  return val > 2
})) // true

// every: 所有元素和某元素一致
list = [1, 2, 4, 5, 6, 7, 7]
console.log(list.every((val, idx, arr) => {
  return val === 4
})) // false

// includes： 是否包含某个元素, 第二个参数是查询开始的索引
list = [1, 2, 11, 33, 21]
console.log(list.includes(1, 3)) // false
console.log(list.includes(1, 0)) // true

// concat: 合并元素
const a = [1]
const b = 2
console.log(a.concat(b)) // [1, 2]
const c = [222]
console.log(a.concat(c)) // [ 1, 222 ]

// join:
const arr1 = [1, 2]
const arr2 = [3, 2]
console.log(arr1.join('.')) // '1.2'
console.log(arr1.join(arr2)) // '13,22'
// toString
console.log(arr1.toString()) // '1,2'

// sort
console.log([1, 'a', 'A', 'Z', 555].sort()) // [ 1, 555, 'A', 'Z', 'a' ]
