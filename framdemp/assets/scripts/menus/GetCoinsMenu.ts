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
import AdvServer from "../platform/AdvServer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GetCoinsMenu extends BaseLayer {

    // LIFE-CYCLE CALLBACKS:

    _m_CallFun: any = null;
    // onLoad () {}

    Init(_customeData) {
        this._m_CallFun = _customeData;

    }
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
        if (touch.target.name == "Btn_FreeGet") {
            // SaveManage.getInstance().AddCoins();
            AdvServer.getInstance().ShowWeChatRewardedVideoAd(() => {
                if (this._m_CallFun) {
                    this._m_CallFun();
                }
                MenuManage.getInstance().RmoveMenu(BaseMenu.GetCoinsMenu);
            }, () => {
                MenuManage.getInstance().RmoveMenu(BaseMenu.TipsMenu, "视频未看完");
            })

        }
        else if (touch.target.name == "Btn_Closed") {
            MenuManage.getInstance().RmoveMenu(BaseMenu.GetCoinsMenu);
        }
    }

}
