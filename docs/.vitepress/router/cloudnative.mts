export const cloudnative = [
    {
      text: 'Docker',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '基础篇', link: '0010.Docker-基础篇.md' },
        { text: 'CI CD', link: '0020.Docker-CICD.md' },
        { text: '镜像原理', link: '0030.Docker镜像原理.md' },
        { text: '私有仓库', link: '0040.Docker私有仓库.md' },
        { text: '服务编排', link: '0050.Docker服务编排.md' },
      ]
    },
    {
      text: 'Kubernetes',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '实战入门', link: '/course/3.CloudNative/0020.Kubernetes/0001.Kubernetes 实战入门.md' },
        { text: '资源管理', link: '/course/3.CloudNative/0020.Kubernetes/0002.Kubernetes 资源管理.md' },
        { text: '概述', link: '/course/3.CloudNative/0020.Kubernetes/0003.kubernetes 概述' },
      ]
    },
    {
      text: 'DevOps GitLab+Jenkins版',
      collapsible: true,
      collapsed: true,
      items: [
        { text: '搭建Gitlab服务器', link: '0001.搭建Gitlab服务器.md' },
        { text: '安装GitLab-Runner', link: '0002.安装GitLab-Runner.md' },
        { text: '安装Jenkins', link: '0003.安装Jenkins.md' },
        { text: '指定目标服务器', link: '0004.Jenkins指定目标服务器.md' },
        { text: '免密码登录GitLab服务器', link: '0005.Jenkins免密码登录GitLab服务器.md' },
        { text: '配置Jdk 和 Maven', link: '0006.Jenkins配置Jdk和Maven.md' },
        { text: 'Jenkins 手动拉取GitLab 项目', link: '0007.Jenkins手动拉取GitLab项目' },
        { text: 'Jenkins 创建Maven任务测试', link: '0008.Jenkins创建Maven任务测试' },
        { text: '实现持续交付和持续部署', link: '0009.实现持续交付和持续部署' },
      ]
    },

  ]


  export const Docker = [
    {
      text: 'Docker',
      base: '/course/3.Cloudnative/1.Docker/',
      items: [
        { text: '概述', link: '1.概述.md' },
        { text: '安装', link: '2.安装.md' },
        { text: '常用命令', link: '3.常用命令.md' },
        { text: '镜像', link: '4.镜像.md' },
        { text: '容器数据卷', link: '5.容器数据卷.md' },      
        { text: 'DockerFile', link: '6.DockerFile.md' }, 
        { text: '发布镜像', link: '7.发布镜像.md' }, 
        { text: '网络', link: '8.网络.md' }, 
        { text: 'IDEA整合Docker', link: '9.IDEA整合Docker.md' }, 

        { text: 'Other', items:[
          { text: '基础篇', link: '0010.Docker-基础篇.md' },
          { text: 'CI CD', link: '0020.Docker-CICD.md' },
          { text: '镜像原理', link: '0030.Docker镜像原理.md' },
          { text: '私有仓库', link: '0040.Docker私有仓库.md' },
          { text: '服务编排', link: '0050.Docker服务编排.md' },
        ] },

      ]
    },
  ]

  export const DevopsGitlabJenkins = [
    {
      text: 'DevOps GitLab+Jenkins版',
      base: '/course/3.Cloudnative/3.DevOpsGitLab+Jenkins版/',
      items: [
        { text: '搭建Gitlab服务器', link: '1.搭建Gitlab服务器.md' },
        { text: '安装GitLab-Runner', link: '2.安装GitLab-Runner.md' },
        { text: '安装Jenkins', link: '3.安装Jenkins.md' },
        { text: '指定目标服务器', link: '4.Jenkins指定目标服务器.md' },
        { text: '免密码登录GitLab服务器', link: '5.Jenkins免密码登录GitLab服务器.md' },
        { text: '配置Jdk 和 Maven', link: '6.Jenkins配置Jdk和Maven.md' },
        { text: 'Jenkins 手动拉取GitLab 项目', link: '7.Jenkins手动拉取GitLab项目' },
        { text: 'Jenkins 创建Maven任务测试', link: '8.Jenkins创建Maven任务测试' },
        { text: '实现持续交付和持续部署', link: '9.实现持续交付和持续部署' },
      ]
    },
  ]
