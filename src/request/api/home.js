/* 获得定义好的axios对象 */
import service from "..";

/* 根据不同的子路径，发送不同的axios对象，返回一个promise对象。它们的baseURL是相同的 */
// 获取首页的轮播图的数据 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=banner
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  });
}

// 获取发现好歌单 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a8%e8%8d%90%e6%ad%8c%e5%8d%95
export function getMusicList() {
  return service({
    method: "GET",
    url: "/personalized?limit=10", // 推荐10首
  });
}

/**新增 */
//搜索
export function getSearchMusic(data) {
  return service({
    method: "GET",
    url: `/search?keywords=${data}`,
  });
}
//登录
export function getPhoneLogin(data) {
  return service({
    method: "GET",
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`,
  });
}
//获取用户详情
export function getLoginUser(data) {
  return service({
    method: "GET",
    url: `/user/detail?uid=${data}`,
  });
}
