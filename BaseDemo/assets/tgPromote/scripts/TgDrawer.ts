// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TgDrawer extends cc.Component {

    @property(cc.Node)
    AdvItem = null;

    @property(cc.ScrollView)
    ItemRoot = null;

    @property(cc.Node)
    Btn_Close: cc.Node = null;

    _m_content = null;

    _m_Top = 30;
    _m_Left = 15;

    _m_SpingX = 30;
    _m_SpingY = 30;

    _m_TgData = null;
    _m_Update = false;

    _m_ClingDir = 1;
    _m_Offset: any = 0;
    _m_MaxScollOffset: any = 0;

    _m_NodePoolName = "";
    _m_CloseCallFun = null;
    _m_JumpCallFun = null;

    _m_RandJump: boolean = false;
    _m_Banner: boolean = false;

    _m_RandJumpZjkj: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    /**
     * 初始化广告数据
     * _extData.jumpCallFun,_extData.randjump, _extData.banner, _extData.randjumpzjkj
     */
    InitTgData(_nodePoolName: string, _closeCallFun: Function = null,
        _jumpCallFun: Function = null, _randjump: boolean = false, _banner: boolean = false,
        _randjumpzjkj: boolean = false) {

        // this._m_CloseCallFun = _closeCallFun;
        // this._m_NodePoolName = _nodePoolName;
        // //函数
        // this._m_JumpCallFun = _jumpCallFun;

        // this._m_RandJump = _randjump;
        // this._m_Banner = _banner;
        // this._m_RandJumpZjkj = _randjumpzjkj;
        // //提取广告数据 将广告数据全部随机取出 随机取出顺序会被打乱 
        // this._m_TgData = TgAdvSdk.getInstance().GetTgBarConfig(0, true);
        // TgAdvSdk.getInstance().TgLog("TgFullScreen this._m_TgData", this._m_TgData);

        // this.node.zIndex = 1000;

        // if (this._m_TgData) {
        //     // //先清除
        //     this._m_content = this.ItemRoot.content;
        //     this._m_content.removeAllChildren();

        //     for (let index = 0; index < this._m_TgData.length; index++) {
        //         const tgdata = this._m_TgData[index];
        //         let tgobj = cc.instantiate(this.AdvItem);
        //         this._m_content.addChild(tgobj);
        //         tgobj.active = true;
        //         tgobj._zjkj_tgdata = tgdata;

        //         //设置名字
        //         tgobj.getComponentInChildren(cc.Label).string = tgdata.name;

        //         //设置图片
        //         cc.loader.load({ url: tgdata.icon, type: 'png' }, (err, texture) => {
        //             // TgAdvSdk.getInstance().TgLog("loadImage texture", texture, "err", err);
        //             if (err) {
        //                 console.error(err);
        //                 return;
        //             }
        //             let spriteFrame = new cc.SpriteFrame(texture);
        //             var sprite = tgobj.getComponentInChildren(cc.Sprite);
        //             if (sprite) {
        //                 sprite.spriteFrame = spriteFrame;
        //             }
        //         })
        //     }

        //     //设置滚动
        //     this._m_ClingDir = 1;
        //     this._m_Offset = this.ItemRoot.getScrollOffset();
        //     this._m_MaxScollOffset = this.ItemRoot.getMaxScrollOffset();
        //     this._m_MaxScollOffset.y += this.ItemRoot.node.height / 2;
        //     this._m_Update = true
        // }

        // //计算位置
        // let x = -cc.winSize.width / 2 + this.node.width / 2;
        // //显示过度动画
        // cc.tween(this.node).to(0.5, { x: x, y: 0 }).start();

        // this.schedule(this.UpdateBanner, 5);
    }

    // UpdateBanner() {
    //     console.log("更换banner");
    //     AdvServer.getInstance().HideWeChatBanner_1();
    //     AdvServer.getInstance().ShowWeChatBanner_1();
    // }

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

    /**
     * 释放
     */
    Free() {
        // this._m_content = null;

        // this._m_Top = 30;
        // this._m_Left = 15;

        // this._m_SpingX = 30;
        // this._m_SpingY = 30;

        // this._m_TgData = null;
        // this._m_Update = false;

        // this._m_ClingDir = 1;
        // this._m_Offset = 0;
        // this._m_MaxScollOffset = 0;

        // // this._m_NodePoolName = "";
        // // this._m_CloseCallFun = null;
        // this.ItemRoot.scrollToTop(0.1);
        // //关闭回调
        // if (this._m_CloseCallFun) {
        //     this._m_CloseCallFun(this);
        //     this._m_CloseCallFun = null;
        // }
    }

    RandJump() {
        // if (!this._m_RandJump) {
        //     return;
        // }

        // let tgdata = null;
        // //随机跳转
        // if (this._m_RandJumpZjkj) {
        //     tgdata = TgAdvSdk.getInstance().GetZjkjTgBarConfig(1, true, 0)[0];
        // } else {
        //     tgdata = TgAdvSdk.getInstance().GetTgBarConfig(1, true, 0)[0];
        // }

        // TgAdvSdk.getInstance().TgLog("TgFullScreen 随机跳转 tgdata", tgdata);
        // if (tgdata && this._m_JumpCallFun) {
        //     this._m_JumpCallFun(tgdata, "全屏", this._m_NodePoolName);
        // }
    }

    /**
     * 点击事件
     * @param {Object} event 
     */
    OnClick(event) {
        // if (event.target.name == 'Btn_Close') {
        //     AdvServer.getInstance().HideWeChatBanner_1();
        //     //显示过度动画
        //     cc.tween(this.node).to(0.5, { x: -1000, y: 0 }).call(() => {
        //         var node = cc.find("Canvas");
        //         if (node) {
        //             node.getComponent(BaseLayer).ShowDrawerTgButton();
        //         }
        //     }).start();
        // }
        // else if (event.target.name == "AdvItem") {
        //     TgAdvSdk.getInstance().TgLog("点击游戏");
        //     if (event.target._zjkj_tgdata && this._m_JumpCallFun) {
        //         TgAdvSdk.getInstance().TgLog("点击游戏 tgdata", event.target._zjkj_tgdata);
        //         this._m_JumpCallFun(event.target._zjkj_tgdata, "全屏", this._m_NodePoolName);
        //     }
        // }
    }
}
