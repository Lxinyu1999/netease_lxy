<!-- 头部导航组件，里面又分为三个小组件，左右是图标，中间是字体 -->
<template>
  <div class="topNav">
    <!-- 左子组件，从阿里云导入素材 -->
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <!-- 中间子组件，是四个单词 -->
    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <!-- 右子组件，也是一个icon从阿里云导入 -->
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<!-- 当 <style> 标签带有 scoped attribute 的时候，它的 CSS 只会影响当前组件的元素 -->
<style lang="less" scoped>
// 上方子组件的整体样式，注意，盒子模型不会被继承！！
.topNav {
  padding: 0.1rem 0; // 设置了2像素的内边距
  display: flex;
  justify-content: space-around; // 子元素会均匀地分布在.topNav容器
  align-items: center;
  //   中间子组件的样式
  .topContent {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.38rem;
    margin-bottom: 0.15rem;
    // 其中因为我们是在“发现”界面，所以单独给发现进行加粗
    .active {
      font-weight: 900; // 加粗
      margin-top: -0.005rem; // 向上移动0.03rem，注意这个子元素的盒模型和父元素无关
    }
  }
}
</style>
