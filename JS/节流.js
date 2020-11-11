/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-05-12 09:47:08
 * @LastEditTime: 2020-05-12 09:56:22
 * @Description: 节流是指在一定的时间内执行一次JS, 就像人眨眼
 * 函数节流： 监视滚动条滚动
 */

 let canRun = true
 const scrol = document.querySelector('#scrollItem')
 scrol.onscroll = function() {
   if (!canRun) {
     return
   }
   canRun = false
   setTimeout(function() {
     console.log('函数节流')
     canRun = true
   }, 300)
 }



