---
date: 2025/03/30 19:51:35 
config: {
    top: false,
    dir: true,
    tag: ['info'],
    valine: true,
}
title: vscode + picgo + github搭建免费markdown图床
---

## 简介
本文旨在使用vscode插件 + picgo + github搭建免费markdown图床，picgo是一个用于快速上传图片并获取图片url链接的工具，搭建后在vscode编写md文档时可通过快捷键轻松上传图片

## 前置步骤
- 下载vscode插件PicGo
![20250330200227](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330200227.png)
- 下载picgo桌面版
[picgo下载](https://github.com/Molunerfinn/PicGo/releases)
- 拥有自己的github账号

## 步骤指南

### 创建一个用于上传图片的github仓库
![20250330201359](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330201359.png)
### 生成token访问令牌
#### 点击Settings
![20250330201750](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330201750.png)
#### 点击开发人员设置
![20250330201852](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330201852.png)
#### 生成新token，只展示一次，记得保存
![20250330202156](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330202156.png)

### picgo桌面版配置
- 图床设置选择github, 当然也可以选择其他，但是github是免费的，所以只考虑github
- 图床设置名：自定义
- 设定仓库名：创建的用于上传图片的github仓库名
- 设定分支名：仓库的主分支
- 设定token: github新生成的个人token
- 设定存储路径：自定义（非必填）
- 设定自定义域名：如使用cdn加速才填（非必填）
![20250330202442](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330202442.png)

### vscode-picgo配置
![20250330203057](https://cdn.jsdelivr.net/gh/linyonglu/cloudImg/blogs/picture20250330203057.png)

### Jsdelivr cdn加速
图片是从github服务器上读的，故会存在链接访问不稳定的情况，所以用jsDelivr对图片进行免费的cdn加速。jsDelivr 是一个开源的公共 Content Delivery Network（CDN）平台，旨在为开发者提供免费的加速服务。它利用全球各地的缓存节点来分发和缓存项目，从而加快网站内容的加载速度
将域名设置为：https://cdn.jsdelivr.net/gh/GitHub用户名/仓库名

## 总结
通过vscode + picgo + github 搭建了免费图床，这样在vscode编写md文件时就可以便捷地使用ctrl + alt + u 上传粘贴板上的图片，使用ctrl + alt + e就可以上传本地图片资源，并返回图片url链接