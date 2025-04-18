---
date: 2025/02/25 16:16:27 
config: {
    top: false,
    dir: true,
    dirTag: [h1,h2,h3],
    tag: ['css'],
    valine: true,
}
title: css基础知识整理
---

# CSS知识体系框架

## 一、CSS基础核心
### 1. 核心概念
- 层叠与继承机制
- 选择器优先级计算（Specificity）
- 盒模型（标准 vs IE）
- 视觉格式化模型（BFC/IFC/FFC/GFC）
- 定位体系（static/relative/absolute/fixed/sticky）
- 单位体系（px/em/rem/vw/vh/calc()）

### 2. 基础样式控制
- 文本排版（font/text/line-height）
- 颜色与背景（RGBA/HSLA/渐变）
- 边框与阴影（border-radius/box-shadow）
- 过渡基础（transition）
- 基础动画（@keyframes）

---

## 二、布局体系
### 1. 传统布局方案
- 流式布局（Float + Clearfix）
- 表格布局（display: table）
- 定位布局（Positioning）
- 多列布局（column-count）

### 2. 现代布局体系
- Flexbox（容器与项目属性）
- CSS Grid（显式/隐式网格、fr单位）
- 响应式网格系统
- 多维度对齐（place-content/justify-items）

### 3. 特殊布局场景
- 圣杯布局/双飞翼布局
- 等高列实现方案
- 粘性页脚布局
- 全屏布局（100vh处理技巧）

---

## 三、响应式设计
### 1. 核心机制
- 视口控制（viewport meta）
- 媒体查询（media features）
- 响应式单位（vw/vh/vmin/vmax）
- 图片响应式（srcset/sizes）

### 2. 适配策略
- Mobile First设计原则
- 断点设置策略（Breakpoints）
- 容器查询（container queries）
- 响应式字体（clamp()）

### 3. 设备适配
- 暗黑模式适配
- 安全区域适配（env(safe-area-inset)）
- 横竖屏适配

---

## 四、动画与交互
### 1. 动画体系
- 过渡动画（transition timing function）
- 关键帧动画（@keyframes）
- 动画性能优化（will-change）
- 交互动画（scroll-driven animations）

### 2. 高级效果
- 3D变换（transform-style/perspective）
- 滤镜系统（filter/blend-mode）
- 裁剪与蒙版（clip-path/mask）
- 滚动关联动画（scroll-timeline）

---

## 五、CSS工程化
### 1. 架构模式
- BEM命名规范
- CSS Modules
- CSS-in-JS（styled-components）
- 原子化CSS（Tailwind原理）

### 2. 预处理与后处理
- Sass/Less核心特性
- PostCSS插件体系（Autoprefixer）
- CSS自定义属性（变量系统）
- CSS Houdini（底层API扩展）

### 3. 构建优化
- Critical CSS提取
- 代码拆分策略
- 样式按需加载
- Tree Shaking原理

---

## 六、性能优化
### 1. 渲染性能
- 重绘与回流优化
- GPU加速原理
- 合成层优化
- content-visibility优化

### 2. 加载性能
- 样式表加载策略（preload/prefetch）
- 字体加载优化（font-display）
- 关键CSS提取
- 代码压缩（CSS Nano）

---

## 七、现代CSS特性
### 1. 新布局系统
- Subgrid布局
- Masonry布局
- 内在尺寸（min-content/max-content）

### 2. 组件化CSS
- @scope规则
- @layer级联层
- 嵌套语法（原生CSS嵌套）

### 3. 新选择器
- :has() 父选择器
- :is()/:where() 分组选择器
- 状态选择器（:focus-visible）

---

## 八、CSS方法论
### 1. 架构模式
- OOCSS（面向对象CSS）
- SMACSS（可扩展架构）
- ITCSS（倒三角架构）
- CUBE CSS（组件化方法论）

### 2. 设计系统集成
- Design Token管理
- 主题切换实现