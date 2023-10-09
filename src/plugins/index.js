import {Swipe, SwipeItem, Button} from 'vant';

// 放入数组中
let plugins=[Swipe,SwipeItem,Button]

export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}