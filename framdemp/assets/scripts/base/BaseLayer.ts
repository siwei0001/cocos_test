

const { ccclass, property } = cc._decorator;

@ccclass()
export default class BaseLayer extends cc.Component {
    [y: string]: any;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // Your initialization goes here.
    }

    // update(deltaTime) {
    //     // Your update function goes here.
    // }

    Init(_customeData = null) {
        // console.log("BaseLayer  Init _customeData:", _customeData)
    }

    Free(_customeData = null) {
        // console.log("BaseLayer  Free _customeData:", _customeData)
    }

    /**
     * 按钮点击事件
     * @param {cc.Touch} touch 
     */
    OnClick(touch) {
        //实现方法 示例

    }

}
