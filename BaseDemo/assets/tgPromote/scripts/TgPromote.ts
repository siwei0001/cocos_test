import TgServer from "../../scripts/platform/TgServer";

const { ccclass, property } = cc._decorator;

enum LayoutType {
    HORIZONTAL = 1,
    VERTICAL,
    Grid,
}

interface PromoteStyle {
    left?: number,  //左边
    top?: number,   //顶部
    width?: number, //宽
    height?: number //高
}

interface PromoteAdv {
    start?: number,     //数据开始
    num?: number,       //数据数量
    rand?: boolean,     //数据是否是随机
}

interface PromoteLayout {
    type?: LayoutType,  //类型  
    spacingX?: number,  //横向间隔
    spacingY?: number   //竖向间隔
}

/**
 * 推广参数
 */
interface PromoteParam {
    parent?: cc.Node,           //父节点
    style?: PromoteStyle,       //格式
    PromoteLayout?: PromoteLayout,//排序
    cellstyle: PromoteStyle,    //单元格式
    promoteAdv: PromoteAdv,     //广告数据
    updateWidget: boolean       //更新标记
    autoswitch: number,         //自动更换数据间隔时间
    autoscrolle: boolean,       //自动滚动标记
}

@ccclass
export default class TgPromote extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    AdvRoot = null;

    @property(cc.Node)
    AdvItem = null;

    @property(cc.Node)
    Img_Bg = null;

    m_LayoutType: LayoutType = LayoutType.HORIZONTAL;
    m_CellStype: PromoteStyle = {};
    m_PromoteAdv: PromoteAdv = {};
    m_UpdateWidget: boolean = false;
    m_Autoswitch: number = 0;
    m_Autoscrolle: boolean = false;

    // onLoad () {}

    /**
     * 初始化广告数据
     */
    // let self = obj.getComponent(PromoteType.TgPromote);
    // self.InitTgData(_option.PromoteLayout,  //排序
    //     _option.cellstyle,  //单元格式
    //     _option.promoteAdv, //广告数据
    //     _option.updateWidget,//更新标记
    //     _option.autoswitch, //自动更换数据间隔时间
    //     _option.autoscrolle //自动滚动标记
    // );
    InitTgData(_layout: PromoteLayout, _cellstyle: PromoteStyle, _promoteadv: PromoteAdv, _updatewidget: boolean, _autoswitch: number, _autoscrolle: boolean) {
        //布局类型
        this.m_LayoutType = _layout ? (_layout.type ? _layout.type : LayoutType.HORIZONTAL) : LayoutType.HORIZONTAL;
        //单元风格
        this.m_CellStype = _cellstyle;
        if (this.m_CellStype) {
            //单元宽
            if (this.m_CellStype.width) {
                this.AdvItem.width = this.m_CellStype.width;
            }
            //单元高
            if (this.m_CellStype.height) {
                this.AdvItem.height = this.m_CellStype.height;
            }
        }
        //广告数据
        this.m_PromoteAdv = _promoteadv;
        //更新标记
        this.m_UpdateWidget = _updatewidget ? _updatewidget : false;
        //自动更换数据间隔时间
        this.m_Autoswitch = _autoswitch ? _autoswitch : 0;
        //自动滚动标记
        this.m_Autoscrolle = _autoscrolle ? _autoscrolle : true;

        if (this.m_LayoutType == LayoutType.HORIZONTAL) {
            //水平排序
        }
        else if (this.m_LayoutType == LayoutType.VERTICAL) {
            //垂直排序
        }
        else if (this.m_LayoutType == LayoutType.Grid) {
            //九宫格排序
        }

        //填充广告
        let TgData = TgServer.getInstance().GetTgAdvData(this.m_PromoteAdv.num, this.m_PromoteAdv.start, this.m_PromoteAdv.rand);
        if (TgData.length) {
            //广告数据
            for (let index = 0; index < TgData.length; index++) {
                const zjkj_data = TgData[index];
                
            }
        }

        // this._m_StartIndex = this._m_Adv.start;
        // let TgData = TgAdvSdk.getInstance().GetTgBarConfig(this._m_Adv.num, this._m_Adv.rand, this._m_Adv.start);
        // TgAdvSdk.getInstance().TgLog("TgData", TgData);
        // //先清除
        // this.AdvRoot.removeAllChildren();
        // //单个广告大小
        // this.AdvItem.width = this._m_Style.cellSize.width;
        // this.AdvItem.height = this._m_Style.cellSize.height;

        // this._m_Col = Math.floor(this._m_Style.width / this._m_Style.cellSize.width);

        // for (let index = 0; index < TgData.length; index++) {
        //     const tgdata = TgData[index];
        //     let tgobj = cc.instantiate(this.AdvItem);
        //     tgobj.parent = this.AdvRoot;
        //     tgobj.active = true;
        //     tgobj._zjkj_tgdata = tgdata;

        //     let pos = cc.v2(0, 0);
        //     //双向排列
        //     if (this._m_Style.horizontal && this._m_Style.vertical) {
        //         pos.x = this._m_Left - this.node.width / 2 + this.AdvItem.width / 2 + ((index % this._m_Col) * (this.AdvItem.width + this._m_Style.spacingX));
        //         pos.y = this.node.height / 2 - this._m_Top - this.AdvItem.height / 2 - (Math.floor(index / this._m_Col) * (this.AdvItem.height + this._m_Style.spacingY));
        //     }
        //     else {
        //         //水平排列
        //         if (this._m_Style.horizontal) {
        //             if (this._m_Adv.moreGame) {
        //                 //显示更多游戏
        //                 pos.x = - this.node.width / 2 + this._m_Left + this.AdvItem.width / 2 + this.MoreGame.width + index * (this._m_Style.spacingX + this.AdvItem.width);
        //             }
        //             else {
        //                 pos.x = - this.node.width / 2 + this._m_Left + this.AdvItem.width / 2 + index * (this._m_Style.spacingX + this.AdvItem.width);
        //             }
        //         }
        //         else {
        //             //默认垂直排列
        //             if (this._m_Adv.moreGame) {
        //                 //显示更多游戏
        //                 pos.y = this.node.height / 2 - this._m_Top - this.AdvItem.height / 2 - this.MoreGame.height - index * (this._m_Style.spacingY + this.AdvItem.height);
        //             }
        //             else {
        //                 pos.y = this.node.height / 2 - this._m_Top - this.AdvItem.height / 2 - index * (this._m_Style.spacingY + this.AdvItem.height);
        //             }
        //         }
        //     }
        //     //设置位置
        //     tgobj.setPosition(pos);
        //     this._m_ItemArray.push(tgobj);
        //     //设置名字
        //     tgobj.getComponentInChildren(cc.Label).string = tgdata.name;
        //     cc.loader.load({ url: tgdata.icon, type: 'png' }, (err, texture) => {
        //         if (err) {
        //             console.error(err);
        //             return;
        //         }
        //         let spriteFrame = new cc.SpriteFrame(texture);
        //         var sprite = tgobj.getComponentInChildren(cc.Sprite);
        //         if (sprite) {
        //             sprite.spriteFrame = spriteFrame;
        //         }
        //     });
        //     this._m_LasteItem = this._m_ItemArray[this._m_ItemArray.length - 1];
        // }

        // //自动更换游戏
        // if (this._m_Adv.autoswitch) {
        //     this.schedule(this.UpdateItem, this._m_Adv.autoswitch);
        // }

        // //自动移动游戏
        // // if (this._m_Adv.autoscrolle && !(this._m_Style.horizontal && this._m_Style.vertical)) {
        // //     //设置滚动 要求不能同时开启水平滚动和垂直滚动
        // //     this._m_Update = true
        // // }
        // this._m_Update = this._m_Adv.autoscrolle;
    }

    // update(deltaTime) {
    //     if (this._m_Update) {
    //         for (let index = 0; index < this._m_ItemArray.length; index++) {
    //             const element = this._m_ItemArray[index];
    //             let pos = element.getPosition();
    //             if (this._m_Style.horizontal && this._m_Style.vertical) {
    //                 //垂直滚动
    //                 if (pos.y > (this.node.height / 2 + 100)) {
    //                     let lastpos = this._m_LasteItem.getPosition();
    //                     // console.log("lastpos", lastpos);
    //                     //算到他是第几排第几列
    //                     // let lastgrid = cc.v2(lastpos.x/)
    //                     let cola = Math.floor((lastpos.x + this.node.width / 2) / (this.AdvItem.width + this._m_Style.spacingX));
    //                     // console.log("cola", cola, "lastpos.x", lastpos.x);
    //                     // let rowa = Math.floor((lastpos.y) / (this.AdvItem.height + this._m_Style.spacingY));
    //                     // console.log("rowa", rowa, "lastpos.y", lastpos.y);
    //                     // console.log("this._m_LasteItem", this._m_LasteItem._zjkj_tgdata.name);
    //                     cola++;
    //                     let pos = cc.v3();
    //                     if (cola < this._m_Col) {
    //                         // console.log("不换行");
    //                         pos.x = lastpos.x + (this.AdvItem.width + this._m_Style.spacingX);
    //                         pos.y = lastpos.y;
    //                     }
    //                     else {
    //                         // console.log("换行");
    //                         pos.x = this._m_Left - this.node.width / 2 + this.AdvItem.width / 2 + (0 * (this.AdvItem.width + this._m_Style.spacingX));
    //                         pos.y = lastpos.y - this._m_Style.spacingY - this.AdvItem.height;
    //                     }
    //                     // console.log("pos.x", pos.x);
    //                     // console.log("pos.y", pos.y);

    //                     element.setPosition(pos.x, pos.y, pos.z);
    //                     this._m_LasteItem = element;
    //                 }
    //                 else {
    //                     element.setPosition(pos.x, pos.y + 1, pos.z)
    //                 }
    //             }
    //             else {
    //                 if (this._m_Style.vertical) {
    //                     //垂直滚动
    //                     if (pos.y > this.node.height / 2) {
    //                         let lastpos = this._m_LasteItem.getPosition();
    //                         element.setPosition(lastpos.x, lastpos.y - this._m_Style.spacingY - this.AdvItem.height, lastpos.z);
    //                         this._m_LasteItem = element;
    //                     }
    //                     else {
    //                         element.setPosition(pos.x, pos.y + 1, pos.z)
    //                     }
    //                 }
    //                 else {
    //                     //水平滚动
    //                     if (pos.x < - this.node.width / 2) {
    //                         let lastpos = this._m_LasteItem.getPosition();
    //                         element.setPosition(lastpos.x + this._m_Style.spacingX + this.AdvItem.width, lastpos.y, lastpos.z);
    //                         this._m_LasteItem = element;
    //                     }
    //                     else {
    //                         element.setPosition(pos.x - 1, pos.y, pos.z)
    //                     }
    //                 }
    //             }

    //         }
    //     }
    // }

    /**
     * 计时器回调
     */
    // UpdateItem() {
    //     //再次获取广告数据
    //     //开始位置增加显示数量增量
    //     this._m_StartIndex += this._m_Adv.num;
    //     for (let index = 0; index < this._m_ItemArray.length; index++) {
    //         const tgobj = this._m_ItemArray[index];
    //         this._m_StartIndex++;
    //         if (this._m_StartIndex >= TgAdvSdk.getInstance().GetTgBarConfig().length) {
    //             this._m_StartIndex = 0;
    //         }
    //         const tgdata = TgAdvSdk.getInstance().GetTgBarConfig(1, this._m_Adv.rand, this._m_StartIndex)[0];
    //         if (tgdata) {
    //             tgobj._zjkj_tgdata = tgdata;
    //             tgobj.active = true;
    //             //设置名字
    //             tgobj.getComponentInChildren(cc.Label).string = tgdata.name;

    //             cc.loader.load({ url: tgdata.icon, type: 'png' }, (err, texture) => {
    //                 if (err) {
    //                     console.error(err)
    //                 }
    //                 let spriteFrame = new cc.SpriteFrame(texture);
    //                 var sprite = tgobj.getComponentInChildren(cc.Sprite);
    //                 if (sprite) {
    //                     sprite.spriteFrame = spriteFrame;
    //                 }
    //             });
    //         }
    //         else {
    //             tgobj.active = false;
    //         }
    //     }
    // }

    // UpdateWidget(_top: number = 0, _left: number = 0) {
    //     if (this._m_Style.updateWidget) {
    //         let widgetComponent = this.node.getComponent(cc.Widget);
    //         widgetComponent.top = _top;
    //         widgetComponent.left = _left;
    //         widgetComponent.updateAlignment();
    //     }
    // }

    /**
     * 释放
     */
    Free() {
        // this.unschedule(this.UpdateItem);
        // this._m_TgData = null;
        // this._m_ItemArray = [];

        // this._m_Top = 10;
        // this._m_Left = 10;

        // this._m_StartIndex = 0;

        // this._m_NodePoolName = "";
        // this._m_TgPos = "";
        // this._m_CloseCallFun = null;
        // this._m_MoreGameCallFun = null;
        // this._m_JumpCallFun = null;

        // this._m_Update = false;
        // this._m_LasteItem = null;

        // this._m_Style = null;
        // this._m_Adv = null;

        // //先清除
        // this.AdvRoot.removeAllChildren();
    }

    /**
     * 点击事件
     * @param {Object} event 
     */
    OnClick(event) {
        // if (event.target.name == "AdvItem") {
        //     TgAdvSdk.getInstance().TgLog("点击游戏");
        //     if (event.target._zjkj_tgdata && this._m_JumpCallFun) {
        //         TgAdvSdk.getInstance().TgLog("点击游戏 tgdata", event.target._zjkj_tgdata);
        //         this._m_JumpCallFun(event.target._zjkj_tgdata, this._m_TgPos, this._m_NodePoolName);
        //     }
        // }
        // else if (event.target.name == "Btn_ShowMoreGame") {
        //     if (this._m_MoreGameCallFun) {
        //         this._m_MoreGameCallFun(this);
        //     }
        // }
    }
}
