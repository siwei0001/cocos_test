

import TgAdvSdk from "../TgAdvSdk";

const { ccclass, property } = cc._decorator;
@ccclass
export default class TgCollect extends cc.Component {
    @property(cc.Node)
    AdvItem = null;

    @property(cc.ScrollView)
    ItemRoot = null;

    @property(cc.Widget)
    Img_Tile = null;

    @property(cc.Widget)
    ItemRootWidget = null;

    _m_content = null;

    _m_TgData = null;

    _m_NodePoolName = "";
    _m_CloseCallFun = null;
    _m_JumpCallFun = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    /**
     * 初始化广告数据
     */
    InitTgData(_nodePoolName: string, _closeCallFun: Function = null, _top: number, _jumpCallFun: Function = null) {
        this._m_NodePoolName = _nodePoolName;
        this._m_CloseCallFun = _closeCallFun;
        //函数
        this._m_JumpCallFun = _jumpCallFun;

        this.ItemRootWidget.top = 177 + _top;
        this.Img_Tile.top = _top;
        this.ItemRootWidget.updateAlignment();
        this.Img_Tile.updateAlignment();

        //提取广告数据 将广告数据全部随机取出 随机取出顺序会被打乱 
        this._m_TgData = TgAdvSdk.getInstance().GetTgBarConfig(0, true);
        TgAdvSdk.getInstance().TgLog("TgCollect this._m_TgData", this._m_TgData);
        if (this._m_TgData) {
            // //先清除
            this._m_content = this.ItemRoot.content;
            this._m_content.removeAllChildren();

            for (let index = 0; index < this._m_TgData.length; index++) {
                const tgdata = this._m_TgData[index];
                let tgobj = cc.instantiate(this.AdvItem);
                this._m_content.addChild(tgobj);
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

                let randNum = Math.random();
                if (randNum > 0.5) {
                    tgobj.getChildByName("Img_State").active = true;
                }
            }
        }
    }

    Free() {
        this._m_content = null;
        // this._m_NodePoolName = "";
        // this._m_CloseCallFun = null;
        this.ItemRoot.scrollToTop(0.1);
    }

    // update (dt) {}

    /**
     * 点击事件
     * @param {Object} event 
     */
    OnClick(event) {
        if (event.target.name == 'Btn_Back') {
            this.Free();
            //关闭回调
            if (this._m_CloseCallFun) {
                this._m_CloseCallFun(this);
                this._m_CloseCallFun = null;
            }
        }
        else if (event.target.name == "AdvItem") {
            TgAdvSdk.getInstance().TgLog("点击游戏");
            if (event.target._zjkj_tgdata && this._m_JumpCallFun) {
                TgAdvSdk.getInstance().TgLog("点击游戏 tgdata", event.target._zjkj_tgdata);
                this._m_JumpCallFun(event.target._zjkj_tgdata, "假收藏", this._m_NodePoolName);
            }
        }
    }
}
