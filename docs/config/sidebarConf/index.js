// config/sidebarConf/index.js

// 介绍
const guide = require('./Guide/index.js');

// 基础

const algorithm = require('./Base/algorithm/index.js');
const clean = require('./Base/clean/index.js');




/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // 指南 Guide
  '/guide/': guide,

  // 基础 Base

  '/Base/clean/': clean,
  '/Base/algorithm/': algorithm,


  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};
