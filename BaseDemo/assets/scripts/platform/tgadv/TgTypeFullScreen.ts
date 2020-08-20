// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TgAdvSdk from "../TgAdvSdk";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TgTypeFullScreen extends cc.Component {

    @property(cc.Node)
    AdvItem = null;

    @property(cc.ScrollView)
    HotScrollView: cc.ScrollView = null;

    @property(cc.ScrollView)
    FrendScrollView: cc.ScrollView = null;

    @property(cc.Node)
    Btn_Comtinue: cc.Node = null;

    _m_Hotcontent = null;
    m_HotClingDir = 1;

    _m_Frendcontent = null;
    m_FrendClingDir = 1;

    _m_FrendUpdate: boolean = false;
    _m_HotUpdate: boolean = false;

    _m_NodePoolName = "";
    _m_CloseCallFun = null;
    _m_JumpCallFun = null;

    _m_StartJump: boolean = false;

    _m_RandJumpZjkj: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.Btn_Comtinue.active = false;
    }
    /**
     * 初始化广告数据
     */
    InitTgData(_nodePoolName: string, _closeCallFun: Function = null,
        _jumpCallFun: Function = null, _startJump: boolean = false, _randjumpzjkj: boolean = false) {

        this._m_CloseCallFun = _closeCallFun;
        this._m_NodePoolName = _nodePoolName;
        //函数
        this._m_JumpCallFun = _jumpCallFun;
        this._m_StartJump = _startJump;
        this._m_RandJumpZjkj = _randjumpzjkj;

        this.scheduleOnce(() => {
            //3秒后显示继续游戏
            this.Btn_Comtinue.active = true;
        }, 3);

        //好游推荐
        let frendTgData = TgAdvSdk.getInstance().GetTgBarConfig(0, true);
        // TgAdvSdk.getInstance().TgLog("loadImage texture", texture, "err", err);
        if (frendTgData) {
            this._m_Frendcontent = this.FrendScrollView.content;
            this._m_Frendcontent.removeAllChildren();
            for (let index = 0; index < frendTgData.length; index++) {
                const tgdata = frendTgData[index];
                let tgobj = cc.instantiate(this.AdvItem);
                tgobj.parent = this._m_Frendcontent;
                tgobj.scale = 0.7;
                tgobj.active = true;
                tgobj._zjkj_tgdata = tgdata;
                //设置名字
                tgobj.getComponentInChildren(cc.Label).string = tgdata.name;

                //设置图片
                cc.loader.load({ url: tgdata.icon, type: 'png' }, (err, texture) => {
                    // TgAdvSdk.getInstance().TgLog("loadImage texture", texture, "err", err);
                    if (err) {
                        console.error(err);
                        return;
                    }
                    let spriteFrame = new cc.SpriteFrame(texture);
                    var sprite = tgobj.getComponentInChildren(cc.Sprite);
                    if (sprite) {
                        sprite.spriteFrame = spriteFrame;
                    }
                })
            }

            //开启滚动
            this._m_FrendUpdate = true;
            // this.schedule(this.FrendUpdate.bind(this), 0.015);
        }
        //热门游戏
        let HotTgData = TgAdvSdk.getInstance().GetTgBarConfig(0, true);
        if (HotTgData) {
            this._m_Hotcontent = this.HotScrollView.content;
            this._m_Hotcontent.removeAllChildren();
            for (let index = 0; index < HotTgData.length; index++) {
                const tgdata = HotTgData[index];
                let tgobj = cc.instantiate(this.AdvItem);
                tgobj.parent = this._m_Hotcontent;
                tgobj.active = true;
                tgobj._zjkj_tgdata = tgdata;

                //设置名字
                tgobj.getComponentInChildren(cc.Label).string = tgdata.name;

                //设置图片
                cc.loader.load({ url: tgdata.icon, type: 'png' }, (err, texture) => {
                    // TgAdvSdk.getInstance().TgLog("loadImage texture", texture, "err", err);
                    if (err) {
                        console.error(err);
                        return;
                    }
                    let spriteFrame = new cc.SpriteFrame(texture);
                    var sprite = tgobj.getComponentInChildren(cc.Sprite);
                    if (sprite) {
                        sprite.spriteFrame = spriteFrame;
                    }
                })
            }

            //开启滚动
            this._m_HotUpdate = true;
            // this.schedule(this.HotUpdate.bind(this), 0.015);
        }
    }

    update(){
        
        if (this._m_FrendUpdate) {
            this.FrendUpdate();
        }

        if (this._m_HotUpdate) {
            this.HotUpdate();
        }
    }

    FrendUpdate() {
        if (this.FrendScrollView.isScrolling()) {
            return;
        }

        if (this.FrendScrollView.isAutoScrolling()) {
            return;
        }

        let offsetX = Math.abs(this.FrendScrollView.getScrollOffset().x);
        if (this.m_FrendClingDir) {
            offsetX++;
        }
        else {
            offsetX--;
        }

        if (offsetX > this.FrendScrollView.getMaxScrollOffset().x) {
            this.m_FrendClingDir = 0;
        }
        if (offsetX < 0) {
            this.m_FrendClingDir = 1;
        }
        this.FrendScrollView.scrollToOffset(cc.v2(offsetX, 0));
    }

    HotUpdate() {
        if (this.HotScrollView.isScrolling()) {
            return;
        }

        if (this.HotScrollView.isAutoScrolling()) {
            return;
        }

        let offsetY = this.HotScrollView.getScrollOffset().y;
        if (this.m_HotClingDir) {
            offsetY++;
        }
        else {
            offsetY--;
        }

        if (offsetY > this.HotScrollView.getMaxScrollOffset().y) {
            this.m_HotClingDir = 0;
        }
        if (offsetY < 0) {
            this.m_HotClingDir = 1;
        }

        this.HotScrollView.scrollToOffset(cc.v2(0, offsetY));
    }

    /**
     * 释放
     */
    Free() {
        this._m_FrendUpdate = false;
        this._m_HotUpdate = false;
        
        this.Btn_Comtinue.active = false;

        this._m_Hotcontent = null;
        this.m_HotClingDir = 1;

        this._m_Frendcontent = null;
        this.m_FrendClingDir = 1;

        this._m_NodePoolName = "";
        this._m_JumpCallFun = null;
        this._m_StartJump = false;

        this.FrendScrollView.scrollToTop(0.1);
        this.HotScrollView.scrollToTop(0.1);

        //关闭回调
        if (this._m_CloseCallFun) {
            this._m_CloseCallFun(this);
            this._m_CloseCallFun = null;
        }
    }

    RandJump() {
        //随机跳转
        let tgdata = null;
        //随机跳转
        if (this._m_RandJumpZjkj) {
            tgdata = TgAdvSdk.getInstance().GetZjkjTgBarConfig(1, true, 0)[0];
        } else {
            tgdata = TgAdvSdk.getInstance().GetTgBarConfig(1, true, 0)[0];
        }

        TgAdvSdk.getInstance().TgLog("TgFullScreen 随机跳转 tgdata", tgdata);
        if (tgdata && this._m_JumpCallFun) {
            this._m_JumpCallFun(tgdata, "分类全屏", this._m_NodePoolName);
        }
    }
    /**
     * 点击事件
     * @param {Object} event 
     */
    OnClick(event) {

        if (event.target.name == "AdvItem") {
            TgAdvSdk.getInstance().TgLog("点击游戏");
            if (event.target._zjkj_tgdata && this._m_JumpCallFun) {
                TgAdvSdk.getInstance().TgLog("点击游戏 tgdata", event.target._zjkj_tgdata);
                this._m_JumpCallFun(event.target._zjkj_tgdata, "分类全屏", this._m_NodePoolName);
            }
        }
        else if (event.target.name == "Btn_ComtinueGame") {
            if (this._m_StartJump) {
                this.RandJump();
            }

            this.Free();
        }
    }
}
