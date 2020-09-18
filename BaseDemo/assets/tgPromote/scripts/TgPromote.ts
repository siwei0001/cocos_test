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
    cellstyle?: PromoteStyle,    //单元格式
    promoteAdv?: PromoteAdv,     //广告数据
    updateWidget?: boolean       //更新标记
    autoswitch?: number,         //自动更换数据间隔时间
    autoscrolle?: boolean,       //自动滚动标记
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

    m_Layout: PromoteLayout = { type: LayoutType.HORIZONTAL, spacingX: 0, spacingY: 0 };
    m_CellStype: PromoteStyle = { left: 0, top: 0, width: 100, height: 100 };
    m_PromoteAdv: PromoteAdv = { start: 0, num: 0, rand: true };
    m_UpdateWidget: boolean = false;
    m_Autoswitch: number = 0;
    m_Autoscrolle: boolean = false;

    _m_Col: number = 0;
    _m_LasteItem: cc.Node = null;
    _m_Update: boolean = false;
    _m_StartIndex: number = 0;
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
        if (_layout) {
            this.m_Layout.type = _layout.type ? _layout.type : LayoutType.HORIZONTAL;
            this.m_Layout.spacingX = _layout.spacingX ? _layout.spacingX : 0;
            this.m_Layout.spacingY = _layout.spacingY ? _layout.spacingY : 0;
        }

        //单元风格
        if (_cellstyle) {
            this.m_CellStype.left = _cellstyle.left ? _cellstyle.left : 0;
            this.m_CellStype.top = _cellstyle.top ? _cellstyle.top : 0;
            this.m_CellStype.width = _cellstyle.width ? _cellstyle.width : this.m_CellStype.width;
            this.m_CellStype.height = _cellstyle.height ? _cellstyle.height : this.m_CellStype.height;
            //单元宽
            this.AdvItem.width = this.m_CellStype.width;
            //单元高
            this.AdvItem.height = this.m_CellStype.height;
        }

        //广告数据
        if (_promoteadv) {
            this.m_PromoteAdv.start = _promoteadv.start ? _promoteadv.start : 0;
            this.m_PromoteAdv.num = _promoteadv.num ? _promoteadv.num : 0;
            this.m_PromoteAdv.rand = _promoteadv.rand ? _promoteadv.rand : true;
        }

        //更新标记
        this.m_UpdateWidget = _updatewidget ? _updatewidget : false;
        //自动更换数据间隔时间
        this.m_Autoswitch = _autoswitch ? _autoswitch : 0;


        //填充广告
        let TgData = TgServer.getInstance().GetTgAdvData(this.m_PromoteAdv.num, this.m_PromoteAdv.start, this.m_PromoteAdv.rand);
        console.log("TgPromote TgData", TgData);
        if (TgData.length) {
            //先清除
            this.AdvRoot.removeAllChildren();
            this._m_Col = Math.floor(this.node.width / this.AdvItem.width);

            //广告数据
            for (let index = 0; index < TgData.length; index++) {
                const zjkj_data = TgData[index];
                let tgobj = cc.instantiate(this.AdvItem);
                tgobj.parent = this.AdvRoot;
                tgobj.active = true;
                tgobj._zjkj_tgdata = zjkj_data;

                let pos = cc.v2(0, 0);
                let left = 0;
                let top = 0;

                if (this.m_Layout.type == LayoutType.HORIZONTAL) {
                    //水平排序
                    pos.x = - this.node.width / 2 + left + this.AdvItem.width / 2 + index * (this.m_Layout.spacingX + this.AdvItem.width);
                }
                else if (this.m_Layout.type == LayoutType.VERTICAL) {
                    //垂直排序
                    pos.y = this.node.height / 2 - top - this.AdvItem.height / 2 - index * (this.m_Layout.spacingY + this.AdvItem.height);
                }
                else if (this.m_Layout.type == LayoutType.Grid) {
                    //九宫格排序
                    pos.x = left - this.node.width / 2 + this.AdvItem.width / 2 + ((index % this._m_Col) * (this.AdvItem.width + this.m_Layout.spacingX));
                    pos.y = this.node.height / 2 - top - this.AdvItem.height / 2 - (Math.floor(index / this._m_Col) * (this.AdvItem.height + this.m_Layout.spacingY));
                }
                //设置位置
                tgobj.setPosition(pos);
                // this._m_ItemArray.push(tgobj);
                //设置名字
                tgobj.getComponentInChildren(cc.Label).string = zjkj_data.name;

                cc.assetManager.loadRemote(zjkj_data.icon, (err, texture: cc.Texture2D) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    let spriteFrame = new cc.SpriteFrame(texture);
                    var sprite = tgobj.getComponentInChildren(cc.Sprite);
                    if (sprite) {
                        sprite.spriteFrame = spriteFrame;
                    }
                });

                this._m_LasteItem = tgobj;
            }
        }

        //自动更换游戏
        if (this.m_Autoswitch) {
            this.schedule(this.UpdateItem, this.m_Autoswitch);
        }

        //自动滚动标记
        this.m_Autoscrolle = _autoscrolle ? _autoscrolle : false;
    }

    update(deltaTime) {
        if (this.m_Autoscrolle) {
            for (let index = 0; index < this.AdvRoot.children.length; index++) {
                const element = this.AdvRoot.children[index];
                let pos = element.getPosition();
                let left = 0;
                if (this.m_Layout.type == LayoutType.HORIZONTAL) {
                    //水平滚动
                    if (pos.x < - this.node.width / 2) {
                        let lastpos = this._m_LasteItem.getPosition();
                        element.setPosition(lastpos.x + this.m_Layout.spacingX + this.AdvItem.width, lastpos.y, 0);
                        this._m_LasteItem = element;
                    }
                    else {
                        element.setPosition(pos.x - 1, pos.y, pos.z)
                    }
                }
                else if (this.m_Layout.type == LayoutType.VERTICAL) {
                    //垂直滚动
                    if (pos.y > this.node.height / 2) {
                        let lastpos = this._m_LasteItem.getPosition();
                        element.setPosition(lastpos.x, lastpos.y - this.m_Layout.spacingY - this.AdvItem.height, 0);
                        this._m_LasteItem = element;
                    }
                    else {
                        element.setPosition(pos.x, pos.y + 1, pos.z)
                    }
                }
                else if (this.m_Layout.type == LayoutType.Grid) {
                    //九宫格滚动
                    if (pos.y > (this.node.height / 2 + 100)) {
                        let lastpos = this._m_LasteItem.getPosition();
                        // console.log("lastpos", lastpos);
                        //算到他是第几排第几列
                        // let lastgrid = cc.v2(lastpos.x/)
                        let cola = Math.floor((lastpos.x + this.node.width / 2) / (this.AdvItem.width + this.m_Layout.spacingX));
                        // console.log("cola", cola, "lastpos.x", lastpos.x);
                        // let rowa = Math.floor((lastpos.y) / (this.AdvItem.height + this._m_Style.spacingY));
                        // console.log("rowa", rowa, "lastpos.y", lastpos.y);
                        // console.log("this._m_LasteItem", this._m_LasteItem._zjkj_tgdata.name);
                        cola++;
                        let pos = cc.v3();
                        if (cola < this._m_Col) {
                            // console.log("不换行");
                            pos.x = lastpos.x + (this.AdvItem.width + this.m_Layout.spacingX);
                            pos.y = lastpos.y;
                        }
                        else {
                            // console.log("换行");
                            pos.x = left - this.node.width / 2 + this.AdvItem.width / 2 + (0 * (this.AdvItem.width + this.m_Layout.spacingX));
                            pos.y = lastpos.y - this.m_Layout.spacingY - this.AdvItem.height;
                        }
                        // console.log("pos.x", pos.x);
                        // console.log("pos.y", pos.y);

                        element.setPosition(pos.x, pos.y, pos.z);
                        this._m_LasteItem = element;
                    }
                    else {
                        element.setPosition(pos.x, pos.y + 1, pos.z)
                    }
                }
            }
        }
    }

    /**
     * 计时器回调
     */
    UpdateItem() {
        //再次获取广告数据
        //开始位置增加显示数量增量
        this._m_StartIndex += this.m_PromoteAdv.num;
        for (let index = 0; index < this.AdvRoot.children.length; index++) {
            const tgobj = this.AdvRoot.children[index];
            this._m_StartIndex++;
            if (this._m_StartIndex >= TgServer.getInstance().GetTgAdvDataLength()) {
                this._m_StartIndex = 0;
            }

            const TgData = TgServer.getInstance().GetTgAdvData(1, this._m_StartIndex, this.m_PromoteAdv.rand);
            if (TgData.length) {
                let data = TgData[0];
                tgobj._zjkj_tgdata = data;
                tgobj.active = true;
                //设置名字
                tgobj.getComponentInChildren(cc.Label).string = data.name;
                cc.assetManager.loadRemote(data.icon, (err, texture: cc.Texture2D) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    let spriteFrame = new cc.SpriteFrame(texture);
                    var sprite = tgobj.getComponentInChildren(cc.Sprite);
                    if (sprite) {
                        sprite.spriteFrame = spriteFrame;
                    }
                });
            }
            else {
                tgobj.active = false;
            }
        }
    }   

    /**
     * 更新位置
     * @param _top 
     * @param _left 
     */
    UpdateWidget(_top: number = 0, _left: number = 0) {
        if (this.m_UpdateWidget) {
            let widgetComponent = this.node.getComponent(cc.Widget);
            widgetComponent.top = _top;
            widgetComponent.left = _left;
            widgetComponent.updateAlignment();
        }
    }

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
