<template>
  <div>
    <TopNav/>
    <SwiperTop/>
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src @表示从src目录开始引入
import TopNav from '@/components/home/TopNav.vue';
import SwiperTop from '@/components/home/SwiperTop.vue';
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue';
export default {
  name: 'HomeView',
  components: {
    TopNav,SwiperTop
  },
};
</script>
