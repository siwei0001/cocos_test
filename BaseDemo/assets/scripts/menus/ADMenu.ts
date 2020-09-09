// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import BaseAdv from "../platform/BaseAdv";
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
            BaseAdv.getInstance().ShowBanner();
        }
        else if (event.target.name == "Btn_MoveBanner") {
            BaseAdv.getInstance().SetBannerStye({ left: 0, top: 300, width: 300, height: 100 });
        }
        else if (event.target.name == "Btn_HideBanner") {
            BaseAdv.getInstance().HideBanner();
        }
        else if (event.target.name == "Btn_ShowInterstitialAd") {
            BaseAdv.getInstance().ShowInterstitialAd();
        }
        else if (event.target.name == "Btn_ShowRewardedVideoAd") {
            BaseAdv.getInstance().ShowRewardedVideoAd(() => {
                //视频观看完了
                this.Label_Video.string = "视频看完了，发放奖励";
            }, () => {
                //视频未看完
                this.Label_Video.string = "视频未看完";
            });
        }
        else if (event.target.name == "Btn_ShowGrid") {
            BaseAdv.getInstance().ShowGridAd();
        }
        else if (event.target.name == "Btn_MoveGrid") {
            BaseAdv.getInstance().SetGridAdStye({ left: 0, top: 300, width: 300, height: 100, gridCount: 5 });
        }
        else if (event.target.name == "Btn_HideGrid") {
            BaseAdv.getInstance().HideGridAd();
        }
        else if (event.target.name == "Btn_ShowCustomer") {
            BaseAdv.getInstance().ShowCustomAd();
        }
        else if (event.target.name == "Btn_HideCustomer") {
            BaseAdv.getInstance().HideCustomAd();
        }
    }
}
