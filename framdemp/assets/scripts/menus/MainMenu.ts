import BaseLayer from "../base/BaseLayer";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import SaveManage, { GameGuideTime } from "../manage/SaveManage";
import NodePoolManage, { PoolName } from "../manage/NodePoolManage";
import AdvServer from "../platform/AdvServer";
import Utils from "../utils/Utils";
import DataManage from "../manage/DataManage";
import StatisticsServer from "../platform/StatisticsServer";
import GameManage, { CarColor } from "../manage/GameManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends BaseLayer {

    @property(cc.Node)
    MapRoot: cc.Node = null;

    @property(cc.Node)
    CarRoot: cc.Node = null;

    @property(cc.Node)
    ObsRoot: cc.Node = null;

    @property(cc.Node)
    Img_Bg: cc.Node = null;

    @property(cc.Prefab)
    CarPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    MapPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    ObsPrefab: cc.Prefab = null;

    @property(cc.Graphics)
    PathGraphics: cc.Graphics = null;

    @property(cc.Node)
    MenuUI: cc.Node = null;

    @property(cc.Node)
    GameUI: cc.Node = null;

    @property(cc.Label)
    Label_Level: cc.Label = null;

    @property(cc.Label)
    Label_Coins: cc.Label = null;

    @property(cc.Animation)
    Win_Animation: cc.Animation = null;

    @property(cc.Node)
    Guide: cc.Node = null;

    @property(cc.Node)
    GuideHand: cc.Node = null;

    _m_ShowPath: boolean = false;
    _m_LineIndex: number = 0;
    _m_LineLength: number = 50;

    _m_LineList: Array<any> = [];

    _m_GuideTime: number = GameGuideTime;

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        //监听触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchCancel, this);
    }

    start() {
        this.GameUI.active = false;
        this.MenuUI.active = true;
        this.Guide.active = false;

        //初始化对象池
        NodePoolManage.getInstance().CreateNoodePool(PoolName.Map, this.MapPrefab, 100);
        NodePoolManage.getInstance().CreateNoodePool(PoolName.Obs, this.ObsPrefab, 15);
        NodePoolManage.getInstance().CreateNoodePool(PoolName.Car, this.CarPrefab, 5);
        //初始化场景
        GameManage.getInstance().InitGameScenes(this.Img_Bg, this.MapRoot, this.CarRoot, this.ObsRoot, this.CarPrefab, this.MapPrefab, this.ObsPrefab);
    }

    Init() {
        //
        AdvServer.getInstance().ShowMenuAdv(BaseMenu.MainMenu);
    }

    Free() {
        //
        AdvServer.getInstance().RemoveMenuAdv(BaseMenu.MainMenu);
    }
    /**
     * 更新金币数
     */
    UpdateCoins() {
        this.Label_Coins.string = SaveManage.getInstance().GetCoins();
    }

    /**
     * 更新关卡数
     */
    UpdateLevel() {
        this.Label_Level.string = SaveManage.getInstance().GetLevel();
    }

    /**
     * 清除路径画图
     */
    ClearPathGraphics() {
        Utils.CCLog("ClearPathGraphics");
        this.PathGraphics.clear();
    }

    /**
     * 停止路径显示
     */
    StopPathShow() {
        this._m_ShowPath = false;
    }

    /**
     * 开始游戏
     */
    StartGame() {
        this.GameUI.active = true;
        this.MenuUI.active = false;

        //显示指导界面
        if (!SaveManage.getInstance().GetGuide()) {
            MenuManage.getInstance().ShowMenu(BaseMenu.GuideMenu);
        }

        this.UpdateCoins();
        this.UpdateLevel();
        this._m_GuideTime = GameGuideTime;
        //统计关卡
        let level = SaveManage.getInstance().GetLevel();
        StatisticsServer.getInstance().SendCustomEvent("关卡" + level);

        AdvServer.getInstance().RemoveMenuAdv(BaseMenu.MainMenu);
    }

    StartLuckEgg() {
        AdvServer.getInstance().StartLevelLuckEgg(() => {
            //界面关闭
            this.StartVideo();
        }, () => {
            //奖品
        })
    }

    StartVideo() {
        AdvServer.getInstance().StartAutoVido(() => {
            this.StartGame();
        }, () => {
            this.StartGame();
        })
    }

    /**
     * 播放胜利动画
     */
    PlayWinAnimation(_callFun) {
        AudioManage.getInstance().PlaySound(ResMusics.Sound_Success);
        cc.tween(this.node).delay(1).call(() => {
            //播放完成
            if (_callFun) {
                _callFun();
            }
        }).start();
    }

    /**
     * 播放失败动画
     */
    PlayFaildAnimation(_callFun) {
        // AudioManage.getInstance().PlaySound(ResMusics.Sound_Click);
        cc.tween(this.node).delay(1).call(() => {
            //播放完成
            if (_callFun) {
                _callFun();
            }
        }).start();
    }

    update(_dt) {
        this.UptatePath();
        if (this._m_GuideTime < 0) {
            this.ShowGuide();
        }
        else {
            this.HideGuide();
            this._m_GuideTime -= _dt;
        }
    }

    UptatePath() {
        this.PathGraphics.clear();
        //拿到路径点
        let carList = GameManage.getInstance().GetCarList();
        for (let index = 0; index < carList.length; index++) {
            const obj = carList[index];
            let colorType = obj.getComponent(BaseLayer).GetColor();
            let pathList = obj.getComponent(BaseLayer).GetMovePath();

            if (pathList.length > 0) {
                if (colorType == CarColor.Red) {
                    this.PathGraphics.strokeColor = cc.Color.RED.setA(90);
                } else if (colorType == CarColor.Blue) {
                    this.PathGraphics.strokeColor = cc.Color.BLUE.setA(90);
                } else if (colorType == CarColor.Yellow) {
                    this.PathGraphics.strokeColor = cc.Color.YELLOW.setA(90);
                } else if (colorType == CarColor.Green) {
                    this.PathGraphics.strokeColor = cc.Color.GREEN.setA(90);
                }

                this.PathGraphics.moveTo(pathList[0].x, pathList[0].y);
                for (let j = 1; j < pathList.length; j++) {
                    const path = pathList[j];
                    this.PathGraphics.lineTo(path.x, path.y);
                }
                this.PathGraphics.stroke();
            }
        }
    }

    /**
     * 显示指导
     */
    ShowGuide() {
        if (this.Guide.active) {
            return;
        }
        //返回第一辆车的位置
        let pos = GameManage.getInstance().GetFirstCarPos();
        if (pos) {
            this.GuideHand.setPosition(pos);
            this.Guide.active = true;
            this.GuideHand.stopAllActions();
            cc.tween(this.GuideHand).repeatForever(
                cc.tween().to(0.5, { scale: 1.2 }).to(0.5, { scale: 0.9 })
            ).start();
        }
    }

    /**
     * 隐藏指导
     */
    HideGuide() {
        if (!this.Guide.active) {
            return;
        }
        this.Guide.active = false;
        this.GuideHand.stopAllActions();
    }

    SetGuideTime() {
        this._m_GuideTime = GameGuideTime;
    }

    /**
     * 触摸开始事件
     * @param {cc.Touch} touch 
     */
    TouchStart(touch: cc.Touch) {
        Utils.CCLog("TouchStart")
        this._m_GuideTime = GameGuideTime;
        // let addpos = this.node.convertToNodeSpaceAR(touch.getLocation());
        // GameManage.getInstance().NodeToMapGrid(addpos);
        if (GameManage.getInstance().CreateCarPath(touch.getLocation())) {
            //开始画图
            this._m_ShowPath = true;
        }
    }

    /**
     * 触摸移动事件
     * @param {cc.Touch} touch 
     */
    TouchMove(touch: cc.Touch) {
        this._m_GuideTime = GameGuideTime;
        if (this._m_ShowPath) {
            let addpos = this.node.convertToNodeSpaceAR(touch.getLocation());
            GameManage.getInstance().AddCarPath(addpos);
        }
    }

    /**
     * 触摸结束事件
     * @param {cc.Touch} touch 
     */
    TouchEnd(touch: cc.Touch) {
        this._m_GuideTime = GameGuideTime;
        if (this._m_ShowPath) {
            this._m_ShowPath = false;
            GameManage.getInstance().StartCarMove();
        }
    }

    /**
     * 触摸取消事件
     * @param {cc.Touch} touch 
     */
    TouchCancel(touch: cc.Touch) {
        this._m_ShowPath = false;
    }

    /**
     * 按钮点击事件
     * @param {cc.Touch} touch 
     */
    OnClick(touch) {
        this._m_GuideTime = GameGuideTime;
        AudioManage.getInstance().PlaySound(ResMusics.Sound_Click);
        //实现方法 示例
        if (touch.target.name == "Btn_GameStart") {
            this.StartLuckEgg();
            // this.StartGame();
        }
        else if (touch.target.name == "Btn_Back") {
            //退回当前所画的线
            GameManage.getInstance().GoBack();
        }
        else if (touch.target.name == "Btn_Ignore") {
            AdvServer.getInstance().ShowWeChatRewardedVideoAd(() => {
                GameManage.getInstance().FreeGame();
                //下一关
                GameManage.getInstance().NextLevel();
            }, () => {
                MenuManage.getInstance().ShowMenu(BaseMenu.TipsMenu, "视频未看完");
            })
        }
        else if (touch.target.name == "Btn_CarLibary") {
            SaveManage.getInstance().SetLevel(1);
            MenuManage.getInstance().ShowMenu(BaseMenu.CarLibaryMenu);
        }
        else if (touch.target.name == "Btn_GameCarLibary") {
            MenuManage.getInstance().ShowMenu(BaseMenu.CarLibaryMenu);
        }
    }
}
