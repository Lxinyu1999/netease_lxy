import { createStore } from "vuex";
// 新增
import { getMusicLyric } from "@/request/api/item.js";
import { getPhoneLogin } from "@/request/api/home.js";
// 存储的数据
const state = {
  /* 播放列表，它的样式是一个数组 [{al1,id1},{al2,id2},...]，其中每个专辑al又是一个歌曲对象 */
  //我们提供一个默认值（传入一首album）
  playList: [
    {
      // 专辑信息（里面的专辑照片我们要显示出来）
      al: {
        id: 89039055,
        name: "雨爱抖音版",
        pic: 109951164966568500,
        picUrl:
          "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495",
      },
      // 歌曲的id，用语播放歌曲
      id: 1446137141,
    },
  ],

  playListIndex: 0, // 播放列表的数组下标，表示当前播放的歌曲{al,id}
  isbtnShow: true, //暂停按钮的显示，默认是暂停状态
  detailShow: false, //歌曲详情页的显示,

  lyricList: {}, //歌词
  currentTime: 0, //当前时间
  duration: 0, //歌曲总时长
  isLogin: false, //判断是否登录
  isFooterMusic: true, //判断底部组件是否需要显示
  token: "",
  user: {}, //用户信息
};

const mutations = {
  // 切换按钮的显示效果，切换为播放/暂停状态
  updateIsbtnShow: function (state, value) {
    state.isbtnShow = value;
  },
  // 当你点击其他歌单时更新播放列表
  updatePlayList: function (state, value) {
    state.playList = value;
    console.log(state.playList);
  },
  // 向播放列表里面压入新的歌曲
  pushPlayList: function (state, value) {
    state.playList.push(value);
  },
  // 切换当前播放的歌曲
  updatePlayListIndex: function (state, value) {
    state.playListIndex = value;
  },
  // 修改歌曲详情页状态，如果false就缩回，如果true就弹出页面。
  updateDetailShow: function (state) {
    state.detailShow = !state.detailShow;
  },

  /**新增 */
  updateLyricList: function (state, value) {
    state.lyricList = value;
  },
  updateCurrentTime: function (state, value) {
    // console.log(state.currentTime);
    state.currentTime = value;
  },
  updateDuration: function (state, value) {
    state.duration = value;
  },

  // 用户相关的
  updateIsLogin: function (state, value) {
    state.isLogin = true;
  },
  updateToken: function (state, value) {
    state.token = value;
    localStorage.setItem("token", state.token);
  },
  updateUser: function (state, value) {
    state.user = value;
  },
};

/** 新增actions */
const actions = {
  getLyric: async function (context, value) {
    let res = await getMusicLyric(value);
    console.log(res);
    context.commit("updateLyricList", res.data.lrc);
  },
  getLogin: async function (context, value) {
    let res = await getPhoneLogin(value);
    // console.log(res);
    return res;
  },
};

export default createStore({
  state,
  mutations,
  getters: {},
  actions,
  modules: {},
});
