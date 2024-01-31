<!-- 这里是歌单详情页 -->
<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>
<script>
import { useRoute } from "vue-router"; // 从vue-router 获取路由参数和设置
import { onMounted, reactive } from "vue";
import { getMusicListInfo, getItemList } from "@/request/api/item.js";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue";
export default {
  setup() {
    const state = reactive({
      playlist: {}, //歌单的详情页的数据
      itemList: [], //歌单的歌曲
    });
    onMounted(async () => {
      // useRoute()返回$route，$route.query.数据的key可以获取传入的数据
      let id = useRoute().query.id;
      // console.log(id);

      /* 我们一共要发送两个ajax请求，分别获取歌单详情页给头部ItemMusicTop，以及歌曲的列表 */
      /* 发送ajax请求获取歌单详情页 */
      let res = await getMusicListInfo(id);
      // console.log(res);
      state.playlist = res.data.playlist;

      /* 获取歌单的所有歌曲 */
      let result = await getItemList({ id, limit: 10, offset: 0 });
      // console.log(result);
      state.itemList = result.data.songs;

      /* 防止页面刷新，数据丢失，将数据保存到sessionStorage中 */
      // 注意：保存时要以json形式
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>
