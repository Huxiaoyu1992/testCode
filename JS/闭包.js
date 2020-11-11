/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-08-27 10:45:47
 * @LastEditTime: 2020-08-27 13:40:36
 * @Description: 
 */
// function a() {
//   var id = '13234';
//   function b() {
//     console.log(id);
//   }
//   b();
// }
// a() // 13234

// function c(){
//   var d = 'name'
// }
// c(d) // error: d is not defined
function h() {
  var n = 1;
  add = function() {
    n += 1
  }
  function i() {
    console.log(n);
  }
  return i
}

var res1 = h()
res1() // 1
add()
res1() // 2
