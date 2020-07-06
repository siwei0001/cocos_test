import TgAdvSdk from "../TgAdvSdk";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TgClickJump extends cc.Component {

    _m_NodePoolName = "";
    _m_TgPos = "";

    _m_TgData: any = null;

    _m_Style: any = null;
    _m_Adv: any = null;

    _m_JumpCallFun = null;
    // onLoad () {}

    start() {

    }

    /**
     * 初始化广告数据
     */
    InitTgData(_nodePoolName: string, _tgPos: string, _style: any, _adv: any) {
        this._m_NodePoolName = _nodePoolName;
        this._m_TgPos = _tgPos;
        this._m_Style = _style;
        this._m_Adv = _adv;

        // this.node.zIndex = 3;
        this._m_JumpCallFun = this._m_Adv.jumpCallFun;
        this._m_TgData = TgAdvSdk.getInstance().GetTgBarConfig(1, true, 0)[0];
    }
    
    /**
     * 释放
     */
    Free() {
        this._m_NodePoolName = "";
        this._m_TgPos = "";
        this._m_TgData = null;
        this._m_Style = null;
        this._m_Adv = null;
        this._m_JumpCallFun = null;
    }

    /**
     * 点击事件
     * @param {Object} event 
     */
    OnClick(event) {
        this.node.active = false;
        TgAdvSdk.getInstance().TgLog("点击游戏");
        if (this._m_TgData && this._m_JumpCallFun) {
            TgAdvSdk.getInstance().TgLog("点击游戏 tgdata", this._m_TgData);
            this._m_JumpCallFun(this._m_TgData, this._m_TgPos, this._m_NodePoolName);
        }
    }

}
