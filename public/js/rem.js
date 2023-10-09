function remSize(){
    // 获取设备宽度，用于后续设置rem。这里用or来获取两种方法中成功的那个（失败的返回会null,undefined等）
    // 前面一大坨返回文档的根元素的视口宽度（不包括滚动条）。window.innerWidth是整个浏览器窗口的宽度，包括滚动条。
    var deviceWindth = document.documentElement.clientWidth || window.innerWidth
    // 我们假设是iPhone，那么设计稿为750（如果你是其他的设备超过了，也要按照这个计算，但是一般不超过）
    if(deviceWindth>=750){
        deviceWindth = 750 // 防止过大
    }
    if(deviceWindth<=320){
        deviceWindth = 320 // 防止过小
    }

    // 设置字体大小, 1rem = 100px。
    document.documentElement.style.fontSize = (deviceWindth/7.5)+'px'
    // 设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + "rem"
}

remSize()
// 在不同屏幕尺寸或设备上网页变化，可以适配你的设备大小
window.onresize=function(){ // 当浏览器窗口大小发生变化时，这个函数会被调用。
    remSize()
}