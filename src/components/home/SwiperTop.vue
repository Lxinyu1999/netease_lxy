<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 使用的是vue3的setup模式, 通过axios获取数据
import axios from "axios";
import { getBanner } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    });
    onMounted(async () => {
    //   axios.get('http://localhost:3000/banner?type=2').then((res)=>{
    //     console.log(res);
    //     state.images=res.data.banners
    //     console.log(state.images);
    //   })
    let res = await getBanner();
    state.images=res.data.banners
    console.log(res);
    });
    return { state };
  },
};
</script>

<style lang="less">
#swiperTop { // 她给的代码有问题，修改了。
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      width: 100%; // 确保swipe-item填满其父容器
      // 移除或者考虑这个padding
      // padding: 0 0.2rem; 

      img {
        width: 100%;
        height: auto; // 使图片自然缩放并适应其容器
        border-radius: 0.2rem;
      }
    }

    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}

</style>