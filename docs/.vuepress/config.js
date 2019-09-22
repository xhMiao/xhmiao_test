const navConf = require('../config/navConf.js');
const sidebarConf = require('../config/sidebarConf/index.js');

module.exports = {
    title: "IAES docs test",
    description: 'test vuepress documents',
    themeConfig: {
        // nav: navConf,
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
          ]
        // lastupdated: '上次更新',
    }
}
