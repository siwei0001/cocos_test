import BaseLayer from "../base/BaseLayer";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import SaveManage from "../manage/SaveManage";
import DataManage from "../manage/DataManage";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import Utils from "../utils/Utils";
import { BaseConfig } from "../config/BaseConfig";
import GameManage from "../manage/GameManage";
import AdvServer from "../platform/AdvServer";
import StatisticsServer from "../platform/StatisticsServer";
import BasePlatform from "../platform/BasePlatform";
import RankManage from "../manage/RankManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultMenu extends BaseLayer {
    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    Img_Tile_Success: cc.Node = null;

    @property(cc.Node)
    Img_Tile_Faild: cc.Node = null;

    @property(cc.Node)
    Btn_NextLevel: cc.Node = null;

    @property(cc.Node)
    Btn_Restart: cc.Node = null;

    @property(cc.Node)
    Btn_Continue: cc.Node = null;

    _m_GameWin: boolean = false;
    // onLoad () {}
    start() {
    }

    Init(_customeData) {
        Utils.CCLog("ResultMenu  Init _customeData:", _customeData);

        if (_customeData) {
            //胜利
            this._m_GameWin = true;
            this.Img_Tile_Success.active = true;
            this.Btn_Continue.active = true;

            //增加金币
            SaveManage.getInstance().AddCoins(GameManage.getInstance().GetCoins());
            //增加钥匙
            SaveManage.getInstance().AddCoins(GameManage.getInstance().GetKey());
            // 刷新主界面金币数
            let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu);
            if (mainmenu) {
                mainmenu.UpdateCoins();
            }
        }
        else {
            //失败
            this._m_GameWin = false;
            this.Img_Tile_Faild.active = true;
            this.Btn_NextLevel.active = true;
            this.Btn_Restart.active = true;
        }

        GameManage.getInstance().FreeGame();
        AdvServer.getInstance().ShowMenuAdv(BaseMenu.ResultMenu);
    }

    Free() {
        AdvServer.getInstance().RemoveMenuAdv(BaseMenu.ResultMenu);
    }

    EndLuckEgg(_callFun) {
        AdvServer.getInstance().EndLevelLuckEgg(() => {
            if (_callFun) {
                _callFun();
            }
        }, () => {
            //奖品
        })
    }

    EndVideo(_callFun) {
        AdvServer.getInstance().EndAutoVido(() => {
            if (_callFun) {
                _callFun();
            }
        }, () => {
            if (_callFun) {
                _callFun();
            }
        })
    }

    //下一关


    // update(dt) {
    // }

    /**
     * 按钮点击事件
     * @param {cc.Touch} touch 
     */
    OnClick(touch) {
        AudioManage.getInstance().PlaySound(ResMusics.Sound_Click);
        //实现方法 示例
        if (touch.target.name == "Btn_NextLevel") {

            AdvServer.getInstance().ShowWeChatRewardedVideoAd(() => {
                //下一关
                this.EndLuckEgg(() => {
                    this.EndVideo(() => {
                        AdvServer.getInstance().ShowResultTgFullScreen(() => {
                        })
                        GameManage.getInstance().NextLevel();
                        MenuManage.getInstance().RmoveMenu(BaseMenu.ResultMenu);
                    })
                })
            }, () => {
                MenuManage.getInstance().ShowMenu(BaseMenu.TipsMenu, "视频未看完");
            })

        }
        else if (touch.target.name == "Btn_Restart") {
            //下一关
            this.EndLuckEgg(() => {
                this.EndVideo(() => {
                    AdvServer.getInstance().ShowResultTgFullScreen(() => {
                    })
                    GameManage.getInstance().RestartGame();
                    MenuManage.getInstance().RmoveMenu(BaseMenu.ResultMenu);
                })
            })
        }
        else if (touch.target.name == "Btn_Continue") {
            //继续
            this.EndLuckEgg(() => {
                this.EndVideo(() => {
                    AdvServer.getInstance().ShowResultTgFullScreen(() => {
                    })

                    GameManage.getInstance().NextLevel();
                    MenuManage.getInstance().RmoveMenu(BaseMenu.ResultMenu);
                })
            })
        }
    }
}
