import BaseLayer from "../base/BaseLayer";
import GameManage from "../manage/GameManage";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import SaveManage, { LevelMax, LevelBase } from "../manage/SaveManage";
import Utils from "../utils/Utils";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import AdvServer from "../platform/AdvServer";
import NodePoolManage, { PoolName } from "../manage/NodePoolManage";
import DataManage, { ResJson } from "../manage/DataManage";
import StatisticsServer from "../platform/StatisticsServer";
import BasePlatform from "../platform/BasePlatform";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLoadingMenu extends BaseLayer {

    @property(cc.ProgressBar)
    Load_ProgressBar: cc.ProgressBar = null;

    @property(cc.Node)
    Load_Car: cc.Node = null;

    _m_Update: boolean = false;
    _m_LoadProgree: number = 0;
    _m_AddProgree: number = 0.01;

    _m_LoadJosn: boolean = false;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}

    start() {
        this.Load_ProgressBar.progress = 0;
        this._m_Update = true;
        //音频
        AudioManage.getInstance().InitResAudio("data/musics", () => {
            Utils.CCLog("音频加载成功");
        })
        DataManage.getInstance().InitJsonData(() => {
            Utils.CCLog("json 加载成功");
            this._m_LoadJosn = true;
            SaveManage.getInstance().InitUserData();
        })

        //初始化分享
        BasePlatform.getInstance().InitShare();

        //初始化广告
        AdvServer.getInstance().SetDebug(false);
        AdvServer.getInstance().InitAdvServer();
        StatisticsServer.getInstance().NewUserCount();
    }

    update(dt) {
        if (this._m_Update) {
            if (this._m_LoadProgree >= 1) {
                this.NextMenu();
            }
            else {
                this._m_LoadProgree += this._m_AddProgree;
                this.Load_ProgressBar.progress = this._m_LoadProgree;
                //起点
                let startpos = - this.Load_ProgressBar.totalLength / 2;
                //进度
                let posx = startpos + this._m_LoadProgree * this.Load_ProgressBar.totalLength;
                //终点
                this.Load_Car.x = posx;
            }
        }
    }

    /**
     * 下一界面
     */
    NextMenu() {
        if (!this._m_LoadJosn) {
            return;
        }

        this._m_Update = false;
        MenuManage.getInstance().ShowMenu(BaseMenu.MainMenu);
        MenuManage.getInstance().RmoveMenu(BaseMenu.GameLoadingMenu);
    }
}
