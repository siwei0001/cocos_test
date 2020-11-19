

/**
 * 事件句柄
 */
export class BaseEventHandler {
    private m_Hander = [];

    on() {

    }

    off() {

    }

    clear() {

    }
}

const { ccclass, property } = cc._decorator;

@ccclass()
export default class BaseLayer extends cc.Component {
    [y: string]: any;


    // LIFE-CYCLE CALLBACKS:
    private m_BaseEveneHander: BaseEventHandler = null;

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
     * 监听数据事件
     */
    onDataEvenet() {

    }

    /**
     * 监听数据事件
     */
    offDataEvenet() {

    }

    /**
     * 监听按钮事件
     */
    onButtonEvenet() {

    }

    /**
     * 移除按钮事件
     */
    offButtonEvenet() {

    }

    /**
     * 按钮点击事件
     * @param {cc.Touch} touch 
     */
    OnClick(touch: cc.EventTarget) {
        //实现方法 示例

    }

}
