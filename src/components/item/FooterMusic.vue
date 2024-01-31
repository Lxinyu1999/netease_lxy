<template>
  <div class="FooterMusic">
    <!-- 点击歌曲进入歌曲详情页，修改歌曲显示属性 -->
    <div class="footerLeft" @click="updateDetailShow">
      <!-- 从专辑中获取的专辑图片 -->
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div class="musicName">
        <!-- 当前播放列表中播放的歌曲名 -->
        <p style="font-weight: bold">{{ playList[playListIndex].name }}</p>
        <span style="font-size: 0.2rem; color: gray">横滑切换上下首哦</span>
      </div>
    </div>

    <div class="footerRight">
      <svg
        class="icon liebiao"
        aria-hidden="true"
        @click="play"
        v-if="isbtnShow"
      >
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <!-- html5新增的audio标签，可以根据src播放音乐 ，设置ref属性使得script中能获取DOM元素 -->
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <!-- 显示歌曲详情页，改进为从底向上弹出 -->
    <van-popup
      v-model:show="detailShow"
      position="bottom"
      :style="{ height: '100%', width: '100%' }"
    >
      <!-- 从父组件中传值，把当前播放器播放的歌曲传值给子组件用于展示 -->
      <MusicDetail
        :musicList="playList[playListIndex]"
        :play="play"
        :isbtnShow="isbtnShow"
        :addDuration="addDuration"
      />
    </van-popup>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex"; // 导入辅助函数
import MusicDetail from "@/components/item/MusicDetail.vue";
export default {
  data() {
    return {
      interVal: 0,
    };
  },
  /* 辅助函数可以让我们直接使用属性名，而不需要this.$store.state.playList这样麻烦了 */
  computed: {
    // 这里使用扩展运算符，首先褪去大括号，然后computed又使用大括号，完成了对属性的合并
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"]),
  },
  mounted() {
    console.log(this.$refs);
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.updateTime();
  },
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.addDuration();
  },
  methods: {
    play() {
      /* 使用$refs可以使得script中的代码也可以操作dom元素 */
      // 判断音乐是否播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
        this.updateTime(); //播放就调用函数进行传值
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
        clearInterval(this.interVal); //暂停清除定时器
      }
    },
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration);
    },
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
    // 将方法导入，不需要$store.mutations.函数名了
    ...mapMutations([
      "updateIsbtnShow",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration",
    ]),
  },
  watch: {
    playListIndex: function () {
      //监听如果下标发生了改变，就自动播放音乐
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        //如果是暂停状态，改变图标
        this.updateIsbtnShow(false);
      }
    },
    playList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsbtnShow(false);
      }
    },
  },
  components: {
    MusicDetail,
  },
};
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.2rem;
  position: fixed; // 固定定位
  bottom: 0; // 固定在底部
  // border-top: 1px solid #999; // 播放器上面的分割线
  // background-color: #fff;

  display: flex;
  padding: 0.2rem;
  justify-content: space-between;

  /* 添加阴影 */
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  /* 添加边框 */
  border-top: 1px solid #ddd; /* 轻微的上边框，可以根据需要调整颜色和宽度 */
  /* 背景色稍微调暗，以增加凸显效果 */
  background-color: #ffffff; /* 可以根据需要调整颜色 */

  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .musicName {
      margin-left: 0.2rem;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>
