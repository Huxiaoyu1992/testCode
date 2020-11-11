/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-05-12 10:02:55
 * @LastEditTime: 2020-05-12 10:06:41
 * @Description: 函数防抖: 频繁触发时，只有足够的空闲时间才执行代码一次。比如坐公交，在一定时间内，如果陆续有人上车，司机就不开车，只有没人刷卡了，司机才开车
 */
let timer = false
document.querySelector('#debounce').onscroll = function () {
  clearTimeout(timer)
  timer = setTimeout(function() {
    console.log('防抖')
  }, 300)
}

