---
date: 2025/02/25 16:16:27 
config: {
    top: false,
    dir: true,
    dirTag: [h1,h2,h3],
    tag: ['js'],
    valine: true,
}
title: 基础知识整理
---

## 概述
从概念 -> 原理 -> 实践 -> 优化 -> 拓展 整理js方面的知识

## 主体内容

### js的数据类型以及检测方式

#### 概念
JavaScript采用动态弱类型系统，包含7种原始类型和1种对象类型：
1. 原始类型：undefined、null、boolean、number、string、symbol(ES6)、bigint(ES2020)
2. 对象类型：Object及其子类型（Array、Function等）

#### 原理
![20250227173239](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture/20250227173239.png)

#### 实践

``` javascript
const typeCheck = (val) => {
  // 特殊处理null
  if (val === null) return 'null';

  // 特殊处理函数
  if (typeof val === 'function') return 'function';

  // 基础类型检测
  if (typeof val !== 'object') return typeof val;
  
  // 对象类型细分
  const toString = Object.prototype.toString
  switch(toString.call(val)) {
    case '[object Array]': return 'array'
    case '[object Date]': return 'date'
    case '[object RegExp]': return 'regexp'
    default: return 'object'
  }
}

// 使用示例
console.log(typeCheck(42))          // "number"
console.log(typeCheck([]))          // "array"
console.log(typeCheck(() => {}))    // "object"（需特殊处理函数）
```

#### 优化
​类型判断策略优化：

- 优先使用typeof检测基础类型
- 使用Object.prototype.toString.call()检测对象子类型
- 避免直接使用instanceof检测跨窗口对象
- ​特殊处理技巧：

``` javascript
// 安全null检测
const isNull = x => x === null

// 精确undefined检测
const isUndefined = x => x === void 0

// 函数类型检测
const isFunction = fn => typeof fn === 'function'

// 数组检测最佳实践
const isArray = arr => Array.isArray(arr)
```

#### 拓展
​类型转换机制：

- 隐式转换规则（ToPrimitive算法）
- 显式转换方法（Number()、String()等）
- ​进阶类型检测：

``` javascript
// 检测Promise对象
const isPromise = p => !!p && typeof p.then === 'function'

// 检测可迭代对象
const isIterable = obj => !!obj && typeof obj[Symbol.iterator] === 'function'

// 大整数检测
const isBigInt = x => typeof x === 'bigint'

// 共享内存检测
const isSharedArrayBuffer = x => x instanceof SharedArrayBuffer
```

#### 注意事项：
- typeof null返回"object"是历史遗留问题
- 不同iframe中的相同构造函数实例检测可能失败
- 对象包装类型（如new String）与原始类型表现不同



### 为什么对象包装类型（如new String）与原始类型表现不同

#### 关键差异详解
1. 方法调用原理（自动装箱）
```javascript
// 原始类型调用方法时
'hello'.toUpperCase() → JS引擎自动执行：
1. 创建临时String对象：new String('hello')
2. 调用方法：tempObj.toUpperCase()
3. 销毁临时对象

// 包装对象直接调用
const strObj = new String('hello')
strObj.toUpperCase() // 直接调用对象方法
```

2. 比较差异示例
``` javascript
const primitive = 'light'
const boxed = new String('light')

console.log(primitive == boxed)  // true （值相等）
console.log(primitive === boxed) // false （类型不同）

console.log(typeof primitive)  // "string"
console.log(typeof boxed)      // "object"
```

3. 实际应用场景
推荐使用原始类型：

``` javascript
// 日常字符串操作
const message = 'Hello World'
const length = message.length
const upperCase = message.toUpperCase()
```

需要包装对象的特殊情况：

``` javascript
// 需要添加自定义属性时
const specialString = new String('unique')
specialString.customProp = 'added'
console.log(specialString.customProp) // "added"

// 需要严格区分类型时
function checkType(val) {
  return val instanceof String ? '包装对象' : '原始类型'
}
```

#### 内存对比示意图
![20250227173335](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture/20250227173335.png)

最佳实践建议
​优先使用原始类型：更高效、更简洁

​避免显式创建包装对象：除非需要特殊功能

#### ​类型转换技巧：

``` javascript
// 包装对象转原始类型
const boxed = new String('text')
const raw = boxed.valueOf() // 获取原始值

// 安全类型检测
function isRealString(s) {
  return typeof s === 'string' || s instanceof String
}
```

#### ​现代API优化：

``` javascript
// 类型安全的字符串转换
const safeString = (val) => String(val) // 总是返回原始类型

// 模板字符串自动处理
const name = new String('Alice')
console.log(`Hello ${name}`) // 自动转换为原始类型
```

#### 特殊注意：在使用JSON.stringify时，包装对象会被转换为原始值：

``` javascript
const boxed = new String('data')
console.log(JSON.stringify(boxed)) // ""data""（字符串形式）
```
