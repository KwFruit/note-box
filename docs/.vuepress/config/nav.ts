// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "Java",
    link: "/java/",
    items: [
      {
        text: "Java EE",
        link: "/java/",
      },
      {
        text: "设计模式",
        link: "/pages/4fdf68/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "Linux",
    link: "/linux/",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "云原生",
    link: '/cloud-native/', 
    items: [
      {
        text: "Docker",
        link: "/pages/1438b6/",
      },
      {
        text: "Kubernetes",
        link: "/pages/01ad38/",
      },
      {
        text: "DevOps GitLab+Jenkins版",
        link: "/pages/f3753d/",
      },
    ],
  },
  {
    text: "中间件",
    link: "/middleware/",
    items: [
      {
        text: "Elasticsearch",
        link: "/pages/ba1f82/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "框架",
    link: "/framework/",
    items: [
      {
        text: "Spring",
        link: "/start/",
      },
      {
        text: "SpringBoot",
        link: "/deploy/",
      },
      {
        text: "SpringCloud",
        link: "/more/",
      },
      {
        text: "MongoDB",
        link: "/more/",
      },
    ],
  },
  {
    text: "数据库",
    link: "/database/",
    items: [
      {
        text: "Oracle",
        link: "/pages/bf1d71/",
      },
      {
        text: "Mysql",
        link: "/pages/8d87bf/",
      },
      {
        text: "Redis",
        link: "/pages/5b6cca/",
      },
      {
        text: "MongoDB",
        link: "/pages/2c94a8/",
      },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  {
    text: '导航',
    link: '/nav/'
  }
];
