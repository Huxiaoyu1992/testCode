/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-12-09 10:12:34
 * @LastEditTime: 2020-12-09 10:16:26
 * @Description: sleep的实现
 */
const sleep = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}
sleep(2000).then(resolve => {
  console.log(resolve)
})
