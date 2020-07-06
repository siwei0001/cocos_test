// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import { ObsType, PileState } from "../manage/GameManage";
import Utils from "../utils/Utils";
import AudioManage, { ResMusics } from "../manage/AudioManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Obs extends BaseLayer {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    ObsRoot: cc.Node = null;

    @property(cc.Node)
    Mask_Pile: cc.Node = null;

    @property(cc.Node)
    Img_Pile: cc.Node = null;

    @property(cc.Node)
    Img_Box: cc.Node = null;
    @property(cc.Node)
    Img_Coins: cc.Node = null;
    @property(cc.Node)
    Img_Wall: cc.Node = null;
    @property(cc.Node)
    Img_Pile_0: cc.Node = null;
    @property(cc.Node)
    Img_Key: cc.Node = null;
    @property(cc.Node)
    Img_RedEnd: cc.Node = null;
    @property(cc.Node)
    Img_BuleEnd: cc.Node = null;
    @property(cc.Node)
    Img_YellowEnd: cc.Node = null;
    @property(cc.Node)
    Img_GreenEnd: cc.Node = null;

    _m_ObsType: ObsType = ObsType.Null;

    _m_PileState: PileState = PileState.Null;

    _m_RestPos: cc.Vec2 = new cc.Vec2();

    // onLoad () {}

    start() {
    }

    SetObsType(_obsType: ObsType) {
        this._m_RestPos = this.node.position;
        this._m_ObsType = _obsType;
        this._m_PileState = PileState.Null;
        this.node.stopAllActions();
        this.Img_Pile.stopAllActions();
        this.ObsRoot.stopAllActions();
        this.ObsRoot.scaleX = 1;

        this.Img_Box.active = false;
        this.Img_Coins.active = false;
        this.Img_Wall.active = false;
        this.Img_Pile_0.active = false;
        this.Img_Key.active = false;
        this.Img_RedEnd.active = false;
        this.Img_BuleEnd.active = false;
        this.Img_YellowEnd.active = false;
        this.Img_GreenEnd.active = false;

        // this.Img_Obs.spriteFrame = null;
        if (this._m_ObsType == ObsType.RedCar_End) {
            //红色车结束位置
            this.Img_RedEnd.active = true;
        }
        else if (this._m_ObsType == ObsType.BuleCar_End) {
            //蓝色车结束位置
            this.Img_BuleEnd.active = true;
        }
        else if (this._m_ObsType == ObsType.YellowCar_End) {
            //黄色车结束位置
            this.Img_YellowEnd.active = true;
        }
        else if (this._m_ObsType == ObsType.GreenCar_End) {
            //绿色车结束位置
            this.Img_GreenEnd.active = true;
        }
        else if (this._m_ObsType == ObsType.Box) {
            //箱子
            this.Img_Box.active = true;
        }
        else if (this._m_ObsType == ObsType.Pile_1) {
            //地桩1
            this.Img_Pile_0.active = true;
        }
        else if (this._m_ObsType == ObsType.Pile_2) {
            //地桩2
            this.Img_Pile_0.active = true;
        }
        else if (this._m_ObsType == ObsType.Wall) {
            //墙体
            this.Img_Wall.active = true;
        }
        else if (this._m_ObsType == ObsType.Coins) {
            //金币
            this.Img_Coins.active = true;
            cc.tween(this.ObsRoot).repeatForever(
                cc.tween().to(0.7, { scaleX: 0 }).to(0.7, { scaleX: 1 })
            ).start();
        }
        else if (this._m_ObsType == ObsType.Key) {
            //钥匙
            this.Img_Key.active = true;
        }
    }

    /**
     * 返回障碍物类型
     */
    GetObsType() {
        return this._m_ObsType;
    }

    /**
     * 返回地桩状态
     */
    GetPileState() {
        return this._m_PileState;
    }

    /**
    * 地桩动画
    */
    PileAction() {
        this._m_PileState = PileState.PreTrigger;
        // this.Img_Pile.active = true;
        this.Mask_Pile.active = true;
        // this.Img_Obs.node.active = false;
        // let time = this.Img_Pile.height / 20;
        cc.tween(this.Img_Pile).delay(0.5).call(() => {
            this._m_PileState = PileState.Trigger;
        }).to(0.2, { y: 60 }).start();
    }

    /**
     * 金币动画
     */
    CoinsAction() {
        this.node.active = false;
    }

    /**
     * 钥匙动画
     */
    KeyAction() {
        this.node.active = false;
    }

    /**
     * 重置状态
     */
    RestState() {

        if (this._m_ObsType == ObsType.Box) {
            //箱子位置重置
            this.node.setPosition(this._m_RestPos);
        }
        else if (this._m_ObsType == ObsType.Pile_1 || this._m_ObsType == ObsType.Pile_2) {
            this.Img_Pile.stopAllActions();
            //地桩的状态 动画重置
            this._m_PileState = PileState.Null;
            this.Img_Pile.x = 0;
            this.Img_Pile.y = -44;
            this.Mask_Pile.active = false;
        }
        else if (this._m_ObsType == ObsType.Coins) {
            // this.Img_Obs.node.stopAllActions();
            this.node.active = true;
            this.ObsRoot.stopAllActions();
            this.ObsRoot.scaleX = 1;
            cc.tween(this.ObsRoot).repeatForever(
                cc.tween().to(0.7, { scaleX: 0 }).to(0.7, { scaleX: 1 })
            ).start();
        }
        else if (this._m_ObsType == ObsType.Key) {
            this.node.active = true;
        }
    }
}
