<template>
    <div class="musicList">
      <div class="musicTop">
        <div class="title">見つける</div>
        <div class="more">もっと見る</div>
      </div>
      <div class="musicContent">
        <van-swipe
          :loop="false"
          :width="130"
          class="my-swpie"
          :show-indicators="false"
        >
          <van-swipe-item v-for="item in state.musicList" :key="item">
            <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
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
      function changeCount(num) {
        if (num >= 100000000) {
          return (num / 100000000).toFixed(1) + "亿";
        } else if (num >= 10000) {
          return (num / 10000).toFixed(1) + "万";
        }
      }
      onMounted(async () => {
        let res = await getMusicList();
        console.log(res);
        state.musicList = res.data.result;
      });
      return { state,changeCount };
    },
  };
  </script>

  <style lang="less" scoped>
  .musicList {
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.2rem;
      .title {
        font-size: 0.4rem;
        font-weight: 900;
      }
      .more {
        border: 1px solid #ccc;
        margin-right: 0.3rem; // 我们新加的，不然被遮住了。
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
          .icon {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
        .name {
          //   position: absolute;
          bottom: 0px;
        }
      }
    }
  }
  </style>