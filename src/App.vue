<template>
  <router-view/>
  <FooterMusic v-show="$store.state.isFooterMusic"/>
</template>

<script>
import FooterMusic from "@/components/item/FooterMusic.vue"
export default {
  components:{
    FooterMusic
  }
}
</script>



<style lang="less">
// *表示全局样式, 即作用对象是页面上所有元素
*{
    margin:0; // 将所有元素的外边距（margin）设置为0。
    padding:0; // 将所有元素的内边距（padding）设置为0。
    box-sizing: boder-box; // 确保元素的宽度和高度包括内容、内边距和边框，但不包括外边距。这对于布局尤为有用，因为它使得设定一个元素的宽度和高度变得更加直观和一致。

}
// 作用范围是所有class带icon的(也就是我们的图标)
.icon{
  width: .5rem; //设置元素宽度为0.5rem。这里使用了rem单位，它是相对于根元素（通常是<html>元素）的字体大小的单位
  height: .5rem;
}

</style>
