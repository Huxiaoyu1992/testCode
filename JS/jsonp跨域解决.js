/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-05-25 14:53:52
 * @LastEditTime: 2020-05-25 15:02:57
 * @Description: 解决跨域jsonp
 */
const script = document.createElement('script')
script.type = 'text/script'
script.src = 'http://www.domain.com/a?data=1&callback=cb'
const cb = res => {
  console.log(JSON.stringify(res))
}
