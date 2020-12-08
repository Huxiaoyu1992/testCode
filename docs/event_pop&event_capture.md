# 事件捕获和冒泡
##  并不是所有的事件都会冒泡，不冒泡的事件有：
* onblur
* onfocus
* onmouseenter
* onmouseleave

## onmouseenter和onmouseover的区别：
* onmouseenter不会冒泡， 在鼠标移入li的时候, ul不会触发
* onmouseover会冒泡，在鼠标移入li的时候, ul也会触发, 所以onmouseover会触发多次

**注意: Chrome浏览器是冒泡的**
