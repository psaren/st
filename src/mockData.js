const Mock = require('mockjs')
const data = Mock.mock({
    'list|1000': [{
        'id|+1': 1,
        email: '@email',
        name: '@name',
        city: '@city',
        label: '@sentence'
    }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
export default data