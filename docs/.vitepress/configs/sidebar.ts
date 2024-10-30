/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] =  [
    {
      //分组标题1
      text: '编程语言',
      items: [
        {
          text: '设计模式',
          collapsed: true,
          base: '/1.Java/3.设计模式/',
          items: [
            { text: 'UML图', link: '1.UML图.md' },
            { text: '概述', link: '2.设计模式概述.md' },
            { text: '软件设计原则',
              collapsed: true,
              items:[
                { text: '开闭原则', link: '3.软件设计原则-开闭原则.md' },
                { text: '里氏代换原则', link: '4.软件设计原则-里氏代换原则.md' },
                { text: '依赖倒转原则', link: '5.软件设计原则-依赖倒转原则.md' },
                { text: '接口隔离原则', link: '6.软件设计原则-接口隔离原则.md' },
                { text: '迪米特法则', link: '7.软件设计原则-迪米特法则.md' },
                { text: '合成复用原则', link: '8.软件设计原则-合成复用原则.md' },
              ]
            },
            { text: '创建型模式',
              collapsed: true,
              items:[
                { text: '单例模式', link: '9.创建者模式-单例模式.md' },
                { text: '单例模式扩展', link: '10.创建者模式-单例模式扩展.md' },
                { text: '工厂模式', link: '11.创建者模式-工厂模式.md' },
                { text: '原型模式', link: '12.创建者模式-原型模式.md' },
                { text: '建造者模式', link: '13.创建者模式-建造者模式.md' },
                { text: '创建者模式对比', link: '14.创建者模式对比.md' },
                { text: '代理模式', link: '15.设计模式-代理模式.md' },
                { text: '适配器模式', link: '16.设计模式-适配器模式.md' },
                { text: '装饰者模式', link: '17.设计模式-装饰者模式.md' },
              ]
            },
          ]
        },
        {
          text: 'Shell',
          collapsed: true,
          base: '/2.Linux/Shell/',
          items: [
            { text: '概述', link: '1._Shell概述.md' },
            { text: '脚本入门', link: '2.Shell 脚本入门.md' },
            { text: '系统预定义变量', link: '3.系统预定义变量.md' },
            { text: '自定义变量', link: '4.自定义变量.md' },
            { text: '特殊变量', link: '5.特殊变量.md' },
            { text: '运算符', link: '6.运算符.md' },
            { text: '条件判断', link: '7.条件判断.md' },
            { text: '流程控制（重点）', link: '8.流程控制（重点）.md' },

          ]
        }

      ],
    },

    {
      //分组标题2
      text: '数据库',
      items: [
        {
          text: 'MySQL',
          collapsed: true,
          base: '/6.database/2.Mysql/',
          items: [
            { text: '索引',
              collapsed: true,
              items:[
                { text: '概述', link: '211.索引-概述.md' },
                { text: '结构', link: '212.索引-结构.md' },
                { text: '分类', link: '213.索引-分类.md' },
                { text: '语法', link: '214.索引-语法.md' },
                { text: 'SQL性能分析', link: '215.索引-SQL性能分析.md' },

              ] },
            { text: 'SQL优化', link: '311.SQL优化.md' },
            { text: '视图', link: '411.视图.md' },
            { text: '存储过程',
              collapsed: true,
              items:[
                { text: '介绍', link: '421.存储过程-介绍.md' },
                { text: '变量', link: '422.存储过程-变量.md' },
                { text: '流程控制', link: '423.存储过程-流程控制.md' },
                { text: '游标', link: '424.存储过程-游标.md' },
                { text: '条件处理程序', link: '425.存储过程-条件处理程序.md' },
              ] },
            { text: '存储函数', link: '430.存储函数.md' },
            { text: '触发器', link: '441.触发器.md' },

          ]
        },
        {
          text: 'Redis',
          collapsed: true,
          base: '/6.database/3.Redis/',
          items: [
            { text: '安装步骤', link: '1.安装步骤.md' },
            { text: '基本数据结构', link: '2.基本数据结构.md' },
            { text: '发布和订阅', link: '3.Redis的发布和订阅.md' },
            { text: '新数据类型', link: '4.Redis新数据类型.md' },
            { text: 'Jedis', link: '5.Redis_Jedis_测试.md' },
            { text: '手机验证码', link: '6.Redis完成手机验证码功能.md' },
            { text: 'SpringBoot整合Redis', link: '7.SpringBoot整合Redis.md' },

            { text: '事物和锁机制',
              collapsed: true,
              items:[
                { text: '基本操作', link: '8.Redis-事物和锁机制-基本操作.md' },
                { text: '事物冲突（乐观锁和悲观锁）', link: '9.Redis-事物和锁机制-事物冲突（乐观锁和悲观锁）.md' },
                { text: '演示乐观锁和事物特性', link: '10.Redis-事物和锁机制-演示乐观锁和事物特性.md' },
                { text: '秒杀案例', link: '11.Redis-事物和锁机制-秒杀案例-基本实现.md' },
                { text: '事超时和超卖问题解决', link: '12.Redis-事物和锁机制-超时和超卖问题解决.md' },
                { text: 'ab测试工具模拟并发', link: '13.Redis-事物和锁机制-秒杀案例-ab测试工具模拟并发.md' },
                { text: '解决库存遗留问题', link: '14.Redis-事物和锁机制-解决库存遗留问题.md' },
              ] },

            { text: '持久化操作',
              collapsed: true,
              items:[
                { text: 'RDB', link: '15.Redis-持久化操作-RDB.md' },
                { text: 'AOF', link: '16.Redis持久化之AOF.md' },
              ] },


            { text: '主从复制-搭建一主多从', link: '17.Redis-主从复制-搭建一主多从.md' },
            { text: '复制原理一主二仆', link: '18.Redis-主从复制-复制原理一主二仆.md' },
            { text: '薪火相传和反客为主', link: '19.Redis-主从复制-薪火相传和反客为主.md' },
            { text: '哨兵模式(sentinel)', link: '20.Redis-哨兵模式(sentinel).md' },
            { text: '集群简介', link: '21.Redis-集群简介.md' },
            { text: '集群操作和故障恢复', link: '22.Redis-集群操作和故障恢复.md' },
            { text: '集群的Jedis开发', link: '23.集群的Jedis开发.md' },

            { text: '应用问题解决',
              collapsed: true,
              items:[
                { text: '缓存穿透', link: '24.应用问题解决-缓存穿透.md' },
                { text: '缓存击穿', link: '25.应用问题解决-缓存击穿.md' },
                { text: '缓存雪崩', link: '26.应用问题解决-缓存雪崩.md' },
              ] },

            { text: '分布式锁', link: '27.分布式锁.md' },
            { text: 'Redis6.0新功能', link: '28.Redis6.0新功能' },

          ]
        },
        {
          text: 'MongoDB',
          collapsed: true,
          base: '/6.database/4.MongoDB/',
          items: [
            { text: '概念篇', link: '0001.MongoDB 概念篇.md' },
            { text: '简单CRUD篇', link: '0002.MongoDB 简单CRUD篇.md' },
            { text: '简单部署篇', link: '0003.MongoDB 简单部署篇.md' },
          ]
        },
        {
          text: 'Elasticsearch',
          collapsed: true,
          base: '/4.middleware/1.Elasticsearch/',
          items: [
            { text: '安装', link: '0001.Elasticsearch安装.md' },
            { text: '初步检索', link: '0002.Elasticsearch初步检索.md' },
            { text: '进阶检索 (一)', link: '0003.Elasticsearch进阶检索(一).md' },
            { text: 'Elasticsearch进阶检索 (二)', link: '0004.Elasticsearch进阶检索(二).md' },
            { text: 'Elasticsearch分词', link: '0005.Elasticsearch分词.md' },
            { text: 'SpringBoot整合ES', link: '0006.SpringBoot整合ES.md' },
            { text: 'SpringBoot整合ES测试保存', link: '0007.ElasticsearchSpringBoot整合ES测试保存.md' },
            { text: 'SpringBoot整合复杂检索', link: '0008.ElasticsearchSpringBoot整合复杂检索.md' },

          ]
        }
      ],
    },

    {
      //分组标题3
      text: '云原生',
      items: [
        {
          text: 'Docker',
          collapsed: true,
          base: '/3.Cloudnative/1.Docker/',
          items: [
            { text: '基础篇', link: '1.基础篇.md' },
            { text: '常用命令', link: '2.常用命令.md' },
            { text: 'DockerFile', items:[
                { text: '镜像原理', link: '3.1.DockerFile-原理篇.md' },
              ] },
            { text: '镜像', link: '4.镜像.md' },
            { text: '容器数据卷', link: '5.容器数据卷.md' },
            { text: 'DockerFile', link: '6.DockerFile.md' },
            { text: '发布镜像', link: '7.发布镜像.md' },
            { text: '网络', link: '8.网络.md' },
            { text: 'IDEA整合Docker', link: '9.IDEA整合Docker.md' },

            { text: 'Other', items:[
                { text: '基础篇', link: '1.基础篇.md' },
                { text: 'CI CD', link: '0020.Docker-CICD.md' },
                { text: '镜像原理', link: '0030.Docker镜像原理.md' },
                { text: '私有仓库', link: '0040.Docker私有仓库.md' },
                { text: '服务编排', link: '0050.Docker服务编排.md' },
              ] },

          ]
        },
        {
          text: 'Kubernetes',
          collapsed: true,
          base: '/3.Cloudnative/2.Kubernetes/',
          items: [
            { text: '介绍', link: '1.介绍.md' },
            { text: '集群环境搭建', link: '2.集群环境搭建.md' },
            { text: '资源管理', link: '3.资源管理.md' },
            { text: '实战入门', link: '4.实战入门.md' },
            { text: 'Pod详解', link: '5.Pod详解.md' },
            { text: 'Pod控制器详解', link: '6.Pod控制器详解.md' },
            { text: 'Service详解', link: '7.Service详解.md' },
            { text: '数据存储', link: '8.数据存储.md' },
            { text: '安全认证', link: '9.安全认证.md' },
            { text: 'DashBoard', link: '10.DashBoard.md' },

          ]
        },
        {
          text: 'Jenkins',
          collapsed: true,
          base: '/3.Cloudnative/3.DevOpsGitLab+Jenkins版/',
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
      ],
    },

    {
      //分组标题4
      text: '中间件',
      items: [
        {
          text: 'Nginx',
          collapsed: true,
          base: '/4.middleware/2.Nginx/',
          items: [
            { text: '简介', link: '1.Nginx 简介.md' },
            { text: '安装', link: '2.Nginx 安装.md' },
            { text: '常用命令', link: '3.Nginx 常用命令.md' },
            { text: 'Conf 配置文件', link: '4.Nginx.conf 配置文件.md' },
            { text: '反向代理实例一', link: '5.Nginx 配置实例-反向代理实例一.md' },
            { text: '反向代理实例二', link: '6.Nginx 配置实例-反向代理实例二.md' },
            { text: '负载均衡', link: '7.Nginx 配置实例-负载均衡.md' },
            { text: '配置实例-负载均衡', link: '7.Nginx 配置实例-负载均衡.md' },

          ]
        },
        {
          text: 'Kafka',
          collapsed: true,
          base: '/4.middleware/3.Kafka/',
          items: [
            { text: '消息队列的流派', link: '1.消息队列流派.md' },
            { text: 'Kafka介绍', link: '2.Kafka介绍.md' },
            { text: 'Kafka基本使用', link: '3.Kafka基本使用.md' },
            { text: 'Kafka中的关键细节', link: '4.Kafka中的关键细节.md' },
            { text: '主题、分区的概念', link: '5.主题、分区的概念.md' },
            { text: 'Kafka集群及副本的概念', link: '6.Kafka集群及副本的概念.md' },
            { text: 'Kafka的Java客户端-生产者', link: '7.Kafka的Java客户端-生产者.md' },
            { text: '消费者', link: '8.消费者.md' },
            { text: 'Springboot中使用Kafka', link: '9.Springboot中使用Kafka.md' },
            { text: 'Controller、Rebalance和HW', link: '10.Kafka集群Controller、Rebalance和HW.md' },
            { text: 'Kafka线上问题优化', link: '11.Kafka线上问题优化.md' },
            { text: 'Kafka-eagle监控平台', link: '12.Kafka-eagle监控平台.md'},

          ]
        },
        {
          text: 'RabbitMq',
          collapsed: true,
          base: '/4.middleware/4.RabbitMq/',
          items: [
            { text: '消息队列的流派', link: '1.消息队列的流派.md' },
            { text: '安装RabbitMQ', link: '2.安装RabbitMQ.md' },
            { text: 'Hello world', link: '3.Hello world.md' },
            { text: 'Work Queues', link: '4.Work Queues.md' },
            { text: '发布确认', link: '5.发布确认.md' },
            { text: '交换机', link: '6.交换机.md' },
            { text: '死信队列', link: '7.死信队列.md' },
            { text: '延迟队列', link: '8.延迟队列.md' },
            { text: '发布确认高级', link: '9.发布确认高级.md' },
            { text: '幂等性', link: '10.幂等性.md' },
          ]

        },
      ],
    },

    {
      //分组标题8
      text: '其他站点',
      //collapsed: false,
      items: [

        { text: '导航站', link: 'https://navs.kwfruit.cn/' },
      ],
    },
  ]