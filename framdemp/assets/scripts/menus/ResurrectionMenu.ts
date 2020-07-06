import BaseLayer from "../base/BaseLayer";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import SaveManage from "../manage/SaveManage";
import NodePoolManage, { PoolName } from "../manage/NodePoolManage";
import AdvServer from "../platform/AdvServer";
import Utils from "../utils/Utils";
import DataManage from "../manage/DataManage";
import StatisticsServer from "../platform/StatisticsServer";
import GameManage from "../manage/GameManage";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ResurrectionMenu extends BaseLayer {

    @property(cc.Toggle)
    Video_Toggle: cc.Toggle = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    Init() {
        AdvServer.getInstance().ShowMenuAdv(BaseMenu.ResurrectionMenu);
    }

    Free() {
        AdvServer.getInstance().RemoveMenuAdv(BaseMenu.ResurrectionMenu);
    }
    // update (dt) {}

    ColseMenu() {
        AudioManage.getInstance().StopMusic();
        AdvServer.getInstance().EndLevelLuckEgg(() => {
            MenuManage.getInstance().RmoveMenu(BaseMenu.ResurrectionMenu);
            MenuManage.getInstance().ShowMenu(BaseMenu.ResultMenu);
        }, () => {
            //奖励回调
        })
    }

    /**
    * 按钮点击事件
    * @param {cc.Touch} touch 
    */
    OnClick(touch) {
        AudioManage.getInstance().PlaySound(ResMusics.Sound_Click);
        //实现方法 示例
        if (touch.target.name == "Btn_Continue") {

            if (this.Video_Toggle.isChecked) {
                //视频复活
                AdvServer.getInstance().ShowWeChatRewardedVideoAd(() => {
                    StatisticsServer.getInstance().SendZjkjGameEvent("复活观看视频");
                    GameManage.getInstance().ContinueGame();
                    MenuManage.getInstance().RmoveMenu(BaseMenu.ResurrectionMenu);
                }, () => {
                    MenuManage.getInstance().ShowMenu(BaseMenu.TipsMenu, "视屏未看完");
                })
            }
            else {
                this.ColseMenu();
            }
        }
    }
}
