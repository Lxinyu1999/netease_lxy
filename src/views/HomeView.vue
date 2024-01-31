<!-- 
     Views文件用于存储vue路由组件（有的版本使用pages）
     HomeView表示网易云的主页的布局
-->
<template>
  <div class="HomeView">
    <TopNav />
    <SwiperTop />
    <IconList />

    <!-- 新增的分割线 -->
    <div class="divider"></div>

    <MusicList />
  </div>
</template>

<script>
// @ is an alias to /src @表示从src目录开始引入
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
export default {
  name: "HomeView",
  components: {
    TopNav,
    SwiperTop,
    IconList,
    MusicList,
  },
};
</script>
<style lang="less">
.HomeView {
  min-height: 100vh; /* 设置最小高度为视口高度。确保 HomeView 组件的高度能够覆盖整个屏幕，即使内容不足以填满整个屏幕 */
  background: linear-gradient(
    to bottom,
    rgba(237, 229, 252, 0.6),
    rgba(247, 248, 252, 0.8) 30%,
    rgba(248, 249, 253, 0.6) 30%
  );

  .divider {
    height: 0.3px; /* 或者你想要的厚度 */
    background-color: rgba(
      0,
      0,
      0,
      0.1
    ); /* 淡淡的黑色线，你可以根据需要调整颜色和透明度 */
    margin-bottom: 3px; /* 根据需要增加外边距 */
  }
}
</style>
