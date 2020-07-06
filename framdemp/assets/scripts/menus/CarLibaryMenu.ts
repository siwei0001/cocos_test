// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import SaveManage, { CarSkinMax } from "../manage/SaveManage";
import Utils from "../utils/Utils";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import GameManage from "../manage/GameManage";
import AdvServer from "../platform/AdvServer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CarLibaryMenu extends BaseLayer {

    @property(cc.Node)
    CarItem: cc.Node = null;

    @property(cc.Node)
    CarRoot: cc.Node = null;

    @property(cc.Node)
    MyCar: cc.Node = null;

    @property(cc.Label)
    Label_CoinsNum: cc.Label = null;

    @property(cc.Button)
    Btn_RandBuy: cc.Button = null;

    @property(cc.Label)
    Label_Coins: cc.Label = null;

    _m_UnlockCoinsNum: number = 500;

    _m_LockIDList: Array<number> = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.Label_CoinsNum.string = this._m_UnlockCoinsNum.toString();
        this.Label_Coins.string = SaveManage.getInstance().GetCoins();

        this.UpdateMyCar();
        this.InitCarLibary();
    }
    Init() {
        AdvServer.getInstance().ShowMenuAdv(BaseMenu.CarLibaryMenu);
    }

    Free() {
        AdvServer.getInstance().RemoveMenuAdv(BaseMenu.CarLibaryMenu);
    }

    // update (dt) {}

    /**
     * 初始化车库
     */
    InitCarLibary() {
        this._m_LockIDList = [];
        for (let index = 1; index < CarSkinMax + 1; index++) {
            let item = cc.instantiate(this.CarItem);
            item.parent = this.CarRoot;
            item.active = true;
            if (!SaveManage.getInstance().SkinIDIsUnlock(index)) {
                this._m_LockIDList.push(index);
            }

            item.getComponent(BaseLayer).InitData(index);
        }

        if (this._m_LockIDList.length > 0) {
            this.Btn_RandBuy.node.active = true;
        }
        else {
            this.Btn_RandBuy.node.active = false;
        }
    }

    UpdateCarLibary() {
        let children = this.CarRoot.children;
        for (let index = 0; index < children.length; index++) {
            const obj = children[index];
            obj.getComponent(BaseLayer).UpdateState();
        }
    }

    /**
     * 更新选中车辆
     */
    UpdateMyCar() {
        let skinID = SaveManage.getInstance().GetSkinID();
        //加载皮肤
        let url = "/data/textures/car/" + "img_car_red_" + skinID;
        cc.loader.loadRes(url, cc.SpriteFrame, (err, spriteFrame) => {
            this.MyCar.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        })
    }

    /**
     * 随机解锁一款皮肤
     */
    RandUnlockSKin() {
        Utils.CCLog("this._m_LockIDList", this._m_LockIDList);
        //随机一个皮肤id
        let index = Utils.RandNum(0, this._m_LockIDList.length - 1);
        let skinID = this._m_LockIDList[index];
        Utils.CCLog("skinID", skinID);
        this._m_LockIDList.splice(index, 1);
        Utils.CCLog("this._m_LockIDList", this._m_LockIDList);
        //解锁对应id皮肤
        SaveManage.getInstance().UnlockSkindID(skinID);
        //刷新显示
        this.UpdateCarLibary();
        this.Label_Coins.string = SaveManage.getInstance().GetCoins();
        if (this._m_LockIDList.length == 0) {
            this.Btn_RandBuy.node.active = false;
        }
    }

    /**
    * 按钮点击事件
    * @param {cc.Touch} touch 
    */
    OnClick(touch) {
        AudioManage.getInstance().PlaySound(ResMusics.Sound_Click);
        //实现方法 示例
        if (touch.target.name == "Btn_RandBuy") {
            //随机解锁一款皮肤
            if (SaveManage.getInstance().DelCoins(this._m_UnlockCoinsNum)) {
                //金币数量足够
                this.RandUnlockSKin();
            }
            else {
                MenuManage.getInstance().ShowMenu(BaseMenu.GetCoinsMenu, () => {
                    this.RandUnlockSKin();
                });
            }
        }
        else if (touch.target.name == "Item") {
            //选中对应皮肤
            let skinID = touch.target.getComponent(BaseLayer).GetSkinID();
            Utils.CCLog("Item skinID", skinID);
            if (SaveManage.getInstance().SkinIDIsUnlock(skinID)) {
                SaveManage.getInstance().SetSkinID(skinID);
                GameManage.getInstance().UpdateCarSkin();
                this.UpdateMyCar();
                this.UpdateCarLibary();
            }
        }
        else if (touch.target.name == "Btn_Closed") {
            MenuManage.getInstance().RmoveMenu(BaseMenu.CarLibaryMenu);
            //刷线主界面金币
            let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu);
            if (mainmenu) {
                mainmenu.UpdateCoins();
            }
        }
    }
}
