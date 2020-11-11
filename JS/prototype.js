/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-05-11 14:50:45
 * @LastEditTime: 2020-05-11 17:52:17
 * @Description: prototype和__proto__
 */

 // 原型相关
class User {
  
}
function func() {
  
}
const obj = {

}
const obj1 = {
  method: function () {

  }
}
const arr = new Array()

console.log(User.prototype) // User {}
console.log(func.prototype) // func {}
console.log(arr.prototype) // undefined
console.log(obj.prototype) // undefined
console.log(obj1.method.prototype) // method
// prototype是一个拥有[[contructor]]内部方法的对象才有的属性， 比如函数，对象的方法，ES6中的类，在ES6中箭头函数是没有这个内部方法的。
// 创建函数的时候，JavaScript会为这个函数自动添加prototype属性，这个属性的指向是一个原型对象Functionname.prototype,我们可以向这个原型对象添加属性或者对象，甚至可以指向一个现有的对象。

//———————————————————__proto__———————————————————————————-
// 继承相关
console.log(User.__proto__) // [function]
console.log(func.__proto__) // [Function]
console.log(arr.__proto__) // []
console.log(obj.__proto__) // {}
console.log(obj1.method.__proto__) // [function]
// 每个对象都有一个__proto__属性，用来标识自己所继承的原型。JavaScript任意对象都有一个内置的属性[[Prototype]],在ES5 之前没有标准方法来访问这个内置属性
//但是大多数浏览器都支持__proto__来访问，以下统一用__proto__来访问[[Prototype]],但是实际开发中不能这么访问

// 原型链
// JavaScript通过prototype和__proto__在两个对象之间建立关联，使一个对象可以通过委托访问另一个对象的属性和函数
// 这样的关联就是原型链，一个由对象组成的有限对象链，用于实现继承和共享属性。
// JavaScript函数有两个不同的内部方法[[Call]]、[[Contructor]]
// 不通过new 调用函数，执行的是[[Call]]函数，从而直接执行代码中的函数体
// 通过new调用时，执行的是[[Contrucor]]函数，创建一个实例对象，把实例对象的__proto__属性指向构造函数的prototype来实现继承构造函数prototype的所有属性和方法，将this绑定到实例上，再执行函数体

