/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-09 14:02:54
 * @LastEditTime: 2020-12-09 14:05:18
 * @Description: 纯函数： 相同的输入永远得到相同的输出，且不产生其他的副作用
 */

 // 这种就不是纯函数
var MAX = 10
function compare (number) {
  return number >= MAX
}

// 纯函数：
function comparePure (number, Max) {
  return number >= Max
}
