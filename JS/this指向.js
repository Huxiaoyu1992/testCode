/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-09-17 16:20:37
 * @LastEditTime: 2020-09-17 20:15:52
 * @Description: 关于this的指向
 */
// var name = 'windows'
// function a() {
//   var name = 'Cherry'
//   console.log(this.name)
//   console.log('inner', this)
// }
// a()
// console.log('outer', this)

// var name = "windowsName";
// ---------------------------------------------------------------

// var a = {
//     name : "Cherry",
//     func1: function () {
//         console.log(this.name)     
//     },
//     func2: function () {
//         setTimeout( () => {
//             this.func1()
//         },100);
//     }
// };
// a.func2() // cherry

// -----------------------------------------------------------------

// var a = {
//   name : "Cherry",
//   func1: function () {
//       console.log(this.name)     
//   },
//   func2: function () {
//     var _this = this
//       setTimeout( function() {
//           _this.func1()
//       },100)
//   }
// }
// a.func2() // cherry
// ------------------------------------------------------------------

// var a = {
//   name : "Cherry",
//   func1: function () {
//       console.log(this.name)
//   },
//   func2: function () {
//       setTimeout(  function () {
//           this.func1()
//       }.apply(a),100);
//   }
// };
// a.func2() // Cherry

// ---------------------------------------------------------------
// var a = {
//   name : "Cherry",
//   func1: function () {
//       console.log(this.name)
//   },
//   func2: function () {
//       setTimeout(  function () {
//           this.func1()
//       }.call(a),100);
//   }
// };
// a.func2() // Cherry

// ---------------------------------------------------------------
// var a = {
//   name : "Cherry",
//   func1: function () {
//       console.log(this.name)
//   },
//   func2: function () {
//       setTimeout(  function () {
//           this.func1()
//       }.bind(a),100);
//   }
// };
// a.func2() // Cherry

//---------------------------------------------------------------
var a ={
  name : "Cherry",
  fn : function (a,b) {
      console.log( a + b)
  }
}

var b = a.fn;
b.bind(a,1,2) // 没有返回值