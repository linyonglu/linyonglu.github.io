---
date: 2023/08/05 22:23:35 
config: {
    top: false,
    dir: true,
    tag: ['css'],
    valine: true,
}
title: offset类型的细节理解
---

## **1、offsetHeight || offsetWidth = boder + padding + content**

**两者都是只读属性，如果想**

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/1/16280300d2cbc0ad\~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image)

**offsetLeft   offsetTop 一般是相对于offsetParent计算的，也就是第一个定位的父级**

**两者都是只读属性**

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/1/162804163d195550\~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image)

### offsetTop 与 style.top 的差别

我们知道 offsetTop 可以获得 HTML 元素间隔上方或外层元素的地位，style.top 也是可以的，二者的差别是：

1.  offsetTop 返回的是数字，而 style.top 返回的是字符串，除了数字外还带有单位：px。
2.  offsetTop 只读，而 style.top 可读写。
3.  若是没有给 HTML 元素指定过 top 样式，则 style.top 返回的是空字符串。

offsetLeft 与 style.left、offsetWidth 与 style.width、offsetHeight 与 style.height 也是同样事理。

### \*\*2、\*\*scrollTop、scrollLeft、scrollWidth、scrollHeight

图上标示了scrollTop && scrollHeight

同理scrollWidth和scrollLeft也是一样的

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/1/1628055d0479d7c5\~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image)

### 3、event.clientX、event.clientY、event.pageX、event.pageY

event.clientX 是目标点距离浏览器可视范围的X轴坐标

event.clientY 是目标点距离浏览器可视范围的Y轴坐标

event.pageX 是目标点距离document最左上角的X轴坐标

event.pageY 是目标点距离document最左上角的Y轴坐标

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/1/1628064e83bb382a\~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image)