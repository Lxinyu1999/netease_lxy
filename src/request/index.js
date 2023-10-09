import axios  from 'axios';
// 基础路径
let service = axios.create({
    baseURL:"http://localhost:3000/", // 后续我们只需用写接口地址就行了
    timeout:3000 // 返回时间
})
export default service