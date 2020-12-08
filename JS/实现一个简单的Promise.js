/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-11-25 17:18:53
 * @LastEditTime: 2020-11-25 18:32:40
 * @Description: 实现一个简单的Promise
 */

 const a = new Promise(resolve => {
   throw new Error('不好')
 }, reject => {
   console.log(reject, '结果')
 }).catch(e => {
   console.log(e, 'dddd')
 })
 console.log(a)

 // 输出的结果:
 // Promise { <pending> }
 // 不好
 // error错误, dddd
 // 说明：内部的错误只能用catch捕捉

 new Promise(resolve => {
   console.log(typeof resolve) // function onFulfilled
 }, reject => {})
