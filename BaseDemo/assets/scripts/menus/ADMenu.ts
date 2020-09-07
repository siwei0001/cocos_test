// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import AdvServer from "../platform/AdvServer";
import MenuManage, { BaseMenu } from "../manage/MenuManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ADMenu extends BaseLayer {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Label)
    Label_Video: cc.Label = null;

    // onLoad () {}

    start() {
        // this.node.on()

    }

    // update (dt) {}

    OnClick(event) {
        console.log("OnClick event", event);
        
        if (event.target.name == "Btn_Back") {
            MenuManage.getInstance().RmoveMenu(BaseMenu.ADMenu)
        }
        else if (event.target.name == "Btn_ShowBanner") {
            AdvServer.getInstance().ShowBanner();
        }
        else if (event.target.name == "Btn_MoveBanner") {
            AdvServer.getInstance().SetBannerStye({ left: 0, top: 300, width: 300, height: 100 });
        }
        else if (event.target.name == "Btn_HideBanner") {
            AdvServer.getInstance().HideBanner();
        }
        else if (event.target.name == "Btn_ShowInterstitialAd") {
            AdvServer.getInstance().ShowInterstitialAd();
        }
        else if (event.target.name == "Btn_ShowRewardedVideoAd") {
            AdvServer.getInstance().ShowRewardedVideoAd(() => {
                //视频观看完了
                this.Label_Video.string = "视频看完了，发放奖励";
            }, () => {
                //视频未看完
                this.Label_Video.string = "视频未看完";
            });
        }
        else if (event.target.name == "Btn_ShowGrid") {
            AdvServer.getInstance().ShowGridAd();
        }
        else if (event.target.name == "Btn_MoveGrid") {
            AdvServer.getInstance().SetGridAdStye({ left: 0, top: 300, width: 300, height: 100, gridCount: 5 });
        }
        else if (event.target.name == "Btn_HideGrid") {
            AdvServer.getInstance().HideGridAd();
        }
        else if (event.target.name == "Btn_ShowCustomer") {
            AdvServer.getInstance().ShowCustomAd();
        }
        else if (event.target.name == "Btn_HideCustomer") {
            AdvServer.getInstance().HideCustomAd();
        }
    }
}
