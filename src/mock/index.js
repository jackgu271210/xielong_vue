const Mock = require('mockjs') //引入mock对象
const Random = Mock.Random //获取random对象，随机生成各种数据
const domain = 'http://192.168.2.36:8080' //定义默认域名
const code = 200 //返回的状态码

// 随机生成文章数据
const data = req => {
    let posts = [] //用于存放数据的数组
    for (let i = 0; i < 10; i++) { //随机生成10条数据
        let post = {
            title: Random.csentence(10, 25), //随机生成长度为10-25的标题
            name: Random.cname(), //随机生成名字
            date: Random.date() + ' ' + Random.time() //随机生成年月日 + 时间
        }
        posts.push(post)
    }
    // 返回状态码和文章数据posts
    return {
        code,
        posts
    }
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/api`, get, data)