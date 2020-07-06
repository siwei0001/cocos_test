// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import SaveManage from "../manage/SaveManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CarItem extends BaseLayer {

    @property(cc.Node)
    Img_Car: cc.Node = null;

    @property(cc.Node)
    Lock: cc.Node = null;

    @property(cc.Node)
    Img_Bg_1: cc.Node = null;

    _m_SkinID: string = "";
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    InitData(_id: string) {
        this._m_SkinID = _id;

        //加载皮肤
        let url = "/data/textures/car/" + "img_car_red_" + this._m_SkinID;
        cc.loader.loadRes(url, cc.SpriteFrame, (err, spriteFrame) => {
            this.Img_Car.active = true;
            this.Img_Car.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        })

        if (SaveManage.getInstance().SkinIDIsUnlock(this._m_SkinID)) {
            this.Lock.active = false;
            this.node.getComponent(cc.Button).enabled = true;
            //判断是否是当前用的皮肤
            if (SaveManage.getInstance().GetSkinID() == this._m_SkinID) {
                this.Img_Bg_1.active = true;
            }
            else {
                this.Img_Bg_1.active = false;
            }
        }
        else {
            this.Lock.active = true;
            this.Img_Bg_1.active = false;
            this.node.getComponent(cc.Button).enabled = false;
        }
    }

    GetSkinID() {
        return this._m_SkinID;
    }

    UpdateState() {
        if (SaveManage.getInstance().SkinIDIsUnlock(this._m_SkinID)) {
            this.Lock.active = false;
            this.node.getComponent(cc.Button).enabled = true;
            //判断是否是当前用的皮肤
            if (SaveManage.getInstance().GetSkinID() == this._m_SkinID) {
                this.Img_Bg_1.active = true;
            }
            else {
                this.Img_Bg_1.active = false;
            }
        }
        else {
            this.Lock.active = true;
            this.Img_Bg_1.active = false;
            this.node.getComponent(cc.Button).enabled = false;
        }
    }

    // update (dt) {}

}
