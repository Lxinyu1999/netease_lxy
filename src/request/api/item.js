/* 获取歌单详情页 */
import service from "..";
//获取歌单详情页的数据（ItemMusicTop）
export function getMusicListInfo(id) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${id}`, // 模板字符串，用父页面传入的id去查找
  });
}
//获取歌单列表的所有歌曲（ItemMusicList）
export function getItemList(data) {
  return service({
    method: "GET",
    url: `/playlist/track/all?id=${data.id}&limit=20&offset=0`,
  });
}
// 新增：获取歌曲的歌词
export function getMusicLyric(data) {
  return service({
    method: "GET",
    url: `/lyric?id=${data}`,
  });
}
