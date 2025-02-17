import { defineConfig } from 'vitepress'
import { sidebar } from './configs'
import { withMermaid } from "vitepress-plugin-mermaid";

import * as dayjs from 'dayjs'

export default withMermaid({
  lang: 'zh-CN',
  title: 'Note Cove',
  description: "Note Cove",
  // fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

  base: '/', //网站部署到根目录

  mermaid: {
    theme: 'base',
    themeVariables: {
      darkMode: 'true',
      background: '#f4f4f4',
      primaryColor: '#87CEEB',
      primaryTextColor: '#FAFAFA',
      primaryBorderColor : '#208DE8',
      lineColor: '#3ea7e5',
      secondaryColor: '#006100',
      secondaryTextColor: '#fff',
      tertiaryColor: '#fff'
    }

    // 配置参考： https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults
  },
  // 可选地使用MermaidPluginConfig为插件本身设置额外的配置
  mermaidPlugin: {
    class: "mermaid my-class" // 为父容器设置额外的CSS类
  },


  lastUpdated: true,


  //主题配置
  themeConfig: {

    logo: '/logo.png',

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🥝 目录', link: '/guide/' },

      {
        //下拉菜单
        text: '其他站点',
        items: [
          { text: '导航站', link: 'https://navs.kwfruit.cn/' },
        ],
      },
    ],


    //侧边栏
    sidebar,


    //markdown配置
    markdown: {
      //行号显示
      lineNumbers: false,
      image: {
        // 开启图片懒加载
        lazyLoading: true
      },

      // 组件插入h1标题下
      config: (md) => {
        md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
          return htmlResult;
        }
      }

    },

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    // socialLinks: [
    //   // { icon: 'github', link: 'https://github.com/Yiov/yiov.top' },
    // ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    // footer: {
    //   message: 'Power by VitePress && Vidstack',
    //   copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/Yiov" target="_blank">Yiov</a>`,
    // },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲
    outline: { 
      level: [2,3], // 显示2-3级标题
      label: '当前页大纲' // 文字显示
    },


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
