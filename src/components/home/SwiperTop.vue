<!-- 轮播图组件 -->
<template>
  <div id="swiperTop">
    <!-- 这里是从vant官网粘贴过来的 -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios";
import { getBanner } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";

// 下方也是从vant官网拿来的轮播图用法
// 使用的是vue3的setup模式, 通过axios获取数据
export default {
  setup() {
    const state = reactive({
      // 初始化随便选了几张图片，无所谓反正一会axios返回图片会替换掉。
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
      // ractive对象可以直接赋值
      state.images = res.data.banners;
      console.log(res);
    });
    return { state };
  },
};
</script>

<!-- 设置轮播图样式 -->
<style lang="less">
#swiperTop {
  // 她给的代码有问题，修改了。
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      padding: 0 0.4rem; /* 在每个轮播项内部左右各增加 1rem 的内间距 */
      width: 100%; /* 确保swipe-item填满其父容器 */
      box-sizing: border-box; /* 确保内间距包含在宽度内 */

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
