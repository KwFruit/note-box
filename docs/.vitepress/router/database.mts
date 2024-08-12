


export const Mysql = [
  {
    text: 'MySQL',
    base: '/note/6.database/2.Mysql/',
    items: [
      { text: 'SQL优化', link: '311.SQL优化.md' },
      { text: '视图', link: '411.视图.md' },
      { text: '存储过程', items:[
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
]


export const Redis = [
    {
      text: 'Redis',
      base: '/note/6.database/3.Redis/',
      items: [
        { text: '安装步骤', link: '1.安装步骤.md' },
        { text: '基本数据结构', link: '2.基本数据结构.md' },
        { text: '发布和订阅', link: '3.Redis的发布和订阅.md' },
        { text: '新数据类型', link: '4.Redis新数据类型.md' },
        { text: 'Jedis', link: '5.Redis_Jedis_测试.md' },
        { text: '手机验证码', link: '6.Redis完成手机验证码功能.md' },
        { text: 'SpringBoot整合Redis', link: '7.SpringBoot整合Redis.md' },
        
        { text: '事物和锁机制', items:[
          { text: '基本操作', link: '8.Redis-事物和锁机制-基本操作.md' },
          { text: '事物冲突（乐观锁和悲观锁）', link: '9.Redis-事物和锁机制-事物冲突（乐观锁和悲观锁）.md' },
          { text: '演示乐观锁和事物特性', link: '10.Redis-事物和锁机制-演示乐观锁和事物特性.md' },
          { text: '秒杀案例', link: '11.Redis-事物和锁机制-秒杀案例-基本实现.md' },
          { text: '事超时和超卖问题解决', link: '12.Redis-事物和锁机制-超时和超卖问题解决.md' },
          { text: 'ab测试工具模拟并发', link: '13.Redis-事物和锁机制-秒杀案例-ab测试工具模拟并发.md' },
          { text: '解决库存遗留问题', link: '14.Redis-事物和锁机制-解决库存遗留问题.md' },
        ] },

        { text: '持久化操作', items:[
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

        { text: '应用问题解决', items:[
          { text: '缓存穿透', link: '24.应用问题解决-缓存穿透.md' },
          { text: '缓存击穿', link: '25.应用问题解决-缓存击穿.md' },
          { text: '缓存雪崩', link: '26.应用问题解决-缓存雪崩.md' },
        ] },

        { text: '分布式锁', link: '27.分布式锁.md' },
        { text: 'Redis6.0新功能', link: '28.Redis6.0新功能' },

      ]
    }
  ]




  export const MongoDB = [
    {
      text: 'MongoDB',
      base: '/note/6.database/4.MongoDB/',
      items: [
        { text: '概念篇', link: '0001.MongoDB 概念篇.md' },
        { text: '简单CRUD篇', link: '0002.MongoDB 简单CRUD篇.md' },
        { text: '简单部署篇', link: '0003.MongoDB 简单部署篇.md' },
      ]
    },
  ]