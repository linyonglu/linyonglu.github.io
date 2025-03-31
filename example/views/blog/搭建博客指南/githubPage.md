---
date: 2025/03/30 19:45:35 
config: {
    top: false,
    dir: true,
    tag: ['info'],
    valine: true,
}
title: github page搭建个人静态网页
---

## 简介
[github page](https://pages.github.com/)是github提供的一个免费静态网页托管服务，可以用来搭建个人博客、项目文档等。本文将介绍如何使用github page搭建个人静态网页。

## 步骤
1. 在github上创建一个仓库，仓库名称必须为`<username>.github.io`，其中`<username>`是你的github用户名。
2. 在仓库中创建一个`index.html`文件，这是你的静态网页的入口文件。
3. 在仓库中创建一个`.github/workflows`文件夹，并在其中创建一个`deploy.yml`文件，这是你的部署配置文件。