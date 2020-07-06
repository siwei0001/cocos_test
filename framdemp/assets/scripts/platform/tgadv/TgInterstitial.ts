import TgAdvSdk from "../TgAdvSdk";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TgInterstitial extends cc.Component {

    @property(cc.Node)
    AdvItem = null;

    @property(cc.ScrollView)
    ItemRoot = null;

    @property(cc.Node)
    Btn_Back = null;

    _m_content = null;

    _m_TgData = null;
    _m_Update = false;

    _m_ClingDir = 1;
    _m_Offset: any = 0;
    _m_MaxScollOffset: any = 0;

    _m_ShowBack = true;

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
    InitTgData(_nodePoolName: string, _closeCallFun: Function = null, _showBack:boolean = false, _initJump: boolean = false, _jumpCallFun: Function = null) {
        this._m_NodePoolName = _nodePoolName;

        //绑定函数
        this._m_CloseCallFun = _closeCallFun;
        this._m_JumpCallFun = _jumpCallFun;

        this._m_ShowBack = _showBack;

        if (_initJump) {
            //随机跳转
            let tgdata = TgAdvSdk.getInstance().GetTgBarConfig(1, true, 0)[0];
            TgAdvSdk.getInstance().TgLog("TgInterstitial 随机跳转 tgdata", tgdata);
            if (tgdata && this._m_JumpCallFun) {
                this._m_JumpCallFun(tgdata, "插屏", this._m_NodePoolName);
            }
        }

        //获取广告数据  
        this._m_TgData = TgAdvSdk.getInstance().GetTgBarConfig(0, true, 0);
        TgAdvSdk.getInstance().TgLog("TgInterstitial this._m_TgData", this._m_TgData);

        // this.node.zIndex = 1;
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
            }

            //设置滚动
            this._m_ClingDir = 1;
            this._m_Offset = this.ItemRoot.getScrollOffset();
            this._m_MaxScollOffset = this.ItemRoot.getMaxScrollOffset();
            this._m_MaxScollOffset.y += this.ItemRoot.node.height / 2;
            this._m_Update = true
        }

        if (this._m_ShowBack) {
            //显示返回按钮
            this.Btn_Back.active = true;
        }
        else {
            this.node.on(cc.Node.EventType.TOUCH_END, (touch) => {
                this.Free();
                // 关闭回调
                if (this._m_CloseCallFun) {
                    this._m_CloseCallFun(this);
                    this._m_CloseCallFun = null;
                }
            }, this);
            // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchmMoved, this);
            // this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
            // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchCancel, this);
        }

    }


    update(deltaTime) {
        // Your update function goes here.
        if (this._m_Update) {

            if (this.ItemRoot.isScrolling()) {
                return;
            }

            if (this.ItemRoot.isAutoScrolling()) {
                return;
            }

            this._m_Offset = this.ItemRoot.getScrollOffset();

            if (this._m_ClingDir) {
                this._m_Offset.y++;
            }
            else {
                this._m_Offset.y--;
            }
            // TgAdvSdk.getInstance().TgLog("this._m_Offset", this._m_Offset);
            if (this._m_Offset.y > this.ItemRoot.getMaxScrollOffset().y) {
                this._m_ClingDir = 0;
            }
            if (this._m_Offset.y < 0) {
                this._m_ClingDir = 1;
            }

            this.ItemRoot.scrollToOffset(this._m_Offset)
        }
    }
    // update (dt) {}
    /**
     * 释放
     */
    Free() {
        this._m_TgData = null;

        this._m_content = null;
        this.ItemRoot.scrollToTop(0.1);
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
                this._m_JumpCallFun(event.target._zjkj_tgdata, "插屏", this._m_NodePoolName);
            }
        }
        else if (event.target.name == "Btn_Back") {
            this.Free();
            // 关闭回调
            if (this._m_CloseCallFun) {
                this._m_CloseCallFun(this);
                this._m_CloseCallFun = null;
            }
        }
    }
}
