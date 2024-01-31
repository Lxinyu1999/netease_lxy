function remSize() {
  /** 获取设备宽度，用于后续设置rem。这里用or来获取两种方法中成功的那个（失败的返回会null,undefined等） */
  // 前面一大坨返回文档的根元素的视口宽度（不包括滚动条）。window.innerWidth是整个浏览器窗口的宽度，包括滚动条。
  let deviceWindth = document.documentElement.clientWidth || window.innerWidth;
  // 我们假设是iPhone，那么设计宽为750（如果你是其他的设备超过了，也要按照这个计算，但是一般不超过）
  if (deviceWindth >= 750) {
    deviceWindth = 750; // 防止过大
  }
  if (deviceWindth <= 320) {
    deviceWindth = 320; // 防止过小
  }

  /**
   * document.documentElement代表HTML文档的根元素，通常是<html>元素。
   * style.fontSize用于设置元素的字体大小样式。
   */
  // 设置根元素<html>的字体大小,即rem
  // 1rem = 设备宽度（deviceWidth）除以7.5的结果
  document.documentElement.style.fontSize = deviceWindth / 7.5 + "px"; // 比如宽度为750px则1rem=100px;宽度为375则1rem=50px

  // 设置body元素内的字体大小，为0.3rem
  document.querySelector("body").style.fontSize = 0.3 + "rem";
}

/** 首次调用：页面初始加载时的调用 */
remSize();

window.onresize = function () {
  // 当浏览器窗口大小发生变化时，这个函数会被再次调用。可以适配你不同屏幕尺寸的设备
  remSize();
};
