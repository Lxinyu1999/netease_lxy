<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单＞</div>
      <div class="more">查看更多</div>
    </div>

    <!-- 还是轮播图，这回是自定义滑块，直接从vant取过来的 -->
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="130"
        class="my-swiper"
        :show-indicators="false"
      >
        <!-- item表示每张歌单的数据对象{name:xxx, id:xxx,pic:xxx} -->
        <van-swipe-item v-for="item in state.musicList" :key="item.id">
          <!-- router-link的slots里面插入图片，作为路由跳转的超链接。通过query方法传参 -->
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <!-- 表示歌单图片 -->
            <img :src="item.picUrl" alt="" />
            <!-- 表示播放键的图标，附在每张图片的上面 -->
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              <!-- 表示播放量多少 -->
              {{ changeCount(item.playCount) }}
            </span>
            <!-- 表示歌单的名字 -->
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getMusicList } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  // Vue3
  setup() {
    const state = reactive({
      musicList: [],
    });

    // 将播放量变成 xxx亿 / xxx万
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }

    // 请求“发现好歌单”数据并赋值给state.musicList
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res);
      state.musicList = res.data.result; // state.musicList表示所有歌单数据的列表（每张歌单是一个对象{}）。
    });
    return { state, changeCount };
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  // background-color: #fff;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
      font-family: "Microsoft Yahei";
      color: rgb(61, 69, 87);
    }
    .more {
      border: 1px solid #ccc;
      color: rgb(61, 69, 87);
      font-family: "微软雅黑";
      font-weight: bolder;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        font-size: 0.25rem;
        font-weight: bold;
        .icon {
          width: 0.25rem;
          height: 0.25rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
        font-size: 0.25rem;
        font-family: "微软雅黑";
      }
    }
  }
}
</style>
