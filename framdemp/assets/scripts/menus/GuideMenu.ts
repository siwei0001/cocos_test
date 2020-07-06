// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import SaveManage from "../manage/SaveManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GuideMenu extends BaseLayer {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
    }

    // update (dt) {}

    /**
     * 按钮点击事件
     * @param {cc.Touch} touch 
     */
    OnClick(touch) {
        AudioManage.getInstance().PlaySound(ResMusics.Sound_Click);
        //实现方法 示例
        if (touch.target.name == "Btn_Closed") {
            SaveManage.getInstance().SetGuide(true);
            MenuManage.getInstance().RmoveMenu(BaseMenu.GuideMenu);
        }

    }

}

