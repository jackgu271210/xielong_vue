// 引入mockjs
const Mock = require('mockjs')
// 获取mock.Random对象
const Random = Mock.Random
// 使用mockjs模拟数据
Mock.mock('/api/news', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = []
    for (let i = 0; i < 10; i++) {
        let listObject = {
            id: Random.integer(10000, 100000), //生成一串随机的id
            imgUrl: Random.dataImage('352x216'),
            title: Random.csentence(10, 20), //返回一段随机的标题
            desc: Random.csentence(100, 500), //返回一段随机的描述
            time: Random.date(), //返回一个随机的时间
        }
        list.push(listObject)
    }
    return {
        data: list
    }
}) 

Mock.mock('/api/product', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = []
    for (let i = 0; i < 10; i++) {
        let listObject = {
            id: Random.integer(10000, 100000), //生成一串随机的id
            imgUrl: Random.dataImage('352x216'),
            title: Random.csentence(10, 20), //返回一段随机的标题
            desc: Random.csentence(100, 500), //返回一段随机的描述
            time: Random.date(), //返回一个随机的时间
        }
        list.push(listObject)
    }
    return {
        data: list
    }
}) 