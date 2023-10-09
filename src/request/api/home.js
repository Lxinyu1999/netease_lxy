/* 封装axios数据 */
import service from "..";

// 获取首页的轮播图的数据 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=banner
export function getBanner(){
    return service({
        method:"GET", 
        url:"/banner?type=2", 
    })
}

// 获取发现好歌单 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a8%e8%8d%90%e6%ad%8c%e5%8d%95
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=10" // 推荐10首
    })
}