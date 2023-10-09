<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-tuijian"></use>
            </svg>
            <span>おすすめ</span>
        </div>

        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-zhibo"></use>
            </svg>
            <span>ラジオ</span>
        </div>

        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>プレイリスト</span>
        </div>

        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>ランキング</span>
        </div>

    </div>

</template>

<style lang="less" scoped>
    .iconList{
        width:100%;
        height:2rem ;
        margin-top: 10px; // 离上面的轮播图远点
        display:flex;
        justify-content: space-around;
        align-items: center;
        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>