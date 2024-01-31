import axios from "axios";
/* 创建了一个axios对象，并设置共同的baseURL，再导出该axios对象 */
let service = axios.create({
  baseURL: "http://localhost:3000/", // 后续我们只需用写接口地址就行了
  timeout: 3000, // 等待时间最多3s，超过就报错
});
export default service;
