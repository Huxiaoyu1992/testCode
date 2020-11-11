/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-05-12 10:38:44
 * @LastEditTime: 2020-05-12 10:42:48
 * @Description: 模拟死循环来阻塞主线程
 */
function sleep(delay) {
  let start = (new Date()).getTime()
  while ((new Date()).getTime() - start < delay) {
    continue
  }
}

function  test() {
  console.log('1111')
  sleep(2000)
  console.log('22222')
}
test()
