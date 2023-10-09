import service  from "..";
//获取歌单详情页的数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}` // 动态id
    })
}
//获取歌单的所有歌曲
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
//获取歌曲的歌词
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}