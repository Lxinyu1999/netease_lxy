<template>
    <div class="topNav">
        <div class="topLeft"> 
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>

        <div class="topContent">
            <span>我的</span> 
            <span class="active">发现</span> 
            <span>云村</span> 
            <span>视频</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>

</template>
<!-- 当 <style> 标签带有 scoped attribute 的时候，它的 CSS 只会影响当前组件的元素 -->
<style lang="less" scoped>
    .topNav{
        width: 100%; // topNav都会尽可能地填满该宽度
        height: .5rem;
        padding: .04rem; // 设置了2像素的内边距
        display: flex;
        justify-content: space-between; // 子元素会均匀地分布在.topNav容器
        align-items: center;
        .topContent{
            width:65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            font-size: .36rem;
            .active{
                font-weight: 900; // 加粗
            }
        }
    }
</style>