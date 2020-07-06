import BaseLayer from "../base/BaseLayer";
import SaveManage from "../manage/SaveManage";
import Utils from "../utils/Utils";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import AdvServer from "../platform/AdvServer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TipsMenu extends BaseLayer {

    @property(cc.Label)
    Label_Tips = null;
    @property(cc.Node)
    Img_Bg = null;

    _m_Update: boolean = false;
    _m_CloseTime: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchmMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchCancel, this);
    }

    /**
     * 
     * @param _customeData 
     */
    Init(_customeData) {
        Utils.CCLog("tipsMenu Init _customeData", _customeData);
        this.Label_Tips.string = _customeData;
        let charNum = this.Label_Tips.node.width / this.Label_Tips.fontSize;
        this.Img_Bg.height = Math.ceil(String(_customeData).length / charNum ) * 30 + 50;
        
        // Utils.CCLog("_customeData lenght", String(_customeData).length , "this.Label_Tips", this.Label_Tips);
        // Utils.CCLog("_customeData charNum", charNum , "this.Img_Bg.height", this.Img_Bg.height);

        this._m_CloseTime = 2;
        this._m_Update = true;
    }

    update(dt) {
        if (this._m_Update) {
            this._m_CloseTime -= dt;
            if (this._m_CloseTime < 0) {
                this.CloseMenu();
            }
        }
    }

    /**
     * 关闭界面
     */
    CloseMenu() {
        this._m_Update = false;
        MenuManage.getInstance().RmoveMenu(BaseMenu.TipsMenu);
    }

    /**
    * 触摸开始
    * @param {cc.Touch} touch 
    */
    TouchBegin(touch) {
        // Utils.CCLog("TouchBegin touch:", touch);
    }

    /**
     * 触摸移动
     * @param {cc.Touch} touch 
     */
    TouchmMoved(touch) {
        // Utils.CCLog("TouchmMoved touch:", touch.getDelta());
    }

    /**
     * 触摸抬起
     * @param {cc.Touch} touch 
     */
    TouchEnd(touch: cc.Touch) {
        // Utils.CCLog("TouchEnd touch:", touch);
        if (this._m_Update) {
            this.CloseMenu();
        }
    }

    /**
     * 触摸取消
     * @param {cc.Touch} touch 
     */
    TouchCancel(touch) {
        // Utils.CCLog("TouchEnd touch:", touch);
    }

}