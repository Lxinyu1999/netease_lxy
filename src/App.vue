<template>
  <router-view />
  <!-- 播放器是全局组件 -->
  <!-- v-show 和 v-if 都可以用来根据条件显示元素，但它们有一些重要的区别：v-show 只是切换元素的 CSS display 属性。元素始终被渲染到 DOM 中，只是视觉上显示或隐藏。
  如果您需要频繁切换元素的显示状态，使用 v-show 更合适。 -->
  <FooterMusic v-show="$store.state.isFooterMusic" />
</template>

<script>
import FooterMusic from "@/components/item/FooterMusic.vue";
export default {
  components: {
    FooterMusic,
  },
};
</script>

<style lang="less">
// *表示全局样式, 即作用对象是页面上所有元素
* {
  margin: 0; // 将所有元素的外边距（margin）设置为0。
  padding: 0; // 将所有元素的内边距（padding）设置为0。
  box-sizing: border-box; // 确保元素的宽度和高度包括内容、内边距和边框，但不包括外边距。这对于布局尤为有用，因为它使得设定一个元素的宽度和高度变得更加直观和一致。
}
// 作用范围是所有class='icon'的(也就是我们的图标)
.icon {
  width: 0.5rem; //设置元素宽度为0.5rem。这里使用了rem单位，它是相对于根元素（通常是<html>元素）的字体大小的单位
  height: 0.5rem;
}
// 将所有超链接（router-link）里的字体设置为黑色（默认为蓝色）
a {
  color: rgb(61, 69, 87);
}
</style>
