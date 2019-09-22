const navConf = require('../config/navConf.js');
const sidebarConf = require('../config/sidebarConf/index.js');

module.exports = {
    title: "Welcome to xhMiao's test documents page",
    themeConfig:{
        nav: navConf,
        description:'test vuepress documents',
        sidebar: sidebarConf,
        lastupdated: '上次更新',
    }
}
