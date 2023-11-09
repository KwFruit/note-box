import { defineConfig } from 'vitepress'
// 路由表
import { javamts } from './router/Java.mjs'
import { CloudNative } from './router/CloudNative.mjs'
import { middlewaremts } from './router/Middleware.mjs'
import { databasemts } from './router/database.mjs'


export default defineConfig({
  title: "Note Box",
  description: "Note Box",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Java🌞',
        items: [
          { text: '设计模式', link: '/010.Java/设计模式/0001.UML图.md' },
        ]
      },
      {
        text: '数据库🐣',
        items: [
          { text: 'Redis', link: '/060.database/0030.Redis/0001.安装步骤.md' },
          { text: 'MongoDB', link: '/060.database/0040.MongoDB/0001.MongoDB 概念篇.md'  },

        ]
      },
      {
        text: 'Linux🍈',
        items: [
          { text: '设计模式', link: '/010.Java/设计模式/0001.UML图.md' },
        ]
      },
      {
        text: '云原生🍏',
        items: [
          { text: 'Docker', link: '/030.CloudNative/0010.Docker/0010.Docker-基础篇.md' },
          { text: 'Kubernetes', link: '/030.CloudNative/0020.Kubernetes/0001.Kubernetes 实战入门.md' },
          { text: 'DevOps GitLab+Jenkins版', link: '/030.CloudNative/0030.DevOpsGitLab+Jenkins版/0001.搭建Gitlab服务器.md' },

        ]
      },
      {
        text: '中间件🍉',
        items: [
          { text: 'Elasticsearch', link: '/040.middleware/0010.Elasticsearch/0001.Elasticsearch安装.md' },

        ]
      },
    ],
    sidebar: {
      '/010.Java/设计模式/': javamts,
      '/060.database/': databasemts,
      '/030.CloudNative/': CloudNative,
      '/040.middleware/': middlewaremts,
    },
     // 在 sidebar 后添加
     outlineTitle: '本页目录',
     darkModeSwitchLabel: '切换主题',
     sidebarMenuLabel: '菜单',
     returnToTopLabel: '回到顶部',
     docFooter: {
       prev: '上一页',
       next: '下一页'
     },
     footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present kwfruit'
    },
    search: {
      provider: 'local'
    },
  }
})