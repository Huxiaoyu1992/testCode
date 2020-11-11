/*
 * @Author: huxiaoyu
 * @LastEditors: huxiaoyu
 * @Date: 2020-09-28 16:41:27
 * @LastEditTime: 2020-09-28 16:59:15
 * @Description: 
 */
// new Promise((resolve, reject) => {
//   console.log(1);
//    resolve();
//  }).then((a) => {
//   console.log(2);
//   new Promise((resolve,reject) => {
//     console.log(3);
//      resolve();
//    }).then((c) => {
//     console.log(4);
//    }).then((d) => {
//     console.log(6);
//    })
//  }).then((b) => {
//   console.log(5);
//  }); // 1 2 3 4 5 6
new Promise((resolve, reject) => {
  console.log(1);
   resolve();
 })
 .then((a) => {
  console.log(2);
   return new Promise((resolve,reject) => {
    console.log(3);
     resolve();
   })
   .then((c) => {
    console.log(4);
   })
   .then((d) => {
    console.log(6);
   })
 })
 .then((b) => {
  console.log(5);
 }); // 1 2 3 4 6 5

 