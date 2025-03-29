---
date: 2023/08/05 22:23:35 
config: {
    top: false,
    dir: true,
    tag: ['info'],
    valine: true,
}
title: 代码规范
---


# 命名

##### 不使用中文拼音

## 目录命名

##### 全部采用小写方式， 以下划线分隔，不使用特殊字符和数字。

##### 例:

```
12 my_folder_name my_project_name/
3 my_folder_name/
```
```
12 my_project_name/ view/
34 my_page_name images/
5 home_logo.png
```
## 组件目录

##### 组件目录必须是两个单词及以上，单个单词作为原生的组件/系统组件，也限定了含义的范围

##### 例如：

```
1 components/user_info/
2 components/member_head/
```
## 代码命名


#### ，以动词开头

#### getUserInfo()

#### 动词：

#### get 获取/set 设置,add 增加/remove 删除create 创建/destory 移除start 启动/stop 停止open 打

#### 开/close 关闭,read 读取/write 写入 load 载入/save 保存,create 创建/destroy 销毁begin 开始/end

#### 结束,backup 备份/restore 恢复import 导入/export 导出,split 分割/merge 合并

#### inject 注入/extract 提取,

#### attach 附着/detach 脱离

#### bind 绑定/separate 分离,view 查看/browse 浏览

#### edit 编辑/modify 修改,select 选取/mark 标记

#### copy 复制/paste 粘贴,undo 撤销/redo 重做insert 插入/delete 移除,add 加入/append 添加

#### clean 清理/clear 清除,index 索引/sort 排序

#### find 查找/search 搜索,

#### increase 增加/decrease 减少

#### play 播放/pause 暂停,

#### launch 启动/run 运行

#### compile 编译/execute 执行,

#### debug 调试/trace 跟踪

#### observe 观察/listen 监听,build 构建/publish 发布input 输入/output 输出,encode 编码/decode 解

#### 码encrypt 加密/decrypt 解密,compress 压缩/decompress 解压缩

#### pack 打包/unpack 解包,parse 解析/emit 生成connect 连接/disconnect 断开,

#### send 发送/receive 接收

#### download 下载/upload 上传,refresh 刷新/synchronize 同步update 更新/revert 复原,lock 锁

#### 定/unlock 解锁check out 签出/check in 签入,

#### submit 提交/commit 交付

#### push 推/pull 拉,

#### expand 展开/collapse 折叠begin 起始/end 结束,start 开始/finish 完成

#### enter 进入/exit 退出,abort 放弃/quit 离开

#### obsolete 废弃/depreciate 废旧,collect 收集/aggregate 聚集

### 函数

##### 采用小驼峰方式，不使用特殊字符和数字，动词+名词

### 变量

##### 采用小驼峰方式，不使用特殊字符和数字,以名词、副词、形容词开头


#### let maxCount

#### 采用全的大写模式，以“E”开头下划线隔开

#### 采用全的大驼峰写法，以“I”开头大驼峰写法

#### 采用全的大驼峰写法

### 常量

```
采用全的大写方式，以下划线隔开，TypeScript的Enum
```
```
12 const KEY_ESC = 27 // ts
34 enum E_ORDER_STATUS = { OPEN,
56 CLOSE }
```
### 枚举

```
12 enum E_ORDER_STATUS = { OPEN,
34 CLOSE }
```
### 接口

```
12 interface Person { name: string;
3 }
```
### 类


#### 多个if else 嵌套使逻辑变成复杂，可读性差。判断条件过⻓，尝试使用反向判断使用“非” ，多种状态

#### 时，可以使用map/array结合filter、映射去处理

```
12 /** * Class representing a dot.
34 * @extends Point */
56 class Dot extends Point { /**
78 * Create a dot. * @param {number} x - The x value.
109 * @param {number} y - The y value. * @param {number} width - The width of the dot, in pixels.
1112 */ constructor(x, y, width) {
1314 // ... }
1516 /** * Get the dot's width.
1718 * @return {number} The dot's width, in pixels. */
1920 getWidth() { // ...
2122 }}
23
```
# 可读性

## 减少多个if else嵌套

```
12 // badif (test > 1) {
34 // todo something} else if (test === 0) {
5 // todo something
```

```
67 } else if (test < 0) { // todo something
89 }// good
1011 if (test > 1) { // todo something
1213 return}
1415 if (test === 0) { // todo something
1617 return}
1819 if (test < 0) { // todo something
2021 return}
```
(^2223) // bad
2425 if (status === 10 && status === 20 && status === 30 && status === 40) {}
2627 // goodconst myStatus = [10, 20, 30, 40]
2829 if (myStatus.includes(status)) {}
3031 // goodif (includeOpenStatus(status)) {
3233 }/**
3435 * * @param status 包含开启状态 订单状态
3637 */function includeOpenStatus(status) {
3839 const myStatus = [10, 20, 30, 40] return myStatus.include(status)
4041 }

### 代码注释量适当，不宜过多


#### 过少(缺少必要信息)、过多(没有信息量)，核心的代码、逻辑比较复杂的代码行，进行单行注释。 注释

#### 从使用者的⻆度去考虑

#### 尽量不使用全局变量，变量控制在使用的范围内。

#### 可以更加直观的理解代码，增加可读性。

##### 过多(没有信息量，不聚焦), 应该多从代码结构去考虑可读性，不是靠注释多少来描述

```
变量需注释，如果有Interface，需描述清楚变量的含义
方法需有注释，如果有返回须有返回解释，有参数必须要有参数的描述
```
```
12 /** * 修改信息
34 * @return {number} */
56 function changeMsg() {}
```
### 变量作用域控制在一定范围

### 使用常量

```
12 // badonKeyDown(event) {
34 if (event.keyCode === 27) { //...
56 }}
78 // goodonKeyDown(event) {
109 if (event.keyCode === KEY_ESC) { //...
1112 }}
```

#### 主要目标对象:js工具类、service符合JSDOC规范

### 注释

```
举几个例子: 类 (@extends, @param, @return, @see, @link )
```
```
12 /** * Class representing a dot.
34 * @extends Point */
56 class Dot extends Point { /**
78 * Create a dot. * @param {number} x - The x value.
109 * @param {number} y - The y value. * @param {number} width - The width of the dot, in pixels.
1112 */ constructor(x, y, width) {
1314 // ... }
1516 /** * Get the dot's width.
1718 * @return {number} The dot's width, in pixels. */
1920 getWidth() { // ...
2122 }}
23
方法
```
```
12 /*** Blend two colors together.
3 * @param {string} color1 - The first color, in hexadecimal format.
```

#### 函数的参数控制在5个以内，参数不宜过多，暴露过多的，不可控，违反封装原则。

#### 简单来说，一个方法做一件事情，高内聚。

```
45 * @param {string} color2 - The second color, in hexadecimal format.* @return {string} The blended color.
67 */export function blend(color1, color2) {}
```
# 封装

## 原则:高内聚，低耦合

## 出现2次的代码进行封装抽象（DRY）

```
12 // badthis.name = result && result.userName
34 this.age = result && result.agethis.phone = result && result.phone
56 // goodconst userInfo = result || {}
78 this.name = userInfo.userNamethis.age = userInfo.age
9 this.phone = userInfo.phone
```
## 职责单一

## 减少函数副作用，降低阅读难度

```
12 // exampleclass DataManage {
34 // bad static badDataTransfer(struct) {副作用
56 struct.c = 123 }
```

#### 明确自己的代码类型，不要让它变成可变不可预测的，增加阅读难度。“==”的隐式转换太多，增加心

#### 智负担，本来应该Lint去控制，存量有大量“==”，无法强制Lint

```
78 // good static goodDataTransfer(struct) {纯函数
109 return { ...struct, c: 1 } }
1112 }
1314 class A { data = {
1516 a: 1, b: 2,
1718 } // bad 有副作用，你不知道data是否改变
1920 badGetData = () => { DataManage.badDataTransfer(this.data)
2122 return this.data }
```
(^2324) // good 纯函数
25 goodGetData = () => {
2627 this.data = goodDataTransfer(this.data) return this.data
2829 }}
30

# 其他规范

## TypeScript

```
尽量不使用any
禁止使用!.非空断言，推荐使用?.
```
## 禁用“==”，用“===”代替


#### 隐式转换：

#### 不使用parseInt进行数值转换，如果要使用也必须带转换的进制类型。 例如:

### 尽量不使用parseInt


```
1 // bad
23 let testVal = parseInt('10') // good
45 let testVal = Number('10') // or
6 let testVal = parseInt('10', 10)
```
### Truthy and Falsy

```
12 - falsy:false 0
34 ' ' undefined或者 " "
56 nullNaN
78 - truthy'false'
109 '0'[]
11 {}
1213 Function// truthy falsy undefined
1415 if (obj) { this.name = obj.name
1617 // ...}
```
### try必须带catch

```
12 // badtry {
34 ...}
56 // goodtry {
```

#### ，尽量不使用英文缩写，须是完整单词

```
78 ...} catch(e) {
109 ...}^
```
```
不使用中文拼音
```
## 目录命名

##### 全部采用小写方式， 以下划线分隔，不使用特殊字符和数字。

##### 例:

```
12 my_folder_name my_project_name/
3 my_folder_name/
```
```
12 my_project_name/ view/
34 my_page_name images/
5 home_logo.png
```
### 组件目录

##### 组件目录必须是两个单词及以上，单个单词作为原生的组件/系统组件，也限定了含义的范围

##### 例如：

```
1 components/user_info/
```

#### ，以动词开头

#### getUserInfo()

#### 动词：

#### get 获取/set 设置,add 增加/remove 删除create 创建/destory 移除start 启动/stop 停止open 打

#### 开/close 关闭,read 读取/write 写入 load 载入/save 保存,create 创建/destroy 销毁begin 开始/end

#### 结束,backup 备份/restore 恢复import 导入/export 导出,split 分割/merge 合并

#### inject 注入/extract 提取,

#### attach 附着/detach 脱离

#### bind 绑定/separate 分离,view 查看/browse 浏览

#### edit 编辑/modify 修改,select 选取/mark 标记

#### copy 复制/paste 粘贴,undo 撤销/redo 重做insert 插入/delete 移除,add 加入/append 添加

#### clean 清理/clear 清除,index 索引/sort 排序

#### find 查找/search 搜索,

#### increase 增加/decrease 减少

#### play 播放/pause 暂停,

#### launch 启动/run 运行

#### compile 编译/execute 执行,

#### debug 调试/trace 跟踪

#### observe 观察/listen 监听,build 构建/publish 发布input 输入/output 输出,encode 编码/decode 解

#### 码encrypt 加密/decrypt 解密,compress 压缩/decompress 解压缩

#### pack 打包/unpack 解包,parse 解析/emit 生成connect 连接/disconnect 断开,

#### send 发送/receive 接收

#### download 下载/upload 上传,refresh 刷新/synchronize 同步update 更新/revert 复原,lock 锁

#### 定/unlock 解锁check out 签出/check in 签入,

#### submit 提交/commit 交付

#### push 推/pull 拉,

#### expand 展开/collapse 折叠begin 起始/end 结束,start 开始/finish 完成

#### enter 进入/exit 退出,abort 放弃/quit 离开

#### obsolete 废弃/depreciate 废旧,collect 收集/aggregate 聚集

```
2 components/member_head/
```
## 代码命名

### 函数

##### 采用小驼峰方式，不使用特殊字符和数字，动词+名词


#### let maxCount

#### 采用全的大写模式，以“E”开头下划线隔开

#### 采用全的大驼峰写法，以“I”开头大驼峰写法

### 变量

##### 采用小驼峰方式，不使用特殊字符和数字,以名词、副词、形容词开头

### 常量

```
采用全的大写方式，以下划线隔开，TypeScript的Enum
```
```
12 const KEY_ESC = 27 // ts
34 enum E_ORDER_STATUS = { OPEN,
56 CLOSE }
```
### 枚举

```
12 enum E_ORDER_STATUS = { OPEN,
34 CLOSE }
```
### 接口

```
12 interface Person { name: string;
3 }
```

#### 采用全的大驼峰写法

#### 多个if else 嵌套使逻辑变成复杂，可读性差。判断条件过⻓，尝试使用反向判断使用“非” ，多种状态

#### 时，可以使用map/array结合filter、映射去处理

## 类

```
12 /** * Class representing a dot.
3 * @extends Point
45 */class Dot extends Point {
67 /** * Create a dot.
89 * @param {number} x - The x value. * @param {number} y - The y value.
1011 * @param {number} width - The width of the dot, in pixels. */
1213 constructor(x, y, width) { // ...
1415 } /**
1617 * Get the dot's width. * @return {number} The dot's width, in pixels.
1819 */ getWidth() {
2021 // ... }
2223 }
```
# 可读性

## 减少多个if else嵌套


```
12 // badif (test > 1) {
34 // todo something} else if (test === 0) {
56 // todo something} else if (test < 0) {
78 // todo something}
```
109 // goodif (test > 1) {
1112 // todo something return
1314 }if (test === 0) {
1516 // todo something return
1718 }if (test < 0) {
1920 // todo something return
2122 }
2324 // badif (status === 10 && status === 20 && status === 30 && status === 40) {
2526 }// good
2728 const myStatus = [10, 20, 30, 40]if (myStatus.includes(status)) {
2930 }// good
3132 if (includeOpenStatus(status)) {}
3334 /** * 包含开启状态
3536 * @param status */ 订单状态
3738 function includeOpenStatus(status) { const myStatus = [10, 20, 30, 40]
39 return myStatus.include(status)


#### 过少(缺少必要信息)、过多(没有信息量)，核心的代码、逻辑比较复杂的代码行，进行单行注释。 注释

#### 从使用者的⻆度去考虑

#### 尽量不使用全局变量，变量控制在使用的范围内。

#### 可以更加直观的理解代码，增加可读性。

##### 4041 }

### 代码注释量适当，不宜过多

##### 过多(没有信息量，不聚焦), 应该多从代码结构去考虑可读性，不是靠注释多少来描述

```
变量需注释，如果有Interface，需描述清楚变量的含义
方法需有注释，如果有返回须有返回解释，有参数必须要有参数的描述
```
```
1 /**
23 * * @return {number}修改信息
45 */function changeMsg() {}
6
```
### 变量作用域控制在一定范围

### 使用常量

```
12 // badonKeyDown(event) {
34 if (event.keyCode === 27) { //...
56 }}
7 // good
```

#### 主要目标对象:js工具类、service符合JSDOC规范

```
89 onKeyDown(event) { if (event.keyCode === KEY_ESC) {
1011 //... }
12 }
```
### 注释

```
举几个例子: 类 (@extends, @param, @return, @see, @link )
```
```
12 /** * Class representing a dot.
34 * @extends Point */
56 class Dot extends Point { /**
78 * Create a dot. * @param {number} x - The x value.
109 * @param {number} y - The y value. * @param {number} width - The width of the dot, in pixels.
1112 */ constructor(x, y, width) {
1314 // ... }
1516 /** * Get the dot's width.
1718 * @return {number} The dot's width, in pixels. */
1920 getWidth() { // ...
2122 }}
23
方法
```

#### 函数的参数控制在5个以内，参数不宜过多，暴露过多的，不可控，违反封装原则。

#### 简单来说，一个方法做一件事情，高内聚。

```
12 /*** Blend two colors together.
34 * @param {string} color1 - The first color, in hexadecimal format.* @param {string} color2 - The second color, in hexadecimal format.
56 * @return {string} The blended color.*/
7 export function blend(color1, color2) {}
```
# 封装

## 原则:高内聚，低耦合

## 出现2次的代码进行封装抽象（DRY）

```
12 // badthis.name = result && result.userName
34 this.age = result && result.agethis.phone = result && result.phone
56 // goodconst userInfo = result || {}
78 this.name = userInfo.userNamethis.age = userInfo.age
9 this.phone = userInfo.phone
```
## 职责单一

## 减少函数副作用，降低阅读难度

```
12 // exampleclass DataManage {
```

```
34 // bad static badDataTransfer(struct) {副作用
56 struct.c = 123 }
78 // good static goodDataTransfer(struct) {纯函数
109 return { ...struct, c: 1 } }
1112 }
1314 class A { data = {
1516 a: 1, b: 2,
1718 } // bad 有副作用，你不知道data是否改变
1920 badGetData = () => { DataManage.badDataTransfer(this.data)
21 return this.data
2223 }
2425 // good goodGetData = () => {纯函数
2627 this.data = goodDataTransfer(this.data) return this.data
2829 }}
30
```
# 其他规范

## TypeScript

```
尽量不使用any
禁止使用!.非空断言，推荐使用?.
```

#### 明确自己的代码类型，不要让它变成可变不可预测的，增加阅读难度。“==”的隐式转换太多，增加心

#### 智负担，本来应该Lint去控制，存量有大量“==”，无法强制Lint

#### 隐式转换：

### 禁用“==”，用“===”代替


#### 不使用parseInt进行数值转换，如果要使用也必须带转换的进制类型。 例如:

### 尽量不使用parseInt

```
12 // bad let testVal = parseInt('10')
3 // good
45 let testVal = Number('10') // or
6 let testVal = parseInt('10', 10)
```
### Truthy and Falsy

```
12 - falsy:false 0
34 ' ' undefined或者 " "
56 nullNaN
78 - truthy'false'
109 '0'[]
1112 {}Function
1314 // truthy falsy undefinedif (obj) {
1516 this.name = obj.name // ...
17 }
```
### try必须带catch

```
1 // bad
2 try {
```

##### 34 ...}

```
56 // goodtry {
78 ...} catch(e) {
```
109 ...}^